import { getProdutos } from '@/api/produto/getProdutos'
import FormPromocao from '@/components/FormPromocao/page'
import HeaderHome from '@/components/homeAuth/HeaderHome'
import React from 'react'

import { cookies } from 'next/headers'

export default async function Promocao() {
  const secret = process.env.NEXT_PUBLIC_SECRET as string
  const token = cookies().get(secret)?.value as string
  const response = await getProdutos(token) || []
  return (
    <div>
      <HeaderHome />
      <FormPromocao products={response} />
    </div>
  )
}
