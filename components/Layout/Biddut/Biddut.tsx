import React from 'react';

const Biddut = () => {
    return (
     


    <nav className="bg-slate-900 text-white px-6 py-4 flex justify-between items-center">
     
      <h1 className="text-xl font-bold">MyShop</h1>
        
      {/* Menu */}
      <ul className="flex gap-6 text-sm md:text-base">
        <li className="hover:text-blue-400 cursor-pointer">Home</li>
        <li className="hover:text-blue-400 cursor-pointer">Products</li>
        <li className="hover:text-blue-400 cursor-pointer">Cart</li>
        <li className="hover:text-blue-400 cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
};
export default Biddut;