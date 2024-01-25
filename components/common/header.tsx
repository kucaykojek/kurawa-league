'use client';

import { LogIn } from 'lucide-react';
import Image from 'next/image';

import { fontQuando } from '@/libs/fonts';
import { cn } from '@/libs/utils';
import useAuthStore from '@/stores/auth.store';

import style from './header.module.css';

const Header = () => {
  const { setOpen } = useAuthStore();

  return (
    <header className={style.header}>
      <Image src="/logo.png" width={32} height={32} alt="..." />
      <h1 className={cn('font-quando', fontQuando.variable)}>
        Kurawa <span className="text-branding">League</span>
      </h1>

      <div className={style.actionWrapper}>
        <button
          type="button"
          className="btn btn-branding"
          onClick={() => setOpen(true)}
        >
          <LogIn className="w-4 h-4 mr-2" />
          Masuk/Daftar
        </button>
      </div>
    </header>
  );
};

export default Header;
