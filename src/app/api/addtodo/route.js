import { connectionString } from "@/app/lib/db"
import todoCollections from "@/app/lib/model/todoSchema"
import mongoose from "mongoose"
import { NextResponse } from "next/server"




export async function POST(request) {
    try {
        const payload = await request.json()
        await mongoose.connect(connectionString)
        let All_todo = new todoCollections(payload)
        const result = await All_todo.save()
        return NextResponse.json({ result, success: true })
    } catch (error) {
        console.log(error);
        return NextResponse.json({ success: false })
    }

}


export async function GET() {
    try {
        await mongoose.connect(connectionString)
        const allTodo = await todoCollections.find();
        return NextResponse.json({ result: allTodo, success: true })
    } catch (error) {
        console.log(error);
        return NextResponse.json({ result: false, error: "Database connection failed", success: false }, { status: 500 });
    }

}