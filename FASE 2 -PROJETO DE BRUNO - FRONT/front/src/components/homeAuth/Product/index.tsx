import Image from 'next/image'

interface ProductProps {
  nome: string
  preco: number
  precoPromocao: number
  validade: string
}

export function Product(data: ProductProps) {
  
  return (
    <div className="flex h-full w-full flex-col gap-2 rounded-md border border-black px-4 py-4">
      <div className={`flex items-center justify-center ${!data.precoPromocao && "mb-4"}`}>
        <Image
          src={
            'https://sitearquivos.s3-us-west-2.amazonaws.com/650/Noticias/73628/uwc3lse7nlwpmvec2xks_produtos_small_286R..png'
          }
          alt="image"
          width={200}
          height={200}
          className="rounded-md bg-cover bg-center"
        />
      </div>
      <div className="mt-1 flex flex-col gap-2">
        <span className="text-xl">{data.nome}</span>
        {
          !data.precoPromocao ? (<span className="text-green-800 text-xl ">
          R$ {data.preco.toFixed(2)}
        </span>) : (
          <div className='flex flex-col'>
            <span className="text-gray-500/70 line-through">
              R$ {data.preco.toFixed(2)}
            </span>
            <span className="from-neutral-300 text-xl text-green-800">
              R$: {data.precoPromocao.toFixed(2)}
            </span>
          </div>
        )
        }
       
        <span className="text-gray-500/70">
          Validade: {new Date(data.validade).toLocaleDateString('pt-BR')}
        </span>
      </div>
    </div>
  )
}
