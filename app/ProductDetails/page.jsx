'use client'

import { useState } from 'react';
import SimilarProducts from '../components/SimilarProducts';

export default function ProductPage() {
  const [selectedImage, setSelectedImage] = useState('/ProductImages/Microsoft surface.jpg');
  const [selectedColor, setSelectedColor] = useState('Grey');
  const [selectedRam, setSelectedRam] = useState('8GB');
  const [selectedStorage, setSelectedStorage] = useState('256GB');
  const [quantity, setQuantity] = useState(1);

  const images = [
    '/ProductImages/Microsoft surface.jpg',
    '/ProductImages/Microsoft Surface Laptop 2.jpg',
    '/ProductImages/Microsoft Surface Laptop 3.jpg',
    '/ProductImages/another-surface.jpg',
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const handleRamClick = (ram) => {
    setSelectedRam(ram);
  };

  const handleStorageClick = (storage) => {
    setSelectedStorage(storage);
  };

  return (
    <div className="container mx-auto mb-10 mt-10 p-6 flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        {/* Left Column - Product Images */}
        <div>
          <img src={selectedImage} alt="Product Image" className="w-full rounded-md object-cover" />
          <div className="flex mt-4 space-x-2">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index}`}
                onClick={() => handleImageClick(img)}
                className={`w-16 h-16 rounded-lg cursor-pointer border ${selectedImage === img ? 'border-black' : ''}`}
              />
            ))}
          </div>
        </div>

        {/* Right Column - Product Details */}
        <div>
          <h2 className="text-2xl font-bold">Macbook Pro M1 8/256GB</h2>
          <p className="text-gray-500 mt-2">
          Microsoft Surface Laptop 2 13.5" Touch-Screen Laptop Intel Core i7 8GB Memory 256GB Solid State Drive LQQ-00024.</p>

          {/* Price */}
          <div className="flex items-center mt-4 gap-6">
            <span className="text-3xl font-bold text-black">$1200.99</span>
          </div>
          

          {/* Colors */}
          <div className="mt-6">
            <p className="text-gray-700 font-bold">Color</p>
            <div className="flex space-x-4 mt-2">
              <span
                onClick={() => handleColorClick('black')}
                className={`w-8 h-8 rounded-full cursor-pointer bg-black ${selectedColor === 'black' ? 'ring-2 ring-blue-500' : ''}`}
              />
              <span
                onClick={() => handleColorClick('gray')}
                className={`w-8 h-8 rounded-full cursor-pointer bg-gray-400 ${selectedColor === 'gray' ? 'ring-2 ring-blue-500' : ''}`}
              />
              <span
                onClick={() => handleColorClick('silver')}
                className={`w-8 h-8 rounded-full cursor-pointer bg-gray-200 ${selectedColor === 'silver' ? 'ring-2 ring-blue-500' : ''}`}
              />
            </div>
          </div>

          {/* Specifications */}
          <div className="mt-6">
            <p className="text-gray-700 font-bold">Specification</p>
            <ul className="text-gray-600 mt-2 space-y-1">
              <li><span className="font-bold">Memory:</span> 8GB unified memory</li>
              <li><span className="font-bold">Storage:</span> 256GB/512GB SSD storage</li>
              <li><span className="font-bold">Display:</span> 13-inch Retina display with True Tone</li>
              <li><span className="font-bold">Processor:</span>Intel Core i7</li>
            </ul>
          </div>

          {/* RAM and Storage Options */}
          <div className="mt-6">
            <div className="flex space-x-16">
              <div>
                <p className="text-gray-700 font-bold">RAM</p>
                <div className="flex space-x-2 mt-2">
                  <button
                    onClick={() => handleRamClick('8GB')}
                    className={`px-4 py-2 border rounded ${selectedRam === '8GB' ? 'border-black' : ''}`}
                  >
                    8GB
                  </button>
                  <button
                    onClick={() => handleRamClick('16GB')}
                    className={`px-4 py-2 border rounded ${selectedRam === '16GB' ? 'bg-black' : ''}`}
                  >
                    16GB
                  </button>
                </div>
              </div>

              <div>
                <p className="text-gray-700 font-bold">Storage</p>
                <div className="flex space-x-2 mt-2">
                  <button
                    onClick={() => handleStorageClick('256GB')}
                    className={`px-4 py-2 border rounded ${selectedStorage === '256GB' ? 'border-black' : ''}`}
                  >
                    256GB
                  </button>
                  <button
                    onClick={() => handleStorageClick('512GB')}
                    className={`px-4 py-2 border rounded ${selectedStorage === '512GB' ? 'border-black' : ''}`}
                  >
                    512GB
                  </button>
                  <button
                    onClick={() => handleStorageClick('1TB')}
                    className={`px-4 py-2 border rounded ${selectedStorage === '1TB' ? 'border-black' : ''}`}
                  >
                    1TB
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="flex gap-7">
            <div className="mt-6 flex items-center space-x-4">
              <button onClick={() => setQuantity(quantity - 1)} className="px-4 py-2 bg-gray-200 rounded">-</button>
              <span className="text-lg">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2 bg-gray-200 rounded">+</button>
            </div>
            <div className="mt-6">
              <button type='submit' className="px-6 mx-12 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-600">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
      <SimilarProducts />
    </div>
  );
}
