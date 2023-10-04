import HeaderAuth from '@/components/auth/HeaderAuth'
import { FormSignIn } from '@/components/auth/SignIn/FormSignIn/Index'
import { Lock } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="mx-2 flex w-[450px] flex-col space-y-3 rounded-md bg-white p-10 px-8 shadow-md border border-gray-400/30">
        <HeaderAuth>
          <Lock/>
        </HeaderAuth>
        <FormSignIn />
      </div>
    </div>
  )
}
