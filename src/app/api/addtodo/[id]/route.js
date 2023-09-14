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

    const update_Id = content.params.id
    const record = { _id: update_Id }
    const payload = await request.json()
    await mongoose.connect(connectionString)
    const result = await todoCollections.findOneAndUpdate(record, payload)
    return NextResponse.json({ result, sucess: true })

}


export async function GET(request, content) {

    const update_Id = content.params.id
    const id = { _id: update_Id }
    await mongoose.connect(connectionString)
    const result = await todoCollections.findById(id)
    return NextResponse.json({ result, success: true })

}