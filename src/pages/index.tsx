import { Jost } from 'next/font/google'
import works from '@/components/projects.json'

const jost = Jost({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`pt-20 text-lg max-w-screen-md mx-auto px-5 ${jost.className}`}>
     <section className="space-y-4">
        <p className="sm:text-4xl text-2xl leading-tight w-full">
          Software frontend developer based in UK, creating great & accesible user
          interfaces.
        </p>
        <p className="w-full max-w-2xl"> I'm Zimuzo Obi, a goal-oriented developer, bringing strong dedication to collaboration and a solutions-oriented approach to problem-solving.
        Higly attentive to details with strong work ethic as well as adept at implementing new technologies and techniques 
        </p>
        <div className="w-full max-w-2xl">I have experience with the following technologies and languages: 
          <ul className='list-inside list-disc py-4'>
            <li>Languages: HTML, CSS (SCSS), Javascript, Typescript</li>
            <li>Frameworks/Tools: React.js, Next.js, Redux, Tailwind CSS, Bootstrap,Node, Express.js</li>
            <li>Databases: MongoDB, MySQL</li>
          </ul>
        </div>
      </section>

      <section className="mt-10">
        <div className="relative space-y-2">
          <p className="text-2xl w-max capitalize">Featured Projects</p>
          <p>Here are a few examples of intriguing projects I have created:</p>
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
          <p>I am actively seeking new opportunities and welcome connections or collaborations on projects. 
            You can reach out to me on <a className='underline' href='https://twiiter.com/zimway_' target='_blank'>Twitter</a> or on <a className='underline' href='https://www.linkedin.com/in/obizim/' target='_blank'>Linkedin</a></p>
            <p>You can <a className='underline' href="mailto:obizimuzo@gmail.com">message</a> me as well. Don't hesistate to reach out to me.</p>
            <p className="self-end"> &copy; Zimuzo Obi {new Date().getFullYear()}.</p>
      </footer>
    </main>
  )
}
