import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inconsolata } from "next/font/google";

const inconsolata = Inconsolata({
  subsets: ["latin"],
  variable: "--font-inconsolata",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${inconsolata.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
