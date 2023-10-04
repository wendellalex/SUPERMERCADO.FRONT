import Link from 'next/link'

export function LogoHome() {
  return (
    <div>
      <Link href={'/home'}>
        <span className="text-xl font-bold">SUPERMERCADO-UNIFACISA</span>
      </Link>
    </div>
  )
}
