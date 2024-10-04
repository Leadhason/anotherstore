const products = [
    {
      id: 1,
      name: 'Samsung Galaxy Book Pro 360',
      href: '#',
      imageSrc: '/TrendingProducts/Samsung.jpg',
      imageAlt: "Samsumg",
      price: '$35',
      color: 'Grey',
    },
    {
        id: 3,
        name: 'Lenovo ThinkBook Super Charged Brain Boost 77789',
        href: '#',
        imageSrc: '/TrendingProducts/Lenovo-ThinkBook.jpg',
        imageAlt: "Lenovo-ThinkBook",
        price: '$35',
        color: 'Black',
      },
      {
        id: 4,
        name: 'MacBook-Pro Think Rich Grow Awesome 20884',
        href: '#',
        imageSrc: '/TrendingProducts/MacBook-Pro.jpg',
        imageAlt: "MacBook-Pro",
        price: '$35',
        color: 'Black',
      },
      {
        id: 5,
        name: 'Dell Agent 32 Another Life 4450',
        href: '#',
        imageSrc: '/TrendingProducts/Dell.jpg',
        imageAlt: "Dell Agent 32 Another Life 4450",
        price: '$35',
        color: 'Black',
      },
      {
        id: 6,
        name: 'Microsoft Surface Pro 7',
        href: '#',
        imageSrc: '/TrendingProducts/Microsoft-Surface.jpg',
        imageAlt: "Microsoft-Surface-Pro-7",
        price: '$35',
        color: 'Black',
      },
      {
        id: 7,
        name: 'Lenovo IdeaPad 3',
        href: '#',
        imageSrc: '/TrendingProducts/Lenovo-IdeaPad.jpg',
        imageAlt: "Lenovo-IdeaPad-3",
        price: '$35',
        color: 'Black',
      },
      {
        id: 8,
        name: 'MacBook-Pro Think Rich Grow Awesome 20884',
        href: '#',
        imageSrc: '/TrendingProducts/MacBook-Pro.jpg',
        imageAlt: "MacBook-Pro",
        price: '$35',
        color: 'Black',
      },
      {
        id: 8,
        name: 'Microsoft Surface Pro 7',
        href: '#',
        imageSrc: '/TrendingProducts/Microsoft-Surface.jpg',
        imageAlt: "Microsoft-Surface-Pro-7",
        price: '$35',
        color: 'Black',
      },
    ]

  import Link from 'next/link'
  
  
  export default function TrendingProducts() {
    return (
      <div className="z-0 -mt-20">
        <div className="mx-auto max-w-2xl px-2 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 mx-auto">Trending Products</h2>
          <div className="flex flex-col items-center w-full">
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 z-0">
              {products.map((product) => (
                <div key={product.id} className="group relative shadow-md border p-3">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img
                      alt={product.imageAlt}
                      src={product.imageSrc}
                      className="h-full w-full object-fill object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <a href={product.href}>
                          <span aria-hidden="true" className="absolute inset-0" />
                          {product.name}
                        </a>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">{product.price}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/Store">
              <button  className="border border-black bg-white-50 hover:bg-black hover:text-white transition text-black font-medium p-3 m-6">
              View All
              </button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
  