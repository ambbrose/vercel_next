import { getPostsMeta, getPostByName } from "@/lib/posts"
import getFormattedDate from "@/lib/getFormattedDate"
import { notFound } from "next/navigation"
import Link from "next/link"
import 'highlight.js/styles/github-dark.css'

export const revalidate = 86400

type Props = {
    params: {
        postId: string
    }
}

export async function generateStaticParams() {
    const posts = await getPostsMeta()

    if (!posts) return []

    return posts.map((post) => ({
        postId: post.id
    }))
}


export async function generateMetadata({ params: { postId } }: Props) {
    const post = await getPostByName(`${postId}.mdx`) //deduped

    if (!post) {
        return {
            title: 'Post Not Found'
        }
    }
    return {
        title: post?.meta.title
    }
}

export default async function Post({ params: { postId } }: Props) {
    const post = await getPostByName(`${postId}.mdx`)

    if (!post) return notFound()

    const { meta, content } = post

    const pubDate = getFormattedDate(meta.date)

    const tags = meta.tags.map((tag, i) => (
        <Link key={i} href={`/tags/${tag}`}>{tag}</Link>
    ))

    return (
        <>
            <h2 className="text-3xl mt-4 mb-0 text-white">{meta.title}</h2>
            <p className="mt-0 text-sm text-white">
                {pubDate}
            </p>
            <article className="text-white">
                {content}
            </article>
            <section>
                <h3 className="text-blue-50">Related:</h3>
                <div className="flex flex-row gap-4 text-blue-100">
                    {tags}
                </div>
            </section>
            <p className="mb-10 text-blue-300">
                <Link href="/">← Back to home</Link>
            </p>
        </>
    )
}