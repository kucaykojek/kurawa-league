import Image from 'next/image';

const Loading = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center bg-white/80 backdrop-blur-sm">
      <div className="bg-white p-8 rounded-full">
        <Image src="/logo.png" width={100} height={100} alt="..." />
      </div>
    </div>
  );
};

export default Loading;
