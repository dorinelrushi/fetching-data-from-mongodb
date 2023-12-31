import Image from "next/image";
import React from "react";

function Product({ name, price, description, picture }) {
  return (
    <div>
      <div className="w-64">
        <div className=" bg-blue-100 p-5 rounded-xl">
          <Image src={picture} width={220} height={220} alt="demo" />
        </div>
        <div className="mt-2">
          <h3 className="font-bold text-lg">{name}</h3>
        </div>
        <p className="mt-2">{description}</p>
        <div className="flex mt-2">
          <div className="text-2xl font-bold grow"> ${price}</div>
          <button className="bg-emerald-400 text-[white] py-1 px-3 rounded-xl">
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
