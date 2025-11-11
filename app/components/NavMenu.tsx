'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

interface NavMenuItem {
  label: string;
  href: string;
  submenu?: { label: string; href: string }[];
}

interface NavMenuProps {
  item: NavMenuItem;
}

export default function NavMenu({ item }: NavMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link
        href={item.href}
        className="flex items-center px-4 py-2 text-white hover:bg-white/10 rounded-lg transition-colors"
      >
        {item.label}
        {item.submenu && (
          <KeyboardArrowDownIcon 
            className={`ml-1 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          />
        )}
      </Link>

      {item.submenu && (
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute left-0 mt-1 w-64 py-2 bg-white rounded-lg shadow-xl"
            >
              {item.submenu.map((subitem) => (
                <Link
                  key={subitem.href}
                  href={subitem.href}
                  className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-800"
                >
                  {subitem.label}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
}