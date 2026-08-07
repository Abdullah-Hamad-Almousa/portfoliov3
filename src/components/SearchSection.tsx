import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import iconChatgpt from "@/assets/icon-chatgpt.png";
import iconPerplexity from "@/assets/icon-perplexity.png";
import iconGoogle from "@/assets/icon-google.png";

const platforms = [
  {
    icon: iconChatgpt,
    name: "Machine Learning & AI",
    description:
      "Machine learning models, deep learning, neural networks, NLP, computer vision, and recommender systems.",
  },
  {
    icon: iconPerplexity,
    name: "Data & Analytics",
    description:
      "Advanced exploratory data analysis and business intelligence that turn complex datasets into clear decisions.",
  },
  {
    icon: iconGoogle,
    name: "Applied Development",
    description:
      "End-to-end AI projects spanning Android malware detection, web applications, and game development.",
  },
];

export default function SearchSection() {
  return (
    <section id="how-it-works" className="px-8 pt-52 pb-6 text-center md:px-28 md:pt-64 md:pb-9">
      <motion.h2
        {...fadeUp(0)}
        className="text-5xl font-medium tracking-[-2px] md:text-7xl lg:text-8xl"
      >
        Data has <span className="font-serif font-normal italic">potential.</span> I
        make it useful.
      </motion.h2>
      <motion.p
        {...fadeUp(0.1)}
        className="mx-auto mt-6 mb-24 max-w-2xl text-lg text-muted-foreground"
      >
        I design machine learning systems that bridge high-dimensional data and
        actionable business intelligence with mathematical precision and scale.
      </motion.p>
      <div className="mx-auto mb-20 grid max-w-5xl gap-12 md:grid-cols-3 md:gap-8">
        {platforms.map((platform, i) => (
          <motion.div
            key={platform.name}
            {...fadeUp(0.1 * i)}
            className="flex flex-col items-center gap-4"
          >
            <img
              src={platform.icon}
              alt={`${platform.name} icon`}
              className="h-[200px] w-[200px] object-contain"
            />
            <h3 className="text-base font-semibold">{platform.name}</h3>
            <p className="max-w-xs text-sm text-muted-foreground">
              {platform.description}
            </p>
          </motion.div>
        ))}
      </div>
      <motion.p {...fadeUp(0.2)} className="text-center text-sm text-muted-foreground">
        From research and analysis to deployment, every project is built to create measurable value.
      </motion.p>
    </section>
  );
}
