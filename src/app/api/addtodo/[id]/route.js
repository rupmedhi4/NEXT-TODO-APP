import { connectionString } from "@/app/lib/db"
import todoCollections from "@/app/lib/model/todoSchema"
import mongoose from "mongoose"
import { NextResponse } from "next/server"

export async function DELETE(request, content){
    const delete_Id = content.params.id
    const record = { _id: delete_Id }
    await mongoose.connect(connectionString)
    const result = await todoCollections.deleteOne(record)
    return NextResponse.json({result, success: true })

}

export async function PUT(request, content) {

    const delete_Id = content.params.id
    const record = { _id: delete_Id }
    const payload = await request.json()
    await mongoose.connect(connectionString)
    const result = await todoCollections.findOneAndUpdate(record, payload)
    return NextResponse.json({ result, sucess: true })

}