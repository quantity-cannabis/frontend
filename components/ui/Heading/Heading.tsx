import cn from 'classnames'
import React, { JSXElementConstructor, useRef } from 'react'
import s from './Heading.module.css'

export interface HeadingProps {
  className?: string
  Component?: string | JSXElementConstructor<any>
}

const Heading: React.FC<HeadingProps> = (props) => {
  const { className, children, Component = 'h1', ...rest } = props
  const ref = useRef<typeof Component>(null)

  const rootClassName = cn(s.root)

  return <Component className={rootClassName}>{children}</Component>
}

export default Heading
