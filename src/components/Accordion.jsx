"use client";
import { useState, useCallback } from "react";
import Item from "./Item";

const Accordion = () => {
  // State til at holde styr på det åbne spørgsmål
  const [openItemIndex, setOpenItemIndex] = useState(null);

  // Funktion til at håndtere klik på spørgsmål
  const handleItemClick = useCallback((index) => {
    // Hvis det samme spørgsmål klikkes igen, luk det. Ellers åbn det nye spørgsmål.
    setOpenItemIndex((prevIndex) => (prevIndex === index ? null : index));
  }, []);

  return (
    <div className="relative font-inter antialiased">
      <main className="relative min-h-screen bg-slate-50 overflow-hidden">
        <section className="w-full max-w-2xl mx-auto px-4 md:px-6 py-24">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">FAQs</h1>
          {/* Item / fold ud  */}
          <Item isOpen={openItemIndex === 0} onClick={() => handleItemClick(0)} question="Are there any fees or commissions in addition to the monthly subscription?" answer="If you go over your organization's or user limit, a member of the team will reach out about bespoke pricing." />
          <Item isOpen={openItemIndex === 1} onClick={() => handleItemClick(1)} question="How does the billing cycle work?" answer="Billing is based on a monthly subscription, which renews automatically every month unless canceled." />
          <Item isOpen={openItemIndex === 2} onClick={() => handleItemClick(2)} question="What happens if I cancel my subscription?" answer="Your subscription will remain active until the end of the billing period, after which you will no longer have access." />
        </section>
      </main>

      <footer className="absolute left-6 right-6 md:left-12 md:right-auto bottom-4 md:bottom-8 text-center md:text-left" role="contentinfo">
        <a className="text-xs text-slate-500 hover:underline" href="https://cruip.com" aria-label="Cruip - Tailwind CSS templates">
          &copy; Cruip - Tailwind CSS templates
        </a>
      </footer>
    </div>
  );
};

export default Accordion;
