import type { FC, PropsWithChildren } from 'react'

import { ReCaptchaProvider } from 'next-recaptcha-v3'

import { DarkModeProvider } from './dark-mode'

export const AppProviders: FC<PropsWithChildren> = ({ children }) => (
  <DarkModeProvider>
    <ReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}>{children}</ReCaptchaProvider>
  </DarkModeProvider>
)
