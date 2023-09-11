import About from '@/components/About'
import Intro from '@/components/Intro'
import SectionDivider from '@/components/Section-divider'
import Projects from '@/components/projects'


export default function Home() {
  return (
    <main className="flex flex-col items-center px-4 ">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
    </main>
  )
}
