import Image from 'next/image';

const Loading = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center bg-white">
      <Image src="/logo.png" width={100} height={100} alt="..." />
    </div>
  );
};

export default Loading;
