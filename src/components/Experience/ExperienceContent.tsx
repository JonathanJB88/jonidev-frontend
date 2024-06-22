import { FadeInSection, TimelineItem } from '@/components';

export const ExperienceContent = () => {
  return (
    <div className='ml-0 md:ml-12 lg:w-2/3'>
      <div className='container mx-auto w-full h-full'>
        <div className='relative wrap p-10 h-full'>
          <div className='border-2-2 border-crimson absolute h-full border right-[50%] border-spacing-[2px] rounded-[1%]'></div>

          {content.map((item, index) => (
            <FadeInSection key={index} delay={index * 0.5}>
              <TimelineItem item={item} isReversed={index % 2 === 0} />
            </FadeInSection>
          ))}
        </div>
      </div>
    </div>
  );
};

const content = [
  {
    title: 'Registration',
    description:
      'Pick your favourite event(s) and register in that event by filling the form corresponding to that event. Its that easy.',
    date: '1-6 May, 2021',
  },
  {
    title: 'Participation',
    description:
      'Participate online. The links for your registered events will be sent to you via email and whatsapp groups. Use those links and show your talent.',
    date: '6-9 May, 2021',
  },
  {
    title: 'Result Declaration',
    description:
      'The ultimate genius will be revealed by our judging panel on 10th May, 2021 and the results will be announced on the whatsapp groups and will be mailed to you.',
    date: '10 May, 2021',
  },
  {
    title: 'Prize Distribution',
    description:
      'The winners will be contacted by our team for their addresses and the winning goodies will be sent at their addresses.',
    date: '12 May, 2021',
  },
];
