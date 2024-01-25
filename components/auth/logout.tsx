'use client';

import { Loader2Icon } from 'lucide-react';
import { signOut } from 'next-auth/react';
import Image from 'next/image';
import { useEffect } from 'react';

const Logout = () => {
  useEffect(() => {
    onProcess();
  }, []);

  const onProcess = async () => {
    try {
      await signOut();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center">
      <div className="space-y-4 text-center bg-white p-8 rounded-xl">
        <Image
          src="/illus-open-door.svg"
          alt=""
          width="700"
          height="418"
          className="h-60 w-auto"
          priority
        />
        <div className="flex items-center justify-center gap-2">
          <Loader2Icon className="h-6 w-6 animate-spin text-primary" />
          <p className="text-primary text-xl font-medium tracking-widest">
            Keluar...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Logout;
