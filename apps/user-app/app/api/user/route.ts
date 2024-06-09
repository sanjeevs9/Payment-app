import { PrismaClient } from "@repo/db/client"
import { NextResponse } from "next/server";

const client = new PrismaClient();


export const GET = async () => {
    try {
        await client.user.create({
            data: {
                email: "dedede",
                name: "sanjeevvv"
            }
        })
        return NextResponse.json({
            message: "hi"
        })
    } catch (err) {
        console.log(err)
        return NextResponse.json({message:"Failed to create user"})
    }

}
