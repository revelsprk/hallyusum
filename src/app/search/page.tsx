import { Suspense } from "react";
import SearchClient from "./SearchClient";

export default function SearchPage() {
    return (
        <Suspense fallback={<div className="text-white p-4">Loading search...</div>}>
        <SearchClient />
        </Suspense>
    );
}