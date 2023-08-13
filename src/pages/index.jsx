import Image from 'next/image'
import { Inter } from 'next/font/google'
import Menu from '@/components/menu/menu';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="w-full h-screen bg-black">
      <Menu page="home" />
    </div>
  );
}
