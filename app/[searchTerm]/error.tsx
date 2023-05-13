"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
    error,
    reset
}: {
    error: Error;
    reset: () => void;
}){
    useEffect(() => {
        console.log(error)
    }, [error])

    return (
        <main className="bg-slate-200 mx-auto max-w-lg py-1 px-4 min-h-screen">
            <h2 className="my-4 text-2xl font-bold">Something Went Wrong!!!⚠</h2>

            <button 
                className="mb-4 p-4 bg-red-500 text-white rounded-xl"
                onClick={() => reset()}
            >Try again</button>

            <p className="text-xl">
                Or go back to <Link href={'/'}>Home 🏠</Link>
            </p>
        </main>
    )
}