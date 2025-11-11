'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ScienceIcon from '@mui/icons-material/Science';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

const menuItems = [
  {
    label: 'Qui sommes-nous',
    href: '/qui-sommes-nous',
    icon: InfoIcon,
    submenu: [
      { label: 'Mission et vision', href: '/qui-sommes-nous/mission-vision' },
      { label: 'Organisation gouvernance', href: '/qui-sommes-nous/organisation' },
      { label: 'Rapports annuels', href: '/qui-sommes-nous/rapports' },
    ],
  },
  {
    label: 'Recherche & Innovation',
    href: '/recherche-innovation',
    icon: ScienceIcon,
    submenu: [
      { label: 'Domaines de Recherche', href: '/recherche-innovation/domaines' },
      { label: 'Centres et Stations', href: '/recherche-innovation/centres' },
      { label: 'Publications scientifiques', href: '/recherche-innovation/publications' },
      { label: 'Partenariats', href: '/recherche-innovation/partenariats' },
    ],
  },
  {
    label: 'Services',
    href: '/services-utilisateurs',
    icon: AgricultureIcon,
    submenu: [
      { label: 'Catalogue de semences', href: '/services-utilisateurs/catalogue' },
      { label: 'Conseils agricoles', href: '/services-utilisateurs/conseils' },
      { label: 'Météo agricole', href: '/services-utilisateurs/meteo' },
      { label: 'Laboratoires', href: '/services-utilisateurs/laboratoires' },
    ],
  },
  {
    label: 'Médias & Contacts',
    href: '/medias-contacts',
    icon: NewspaperIcon,
    submenu: [
      { label: 'Actualités', href: '/medias-contacts/actualites' },
      { label: 'Espace presse', href: '/medias-contacts/presse' },
      { label: 'Opportunités', href: '/medias-contacts/opportunites' },
    ],
  },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/20 backdrop-blur-md shadow-2xl' : 'bg-transparent backdrop-blur-none'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-28">
          {/* Logo et Titre */}
          <Link href="/" className="flex items-center space-x-3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/80 backdrop-blur-sm p-2 rounded-xl shadow-lg"
            >
              <div className="flex items-center justify-center w-16 h-16">
                <Image
                  src="/images/gallery/Logo-INERA-RDC-Transparent-002-V02.webp"
                  alt="INERA RDC - Logo officiel"
                  width={128}
                  height={128}
                  className="w-16 h-16 object-contain select-none"
                  priority
                  quality={95}
                />
              </div>
            </motion.div>
            <div className="flex flex-col">
              <span className="font-bold text-2xl text-white drop-shadow-lg">
                INERA
              </span>
              <span className="hidden md:block text-sm text-white drop-shadow-md">
                Institut National pour l&apos;Étude et la Recherche Agronomiques
              </span>
            </div>
          </Link>

          {/* Navigation Desktop */}
          <div className="hidden md:flex items-center space-x-2">
            <div className="relative group">
                <Link
                  href="/"
                  className="flex items-center px-6 py-3 rounded-xl text-base font-medium text-white drop-shadow-md hover:bg-white/20 transition-colors duration-200"
                >
                  <HomeIcon className="w-5 h-5 mr-2" />
                  Accueil
                </Link>
            </div>

            {menuItems.map((item) => (
              <div key={item.href} className="relative group">
                <Link
                  href={item.href}
                  className="flex items-center px-6 py-3 rounded-xl text-base font-medium text-white drop-shadow-md hover:bg-white/20 transition-colors duration-200"
                >
                  <item.icon className="w-5 h-5 mr-2 opacity-95" />
                  {item.label}
                  {item.submenu && (
                    <KeyboardArrowDownIcon className="ml-1 group-hover:rotate-180 transition-transform" />
                  )}
                </Link>

                {item.submenu && (
                  <div className="absolute left-0 hidden group-hover:block mt-1 w-64 bg-white rounded-xl shadow-lg py-2">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.href}
                        href={subitem.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-800"
                      >
                        {subitem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div>
              <Link
                href="/admin"
                className="flex items-center px-6 py-3 rounded-xl text-base font-medium bg-white/80 backdrop-blur-sm text-green-800 hover:bg-white transition-colors duration-200 shadow-lg"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
                </svg>
                Admin
              </Link>
            </div>
          </div>

          {/* Bouton Menu Mobile */}
          <button
            className="md:hidden p-2 rounded-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6 text-white drop-shadow-md transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="md:hidden overflow-hidden bg-white/95 backdrop-blur-md rounded-2xl shadow-xl mb-4">
              <div className="p-4 space-y-2">
                <Link
                  href="/"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center px-4 py-3 rounded-xl text-green-800 hover:bg-green-50 transition-all duration-200"
                >
                  <HomeIcon className="w-5 h-5 mr-3" />
                  Accueil
                </Link>

                {menuItems.map((item) => (
                  <div key={item.href} className="space-y-1">
                    <Link
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center px-4 py-3 rounded-xl text-green-800 hover:bg-green-50 transition-all duration-200"
                    >
                      <item.icon className="w-5 h-5 mr-3" />
                      {item.label}
                    </Link>

                    {item.submenu && (
                      <div className="ml-4 space-y-1">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.href}
                            href={subitem.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="flex items-center px-4 py-2 text-green-700 hover:bg-green-50 rounded-lg text-sm"
                          >
                            {subitem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                <Link
                  href="/admin"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center px-4 py-3 rounded-xl bg-green-800 text-white hover:bg-green-700 transition-all duration-200"
                >
                  <AdminPanelSettingsIcon className="w-5 h-5 mr-3" />
                  Admin
                </Link>
              </div>
            </div>
        )}
      </div>
    </nav>
  );
}