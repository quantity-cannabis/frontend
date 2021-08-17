import React, { FC } from 'react'
import s from './Intro.module.css'
import Link from 'next/link'
interface IntroProps {
  className?: string
  subheadline: string
  headline: string
  description: string
}

const Intro: FC<IntroProps> = ({ subheadline, headline, description }) => {
  return (
    <div className={s.root}>
      <div className={s.left}></div>
      <div className={s.right}>
        <div className={s.subheadline}>{subheadline}</div>
        <h2 className={s.title}>{headline}</h2>
        <div className={s.description}>
          <p>{description}</p>
          <Link href="/search">
            <a className="shop-btn">Shop Now</a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Intro
