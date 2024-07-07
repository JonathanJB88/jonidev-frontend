import { About, Blog, Experience, Intro, Projects } from '@/components';
import { getDictionary } from '../dictionaries';

import { Locale } from '@/interfaces';

interface Props {
  params: Record<'lang', Locale>;
}

export default async function Home({ params }: Props) {
  const { intro, experience, header, projects, about } = await getDictionary(
    params.lang
  );

  return (
    <>
      <section id='#' className='responsive-section'>
        <Intro translations={intro} />
      </section>
      <section
        id={header.experience.href}
        className='responsive-section py-24 md:py-32'
      >
        <Experience translations={experience} />
      </section>
      <section
        id={header.projects.href}
        className='responsive-section py-24 md:py-32'
      >
        <Projects translations={projects} />
      </section>
      <section
        id={header.about.href}
        className='responsive-section pt-24 md:pt-32'
      >
        <About translations={about} />
      </section>
      <section
        id={header.writing.href}
        className='responsive-section py-24 md:py-32'
      >
        <Blog />
      </section>
    </>
  );
}
