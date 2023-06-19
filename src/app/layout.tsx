import React from 'react';
import './resources/app.css';
import { Inter } from 'next/font/google';
import Background from './components/background';
import Header from './components/header';
import Footer from './components/footer';
import ScrollTop from './components/scrollTop';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    template: '%s | David M. Coleman',
    default: 'David M. Coleman'
  },
  description: 'I am an aspiring writer & blogger',
  metadataBase: 'https://davidmc.io'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className="scroll-smooth dark overflow-x-hidden dark:bg-black bg-white" lang="en">
      <body className="bg-white/75 text-black antialiased dark:bg-background-color/75 dark:text-white overflow-x-hidden" data-menu="hide">
        <Background />
        <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
          <div className="flex flex-col justify-between">
            <Header /> {/* Render the Header component here */}
            <main className="relative mb-auto">{children}</main>
            <Footer />
          </div>
        </div>
        <ScrollTop />
      </body>
    </html>
  );
}