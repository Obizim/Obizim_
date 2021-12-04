import Head from 'next/head'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Frontend Developer - Obi Zimuzo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="space-y-3 lowercase">
        <p className="text-xl">Hello, I'm</p>
        <p className="text-2xl">Zimuzo Obi</p>
        <p className="text-4xl md:text-6xl xl:text-7xl leading-none w-full max-w-4xl tracking-tighter">Frontend Developer, creating great & accesible user interfaces with sweet experiences.</p>
      </section>
    </div>
  )
}
