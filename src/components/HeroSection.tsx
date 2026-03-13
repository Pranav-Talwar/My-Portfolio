import Image from "next/image";
import { MapPin } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="bg-[var(--bg-base)] border-b border-[var(--border)] overflow-hidden transition-colors duration-300">
      <div className="px-4 md:px-8 pt-10 md:pt-14 pb-8 md:pb-10 flex flex-row items-center gap-6 md:gap-12">

        {/* Left: text content */}
        <div className="flex-1 min-w-0">
          {/* Location */}
          <div className="flex items-center gap-2 mb-5 md:mb-6">
            <MapPin className="w-3.5 h-3.5 text-emerald-500" />
            <p className="text-[10px] md:text-xs text-[var(--text-secondary)] font-mono tracking-widest uppercase">
              Alberta, Canada
            </p>
          </div>

          {/* Terminal title */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[var(--text-heading)] font-mono mb-6 md:mb-8 leading-tight">
            PRANAV_TALWAR
            <span className="border-r-4 border-emerald-500 ml-1 cursor-blink">&nbsp;</span>
          </h1>

          {/* Bio */}
          <div>
            <p className="text-sm sm:text-base text-[var(--text-secondary)] font-medium mb-1">Full-Stack Developer</p>
        
          </div>
        </div>

        {/* Right: avatar */}
        <div className="shrink-0">
          <div className="w-24 h-24 sm:w-36 sm:h-36 md:w-52 md:h-52 rounded-full overflow-hidden border border-[var(--border)]">
            <Image
              src="/projects/Me.jpeg"
              alt="Pranav Talwar"
              width={416}
              height={416}
              quality={95}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}
