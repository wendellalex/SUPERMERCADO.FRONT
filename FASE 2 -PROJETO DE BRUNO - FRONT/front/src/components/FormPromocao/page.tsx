"use client"

import React from 'react'
import Input from '../Input'
import Button from '../Button'

import { useState, useEffect, ChangeEvent, FormEvent } from 'react'
import { GetProducts, getProdutos } from '@/api/produto/getProdutos'
import { parseCookies } from 'nookies'

import { toast } from 'react-toastify'
import { setPromocao } from '@/api/produto/setPromocao'

interface FormPromocaoProps {
  products: GetProducts[] | []
}

export default function FormPromocao({ products }: FormPromocaoProps) {
  const [produtos, setProdutos] = useState<GetProducts[]>(products)
  const [codigo, setCodigo] = useState(products[0]?.codigo)
  const [precoPromocao, setPrecoPromocao] = useState('')
  const [loading, setLoading] = useState(false)

  

  useEffect(() => {
    const getData = async () => {
      const cookies = parseCookies()
      const secret = process.env.NEXT_PUBLIC_SECRET as string
      const response = await getProdutos(cookies[secret]) || []
      setProdutos(response)
    }
    
    getData()
  }, [])

  const handleForm = async (event: FormEvent) => {
    event.preventDefault()
    setLoading(true)
    if (!Number(precoPromocao)) {
      return toast.error('Digite um preço válido')
    }
    const secret = process.env.NEXT_PUBLIC_SECRET as string
    const cookies = parseCookies()
    await setPromocao(codigo, Number(precoPromocao), cookies[secret])
    toast.success('Promoção criada com sucesso!')
    setCodigo('')
    setPrecoPromocao('')
    setLoading(false)

  }

  const handleCategory = (event: ChangeEvent<HTMLSelectElement>) => {
    setCodigo(event.target.value)
  }
  
  return (
   <div className="container flex flex-col gap-1 w-[600px] mt-24">
      <span className="my-3 text-center text-xl font-bold">
        Registrar promoção
      </span>
      <form onSubmit={handleForm} className='flex flex-col gap-4 pb-3'>
        <label>
            <span className="block text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']">
              Produtos
            </span>
            <select
              value={produtos?.length ? produtos[0].codigo : ''}
              required
              onChange={handleCategory}
              className="w-full rounded-md border-2 border-gray-300 px-4 py-2 shadow-sm"
              placeholder="Select category"
              disabled={!produtos?.length ? true : false}
            >
              {produtos?.map((produto) => {
                return (
                  <option key={produto.codigo} value={produto.codigo}>
                    {produto.nome}
                  </option>
                )
              })}
            </select>
        </label>
        <Input
          value={precoPromocao}
          after={true}
          type="number"
          required
          placeholder="Enter the description"
          onChange={(e) => setPrecoPromocao(e.target.value)}
        >
          Oferta
        </Input>
        <Button loading={loading} type="submit">
          Register
        </Button>
      </form>
   </div>
  )
}
