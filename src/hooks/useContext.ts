import type { Context } from 'react'
import { useContext as useContextBase } from 'react'

export const useContext = <T>(context: Context<T | undefined>): T => {
  const ctx = useContextBase(context)

  if (!ctx) {
    throw new Error('useContext must be used inside a Provider with a value')
  }

  return ctx
}
