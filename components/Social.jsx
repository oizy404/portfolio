import Link from "next/link";
import { FaGithub, FaLinkedinIn} from 'react-icons/fa';

const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/oizy404/"
  },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/mitz-mia-castillo-8919b817b/"
  }
]
const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index)=>{
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        )
      })}
    </div>
  )
}

export default Social