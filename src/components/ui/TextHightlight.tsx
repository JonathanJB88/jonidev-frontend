interface Props {
  title: string;
  classname?: string;
}

export const TextHightlight = ({ title, classname = '' }: Props) => {
  return (
    <span
      className={`${classname} inline-flex h-8 md:h-12 animate-shimmer items-center justify-center border border-silver bg-[linear-gradient(110deg,transparent,45%,#1e2631,55%,transparent)] bg-[length:200%_100%] px-3 md:px-6 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50`}
    >
      {title}
    </span>
  );
};
