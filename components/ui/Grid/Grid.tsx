import cn from 'classnames'
import { FC, ReactNode, Component } from 'react'
import s from './Grid.module.css'

interface GridProps {
  className?: string
  children?: ReactNode[] | Component[] | any[]
  layout?: 'A' | 'B' | 'C' | 'D' | 'normal'
  variant?: 'default' | 'filled'
}

const Grid: FC<GridProps> = ({ className, layout, children, variant }) => {
  const rootClassName = cn(
    s.root,
    {
      [s.layoutA]: layout === 'A',
      [s.layoutB]: layout === 'B',
      [s.layoutC]: layout === 'C',
      [s.layoutD]: layout === 'D',
      [s.layoutNormal]: layout === 'normal',
      [s.default]: variant === 'default',
      [s.filled]: variant === 'filled',
    },
    className
  )
  return <div className={rootClassName}>{children}</div>
}

export default Grid
