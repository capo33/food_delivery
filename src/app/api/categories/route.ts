 import { prisma } from "@/utils/connect";
import { NextResponse } from "next/server";

 
// Fetch all categories
export const GET = async () => {
  try {
    const categories = await prisma.category.findMany();
    return new NextResponse(JSON.stringify(categories), {
      status: 200, // OK
    });
  } catch (error) {
    return new NextResponse(JSON.stringify({ message: error }), {
      status: 500,
    });
  }
};

export const POST = () => {
  return new NextResponse("Hello", { status: 201 });
};
