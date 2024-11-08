import {
  About,
  Blog,
  Experience,
  Intro,
  Projects,
  WrapperScroll,
} from '@/components';
import { getDictionary } from '../dictionaries';
import { getAllPosts } from '@/actions';

import { Locale } from '@/interfaces';

interface Props {
  params: Record<'lang', Locale>;
}

export default async function Home({ params }: Props) {
  const { intro, experience, header, projects, about, writing } =
    await getDictionary(params.lang);

  const posts = await getAllPosts(params.lang);

  return (
    <WrapperScroll>
      <section id='#' className='responsive-section'>
        <Intro translations={intro} />
      </section>
      <section id={header.experience.href} className='responsive-section'>
        <Experience translations={experience} />
      </section>
      <section id={header.projects.href} className='responsive-section'>
        <Projects translations={projects} />
      </section>
      <section id={header.about.href} className='responsive-section'>
        <About translations={about} />
      </section>
      <section id={header.writing.href} className='responsive-section'>
        <Blog posts={posts} translations={writing} />
      </section>
    </WrapperScroll>
  );
}
