import Image from "next/image";
import TrendingProducts from "./components/TrendingProducts";
import Link from "next/link";

export default function Home() {
  return (
    <section className="flex flex-col">
      {/* Hero */}
      <div className="w-full mx-auto p-4 bg-neutral-30">
        <section className="relative bg-zinc-100 p-10 flex justify-between items-center rounded-lg h-[530px]">
          <div className="max-w-[500px] p-8">
            <p className="text-sm text-neutral-600 font-roboto-light-300 mb-2">UP TO 30% DISCOUNT</p>
            <h1 className="font-bold text-7xl mb-4 font-roboto-500">Authentic. Trusted. Tech.</h1>
            <p className="text-neutral-500 mb-6 font-roboto-regular-400">
            Discover a curated selection of high-quality laptops and accessories straight from the USA. 
            Shop with confidence for the latest tech at unbeatable prices!
            </p>
            <Link href="/Store">
              <button className="py-3 px-6 border  border-black bg-zinc-100 text-black shadow-md hover:text-white hover:bg-black transition">
                Shop now
              </button>
            </Link>
          </div>

          <div>
            <Image
              src="/New Hero Image.png"
              width={800}
              height={1000}
              alt="Airpods"
              className="object-fill"
            />
          </div>

        </section>
        
      
        <div className="grid grid-cols-4 justify-between gap-3 p-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          <div className="flex flex-col items-center text-center shadow-md bg-zinc-100">
            <div className="p-2 rounded-md">
                <Image
                  src="/security.png"
                  width={40}
                  height={40}
                  alt="original"
                  className="material-symbols-outlined text-neutral-500 text-2xl"
                />
            </div>
    	      <div className="p-3">
    	        <h3 className="font-title text-md font-semibold">Original Products</h3>
    	        <p className="text-neutral-500 text-sm text-center">
    	          We provide money back guarantee if the product are not original
    	        </p>
            </div>
          </div>
        
    	    <div className="flex flex-col items-center text-center shadow-md bg-zinc-100">
    	      <div className=" p-2 rounded-md">
    	        <Image
                src="/verified.png"
                width={40}
                height={40}
                alt="satisfaction"
                className="material-symbols-outlined text-neutral-500 text-2xl"
              />
    	      </div>
    	      <div className="p-3">
    	        <h3 className="font-title text-md font-semibold">
    	          Satisfaction Guarantee
    	        </h3>
    	        <p className="text-neutral-500 text-sm text-center">
    	          Exchange the product you've purchased if it doesn't fit on you
    	        </p>
    	      </div>
    	    </div>
          <div className="flex flex-col items-center text-center shadow-md bg-zinc-100">
            <div className=" p-2 rounded-md">
              <Image
                src="/new-release.png"
                width={40} 
                height={40}
                alt="new"
                className="material-symbols-outlined text-neutral-500 text-2xl"
              />
            </div>
            <div className="p-3">
              <h3 className="font-title text-md font-semibold">New Arrival Everyday</h3>
              <p className="text-neutral-500 text-sm text-center">
                We updates our collections almost everyday
              </p>
            </div>
          </div>

    	    <div className="flex flex-col items-center text-center shadow-md bg-zinc-100">
    	      <div className=" p-2 rounded-md">
    	        <Image 
                src="/delivery.png"
                width={40}
                height={40}
                alt="shipping"
                className="material-symbols-outlined text-neutral-500 text-2xl"
              />
    	      </div>
    	      <div className="p-3">
    	        <h3 className="font-title text-md font-semibold">Fast & Free Shipping</h3>
    	        <p className="text-neutral-500 text-sm text-center">
    	          We offer fast and free shipping for our loyal customers
    	        </p>
    	      </div>
    	    </div>
        </div>
      </div>
        <TrendingProducts/>
        <hr className="w-full"/>
    </section>
    );
}