import { Experience, Intro } from '@/components';

export default function Home() {
  return (
    <>
      <section id='#' className='responsive-section bg-blue-600'>
        <Intro />
      </section>
      <section id='#experiencia' className='responsive-section bg-yellow-500'>
        <Experience />
      </section>
      <section className='responsive-section bg-green-500'>
        <h1>Section 3</h1>
      </section>
      <section className='responsive-section bg-purple-600'>
        <h1>Section 4</h1>
      </section>
    </>
  );
}
