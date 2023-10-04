import { Lock } from 'lucide-react'
import { ReactNode } from 'react'

interface HeaderLogoProps {
  children: ReactNode
}

export default function HeaderAuth({ children }: HeaderLogoProps) {
  return (
    <div className="flex flex-col items-center justify-center space-y-3">
      <div className='border-2 border-black p-4 rounded-full'>
        {
          children
        }
      </div>
    </div>
  )
}
