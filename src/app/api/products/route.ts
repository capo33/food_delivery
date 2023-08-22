import { prisma } from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

// Fetch all products
export const GET = async (request: NextRequest) => {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");
  // localhost:3000/api/products?cat='pizza'
  try {
    const products = await prisma.product.findMany({
      where: {
        ...(category ? {categorySlug: category} : {isFeatured: true}),
      },
    }); 
    return new NextResponse(JSON.stringify(products), { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};
