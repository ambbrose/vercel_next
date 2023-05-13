import Link from "next/link"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'About Page',
  description: 'This is the about page',
  icons: '/vercel.svg'
}

const About = () => {
    // throw new Error('The Work is not done')
    return (
        <>
            <h1>About Page</h1>
            <Link href="/">Link to Home page</Link>
        </>
    )
}

export default About
