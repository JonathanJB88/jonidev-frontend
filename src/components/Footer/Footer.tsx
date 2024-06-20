export const Footer = () => {
  return (
    <footer className='flex px-6 mb-4 md:fixed md:bottom-[55px] md:left-[55px] md:text-left md:transform md:origin-bottom-left md:rotate-[-90deg]'>
      <div className='responsive-section mx-auto text-center'>
        <small>
          © {new Date().getFullYear()} | Jonathan Bracho - Creative Frontend
          Developer
        </small>
      </div>
    </footer>
  );
};
