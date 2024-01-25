'use client';

import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { ChangeEvent, useState } from 'react';

import { useToast } from '@/components/ui/use-toast';
import { register } from '@/services/auth';
import useAuthStore from '@/stores/auth.store';

import style from './auth.module.css';

const RegisterForm = () => {
  const { toast } = useToast();
  const { setMode } = useAuthStore();

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formValues, setFormValues] = useState({
    name: '',
    username: '',
    password: ''
  });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      setFormValues({ name: '', username: '', password: '' });

      await register(formValues);

      setMode('login');
      toast({
        description: 'Berhasil mendaftar. Silakan isi form untuk masuk.'
      });
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
            id="name"
            name="name"
            value={formValues.name}
            placeholder=""
            autoComplete="name"
            className="peer"
            onChange={handleChange}
          />
          <label
            htmlFor="name"
            className="peer-focus:px-2 peer-focus:text-neutral-800 peer-focus:font-medium peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:left-4 peer-focus:scale-75 peer-focus:-translate-y-5"
          >
            Nama
          </label>
        </div>

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
        {loading ? 'Proses...' : 'Daftar'}
      </button>

      <div className="text-center mt-4">
        Sudah punya akun?{' '}
        <a
          className="text-branding font-semibold cursor-pointer"
          onClick={() => setMode('login')}
        >
          Masuk
        </a>
      </div>
    </form>
  );
};

export default RegisterForm;
