import { NextApiResponse } from "next";
import products from "../../../../db.json";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(products);
}
