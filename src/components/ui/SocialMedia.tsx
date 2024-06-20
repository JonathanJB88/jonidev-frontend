import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';

export const SocialMedia = () => {
  return (
    <div className='flex mt-4 mb-1 md:fixed md:bottom-4 md:right-4 flex-row md:flex-col items-center justify-center md:space-y-4'>
      {socialLinks.map(
        ({ Icon, url, label, hoverColor, target = '_blank' }) => (
          <a
            key={url}
            href={url}
            target={target}
            rel='noopener noreferrer'
            aria-label={label}
          >
            <Icon className={`text-2xl mx-1 hover:${hoverColor}`} />
          </a>
        )
      )}
    </div>
  );
};

const socialLinks = [
  {
    Icon: FaLinkedin,
    url: 'https://www.linkedin.com/in/jonathanbracho',
    label: 'LinkedIn - Jonathan Bracho - Creative Frontend Developer',
    hoverColor: 'text-blue-600',
  },
  {
    Icon: FaGithub,
    url: 'https://github.com/JonathanJB88',
    label: 'GitHub - Jonathan Bracho - Creative Frontend Developer',
    hoverColor: 'text-gray-600',
  },
  {
    Icon: FaTwitter,
    url: 'https://x.com/JonathanDev88',
    label: 'Twitter - Jonathan Bracho - Creative Frontend Developer',
    hoverColor: 'text-blue-400',
  },
  {
    Icon: FaEnvelope,
    url: 'mailto:jonajes0288@gmail.com',
    label: 'Email - Jonathan Bracho - Creative Frontend Developer',
    hoverColor: 'text-crimson',
    target: '_self',
  },
];
