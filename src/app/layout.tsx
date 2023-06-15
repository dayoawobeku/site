import './resources/app.css'
import { Inter } from 'next/font/google'
import Header from './components/header'
import Footer from './components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'David M. Coleman',
  description: 'I am an aspiring writer & blogger',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className='scroll-smooth dark overflow-x-hidden dark:bg-black bg-white' lang="en">
      <body className='bg-white/75 text-black antialiased dark:bg-background-color/75 dark:text-white overflow-x-hidden' data-menu="hide">
        <div className='mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0'>
          <div className='flex h-screen flex-col justify-between'>
            <Header />
            <main className='relative mb-auto'>{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}
