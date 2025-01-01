import type { FC, PropsWithChildren } from 'react'

export const ErrorMessage: FC<PropsWithChildren> = ({ children }) => (
  <div className="text-sm text-red-500">{children}</div>
)
