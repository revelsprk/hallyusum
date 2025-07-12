"use client";
import { useSearchParams } from "next/navigation";
import { searchResults } from "@/data/searchResults";
import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import Fuse from "fuse.js";

export default function Search() {
    const searchParams = useSearchParams();
    const q = searchParams.get("q") || "";
    const keyword = q.trim().toLowerCase();

    const artistFuse = new Fuse(searchResults, {
        keys: ["name"],
        threshold: 0.4, // 小さいほど厳密（0.0〜1.0）
        ignoreLocation: true,
    });
    const matchedArtists = artistFuse.search(q).map(result => result.item);


    const songFuse = new Fuse(
        searchResults.flatMap((artist) =>
            artist.songs.map((song) => ({
            artistName: artist.name,
            artistUrl: artist.url,
            songTitle: song.title,
            songUrl: song.url,
            }))
        ),
        {
            keys: ["songTitle"],
            threshold: 0.4,
            ignoreLocation: true,
        }
    );
    const matchedSongs = songFuse.search(q).map(result => result.item);

    return (
        <div className="relative w-full min-h-screen">
        {/* 背景画像 */}
        <Image src="/bg.png" alt="Background" fill className="object-cover object-center" priority />

        {/* 半透明背景+ぼかし */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

        <div className="absolute inset-0 flex items-center justify-center mb-8 px-4 md:p-0">
            <div className="w-full md:w-1/3 bg-white rounded-lg p-6 shadow-md h-2/3 overflow-y-auto">
            <div className="flex items-center mb-4">
                <Link href="/"><FiArrowLeft className="text-xl" /></Link>
                <h1 className="text-2xl font-bold ml-2">Search Results for: &quot;{q}&quot;</h1>
            </div>

            {keyword === "" && <p>Please enter a search query.</p>}
            {keyword !== "" && matchedArtists.length === 0 && matchedSongs.length === 0 && (
                <p>No results found.</p>
            )}

            <div className="space-y-4">
                {matchedArtists.length > 0 && (
                    <ul className="space-y-4">
                        {matchedArtists.map((artist, i) => (
                        <li key={`artist-${i}`} className="border flex items-center bg-gray-50 px-4 py-2 rounded-lg">
                            <div className="w-12 h-12 aspect-square rounded-full overflow-hidden mr-2 select-none">
                                <Image src={artist.image} alt={artist.name} width={50} height={50} className="object-cover w-full h-full"/>
                            </div>
                            <div><p><Link href={artist.url} className="font-semibold">{artist.name}</Link></p></div>
                        </li>
                        ))}
                    </ul>
                )}
                {matchedSongs.length > 0 && (
                    <ul className="space-y-4">
                        {matchedSongs.map((song, i) => (
                        <li key={`song-${i}`} className="border bg-gray-50 px-4 py-2 rounded-lg">
                            <p><Link href={song.songUrl} className="text-blue-600 font-semibold">{song.songTitle}</Link></p>
                            <p className="text-gray-600 text-sm mt-1"><Link href={song.artistUrl}>{song.artistName}</Link></p>
                        </li>
                        ))}
                    </ul>
                )}
            </div>
            </div>
        </div>
        </div>
    );
}