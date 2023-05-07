import { NextResponse } from "next/server";
import clientPromise from "../infra/mongoDB";

export async function POST(request: Request) {
  try {
    const { names } = await request.json();
    const client = await clientPromise;
    const db = client.db("wedding");
    db.collection("guests").insertOne({
      names: names,
    });
  } catch (e) {
    console.log(e);
  }
  return NextResponse.json({});
}
