import { NextResponse } from "next/server";
import feedBack from "./feedSchema";
import mongoose from "mongoose";

export async function POST(request: any) {
    const headers = new Headers();
    headers.append("Access-Control-Allow-Origin", "*");
    headers.append("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
    headers.append("Access-Control-Allow-Headers", "Content-Type");
    try{
        await mongoose.connect("mongodb+srv://adithyaDB:adi@cluster0.ca8gm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        const comment = await request.json();
        const newObj = {
            name: comment.name,
            comment: comment.comment
        }
        await feedBack.create(newObj);
        return NextResponse.json({"message": "Uploaded!"}, { status: 200, headers });
    }
    catch(error){
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