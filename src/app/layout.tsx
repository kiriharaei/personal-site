import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Eiji Akagi',
    default:
      'Eiji Akagi - ITエンジニア',
  },
  description:
    '東京都内で働く、ITエンジニア。 HRTech/SaaS型の採用・業務管理システムの開発に2019年1月より従事。',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.VERCEL_URL}/feed.xml`,
    },
  },
}
/* 'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`, */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
