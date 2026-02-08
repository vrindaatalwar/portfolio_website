import React, { useState, useEffect } from 'react';

import { Section, Container } from './Layout';
import { ArrowUpRightIcon, VolumeIcon } from './Icons';

const Hero: React.FC = () => {
  const roles = ["frontend dev", "tech enthusiast", "design enthusiast"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [animationState, setAnimationState] = useState<'visible' | 'exiting' | 'entering'>('visible');
  const [isSpeaking, setIsSpeaking] = useState(false);
  // We'll track voices, but mostly fetch them on click to be safe
  const [voicesLoaded, setVoicesLoaded] = useState(false);

  const socialLinks = [
    { name: 'Github', url: 'https://github.com/vrindaatalwar' },
    { name: 'Linkedin', url: 'https://www.linkedin.com/in/vrindaa-talwar' },
    { name: 'Twitter', url: 'https://x.com/vrndtwr' },
    { name: 'Email me', url: 'https://mail.google.com/mail/?view=cm&fs=1&to=vrindaatalwar@gmail.com' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      // Start exit animation
      setAnimationState('exiting');

      setTimeout(() => {
        // Change text and snap to top position (entering state)
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        setAnimationState('entering');

        // Trigger entry animation after a brief delay to ensure DOM update
        setTimeout(() => {
          setAnimationState('visible');
        }, 50);
      }, 300); // Match exit transition duration
    }, 2500); // Cycle every 2.5 seconds

    return () => clearInterval(interval);
  }, [roles.length]);

  // Load voices purely to ensure the browser has initialized them
  useEffect(() => {
    const initVoices = () => {
      const v = window.speechSynthesis.getVoices();
      if (v.length > 0) {
        setVoicesLoaded(true);
      }
    };

    initVoices();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = initVoices;
    }
  }, []);

  const handlePlayAudio = () => {
    if ('speechSynthesis' in window) {
      // Cancel any ongoing speech to ensure clean playback
      window.speechSynthesis.cancel();

      setIsSpeaking(true);

      // Fetch latest voices directly
      const availableVoices = window.speechSynthesis.getVoices();

      // Priority 1: Hindi specific voice (e.g., "Google Hindi", "Lekha")
      const hindiVoice = availableVoices.find(voice =>
        voice.lang === 'hi-IN' || voice.name.toLowerCase().includes('hindi')
      );

      // Priority 2: Indian English voice (e.g., "Google English (India)", "Microsoft Ravi")
      const indianEnglishVoice = availableVoices.find(voice =>
        voice.lang === 'en-IN' || voice.name.toLowerCase().includes('india')
      );

      let textToSpeak = "Vrinda";
      const utterance = new SpeechSynthesisUtterance();

      if (hindiVoice) {
        utterance.voice = hindiVoice;
        utterance.lang = hindiVoice.lang;
        // Native Hindi speakers read "Vrinda" correctly without phonetic tricks
        textToSpeak = "Vrinda";
      } else if (indianEnglishVoice) {
        utterance.voice = indianEnglishVoice;
        utterance.lang = indianEnglishVoice.lang;
        // "Vrin-daa" forces the long 'aa' sound without the 'h' artifact
        textToSpeak = "Vrin-daa";
      } else {
        // Fallback for US/UK voices
        utterance.lang = 'hi-IN';
        textToSpeak = "Vrin-daa";
      }

      utterance.text = textToSpeak;
      utterance.rate = 1.0;
      utterance.pitch = 1.0;

      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);

      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <Section id="about">
      <Container>
        <div className="flex flex-col gap-6 relative z-10">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <h1 className="text-5xl md:text-6xl font-display font-medium text-text-primary tracking-tight">
                Vrindaa
              </h1>
              <button
                onClick={handlePlayAudio}
                className={`text-text-muted hover:text-highlight transition-colors focus:outline-none mt-2 md:mt-3 ${isSpeaking ? 'text-highlight animate-pulse' : ''}`}
                aria-label="Play name pronunciation"
                title="Hear my name"
              >
                <VolumeIcon className="w-6 h-6" />
              </button>
            </div>
            <p className="text-base text-text-secondary flex items-center gap-1.5 min-h-[1.5rem]">
              <span>18,</span>
              <span
                className={`transform inline-block will-change-transform ${animationState === 'visible'
                  ? 'opacity-100 translate-y-0 blur-0 scale-100 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]'
                  : animationState === 'exiting'
                    ? 'opacity-0 translate-y-2 blur-[2px] transition-all duration-300 ease-in'
                    : 'opacity-0 -translate-y-2 blur-[2px] transition-none'
                  }`}
              >
                {roles[currentRoleIndex]}
              </span>
            </p>
          </div>

          <div className="flex flex-col gap-3 max-w-2xl text-text-secondary leading-relaxed">
            <p>
              I like to build interactive websites using <span className="text-text-primary underline decoration-wavy underline-offset-4 decoration-1 decoration-highlight cursor-default">React.js</span>, <span className="text-text-primary underline decoration-wavy underline-offset-4 decoration-1 decoration-highlight cursor-default">Tailwind CSS</span> and <span className="text-text-primary underline decoration-wavy underline-offset-4 decoration-1 decoration-highlight cursor-default">Next JS</span> with key interest for <span className="text-text-primary underline decoration-wavy underline-offset-4 decoration-1 decoration-highlight cursor-default">UI Design</span>
            </p>
            <p>
              My aim is to not make websites only functional, but also appealing to the eye for a better <span className="text-text-primary underline decoration-wavy underline-offset-4 decoration-1 decoration-highlight cursor-default">User Experience</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-2 gap-6 sm:gap-0">
            <div className="flex items-center gap-6">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-text-secondary hover:text-highlight transition-colors relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-highlight transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm font-medium text-text-secondary hover:text-highlight transition-colors relative group"
            >
              <span>Resume</span>
              <ArrowUpRightIcon className="w-4 h-4" />
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-highlight transition-all duration-300 group-hover:w-full" />
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;