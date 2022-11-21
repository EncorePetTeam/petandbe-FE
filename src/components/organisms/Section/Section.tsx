import React from 'react'
import { DetailImage } from '../../atoms/Detail/DetailImage'
import { DetailReserve } from '../../atoms/Detail/DetailReserve'
import { DetailReview } from '../../atoms/Detail/DetailReview'
import { HostInfo } from '../../atoms/HostInfo'
import { Location } from '../../atoms/Location'
import { RequiredRules } from '../../atoms/RequiredRules'
import { DetailContents } from '../../molecules/DetailContents'
import styles from './Section.module.scss'

type Props = {}

const Section = (props: Props) => {
  return (
    <div>
      <DetailImage />
      <div className={styles.detail__flex}>
        <div className={styles.left}>
          <DetailContents />
          <hr/>
          <DetailContents />
          <hr/>
          <DetailContents />
          <hr/>
          <DetailContents />
        </div>
        <div className={styles.right}>
          <DetailReserve />
        </div>
      </div>
      <hr />
      <DetailReview />
      <hr />
      <Location />
      <hr />
      <HostInfo />
      <hr />
      <RequiredRules />
    </div>
  )
}

export { Section }