import mongoose from "mongoose";
import feedBack from "../feedback/feedSchema";
import { NextResponse } from "next/server";

export async function GET() {
    const headers = new Headers();
    headers.append("Access-Control-Allow-Origin", "*");
    headers.append("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
    headers.append("Access-Control-Allow-Headers", "Content-Type");
    try{
        await mongoose.connect("mongodb+srv://adithyaDB:adi@cluster0.ca8gm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        const recData = await feedBack.find();
        return NextResponse.json(recData, { status: 200, headers });
    }
    catch{
        return NextResponse.json({"message": "Couldn't Send"}, { status: 400, headers });
    }
}

export async function OPTIONS() {
    const headers = new Headers();
    headers.append("Access-Control-Allow-Origin", "*");
    headers.append("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
    headers.append("Access-Control-Allow-Headers", "Content-Type");
  
    return new NextResponse(null, { status: 204, headers });
  }