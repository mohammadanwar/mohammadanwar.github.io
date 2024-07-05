import { MotionDiv } from '../lib/motion'

import { Github, Link, Linkedin, ExternalLink } from 'lucide-react'

export const socialData = [
  { link: 'https://github.com/mohammadanwar', icon: <Github /> },
  { link: 'https://www.linkedin.com/in/mohammad-anwar-siddiqui/', icon: <Linkedin /> },
  { link: 'https://www.drupal.org/u/anwar_max', icon: <Link /> },
  { link: 'https://drupal.stackexchange.com/users/6373/mohammad-anwar', icon: <ExternalLink /> }
]

export const SocialLinks = () => {
  return (
    <MotionDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-0 left-10 flex flex-col items-center gap-y-4 md:hidden"
    >
      {socialData.map((social, index) => (
        <a
          key={index}
          className="transition hover:-translate-y-1 hover:text-target"
          target="_blank"
          href={social.link}
          rel="noreferrer"
        >
          {social.icon}
        </a>
      ))}
      <div className="mt-4 h-32 w-[2px] origin-bottom bg-target"></div>
    </MotionDiv>
  )
}
