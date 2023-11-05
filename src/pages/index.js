import Image from "next/image";

import { useState, useEffect } from "react";
import Product from "./components/Product";

export default function Home() {
  const [productsInfo, setproductsInfo] = useState([]);
  const [phrease, setPhrease] = useState("");

  useEffect(() => {
    fetch("/api/products")
      .then((response) => response.json())
      .then((json) => setproductsInfo(json));
  }, []);

  const categoriesNames = [...new Set(productsInfo.map((p) => p.category))];

  let products;

  if (phrease) {
    products = productsInfo.filter((p) =>
      p.name.toLowerCase().includes(phrease)
    );
  } else {
    products = productsInfo;
  }

  return (
    <div className="p-5  m-auto">
      <input
        value={phrease}
        onChange={(e) => setPhrease(e.target.value)}
        type="text"
        placeholder="search for products"
        className="bg-gray-100 w-[100%] p-[15px] rounded-sm"
      />
      <div>
        {categoriesNames.map((categoryName) => (
          <div key={categoryName}>
            {products.find((p) => p.category === categoryName) && (
              <div>
                <h2 className="text-2xl mt-[25px] mb-[10px]">{categoryName}</h2>
                <div className="flex gap-[15px]">
                  {products
                    .filter((p) => p.category == categoryName)
                    .map((productsInfo) => (
                      <div key={productsInfo._id}>
                        <Product {...productsInfo} />
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>
        ))}

        <div className="py-4"></div>
      </div>
    </div>
  );
}
