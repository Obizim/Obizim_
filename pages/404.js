import Link from "next/link"

const PageLost = () => {
    return <section className="flex flex-col justify-center items-center text-center py-32">
        <h2 className="text-4xl leading-none w-full max-w-2xl tracking-tighter my-4">Page not Found!!</h2>
        <Link href="/"> 
        <a className="border border-white max-w-max p-4 rounded">
          Back to home
        </a></Link>
    </section>
}

export default PageLost