import { Jost } from 'next/font/google'

const jost = Jost({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`pt-20 max-w-screen-md mx-auto px-5 ${jost.className}`}>
     <section className="space-y-4">
        <p className="text-4xl leading-tight w-full">
          Software frontend developer based in UK, creating great & accesible user
          interfaces.
        </p>
        <p className="text-lg text-gray-300 w-full max-w-2xl"> I'm Zimuzo Obi, a goal-oriented developer, bringing strong dedication to collaboration and a solutions-oriented approach to problem-solving.
        Higly attentive to details with strong work ethic as well as adept at implementing new technologies and techniques 
        </p>
        <div className="text-lg text-gray-300 w-full max-w-2xl">I have experience with the following technologies and languages: 
          <ul className='list-inside list-disc py-4'>
            <li>Languages: HTML, CSS (SCSS), Javascript, Typescript</li>
            <li>Frameworks/Tools: React.js, Next.js, Redux, Tailwind CSS, Bootstrap, MongoDB, Node, Express.js</li>
          </ul>
        </div>
      </section>
    </main>
  )
}
