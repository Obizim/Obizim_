import { Space_Mono } from 'next/font/google'
import works from '@/components/projects.json'

const space_Mono = Space_Mono({ subsets: ['latin'], weight: '400' })

export default function Home() {
  return (
    <main className={`pt-20 text-sm max-w-screen-md mx-auto px-5 leading-7 ${space_Mono.className}`}>
     <section className="space-y-4">
        <p className="text-lg w-full italic">
          Software frontend developer
        </p>
        <p className="w-full max-w-2xl"> My name is Zimuzo Obi, a goal-oriented developer, bringing strong dedication to collaboration and a solutions-oriented approach to problem-solving.
        Higly attentive to details with strong work ethic as well as adept at implementing new technologies and techniques 
        </p>
        <div className="w-full max-w-2xl">I have experience with the following technologies and languages: 
          <ul className="list-inside list-disc py-4">
            <li>Languages: HTML, CSS (SCSS), Javascript, Typescript</li>
            <li>Frameworks/Tools: React.js, Next.js, Redux, Tailwind CSS, Bootstrap,Node, Express.js</li>
            <li>Databases: MongoDB, MySQL</li>
          </ul>
        </div>
      </section>

      <section className="mt-10">
        <div className="relative space-y-2">
          <p className="text-lg w-max capitalize">Projects</p>
        </div>

        <div className="my-4">
          {works.map(data => (
            <a href={data.url} key={data.id} target="blank" className="hover:bg-burger-bg relative border-b border-header_bg flex justify-between items-end py-4 px-2 cursor-pointer">
            <div className="flex items-end space-x-2">
              <p className="self-start">0{data.id}.</p>
              <div className="space-y-2">
              <h2>{data.title}</h2>
              <p>{data.description}</p>
              </div>
            </div>
          </a>
          ))}
        </div>
      </section>

      <footer className="my-10 relative space-y-6">
          <p>I am actively exploring new opportunities and am open to forming connections or engaging in collaborative projects. Please do not hesitate to reach out to me on <a className="underline" href="https://www.linkedin.com/in/obizim/" target="_blank">LinkedIn.</a> Additionally, feel free to send me an <a className="underline" href="mailto:obizimuzo@gmail.com">email;</a> I welcome any form of contact without reservation.</p>
          <p className="self-end"> &copy; Zimuzo Obi {new Date().getFullYear()}.</p>
      </footer>
    </main>
  )
}
