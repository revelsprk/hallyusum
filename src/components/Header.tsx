import Link from "next/link";

export default function Header() {
    return (
        <div className="sticky top-0 bg-white/40 backdrop-blur-2xl justify-center shadow-sm h-16 flex items-center overflow-hidden">
            <Link href="/"><img src="/logo.svg" alt="Logo" className="h-8 hover:md:h-9 duration-200 w-fit" /></Link>
            {/* <div className="flex items-center ml-auto">
            <div className="border rounded-md shadow-sm h-8 w-48 md:w-64 overflow-hidden flex items-center px-2">
                <FiSearch className="text-gray-400 text-sm mr-2" />
                <input className="w-full outline-none placeholder:text-sm" placeholder="Search for songs..." />
            </div>
            </div> */}
        </div>
    )
}