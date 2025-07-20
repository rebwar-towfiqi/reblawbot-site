import Link from 'next/link'
import { useTranslations } from 'next-intl'

export default function Header() {
  const t = useTranslations('common')

  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex space-x-6">
        <Link href="/">{t('navHome')}</Link>
        <Link href="/about">{t('navAbout')}</Link>
        <Link href="/token">{t('navToken')}</Link>
        <Link href="/campaigns">{t('navCampaigns')}</Link>
        <Link href="/guide">{t('navGuide')}</Link>
        <Link href="/faq">{t('navFAQ')}</Link>
        <Link href="/contact">{t('navContact')}</Link>
      </nav>
    </header>
  )
}

