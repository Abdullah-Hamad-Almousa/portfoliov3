import aiRankBadge from "@/assets/badge-ai-rank-3.png";
import worldRecordBadge from "@/assets/badge-world-record.png";
import acmBadge from "@/assets/badge-acm.png";
import rankFiveBadge from "@/assets/badge-rank-5.png";

const achievements = [
  {
    title: "AI Training — 3rd in the Arab World",
    description:
      "Achieved 3rd place in Arab-world AI training during the Kanz AI Training Hackathon, a Guinness World Records event with 14,075 live participants.",
    badges: [
      { src: aiRankBadge, alt: "Bronze third-place badge" },
      { src: worldRecordBadge, alt: "Guinness World Records event badge" },
    ],
  },
  {
    title: "Programming Contest — 5th Nationwide",
    description:
      "Achieved 5th place nationwide in the programming contest, represented by the ACM and Top 5 achievement badges.",
    badges: [
      { src: acmBadge, alt: "ACM programming badge" },
      { src: rankFiveBadge, alt: "Top 5 programming contest badge" },
    ],
  },
];

const footerLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/abdullah-almousa-a76562237" },
  { label: "GitHub", href: "https://github.com/Abdullah-Hamad-Almousa" },
  { label: "Kaggle", href: "https://www.kaggle.com/abdullahhamadalmousa" },
  { label: "X", href: "https://x.com/Abdullah37Hamad" },
  { label: "Business", href: "https://ai.modelai.website" },
  { label: "Contact", href: "https://api.modelai.website" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border/30 px-8 py-12 md:px-28">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs tracking-[3px] text-muted-foreground uppercase">
          Badges & Recognition
        </p>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {achievements.map((achievement) => (
            <article key={achievement.title} className="liquid-glass rounded-2xl p-6">
              <div className="flex min-h-32 items-center gap-5">
                {achievement.badges.map((badge) => (
                  <img
                    key={badge.alt}
                    src={badge.src}
                    alt={badge.alt}
                    className="h-24 w-24 rounded-xl object-contain"
                  />
                ))}
              </div>
              <h3 className="mt-5 text-base font-semibold">{achievement.title}</h3>
              <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">
                {achievement.description}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/30 pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2026 Abdullah Almousa. All rights reserved.
          </p>
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
