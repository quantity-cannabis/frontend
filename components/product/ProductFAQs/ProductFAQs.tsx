import cn from 'classnames'
import React, { JSXElementConstructor, useRef } from 'react'
import s from './ProductFAQs.module.css'

export interface ProductFAQsProps {
  className?: string
  Component?: string | JSXElementConstructor<any>
}

const ProductFAQs: React.FC<ProductFAQsProps> = (props) => {
  const { className, children, Component = 'div', ...rest } = props
  const ref = useRef<typeof Component>(null)

  const rootClassName = cn(s.root)

  return <Component className={rootClassName}>{children}</Component>
}

export default ProductFAQs
