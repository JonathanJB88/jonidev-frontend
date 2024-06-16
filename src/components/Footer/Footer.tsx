export const Footer = () => {
  return (
    <footer className='flex px-6 py-4 md:fixed md:bottom-[55px] md:left-[55px] md:text-left md:transform md:origin-bottom-left md:rotate-[-90deg]'>
      <div className='custom-container mx-auto text-center'>
        <small>
          © {new Date().getFullYear()} Jonathan Bracho - Frontend Creative
          Developer
        </small>
      </div>
    </footer>
  );
};
