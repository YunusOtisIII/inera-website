'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AOSInit() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: 'ease-out-cubic',
      once: false, // rejouer à chaque entrée
      mirror: true, // animation inverse en sortie pour effet va-et-vient
      offset: 120
    });
    const handler = () => AOS.refresh();
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  return null;
}