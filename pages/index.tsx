import { Inter } from 'next/font/google';
import Header from '@/components/github/Header';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Header />
    </>
  );
}
