"use client";
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle, Key, Mail, Calendar, ShieldCheck, Ticket } from 'lucide-react';

export default function Contact() {
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formSubject, setFormSubject] = useState('Analysis Work');
  const [formMessage, setFormMessage] = useState('');

  const [submittedData, setSubmittedData] = useState<{
    date: string;
    ticketId: string;
    name: string;
    email: string;
    subject: string;
    message: string;
  } | null>(null);

  const [errorText, setErrorText] = useState('');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorText('');

    if (!formName.trim() || !formEmail.trim() || !formMessage.trim()) {
      setErrorText('All major parameters (Name, Email, Message) are fully mandatory to initialize network callback!');
      return;
    }

    if (!formEmail.includes('@')) {
      setErrorText('The supplied callback email address structure requires a formal @ validation sign!');
      return;
    }

    // Success! Generate custom receipt ticket
    const todayStr = new Date().toISOString().replace('T', ' ').substring(0, 19);
    const tickId = 'REG-' + Math.floor(100000 + Math.random() * 900000);

    setSubmittedData({
      date: todayStr,
      ticketId: tickId,
      name: formName,
      email: formEmail,
      subject: formSubject,
      message: formMessage
    });
  };

  const handleReset = () => {
    setFormName('');
    setFormEmail('');
    setFormSubject('Analysis Work');
    setFormMessage('');
    setSubmittedData(null);
  };

  return (
    <motion.section 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      id="contact" 
      className="py-24 px-4 bg-[#FF90E8] dark:bg-zinc-900 border-b-4 border-black text-center relative overflow-hidden transition-colors duration-200"
    >
      {/* Dynamic background accents */}
      <div className="absolute inset-0 opacity-10 dark:hidden pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000000 2px, transparent 2px)', backgroundSize: '32px 32px' }}></div>
      <div className="absolute inset-0 hidden dark:block opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)', backgroundSize: '32px 32px' }}></div>

      <div className="max-w-3xl mx-auto relative z-10 text-left">
        {!submittedData ? (
          /* Main Input Form Board */
          <div className="bg-white dark:bg-zinc-900 border-4 border-black dark:border-white p-6 md:p-10 rounded-xl brutal-shadow transform rotate-[-0.5deg]">
            
            <div className="text-center mb-8 border-b-4 border-black dark:border-white pb-6">
              <h2 className="text-2xl md:text-4xl font-black font-sans uppercase text-black dark:text-white leading-none tracking-tight">
                Let's build something fundamentally awesome together.
              </h2>
              <p className="font-extrabold text-sm md:text-base text-zinc-700 dark:text-zinc-300 mt-3 capitalize">
                Currently open for new opportunities and freelance projects.
              </p>
            </div>

            {errorText && (
              <div className="p-3 border-4 border-black bg-[#FFC0D8] text-black font-bold text-xs rounded-lg mb-6 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 shrink-0" />
                <span>{errorText}</span>
              </div>
            )}

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-name" className="text-xs font-black font-mono uppercase text-black dark:text-white">
                    * Personal/Corporate Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    placeholder="E.g. Rachel Graceya"
                    className="p-3 border-4 border-black dark:border-white bg-[#f9f9f9] dark:bg-zinc-800 text-black dark:text-white rounded-lg shadow-sm font-medium focus:ring-2 focus:ring-brand-primary focus:outline-none"
                    required
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-email" className="text-xs font-black font-mono uppercase text-black dark:text-white">
                    * Valid Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={formEmail}
                    onChange={(e) => setFormEmail(e.target.value)}
                    placeholder="E.g. test@corporate.com"
                    className="p-3 border-4 border-black dark:border-white bg-[#f9f9f9] dark:bg-zinc-800 text-black dark:text-white rounded-lg shadow-sm font-medium focus:ring-2 focus:ring-brand-primary focus:outline-none"
                    required
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-subject" className="text-xs font-black font-mono uppercase text-black dark:text-white">
                  Project Classification
                </label>
                <select
                  id="contact-subject"
                  value={formSubject}
                  onChange={(e) => setFormSubject(e.target.value)}
                  className="p-3 border-4 border-black dark:border-white bg-[#f9f9f9] dark:bg-zinc-800 text-black dark:text-white rounded-lg shadow-sm font-bold focus:ring-2 focus:ring-brand-primary focus:outline-none"
                >
                  <option value="Analysis Work">Business Analytics Consultation (Auditing / SQL)</option>
                  <option value="Front-end Build">Front-end Development Build (React / Vite)</option>
                  <option value="Full Strategy Package">Full-scale Market Strategy (TAM Modeling / GTM)</option>
                  <option value="Other Project">Other Strategic Project Work</option>
                </select>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-message" className="text-xs font-black font-mono uppercase text-black dark:text-white">
                  * Core Project Scopes
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  value={formMessage}
                  onChange={(e) => setFormMessage(e.target.value)}
                  placeholder="Describe your goals, targets, and expected timeline parameters..."
                  className="p-3 border-4 border-black dark:border-white bg-[#f9f9f9] dark:bg-zinc-800 text-black dark:text-white rounded-lg shadow-sm font-medium focus:ring-2 focus:ring-brand-primary focus:outline-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4.5 bg-brand-primary hover:bg-brand-accent text-black font-black text-base border-4 border-black rounded-lg shadow-md hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-sm transition-all cursor-pointer flex justify-center items-center gap-2"
              >
                Send Message <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        ) : (
          /* Elegant Printed Receipt Success Ticket */
          <div className="bg-white text-black border-4 border-black p-6 md:p-10 rounded-xl brutal-shadow relative max-w-xl mx-auto transform rotate-[1deg] font-mono select-none">
            
            {/* Header stars */}
            <div className="text-center pb-4 border-b-4 border-black border-dashed">
              <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-2 animate-bounce" />
              <p className="text-base font-black uppercase tracking-widest">TRANSACTION RECEIPT</p>
              <p className="text-xs font-black text-zinc-500 mt-1">Rachel Graceya Digital Agency</p>
            </div>

            {/* Receipt Info parameters */}
            <div className="my-6 space-y-3.5 text-sm">
              <div className="flex justify-between">
                <span className="text-zinc-500 uppercase font-black flex items-center gap-1.5">
                  <Ticket className="w-4 h-4" /> TICKET ID:
                </span>
                <span className="font-black text-black">{submittedData.ticketId}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-zinc-500 uppercase font-black flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" /> Date Stamp:
                </span>
                <span className="font-bold text-black">{submittedData.date}</span>
              </div>

              <div className="border-t border-zinc-200 border-dashed my-3"></div>

              <div>
                <span className="text-zinc-500 uppercase font-black text-xs block mb-1">Sender Entity:</span>
                <p className="font-extrabold bg-[#f9f9f9] p-2 border border-black rounded-md text-slate-800">
                  {submittedData.name} ({submittedData.email})
                </p>
              </div>

              <div>
                <span className="text-zinc-500 uppercase font-black text-xs block mb-1">Subject Scope:</span>
                <p className="font-black text-white bg-black px-2 py-1 rounded-md inline-block">
                  {submittedData.subject}
                </p>
              </div>

              <div>
                <span className="text-zinc-500 uppercase font-black text-xs block mb-1">Scope Details:</span>
                <p className="italic text-xs font-medium text-zinc-800 bg-zinc-50 border border-black p-3.5 rounded-lg whitespace-pre-wrap">
                  "{submittedData.message}"
                </p>
              </div>
            </div>

            {/* Footer details */}
            <div className="pt-4 border-t-4 border-black border-dashed text-center space-y-4">
              <p className="text-xs font-bold text-zinc-500">
                ✔️ Handshake complete! Rachel will inspect parameters & execute response dispatch within 24 working hours.
              </p>
              
              <button 
                onClick={handleReset}
                className="px-6 py-2 bg-brand-secondary hover:bg-brand-dark-pink text-black font-extrabold text-xs border-4 border-black rounded-md shadow-sm hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all cursor-pointer flex items-center gap-1.5 mx-auto"
              >
                Assemble A New Ticket <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </motion.section>
  );
}
