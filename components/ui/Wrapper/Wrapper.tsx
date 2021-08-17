import cn from 'classnames'
import React, { JSXElementConstructor, useRef } from 'react'
import s from './Wrapper.module.css'

export interface WrapperProps {
  className?: string
  Component?: string | JSXElementConstructor<any>
}

const Wrapper: React.FC<WrapperProps> = (props) => {
  const { className, children, Component = 'div', ...rest } = props
  const ref = useRef<typeof Component>(null)

  const rootClassName = cn(s.root)

  return <Component className={rootClassName}>{children}</Component>
}

export default Wrapper
