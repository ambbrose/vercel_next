import Link from "next/link"

export default function NotFound() {
    return (
        <div className="text-center">
            <p>Post no exist</p>
            <Link href='/'>Back To Home</Link>
        </div>
    )
}