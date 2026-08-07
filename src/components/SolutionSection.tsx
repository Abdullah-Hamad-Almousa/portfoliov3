import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

const SOLUTION_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_125119_8e5ae31c-0021-4396-bc08-f7aebeb877a2.mp4";

const features = [
  {
    title: "Android Malware Detection",
    description:
      "Machine learning detection models designed to identify malicious Android applications.",
  },
  {
    title: "GandI Open-World Game",
    description:
      "A solo-developed open-world game experienced by more than 1,200 players.",
  },
  {
    title: "Competition Recognition",
    description:
      "Placed 5th nationwide in a programming contest and 3rd in the Arab World for AI training.",
  },
  {
    title: "Continuous Development",
    description:
      "70+ projects and 30+ professional certificates across AI, data science, and software engineering.",
  },
];

export default function SolutionSection() {
  return (
    <section
      id="use-cases"
      className="border-t border-border/30 px-8 py-32 md:px-28 md:py-44"
    >
      <motion.p
        {...fadeUp(0)}
        className="text-xs tracking-[3px] text-muted-foreground uppercase"
      >
        Selected Work & Achievements
      </motion.p>
      <motion.h2
        {...fadeUp(0.1)}
        className="mt-6 max-w-3xl text-4xl font-medium tracking-[-1px] md:text-6xl"
      >
        Ideas shaped into{" "}
        <span className="font-serif font-normal italic">real-world</span> results
      </motion.h2>
      <motion.video
        {...fadeUp(0.15)}
        className="mt-16 aspect-[3/1] w-full rounded-2xl object-cover"
        src={SOLUTION_VIDEO}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="mt-16 grid gap-8 md:mt-20 md:grid-cols-4">
        {features.map((feature, i) => (
          <motion.div key={feature.title} {...fadeUp(0.1 * i)}>
            <h3 className="text-base font-semibold">{feature.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
