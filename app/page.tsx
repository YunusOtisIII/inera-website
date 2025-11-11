 'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Sidebar from './components/Sidebar';
import { useEffect, useState } from 'react';

export default function Home() {
  const [featuredSrc, setFeaturedSrc] = useState<string>('/images/gallery/programme-phare.webp.jpg');
  
  // Textes séparés des images
  const sidebarContent = [
    { 
      title: 'Gestion Durable des Sols', 
      description: 'Nos équipes de chercheurs étudient en profondeur la fertilité des sols congolais et proposent des techniques innovantes de conservation. Ces méthodes permettent de lutter efficacement contre l\'érosion et de maintenir durablement la productivité des terres agricoles à travers tout le territoire.'
    },
    { 
      title: 'Développement de variétés de manioc à haut rendement', 
      description: 'INERA développe des variétés de manioc tolérantes à la mosaïque africaine, à la striure brune et aux stress hydriques pour renforcer durablement la sécurité alimentaire nationale.'
    },
    { 
      title: 'Cultures Vivrières Stratégiques', 
      description: 'Programme d\'amélioration génétique du manioc, du maïs, du riz, du sorgho et autres cultures vivrières essentielles. Ces recherches répondent aux besoins alimentaires croissants de la population congolaise tout en s\'adaptant aux changements climatiques et aux défis phytosanitaires.'
    },
    { 
      title: 'Élevage et Aquaculture', 
      description: 'Recherches approfondies sur l\'amélioration des races animales locales, la santé animale, la nutrition et le développement de l\'aquaculture moderne. Ces initiatives visent à diversifier les sources de protéines, améliorer la nutrition familiale et augmenter les revenus des agriculteurs congolais.'
    },
    { 
      title: 'Agroforesterie Intégrée', 
      description: 'Intégration stratégique des arbres dans les systèmes agricoles pour améliorer naturellement la fertilité des sols, séquestrer le carbone atmosphérique, produire du bois d\'œuvre et des fruits nutritifs, tout en préservant la biodiversité exceptionnelle de nos écosystèmes forestiers.'
    },
    { 
      title: 'Transfert de Technologies', 
      description: 'Vulgarisation et dissémination des innovations agronomiques auprès des agriculteurs congolais à travers des programmes de formations pratiques, des démonstrations sur terrain et un accompagnement technique personnalisé dans nos sept stations de recherche réparties stratégiquement à travers le pays.'
    },
  ];

  // Images avec leurs noms de fichiers
  const sidebarImages = [
    '/images/gallery/back.jpg',
    '/images/gallery/national-cancer-institute-aelk4Tn0vlI-unsplash.jpg',
    '/images/gallery/mordo-bilman-otvqw0G6mAA-unsplash.jpg',
    '/images/gallery/vitalo.jpg',
    '/images/gallery/opus.jpg',
    '/images/gallery/drone-eft-nMDwrS1NsIE-unsplash.jpg',
  ];

  const [sidebarData, setSidebarData] = useState<{ url: string; title: string; description: string }[]>(
    sidebarImages.map((url, index) => ({
      url,
      title: sidebarContent[index]?.title || '',
      description: sidebarContent[index]?.description || ''
    }))
  );

  useEffect(() => {
    let cancelled = false;
    async function loadImages() {
      try {
        const res = await fetch('/api/gallery', { cache: 'no-store' });
        if (!res.ok) return;
        const data = await res.json();
        // Ne pas écraser les données locales avec l'API
        // if (!cancelled && Array.isArray(data?.images) && data.images.length > 0) {
        //   setSidebarData(data.images);
        // }
      } catch {
        // silencieux: on garde les fallbacks
      }
    }
    loadImages();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="min-h-screen bg-transparent">
      {/* Hero Section avec animation */}
  <section className="relative h-[80vh] overflow-hidden bg-transparent">
        <div className="absolute inset-0">
          <Image
            src="/images/gallery/back2.jpg"
            alt=""
            fill
            priority
            quality={85}
            sizes="100vw"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            className="object-cover object-center brightness-105 contrast-110 saturate-110"
            onError={(e) => {
              console.error('Image failed to load:', e);
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center text-white"
        >
          <div className="flex flex-col-reverse md:flex-row items-center gap-8">
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">INERA</h1>
              <p className="text-lg md:text-2xl mb-6 max-w-xl">
                Institut National pour l&apos;Étude et la Recherche Agronomiques
              </p>
              <p className="text-base md:text-lg mb-6 max-w-lg opacity-90">
                Pour une agriculture durable et innovante en République Démocratique du Congo
              </p>
              <div className="flex gap-4">
                <Link
                  href="/stations"
                  className="bg-white text-green-800 px-6 py-2 rounded-full font-semibold hover:bg-green-50 transition-colors"
                >
                  Nos Stations
                </Link>
                <Link
                  href="/recherche"
                  className="border-2 border-white text-white px-6 py-2 rounded-full font-semibold hover:bg-white/10 transition-colors"
                >
                  Nos Recherches
                </Link>
              </div>
            </div>

            <div className="flex-1 flex justify-center md:justify-end">
              <div className="w-[320px] h-[220px] md:w-[520px] md:h-[340px] rounded-xl overflow-hidden shadow-xl bg-white/10 flex items-center justify-center p-4">
                <Image
                  src="/images/gallery/Logo-INERA-RDC-Transparent-002-V02.webp"
                  alt="Logo INERA République Démocratique du Congo"
                  width={500}
                  height={500}
                  className="object-contain drop-shadow-lg"
                  priority
                />
              </div>
            </div>
          </div>

          {/* News ticker */}
          <div className="mt-8 w-full overflow-hidden">
            <div className="bg-white/10 rounded-full py-2">
              <div className="whitespace-nowrap animate-marquee px-4 text-sm md:text-base">
                Dernières nouvelles: Mission terrain à Lubumbashi — Nouveau projet de culture résiliente — Publication: Rapport sur la fertilité des sols — Formation pour agronomes locaux
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Section Actualités */}
      <section id="actualites" className="py-20 bg-transparent">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center mb-12"
          >
            Actualités et Événements
          </motion.h2>
          
          {/* Grille des actualités */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Carte mise en avant avec image + animation */}
            <div
              className="relative bg-white rounded-2xl shadow-xl p-8 md:col-span-2 flex flex-col md:flex-row gap-10 md:gap-16 xl:gap-24 overflow-hidden min-h-[60vh] md:h-[65vh] border border-green-100"
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-offset="160"
            >
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-green-100/60 via-transparent to-green-200/40" />
              <div className="flex-1 flex flex-col justify-center relative z-10 pr-0 md:pr-6 xl:pr-10">
                <span className="inline-block text-xs md:text-sm uppercase tracking-wider font-semibold text-green-800 mb-4" data-aos="fade-right" data-aos-delay="100"><h1>Notre Mission</h1></span>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-green-700 via-emerald-700 to-green-600 bg-clip-text text-transparent drop-shadow-sm" data-aos="fade-right" data-aos-delay="150">
                  Programme Phare d&apos;Innovations Agronomiques
                </h3>
                <p className="text-lg md:text-2xl text-gray-800 leading-relaxed mb-8 max-w-2xl" data-aos="fade-up" data-aos-delay="250">
                  Un focus intégré sur la création de variétés résilientes, l&apos;amélioration de la fertilité des sols et la diffusion rapide des technologies vers les producteurs. Ce programme associe expérimentation en station, essais multi‑locaux et co‑innovation avec les communautés rurales pour accélérer l&apos;impact terrain.
                </p>
                <div className="flex flex-wrap items-center gap-3 mb-8" data-aos="zoom-in" data-aos-delay="350">
                  {['Résilience','Génétique','Sol','Agro‑écologie','Vulgarisation'].map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-green-700/10 text-green-800 text-xs md:text-sm font-medium backdrop-blur-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4" data-aos="fade-up" data-aos-delay="420">
                  <Link href="/recherche" className="px-7 py-3.5 rounded-full bg-green-700 text-white font-semibold text-base md:text-lg shadow-lg hover:bg-green-800 transition">
                    Découvrir les axes
                  </Link>
                  <Link href="/stations" className="px-7 py-3.5 rounded-full border-2 border-green-700 text-green-800 font-semibold text-base md:text-lg hover:bg-green-50 transition">
                    Voir les stations
                  </Link>
                </div>
              </div>
              <div className="flex-1 flex items-center justify-center relative z-10 pl-0 md:pl-6 xl:pl-10" data-aos="fade-left" data-aos-delay="200">
                <div className="relative w-full h-[45vh] md:h-full rounded-2xl overflow-hidden shadow-xl group">
                  <Image
                    src={featuredSrc}
                    alt="Illustration du programme phare"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.07]"
                    loading="lazy"
                    onError={() => setFeaturedSrc('/images/gallery/Yangambi_INERA.jpg')}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                    <span className="text-white text-base md:text-lg font-semibold drop-shadow">Impact terrain accéléré</span>
                    <span className="text-white/80 text-sm md:text-base">INERA • 2025</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Card Nouveau projet */}
            <div 
              className="group relative bg-gradient-to-br from-white via-green-50/30 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-green-100/50 overflow-hidden"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-400/10 to-emerald-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mb-5 shadow-lg shadow-green-500/30 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-xl mb-3 bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
                  Nouveau projet
                </h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  Lancement d&apos;un projet participatif avec agriculteurs locaux pour co-développer des solutions agronomiques adaptées.
                </p>
                <div className="mt-5 flex items-center text-green-600 font-semibold text-sm group-hover:translate-x-2 transition-transform duration-300">
                  <span>En savoir plus</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Card Formation */}
            <div 
              className="group relative bg-gradient-to-br from-white via-emerald-50/30 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-emerald-100/50 overflow-hidden"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-400/10 to-green-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center mb-5 shadow-lg shadow-emerald-500/30 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="font-bold text-xl mb-3 bg-gradient-to-r from-emerald-700 to-green-600 bg-clip-text text-transparent">
                  Formation
                </h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  Session de formation pratique sur la gestion durable des sols et les techniques de conservation avancées.
                </p>
                <div className="mt-5 flex items-center text-emerald-600 font-semibold text-sm group-hover:translate-x-2 transition-transform duration-300">
                  <span>Découvrir le programme</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          {/* Galerie d'images centrée */}
          <div className="flex justify-center">
            <Sidebar images={sidebarData} />
          </div>
        </div>
      </section>

      {/* Section Chiffres Clés */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center mb-16"
          >
            L&apos;INERA en chiffres
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-lg bg-white shadow-lg"
            >
              <div className="text-4xl font-bold text-green-700 mb-2">7</div>
              <div className="text-gray-600">Stations de recherche</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-lg bg-white shadow-lg"
            >
              <div className="text-4xl font-bold text-green-700 mb-2">150+</div>
              <div className="text-gray-600">Chercheurs</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-lg bg-white shadow-lg"
            >
              <div className="text-4xl font-bold text-green-700 mb-2">45+</div>
              <div className="text-gray-600">Projets en cours</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-lg bg-white shadow-lg"
            >
              <div className="text-4xl font-bold text-green-700 mb-2">200+</div>
              <div className="text-gray-600">Publications</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer élégant */}
      <footer className="relative bg-gradient-to-br from-green-900 via-emerald-800 to-green-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        
        <div className="relative container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
              <h4 className="text-2xl font-bold bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">INERA</h4>
              <p className="text-green-100 leading-relaxed text-sm">
                Institut National pour l&apos;Étude et la Recherche Agronomiques - Pionnier de l&apos;agriculture durable en RDC.
              </p>
              <div className="flex gap-3 pt-2">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h5 className="text-lg font-semibold mb-4">Liens rapides</h5>
              <ul className="space-y-2">
                <li><Link href="/qui-sommes-nous" className="text-green-100 hover:text-white transition-colors duration-200 text-sm flex items-center gap-2"><span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>À propos</Link></li>
                <li><Link href="/recherche-innovation" className="text-green-100 hover:text-white transition-colors duration-200 text-sm flex items-center gap-2"><span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>Recherche</Link></li>
                <li><Link href="/services-utilisateurs" className="text-green-100 hover:text-white transition-colors duration-200 text-sm flex items-center gap-2"><span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>Services</Link></li>
                <li><Link href="/medias-contacts" className="text-green-100 hover:text-white transition-colors duration-200 text-sm flex items-center gap-2"><span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>Contact</Link></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h5 className="text-lg font-semibold mb-4">Nos stations</h5>
              <ul className="space-y-2">
                <li className="text-green-100 text-sm">Yangambi</li>
                <li className="text-green-100 text-sm">Mulungu</li>
                <li className="text-green-100 text-sm">Kipopo</li>
                <li className="text-green-100 text-sm">Mvuazi</li>
                <li className="text-green-100 text-sm">Luki</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h5 className="text-lg font-semibold mb-4">Contact</h5>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-green-100">Kinshasa, République Démocratique du Congo</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-green-100">contact@inera.cd</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-green-100">+243 XX XXX XXXX</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-green-200">
              <p>&copy; {new Date().getFullYear()} INERA. Tous droits réservés.</p>
              <div className="flex gap-6">
                <Link href="/mentions-legales" className="hover:text-white transition-colors duration-200">Mentions légales</Link>
                <Link href="/politique-confidentialite" className="hover:text-white transition-colors duration-200">Confidentialité</Link>
                <Link href="/cookies" className="hover:text-white transition-colors duration-200">Cookies</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
