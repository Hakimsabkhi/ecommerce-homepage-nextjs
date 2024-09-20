import {  NextResponse } from 'next/server';
import connectToDatabase from "@/lib/db";
import Products from "@/models/Product";
import Category from "@/models/Category";
import Brand from "@/models/Brand";

export async function GET(){
    try{
      await connectToDatabase();
      await Category.find();
      await Brand.find();
      const products = await  Products.find({}).populate("category").populate("brand");
    
      return NextResponse.json(products, { status: 200 });
    } catch (error) {
      console.error(error);
      return NextResponse.json({ error: 'Error fetching data' }, { status: 500 });
    }
  }