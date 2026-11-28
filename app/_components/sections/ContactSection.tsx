import { MapPin, Phone, Mail, Clock, ArrowRight, Map } from "lucide-react";
import SectionLabel from "../ui/SectionLabel";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-24 bg-white relative border-t border-[#E2DFC8]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section Header ── */}
        <div className="max-w-2xl mb-16">
          <SectionLabel color="maroon" className="mb-3">
            WE&apos;D LOVE TO HEAR FROM YOU
          </SectionLabel>
          <h2 className="font-[family-name:var(--font-display)] font-extrabold text-[#17265B] text-3xl sm:text-4xl lg:text-[44px] tracking-tight mb-4 text-balance">
            Have a Question? Let&apos;s Talk.
          </h2>
          <p className="font-[family-name:var(--font-body)] text-base sm:text-lg text-[#4D515C] leading-relaxed text-pretty">
            For information about our school, academic programs, or any other
            queries, feel free to contact our school administration.
          </p>
        </div>

        {/* ── Asymmetric Two-Column Composition ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* LEFT SIDE: Contact Information & Google Maps (Span 5) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              {/* School Address */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#F8F6EF] border border-[#E2DFC8]">
                <div className="w-12 h-12 rounded-xl bg-[#F6CF45] text-[#17265B] flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-display)] font-bold text-[#17265B] text-base">
                    School Address
                  </h3>
                  <p className="font-[family-name:var(--font-body)] text-sm text-[#4D515C] mt-1 leading-relaxed">
                    Langta Baba Gyandeep Public School, Kharagdiha, Giridih
                    District, Jharkhand, India
                  </p>
                </div>
              </div>

              {/* Phone Number */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#F8F6EF] border border-[#E2DFC8]">
                <div className="w-12 h-12 rounded-xl bg-[#17265B] text-white flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-display)] font-bold text-[#17265B] text-base">
                    Direct Contact
                  </h3>
                  <p className="font-[family-name:var(--font-body)] text-sm text-[#4D515C] mt-1">
                    +91 [School Contact Number]
                  </p>
                  <a
                    href="tel:+910000000000"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#17265B] hover:text-[#862D48] mt-2 transition-colors"
                  >
                    <span>Call Administration</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#F8F6EF] border border-[#E2DFC8]">
                <div className="w-12 h-12 rounded-xl bg-[#862D48] text-white flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-display)] font-bold text-[#17265B] text-base">
                    Official Email
                  </h3>
                  <a
                    href="mailto:contact@langtababa-gyandeep.org"
                    className="font-[family-name:var(--font-body)] text-sm text-[#4D515C] hover:text-[#17265B] mt-1 block break-all transition-colors"
                  >
                    contact@langtababa-gyandeep.org
                  </a>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#F8F6EF] border border-[#E2DFC8]">
                <div className="w-12 h-12 rounded-xl bg-white border border-[#17265B]/20 text-[#17265B] flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-display)] font-bold text-[#17265B] text-base">
                    School Timings
                  </h3>
                  <p className="font-[family-name:var(--font-body)] text-sm text-[#4D515C] mt-1">
                    Monday to Saturday: 08:00 AM – 02:30 PM (Sunday Closed)
                  </p>
                </div>
              </div>
            </div>

            {/* Google Maps Location Frame */}
            <div className="rounded-3xl overflow-hidden border border-[#E2DFC8] custom-shadow-card">
              <div className="p-3 bg-[#F8F6EF] border-b border-[#E2DFC8] flex items-center justify-between text-[#17265B]">
                <span className="font-[family-name:var(--font-display)] text-xs font-bold flex items-center gap-1.5">
                  <Map className="w-4 h-4" />
                  Kharagdiha Campus Location
                </span>
                <span className="text-xs text-[#4D515C]">Interactive Map</span>
              </div>
              <div className="w-full h-56 bg-slate-100">
                <iframe
                  title="Langta Baba Gyandeep Public School Map"
                  src="https://maps.google.com/maps?q=Kharagdiha&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  className="border-0 w-full h-full"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Inquiry Form (Span 7) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
