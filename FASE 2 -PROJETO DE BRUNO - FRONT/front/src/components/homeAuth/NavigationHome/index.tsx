'use client'

import { autenticacao } from '@/api/autenticacao'
import { LogOut } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export function NavigationHome() {
  const router = useRouter()

  return (
    <div className="flex items-center space-x-8 text-center">
      <Link href={'/promocao'}>Registrar promoção</Link>
      <Link href={'/produto'}>Registrar produto</Link>
      <button
        onClick={() => autenticacao.logOut(router)}
        className="flex items-center gap-2"
      >
        <span>Sair</span>
        <LogOut />
      </button>
    </div>
  )
}
