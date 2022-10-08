import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaDiscord,
} from 'react-icons/fa'
import './socialIcon.style.css'

export default function SocialIcon({ name, src }) {
  const iconList = {
    facebook: <FaFacebookF />,
    instagram: <FaInstagram />,
    twitter: <FaTwitter />,
    linkedin: <FaLinkedinIn />,
    github: <FaGithub />,
    discord: <FaDiscord />,
  }

  return (
    <a
      className={`socialIcon ${name}`}
      href={src}
      target="_blank"
      rel="noopener noreferrer"
    >
      {iconList[name]}
    </a>
  )
}
