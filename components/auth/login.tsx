'use client';

import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { signIn } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { ChangeEvent, useState } from 'react';

import { useToast } from '@/components/ui/use-toast';
import useAuthStore from '@/stores/auth.store';

import style from './auth.module.css';

const LoginForm = () => {
  const router = useRouter();
  const { toast } = useToast();
  const { setMode } = useAuthStore();

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formValues, setFormValues] = useState({
    username: '',
    password: ''
  });

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/dashboard';

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      setFormValues({ username: '', password: '' });

      const res = await signIn('credentials', {
        redirect: false,
        username: formValues.username,
        password: formValues.password,
        callbackUrl
      });

      setLoading(false);

      if (!res?.error) {
        router.push(callbackUrl);
      } else {
        toast({
          variant: 'destructive',
          description: 'Invalid username or password'
        });
      }
    } catch (err: unknown) {
      toast({
        variant: 'destructive',
        description: err instanceof Error ? err?.message : 'Unknown Error'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="space-y-4 mb-4">
        <div className={style.inputWrapper}>
          <input
            type="text"
            id="username"
            name="username"
            value={formValues.username}
            placeholder=""
            autoComplete="username"
            className="peer"
            onChange={handleChange}
          />
          <label
            htmlFor="username"
            className="peer-focus:px-2 peer-focus:text-neutral-800 peer-focus:font-medium peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:left-4 peer-focus:scale-75 peer-focus:-translate-y-5"
          >
            Username
          </label>
        </div>

        <div className={style.inputWrapper}>
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            name="password"
            value={formValues.password}
            placeholder=""
            autoComplete="current-password"
            className="peer !pr-12"
            onChange={handleChange}
          />
          <label
            htmlFor="password"
            className="peer-focus:px-2 peer-focus:text-neutral-800 peer-focus:font-medium peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:left-4 peer-focus:scale-75 peer-focus:-translate-y-5"
          >
            Kata Sandi
          </label>
          <a
            className={style.inputToggle}
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOffIcon /> : <EyeIcon />}
          </a>
        </div>
      </div>

      <button type="submit" className={style.actionButton} disabled={loading}>
        {loading ? 'Proses...' : 'Masuk'}
      </button>

      <div className="text-center mt-4">
        Belum punya akun?{' '}
        <a
          className="text-branding font-semibold cursor-pointer"
          onClick={() => setMode('register')}
        >
          Daftar
        </a>
      </div>
    </form>
  );
};

export default LoginForm;
