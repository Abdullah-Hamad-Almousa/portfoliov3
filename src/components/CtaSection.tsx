import { useEffect, useRef } from "react";
import Hls from "hls.js";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const HLS_URL =
  "https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8";

export default function CtaSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hls: Hls | undefined;
    if (Hls.isSupported()) {
      hls = new Hls();
      hls.loadSource(HLS_URL);
      hls.attachMedia(video);
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = HLS_URL;
    }
    return () => hls?.destroy();
  }, []);

  return (
    <section className="relative overflow-hidden border-t border-border/30 px-8 py-32 md:px-28 md:py-44">
      <video
        ref={videoRef}
        className="absolute inset-0 z-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 z-[1] bg-background/45" />
      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.img
          {...fadeUp(0)}
          src={logo}
          alt="Abdullah Almousa logo"
          className="h-20 w-20 object-contain"
        />
        <motion.h2
          {...fadeUp(0.1)}
          className="mt-8 font-serif text-5xl font-normal tracking-[-1px] italic md:text-7xl"
        >
          Let's Build Something Intelligent
        </motion.h2>
        <motion.p {...fadeUp(0.2)} className="mt-4 max-w-md text-muted-foreground">
          Have an AI, machine learning, or data project in mind? Let's turn the
          challenge into a practical, scalable solution.
        </motion.p>
        <motion.div
          {...fadeUp(0.3)}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Button asChild className="h-auto rounded-lg bg-foreground px-8 py-3.5 text-sm font-semibold text-background hover:bg-foreground/90">
            <a href="https://api.modelai.website" target="_blank" rel="noreferrer">
              Contact Me
            </a>
          </Button>
          <a
            href="https://github.com/Abdullah-Hamad-Almousa"
            target="_blank"
            rel="noreferrer"
            className="liquid-glass rounded-lg px-8 py-3.5 text-sm font-medium transition-colors hover:bg-white/5"
          >
            View My Work
          </a>
        </motion.div>
      </div>
    </section>
  );
}
