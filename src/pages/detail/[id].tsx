import { useRouter } from 'next/router';
import React from 'react'
import { SeoHead } from '../../components/atoms/SeoHead';
import { Section } from '../../components/organisms/Section';

type Props = {}

const DetailPage = (props: Props) => {
  const productsName = 'Ex'
  return (
    <div className='detail__content'>
      <SeoHead title={`펫앤비 | ${productsName}`} />
      <Section />
    </div>
  )
}

export default DetailPage;
