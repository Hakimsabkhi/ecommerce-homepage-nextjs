
import React from 'react';

import ProductCard from './ProductPage/ProductCard';
interface Brand {
  _id: string;
  name: string;
}

interface Products {
  _id: string;
  name: string;
  description: string;
  ref: string;
  price: number;
  imageUrl?: string;
  brand?: Brand; // Make brand optional
  stock: number;
  discount?: number;
  color?: string;
  material?: string;
  status?: string;
}

// Function to fetch categories data
const fetchProduct = async (): Promise<Products[]> => {
  try {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/products/getAllProduct`, {
      method: 'GET',
      next: { revalidate: 0 }, // Disable caching to always fetch the latest data
    }); // Adjust the API endpoint
    if (!res.ok) {
      throw new Error('Failed to fetch categories');
    }
    const data: Products[] = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const Furniture = async () => {
    const products=await fetchProduct();

    return (
        <div className="desktop  max-md:w-[95%] flex flex-col justify-center items-center gap-10 py-8">
            <div className="flex  w-full flex-col gap-2  items-center   ">
                <h3 className="font-bold text-4xl text-gray-800">Furniture collection of the week</h3>
                <div className="text-base flex gap-2 text-[#525566]">
                    <p>The msot popular products from the collection</p>
                </div>
            </div>                            
            <div className="grid grid-cols-4  w-full  max-xl:grid-cols-2 group    gap-8  max-md:gap-3">
                {products.map((item, _id) => (
                    <ProductCard key={item._id} item={item} />
                ))}
            </div>                            
        </div>
    );
}

export default Furniture;





