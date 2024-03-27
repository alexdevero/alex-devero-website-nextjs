type Props = {
  children: string
}

export const ErrorMessage = ({ children }: Props) => <div className='text-sm text-red-500'>{children}</div>
