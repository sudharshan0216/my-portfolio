import Image from 'next/image';
import { Roboto, Lora } from 'next/font/google';

const roboto = Roboto({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-roboto',
});

const lora = Lora({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-lora',
});

const Footer = () => {
  return (
    <footer className="bg-[#000000] py-14 mt-16 px-4 min-[480px]:px-6 md:px-10 text-white">
      <div className="max-w-(--breakpoint-xl) m-auto">
        <h2 className={`text-4xl ${lora.className}`}>Sudharshan.</h2>

        <div className="mt-8 flex flex-row gap-4">
          {[
            { site: 'Github', link: 'https://github.com/sudharshan0216' },
            {
              site: 'LinkedIn',
              link: 'https://www.linkedin.com/in/contactsudharshans/',
            },
          ].map((item) => (
            <a
              key={item.site}
              href={item.link}
              className={`text-xl ${roboto.className}`}
            >
              {item.site}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
