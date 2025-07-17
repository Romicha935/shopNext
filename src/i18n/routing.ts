

import { i18n } from '@/i18n-config'
import { createNavigation } from 'next-intl/navigation'
import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: i18n.locales.map((locale) => locale.code),
  defaultLocale: i18n.defaultLocale,
  localePrefix: 'as-needed',
  pathnames: {
    
  },
})

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing)
