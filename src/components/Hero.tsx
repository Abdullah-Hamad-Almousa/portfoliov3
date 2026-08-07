import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";

const HERO_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_120549_0cd82c36-56b3-4dd9-b190-069cfc3a623f.mp4";

const avatars = [avatar1, avatar2, avatar3];

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen flex-col overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={HERO_VIDEO}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute right-0 bottom-0 left-0 z-[1] h-64 bg-gradient-to-t from-background to-transparent" />
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-8 pt-28 text-center md:pt-32">
        <motion.div {...fadeUp(0)} className="flex items-center justify-center">
          <div className="flex -space-x-2">
            {avatars.map((src, i) => (
              <img
                key={i}
                src={src}
                alt=""
                className="h-8 w-8 rounded-full border-2 border-background"
              />
            ))}
          </div>
          <span className="ml-3 text-sm text-muted-foreground">
            70+ projects built across AI, data, and web
          </span>
        </motion.div>
        <motion.h1
          {...fadeUp(0.1)}
          className="mt-8 text-5xl font-medium tracking-[-2px] md:text-7xl lg:text-8xl"
        >
          Building <span className="font-serif font-normal italic">Intelligent</span> Systems
        </motion.h1>
        <motion.p {...fadeUp(0.2)} className="mt-6 max-w-xl text-lg text-hero-subtitle">
          I'm Abdullah Almousa, a machine learning developer and AI specialist
          turning complex data into practical, scalable business intelligence.
        </motion.p>
        <motion.div
          {...fadeUp(0.3)}
          className="mt-10"
        >
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Button
              asChild
              className="h-auto rounded-full bg-foreground px-8 py-3 text-sm font-semibold tracking-wide text-background hover:bg-foreground/90"
            >
              <a
                href="https://api.modelai.website"
                target="_blank"
                rel="noreferrer"
              >
                LET'S CONNECT
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
