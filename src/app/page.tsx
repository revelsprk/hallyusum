import Header from "@/components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="md:container md:mx-auto mx-4 my-8">
        <div className="relative">
          <img src="diva.jpg" className="rounded-lg w-full h-[512px] object-cover object-center md:h-auto" />
          <div className="absolute inset-0 flex items-start justify-center mt-8">
            <input
              type="text"
              placeholder="Search for songs..."
              className="placeholder:text-sm bg-white border px-4 py-2 rounded-lg outline-none shadow-md w-3/4 md:w-1/4"
            />
          </div>
        </div>
      </div>
    </div>
  );
}