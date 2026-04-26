'use client'

import Link from 'next/link';
import { Insta, MenuClose, MenuOpen, Phone, Telegram, YouTube } from "@/components/UI/icons";
import SectionContainer from "../sectionContainer";
import { TEXTS } from '@/data/data';
import IconText from '@/components/UI/iconText';
import { useState, useEffect } from 'react';

export default function HeaderUpperLayer() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Закрытие меню при изменении размера экрана (если становится десктопным)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Переключение меню
  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  // Закрытие меню при клике вне меню (для мобильной версии)
  const handleClickOutside = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('.mobile-menu') === null && 
        (e.target as HTMLElement).closest('.menu-button') === null) {
      setMenuOpen(false);
    }
  };

  return (
      <div className="flex w-full justify-between items-center py-fluid-medium relative">
        <Link href="/" className="text-title-xlarge-semiBold text-[var(--primary-accent)]">
          Дальмосбур
        </Link>
        <button 
          className="cursor-pointer flex md:hidden menu-button" 
          onClick={toggleMenu}
          aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
        >
          {menuOpen ? <MenuClose /> : <MenuOpen />}
        </button>
        <nav className="hidden md:flex items-center justify-center py-fluid-small">
          <ul className="flex gap-fluid-xlarge">
            {TEXTS.map((navItem) => (
              <li
                key={navItem.title}
                className="transition hover:text-[var(--primary-accent-hover)]"
              >
                <Link href={navItem.link}>{navItem.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden md:flex flex-col items-end">
          <div className='flex gap-fluid-small'>
            <a href="#" className="transition hover:text-[var(--primary-accent-hover)]" aria-label="YouTube">
              <YouTube size={36} />
            </a>
            <a href="#" className="transition hover:text-[var(--primary-accent-hover)]" aria-label="Instagram">
              <Insta size={36} />
            </a>
            <a href="#" className="transition hover:text-[var(--primary-accent-hover)]" aria-label="Telegram">
              <Telegram size={36} />
            </a>
          </div>
          <IconText info="+7 982 154 25 45">
            <Phone />
          </IconText>
        </div>
        {menuOpen && (
          <div 
            className="fixed inset-0 z-50 bg-[var(--primary-white)] min-h-screen backdrop-blur-sm md:hidden mobile-menu"
            onClick={handleClickOutside}
          >
            <div className="flex flex-col h-full overflow-y-auto overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] py-fluid-medium px-fluid-medium">
              <div className="flex justify-between items-center pt-fluid-medium pb-fluid-medium border-b border-[var(--primary-accent-hover)]">
                <Link 
                  href="/" 
                  className="text-title-xlarge-semiBold text-[var(--primary-accent)]"
                  onClick={() => setMenuOpen(false)}
                >
                  Дальмосбур
                </Link>
                <button 
                  onClick={toggleMenu} 
                  className="cursor-pointer menu-button"
                  aria-label="Закрыть меню"
                >
                  <MenuClose size={32} />
                </button>
              </div>
              <nav className="flex flex-col flex-1 py-fluid-xlarge">
                <ul className="flex flex-col gap-fluid-xlarge">
                  {TEXTS.map((navItem) => (
                    <li key={navItem.title}>
                      <Link 
                        href={navItem.link} 
                        className="text-title-large transition hover:text-[var(--primary-accent-hover)]"
                        onClick={() => setMenuOpen(false)}
                      >
                        {navItem.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="flex justify-between border-t border-[var(--primary-accent-hover)] py-fluid-xlarge">
                <div className="flex gap-fluid-small">
                  <a href="#" className="transition hover:text-[var(--primary-accent-hover)]" aria-label="YouTube">
                    <YouTube size={32} />
                  </a>
                  <a href="#" className="transition hover:text-[var(--primary-accent-hover)]" aria-label="Instagram">
                    <Insta size={32} />
                  </a>
                  <a href="#" className="transition hover:text-[var(--primary-accent-hover)]" aria-label="Telegram">
                    <Telegram size={32} />
                  </a>
                </div>
                <IconText info="+7 982 154 25 45">
                  <Phone size={24} />
                </IconText>
              </div>
            </div>
          </div>
        )}
      </div>
  );
}