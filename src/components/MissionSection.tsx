import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { fadeUp } from "@/lib/animations";

const MISSION_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_132944_a0d124bb-eaa1-4082-aa30-2310efb42b4b.mp4";

const paragraph1 =
  "I build where mathematical precision meets practical impact — transforming complex data into intelligent systems that solve real business problems.";
const highlights = new Set(["precision", "meets", "practical"]);
const paragraph2 =
  "Based in Riyadh with a B.S. in Computer Science, I bring focused engineering, continuous learning, and computational scalability to every project.";

function Word({
  children,
  progress,
  range,
  highlight,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
  highlight?: boolean;
}) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <motion.span
      style={{ opacity }}
      className={highlight ? "text-foreground" : undefined}
    >
      {children}{" "}
    </motion.span>
  );
}

function RevealParagraph({
  text,
  progress,
  highlights,
  className,
}: {
  text: string;
  progress: MotionValue<number>;
  highlights?: Set<string>;
  className?: string;
}) {
  const words = text.split(" ");
  return (
    <p className={className}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        const clean = word.toLowerCase().replace(/[^a-z]/g, "");
        return (
          <Word
            key={`${word}-${i}`}
            progress={progress}
            range={[start, end]}
            highlight={highlights?.has(clean)}
          >
            {word}
          </Word>
        );
      })}
    </p>
  );
}

export default function MissionSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.45"],
  });

  return (
    <section id="philosophy" className="px-8 pt-0 pb-32 md:px-28 md:pb-44">
      <motion.video
        {...fadeUp(0)}
        className="mx-auto aspect-square w-full max-w-[800px] object-cover"
        src={MISSION_VIDEO}
        autoPlay
        loop
        muted
        playsInline
      />
      <div ref={ref} className="mx-auto mt-24 max-w-4xl text-center">
        <RevealParagraph
          text={paragraph1}
          progress={scrollYProgress}
          highlights={highlights}
          className="text-2xl font-medium tracking-[-1px] text-hero-subtitle md:text-4xl lg:text-5xl"
        />
        <RevealParagraph
          text={paragraph2}
          progress={scrollYProgress}
          className="mt-10 text-xl font-medium text-hero-subtitle md:text-2xl lg:text-3xl"
        />
      </div>
    </section>
  );
}
