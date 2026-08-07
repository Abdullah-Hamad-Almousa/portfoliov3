import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SearchSection from "@/components/SearchSection";
import MissionSection from "@/components/MissionSection";
import SolutionSection from "@/components/SolutionSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default function App() {
  useEffect(() => {
    const resumeDelay = 5_000;
    const scrollSpeed = 24;
    let pausedUntil = 0;
    let previousTime = performance.now();
    let animationFrame = 0;

    const pauseAutoScroll = () => {
      pausedUntil = performance.now() + resumeDelay;
    };

    const pauseForScrollKey = (event: KeyboardEvent) => {
      if (
        ["ArrowDown", "ArrowUp", "PageDown", "PageUp", "Home", "End", " "].includes(
          event.key,
        )
      ) {
        pauseAutoScroll();
      }
    };

    const autoScroll = (currentTime: number) => {
      const elapsed = Math.min(currentTime - previousTime, 50);
      previousTime = currentTime;

      if (currentTime >= pausedUntil && !document.hidden) {
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        if (maxScroll > 0) {
          if (window.scrollY >= maxScroll - 1) {
            window.scrollTo(0, 0);
          } else {
            window.scrollBy(0, (scrollSpeed * elapsed) / 1_000);
          }
        }
      }

      animationFrame = window.requestAnimationFrame(autoScroll);
    };

    window.addEventListener("wheel", pauseAutoScroll, { passive: true });
    window.addEventListener("touchstart", pauseAutoScroll, { passive: true });
    window.addEventListener("touchmove", pauseAutoScroll, { passive: true });
    window.addEventListener("pointerdown", pauseAutoScroll, { passive: true });
    window.addEventListener("keydown", pauseForScrollKey);
    animationFrame = window.requestAnimationFrame(autoScroll);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("wheel", pauseAutoScroll);
      window.removeEventListener("touchstart", pauseAutoScroll);
      window.removeEventListener("touchmove", pauseAutoScroll);
      window.removeEventListener("pointerdown", pauseAutoScroll);
      window.removeEventListener("keydown", pauseForScrollKey);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <SearchSection />
        <MissionSection />
        <SolutionSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
