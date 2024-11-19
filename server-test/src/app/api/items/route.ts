import connectMongoDB from "@/libs/mongo";
import Item from "@/models/itemSchema";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request : NextRequest) {
    await connectMongoDB();
    const items = await Item.find();
    return NextResponse.json({items});
}

export async function POST(request: NextRequest) {
    const {title, description, image} = await request.json();
    await connectMongoDB();
    await Item.create({title, description, image});
    return NextResponse.json({message: "Item added successfully"}, {status: 201});
}