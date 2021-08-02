import cn from 'classnames'
import { inherits } from 'util'
import s from './ProductTag.module.css'

interface ProductTagProps {
  className?: string
  name: string
  price: string
  fontSize?: number
}

const ProductTag: React.FC<ProductTagProps> = ({
  name,
  price,
  className = '',
  fontSize = 32,
}) => {
  return (
    <div className={cn(s.root, className)}>
      <h3 className={s.name}>
        <span className="brand">Seed Junky Genetics</span>
        <span className={cn({ [s.fontsizing]: fontSize < 32 })}>{name}</span>
        <span className="type-strength">Hybrid / 19.65% THC / 10MG</span>
      </h3>
      <div className={s.price}>
        R <u>{price}</u>
      </div>
      <div className={s.price}>Q $29.00</div>
    </div>
  )
}

export default ProductTag
