import Image from 'next/image';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center">
      <div className="space-y-12 text-center bg-white p-8 rounded-xl">
        <Image
          src="/logo.png"
          alt=""
          width={44}
          height={44}
          className="mx-auto"
          priority
        />
        <Image
          src="/illus-not-found.svg"
          alt=""
          width={700}
          height={464}
          className="h-60 w-auto"
          priority
        />
        <div className="space-y-6">
          <p className="font-medium">
            Oops...Halaman yang dituju tidak ditemukan.
          </p>
          <Link href="/" className="btn btn-primary inline-flex w-auto px-8">
            Kembali
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
