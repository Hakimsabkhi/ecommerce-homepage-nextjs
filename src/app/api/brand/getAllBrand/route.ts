import { NextRequest, NextResponse } from 'next/server';
import connectToDatabase from '@/lib/db';
import Brand from '@/models/Brand';
import User from '@/models/User';



export async function GET(req: NextRequest) {
  try {
    await connectToDatabase(); // Ensure the database connection is established
    // Fetch all categories but only return the name and imageUrl fields
    const Brands = await Brand.find({}); // Only select the 'name' and 'imageUrl' fields

    // Return the fetched category names and image URLs
    return NextResponse.json(Brands, { status: 200 });
  } catch (error) {
    console.error('Error fetching Brand:', error);
    return NextResponse.json({ error: 'Error fetching data' }, { status: 500 });
  }
}
  