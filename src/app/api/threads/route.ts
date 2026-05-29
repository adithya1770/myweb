import { NextResponse } from "next/server";
import Thread from "@/lib/threadSchema";
import mongoose from "mongoose";

const MONGO_URI = "mongodb+srv://adithyaDB:adi@cluster0.ca8gm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const headers = new Headers();
headers.append("Access-Control-Allow-Origin", "*");
headers.append("Access-Control-Allow-Methods", "POST, GET, DELETE, OPTIONS");
headers.append("Access-Control-Allow-Headers", "Content-Type");

async function connect() {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(MONGO_URI);
  }
}

export async function GET() {
  try {
    await connect();
    const threads = await Thread.find().sort({ createdAt: -1 });
    return NextResponse.json(threads, { status: 200, headers });
  } catch {
    return NextResponse.json({ message: "Couldn't fetch" }, { status: 400, headers });
  }
}

export async function POST(request: Request) {
  try {
    await connect();
    const body = await request.json();
    const { content, weather, secret } = body;

    if (secret !== process.env.THREADS_SECRET) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401, headers });
    }

    if (!content?.trim()) {
      return NextResponse.json({ message: "Content required" }, { status: 400, headers });
    }

    const thread = await Thread.create({ content: content.trim(), weather: weather || null });
    return NextResponse.json(thread, { status: 201, headers });
  } catch {
    return NextResponse.json({ message: "Couldn't post" }, { status: 400, headers });
  }
}

export async function DELETE(request: Request) {
  try {
    await connect();
    const { id, secret } = await request.json();

    if (secret !== process.env.THREADS_SECRET) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401, headers });
    }

    await Thread.findByIdAndDelete(id);
    return NextResponse.json({ ok: true }, { status: 200, headers });
  } catch {
    return NextResponse.json({ message: "Couldn't delete" }, { status: 400, headers });
  }
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers });
}