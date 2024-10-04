const products = [
  {
    id: 1,
    name: 'Alpha Book',
    href: '/ProductDetails',
    price: '$48',
    imageSrc: 'Products/Alpha book.jpg',
    imageAlt: 'Alpha Book',
  },
  {
    id: 2,
    name: 'Asus',
    href: '/ProductDtails',
    price: '$35',
    imageSrc: 'Products/Asus.jpg',
    imageAlt: 'Asus',
  },
  {
    id: 3,
    name: 'Galaxy Book-3',
    href: '/ProductDetails',
    price: '$89',
    imageSrc: 'Products/Galaxy Book-3.jpg',
    imageAlt: 'Galaxy Book 3.',
  },
  {
    id: 4,
    name: 'Hp Envy',
    href: '/ProductDetails',
    price: '$35',
    imageSrc: 'Products/HP ENVY.jpg',
    imageAlt: 'HP ENVY.',
  },
  {
    id: 5,
    name: 'Lenovo Yoga Slim',
    href: '/ProductDetails',
    price: '$35',
    imageSrc: 'Products/Lenovo Yoga Slim.jpg',
    imageAlt: 'Lenovo Yoga Slim.',
  },
  {
    id: 6,
    name: 'Samsumg Galaxy Book 3 Pro 360',
    href: '/ProductDetails',
    price: '$35',
    imageSrc: 'Products/Samsung Galaxy Book 3 Pro 360.jpg',
    imageAlt: 'Samsung Galaxy Book 3 Pro 360.',
  },{
    id: 7,
    name: 'Samsung Galaxy Book Ion 13',
    href: '#',
    price: '$35',
    imageSrc: 'Products/Samsung Galaxy Book Ion 13.jpg',
    imageAlt: 'Samsung Galaxy Book Ion 13.',
  },
  {
    id: 8,
    name: 'Huawei MateBook X Pro',
    href: '#',
    price: '$35',
    imageSrc: 'Products/HUAWEI.jpg',
    imageAlt: 'Huawei MateBook X Pro.',
  },
]

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'


export default function ProductList() {
  return (
    <div className="flex flex-auto bg-white mx-6 p-3 mt-5">
      
      {/*Filters*/}
      <div className="w-[300px] h-[500px] p-6 m-3">
        <aside>
          {/* Categories */}
          <section className="mb-6">
            <h3 className="font-medium mb-2">Category</h3>
            <ul className="space-y-2 text-sm font-medium">
              <li><label><input type="checkbox" className="mr-2"/> Student Laptops</label></li>
              <li><label><input type="checkbox" className="mr-2"/>Business Latops</label></li>
              <li><label><input type="checkbox" className="mr-2"/> Gaming Laptops</label></li>
              <li><label><input type="checkbox" className="mr-2"/> Convertibles</label></li>
              <li><label><input type="checkbox" className="mr-2"/> Accessories</label></li>
            </ul>
          </section>

          {/* Brands */}
          <section className="mb-6">
            <h3 className="font-medium mb-2">Brand</h3>
            <ul className="space-y-2 text-sm font-medium">
              <li><label><input type="checkbox" className="mr-2"/> Dell</label></li>
              <li><label><input type="checkbox" className="mr-2"/> Apple</label></li>
              <li><label><input type="checkbox" className="mr-2"/> Samsung</label></li>
              <li><label><input type="checkbox" className="mr-2"/> Hp</label></li>
              <li><label><input type="checkbox" className="mr-2"/> Lenovo</label></li>
              <li><label><input type="checkbox" className="mr-2"/> Microsoft</label></li>
              <li><label><input type="checkbox" className="mr-2"/> Drives</label></li>
              <li><label><input type="checkbox" className="mr-2"/> Headphones and Speakers</label></li>
            </ul>
          </section>

          {/* Price Range */}
          <section>
            <h3 className="font-medium mb-2">Price Range</h3>
            <div className="flex items-center space-x-2">
              <input type="number" placeholder="Min" className="w-20 p-2 border rounded-md"/>
              <span>–</span>
              <input type="number" placeholder="Max" className="w-20 p-2 border rounded-md"/>
            </div>
          </section>
        </aside>
      </div>


      <div className="mx-auto max-w-5xl p-3 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-5 w-[90%] -mt-20">
        <h2 className="sr-only text-gray-700">Products</h2>
        <div className='m-1 p-2'>
            <p className="text-sm text-gray-700">
              Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
              <span className="font-medium">97</span> results
            </p>
        </div>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 p-2 shadow-sm border">
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="h-full w-full object-fill object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
            </a>
          ))}
        </div>
        
        {/*Pagination*/}
        <div className="flex place-items-center p-3 m-2 ml-72">
          <ol class="flex justify-center gap-1 text-xs font-medium">
            <li>
              <a
                href="#"
                class="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
              >
                <span class="sr-only">Prev Page</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-3"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </li>

            <li>
              <a
                href="#"
                class="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
              >
                1
              </a>
            </li>

            <li class="block size-8 rounded border-black bg-black text-center leading-8 text-white">
              2
            </li>

            <li>
              <a
                href="#"
                class="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
              >
                3
              </a>
            </li>

            <li>
              <a
                href="#"
                class="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
              >
                4
              </a>
            </li>

            <li>
              <a
                href="#"
                class="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
              >
                <span class="sr-only">Next Page</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-3"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </li>
          </ol>
        </div>
      </div>
    </div>
  )
}
