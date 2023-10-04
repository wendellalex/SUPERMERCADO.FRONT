import HeaderAuth from '@/components/auth/HeaderAuth'
import { FormSignUp } from '@/components/auth/SignUp/FormSignUp'
import { Unlock } from 'lucide-react'

export default function Registrar() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="mx-2 my-1 flex w-[450px] flex-col space-y-3 rounded-md bg-white p-10 px-8 shadow-md border border-gray-400/30">
        <HeaderAuth>
          <Unlock/>
        </HeaderAuth>
        <FormSignUp />
      </div>
    </div>
  )
}
