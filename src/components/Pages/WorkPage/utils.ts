import type { Company } from '@/data/work'

export const getLogoImageWith = (
  companyName: Company
): {
  width: number
  height?: number
} => {
  switch (companyName) {
    case 'CDN77':
      return { width: 110, height: 30 }
    case 'Digitoo':
      return { width: 110 }
    case 'Persoo':
      return { width: 128, height: 51 }
    case 'Retino':
      return { width: 110, height: 19 }
    case 'Supernova':
      return { width: 111 }
    case 'StartMonday':
      return { width: 128 }
    default:
      return { width: 119 }
  }
}

// dark grey: #334155 (tw color-slate-700)
// light grey: #94a3b8 (tw color-slate-400)
// lighter grey: #cbd5e1 (tw color-slate-300)
// lightest grey: #e2e8f0 (tw color-slate-200)
export const getLogoColorClasses = (companyName: Company) => {
  switch (companyName) {
    case 'CDN77':
      return `brightness-100 grayscale saturate-50 [&>g>path:nth-child(1)]:fill-[#334155] [&>g>path:nth-child(2)]:fill-[#cbd5e1] [&>g>path:nth-child(3)]:fill-[#334155] dark:[&>g>path:nth-child(1)]:fill-[#64748b] dark:[&>g>path:nth-child(3)]:fill-[#64748b]`
    case 'Digitoo':
      return 'brightness-100 grayscale saturate-50 [&>path:nth-child(1)]:fill-[#334155] [&>path:nth-child(2)]:fill-[#334155] [&>path:nth-child(3)]:fill-[#334155] [&>path:nth-child(4)]:fill-[#94a3b8] [&>path:nth-child(5)]:fill-[#334155] [&>path:nth-child(6)]:fill-[#e2e8f0] [&>path:nth-child(7)]:fill-[#94a3b8] dark:[&>path:nth-child(1)]:fill-[#64748b] dark:[&>path:nth-child(2)]:fill-[#64748b] dark:[&>path:nth-child(3)]:fill-[#64748b] dark:[&>path:nth-child(4)]:fill-[#94a3b8] dark:[&>path:nth-child(5)]:fill-[#64748b] dark:[&>path:nth-child(6)]:fill-[#e2e8f0] dark:[&>path:nth-child(7)]:fill-[#cbd5e1]'
    case 'Persoo':
      return 'brightness-100 grayscale saturate-50 [&>path:nth-child(1)]:fill-[#334155] [&>path:nth-child(2)]:fill-[#334155] [&>path:nth-child(3)]:fill-[#cbd5e1] [&>path:nth-child(4)]:fill-[#94a3b8] dark:[&>path:nth-child(1)]:fill-[#64748b] dark:[&>path:nth-child(2)]:fill-[#64748b] dark:[&>path:nth-child(3)]:fill-[#e2e8f0] dark:[&>path:nth-child(4)]:fill-[#94a3b8]'
    case 'Retino':
      return 'brightness-100 grayscale saturate-50 [&>path]:fill-[#334155] dark:[&>path]:fill-[#64748b]'
    case 'Supernova':
      return 'brightness-100 grayscale saturate-50 [&>path]:fill-[#334155] dark:[&>path]:fill-[#64748b]'
    case 'StartMonday':
      return 'brightness-100 grayscale saturate-50 [&>path]:fill-[#334155] dark:[&>path]:fill-[#64748b]'
    default:
      return 'brightness-100 grayscale saturate-50'
  }
}
