import type { FC, HTMLAttributes } from 'react'

import classNames from 'classnames'

type Props = HTMLAttributes<HTMLButtonElement> & {
  navOpen: boolean
}

export const NavToggleButton: FC<Props> = ({ navOpen, ...props }) => (
  <button className="group flex p-1 max-md:flex md:hidden" {...props}>
    <span className="relative flex h-4 w-5">
      <span
        className={classNames(
          'absolute top-0 h-0.5 w-full bg-gray-500 transition-colors duration-300 hover:bg-gray-800 group-hover:underline dark:group-hover:bg-gray-400',
          {
            'translate-y-1.5 rotate-45 transform': navOpen,
          }
        )}
      />
      {!navOpen && (
        <span className="absolute top-1/2 h-0.5 w-full -translate-y-1/2 bg-gray-500 transition-colors duration-300 hover:underline group-hover:bg-gray-800 dark:group-hover:bg-gray-400" />
      )}
      <span
        className={classNames(
          'absolute bottom-0 h-0.5 w-full bg-gray-500 transition-colors duration-300 hover:underline group-hover:bg-gray-800 dark:group-hover:bg-gray-400',
          {
            '-translate-y-2 -rotate-45 transform': navOpen,
          }
        )}
      />
    </span>
  </button>
)
