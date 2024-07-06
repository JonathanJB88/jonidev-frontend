type Item = {
  title: string;
  description: string;
  date: string;
};

interface Props {
  item: Item;
  isReversed: boolean;
}

export const TimelineItem = ({ item, isReversed }: Props) => {
  return (
    <div
      className={`mb-8 flex ${
        isReversed ? 'justify-between flex-row-reverse' : 'justify-between'
      } items-center w-full`}
    >
      <div className='order-1 w-5/12'></div>
      <div
        className={`order-1 w-5/12 px-1 py-4 ${
          isReversed ? 'text-right' : 'text-left'
        }`}
      >
        <p className='mb-3 text-crimson'>{item.date}</p>
        <h4 className='mb-3 text-softwhite'>{item.title}</h4>
        <small className='leading-snug'>{item.description}</small>
      </div>
    </div>
  );
};
