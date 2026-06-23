import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/oizy404/",
    label: "GitHub",
  },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/mitz-mia-castillo-8919b817b/",
    label: "LinkedIn",
  },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item) => (
        <a
          key={item.label}
          href={item.path}
          className={iconStyles}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.label}
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default Social;
