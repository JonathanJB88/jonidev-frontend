import { About, Blog, Experience, Intro, Projects } from '@/components';

export default function Home() {
  return (
    <>
      <section id='#' className='responsive-section'>
        <Intro />
      </section>
      <section id='experiencia' className='responsive-section py-32'>
        <Experience />
      </section>
      <section id='proyectos' className='responsive-section py-32'>
        <Projects />
      </section>
      <section id='sobre-mi' className='responsive-section py-32'>
        <About />
      </section>
      <section id='blog' className='responsive-section py-32'>
        <Blog />
      </section>
    </>
  );
}
