import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/icons";
import logo from "@/assets/logo.png";

const links = [
  { label: "Home", href: "#home" },
  { label: "Expertise", href: "#how-it-works" },
  { label: "About", href: "#philosophy" },
  { label: "Projects", href: "#use-cases" },
];

const socials = [
  {
    label: "GitHub",
    icon: GithubIcon,
    href: "https://github.com/Abdullah-Hamad-Almousa",
  },
  {
    label: "LinkedIn",
    icon: LinkedinIcon,
    href: "https://www.linkedin.com/in/abdullah-almousa-a76562237",
  },
  {
    label: "X",
    icon: TwitterIcon,
    href: "https://x.com/Abdullah37Hamad",
  },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 right-0 left-0 z-50 px-8 py-4 md:px-28"
    >
      <nav className="flex items-center justify-between">
        <div className="flex items-center gap-10">
          <a href="#home" className="flex items-center gap-2.5">
            <img src={logo} alt="Abdullah Almousa logo" className="h-9 w-9 object-contain" />
            <span className="text-base font-bold">Abdullah Almousa</span>
          </a>
          <div className="hidden items-center gap-3 text-sm md:flex">
            {links.map((link, i) => (
              <span key={link.label} className="flex items-center gap-3">
                {i > 0 && <span className="text-muted-foreground/40">•</span>}
                <a
                  href={link.href}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </span>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-3">
          {socials.map(({ label, icon: Icon, href }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noreferrer"
              className="liquid-glass flex h-10 w-10 items-center justify-center rounded-full text-foreground/80 transition-colors hover:text-foreground"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </nav>
    </motion.header>
  );
}
