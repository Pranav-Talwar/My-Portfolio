import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactInfoSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#1a1a1a] border-b border-[#1a1a1a]">
      <div className="p-4 md:px-8 md:py-6 space-y-3">
        <a
          href="mailto:mohamed.g.shoaib@gmail.com"
          className="flex items-center gap-3 text-sm text-neutral-400 hover:text-white transition-colors group"
        >
          <div className="w-8 h-8 rounded-full border border-[#1a1a1a] flex items-center justify-center bg-[#111] group-hover:border-neutral-600 transition-colors text-neutral-400 group-hover:text-white">
            <Mail className="w-4 h-4" />
          </div>
          <span>mohamed.g.shoaib@gmail.com</span>
        </a>
        <a
          href="tel:+201140493328"
          className="flex items-center gap-3 text-sm text-neutral-400 hover:text-white transition-colors group"
        >
          <div className="w-8 h-8 rounded-full border border-[#1a1a1a] flex items-center justify-center bg-[#111] group-hover:border-neutral-600 transition-colors text-neutral-400 group-hover:text-white">
            <Phone className="w-4 h-4" />
          </div>
          <span>+20 11 40493328</span>
        </a>
      </div>
      <div className="p-4 md:px-8 md:py-6 space-y-3">
        <div className="flex items-center gap-3 text-sm text-neutral-400">
          <div className="w-8 h-8 rounded-full border border-[#1a1a1a] flex items-center justify-center bg-[#111] text-neutral-400">
            <MapPin className="w-4 h-4" />
          </div>
          <span>Cairo, Egypt</span>
        </div>
        <div className="flex items-center gap-3 text-sm text-neutral-400">
          <div className="w-8 h-8 rounded-full border border-[#1a1a1a] flex items-center justify-center bg-[#111] text-neutral-400">
            <Clock className="w-4 h-4" />
          </div>
          <span>
            22:31 <span className="text-neutral-600">//</span> 2h ahead
          </span>
        </div>
      </div>
    </section>
  );
}
