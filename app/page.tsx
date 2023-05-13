import Link from "next/link";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

import Posts from "./components/Posts";
import MyProfilePic from "./components/MyProfilePic";

export const revalidate = 10 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Home Page',
  description: 'This is the home page'
}

export default function Home() {
  return (
    <div className={`${inter.className}text-white mx-auto`}>
      <MyProfilePic />
      <div className="flex flex-col justify-center text-center w-full bg-slate-700 underline">
        <Link href="/about">To About Page</Link>
        <Link href="/users">To Users Page</Link>
        <Link href="/feedback">To Feedback Page</Link>
      </div>
      <br />
      {/* @ts-expect-error Server Component */}
      <Posts />
    </div>
  );
}
