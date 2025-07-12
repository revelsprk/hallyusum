import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen">
      {/* 背景画像 */}
      <Image src="/bg.png" alt="Background" fill className="object-cover object-center" priority />

      {/* 半透明背景+ぼかし */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      <div className="absolute inset-0 flex flex-col items-center justify-center mb-8">
        <Image src="/logo.svg" alt="Hallyu Sum" width={100} height={100} className="w-3/4 md:w-1/4 mb-2" />
        <p className="w-3/4 md:w-1/4 mb-4 text-white/80 italic">Instantly check MV view counts and rankings, all in one place.</p>
        <input type="text" placeholder="Who’s topping the charts?" className="placeholder:text-sm bg-white border px-4 py-2 rounded-lg outline-none shadow-md w-3/4 md:w-1/3" />
      </div>
    </div>
  );
}