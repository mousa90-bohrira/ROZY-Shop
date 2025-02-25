import React, { useState } from 'react';

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className='min-h-screen bg-gray-100'>
      <header className='bg-white shadow p-4 flex justify-between items-center'>
        <h1 className='text-2xl font-bold text-gray-800'>متجر العناية بالبشرة</h1>
        <button className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600'>
          السلة ({cart.length})
        </button>
      </header>
      <main className='p-4'>
        <h2 className='text-xl font-semibold text-gray-700'>منتجات مميزة</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-4'>
          {[...Array(18)].map((_, index) => {
            const product = {
              id: index + 1,
              name: `منتج ${index + 1}`,
              price: (index + 1) * 10,
            };
            return (
              <div key={index} className='bg-white rounded-2xl shadow p-4'>
                <img src='https://via.placeholder.com/300' alt={product.name} className='w-full rounded-t-2xl'/>
                <h3 className='text-lg font-bold mt-2'>{product.name}</h3>
                <p className='text-gray-600'>وصف {product.name}</p>
                <span className='block text-green-600 font-bold mt-1'>{product.price} د.ل</span>
                <button onClick={() => addToCart(product)} className='mt-2 w-full bg-blue-500 text-white py-2 rounded-xl hover:bg-blue-600'>
                  أضف إلى السلة
                </button>
              </div>
            );
          })}
        </div>

        {cart.length > 0 && (
          <div className='mt-8 bg-white rounded-2xl shadow p-4'>
            <h3 className='text-xl font-bold mb-4'>سلة المشتريات</h3>
            <ul>
              {cart.map((item, index) => (
                <li key={index} className='border-b py-2'>
                  {item.name} - {item.price} د.ل
                </li>
              ))}
            </ul>
            <div className='text-right mt-4 font-bold'>
              الإجمالي: {cart.reduce((total, item) => total + item.price, 0)} د.ل
            </div>
          </div>
        )}
      </main>
      <footer className='bg-gray-800 text-white text-center p-4 mt-4'>
        &copy; 2025 متجر العناية بالبشرة
      </footer>
    </div>
  );
}
