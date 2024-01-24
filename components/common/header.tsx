import { PlusIcon } from 'lucide-react';
import Image from 'next/image';

import { fontQuando } from '@/libs/fonts';
import { cn } from '@/libs/utils';

import style from './header.module.css';

const Header = () => {
  return (
    <header className={style.header}>
      <Image src="/logo.png" width={32} height={32} alt="..." />
      <h1 className={cn('font-quando', fontQuando.variable)}>
        Kurawa <span className="text-branding">League</span>
      </h1>

      <button type="button" className={style.headerAction}>
        <PlusIcon className="w-4 h-4 mr-2" />
        Liga Baru
      </button>
    </header>
  );
};

export default Header;
