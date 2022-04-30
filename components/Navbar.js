import { SunIcon } from '@heroicons/react/outline'
import { MoonIcon } from '@heroicons/react/solid'
import Logo from './Logo'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme()

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const renderThemeChanger = () => {
    const currentTheme = theme === 'system' ? systemTheme : theme
    if (!mounted) return null

    if (currentTheme === 'dark') {
      return (
        <div className="flex  cursor-pointer items-center ">
          <SunIcon
            className="ml-1 inline-block h-8  w-8 animate-wiggle text-amber-400  "
            onClick={() => setTheme('light')}
          />
        </div>
      )
    } else {
      return (
        <div className="flex  cursor-pointer items-center">
          <MoonIcon
            className="ml-1 inline-block h-8  w-8 animate-wiggle_reverse text-gray-600"
            onClick={() => setTheme('dark')}
          />
        </div>
      )
    }
  }

  return (
    <header className="align-items mx-auto mt-4 flex max-w-md justify-between space-x-4 rounded-md p-2 md:max-w-2xl">
      <div>
        <Logo />
      </div>

      {renderThemeChanger()}
    </header>
  )
}

export default Navbar
