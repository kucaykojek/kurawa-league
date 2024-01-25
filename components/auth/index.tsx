'use client';

import Image from 'next/image';

import { Drawer, DrawerContent } from '@/components/ui/drawer';
import { fontQuando } from '@/libs/fonts';
import { cn } from '@/libs/utils';
import useAuthStore from '@/stores/auth.store';

import LoginForm from './login';
import RegisterForm from './register';

const Auth = () => {
  const { mode, open, setOpen } = useAuthStore();

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm py-8">
          <div className="text-center space-y-2 mb-8">
            <Image
              src="/logo.png"
              width={44}
              height={44}
              alt=""
              className="mx-auto"
            />
            <div className={cn('text-xl font-quando', fontQuando.variable)}>
              {mode === 'login' ? 'Form Masuk' : 'Form Daftar'}
            </div>
          </div>
          {mode === 'login' && <LoginForm />}
          {mode === 'register' && <RegisterForm />}
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default Auth;
