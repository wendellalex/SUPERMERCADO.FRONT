import { LogoHome } from '../LogoHome'
import { NavigationHome } from '../NavigationHome'

export default function HeaderHome() {
  return (
    <div className=" bg-orange-500 text-white px-12 py-5">
      <div className="container flex items-center justify-between">
        <LogoHome />
        <NavigationHome />
      </div>
    </div>
  )
}
