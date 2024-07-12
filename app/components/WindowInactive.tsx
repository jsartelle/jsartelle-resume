'use client'
import { useEffect } from 'react'

/* this is implemented as a component instead of a hook so that it can be used in Server Components */
export default function WindowInactive() {
  useEffect(() => {
    if (!document.documentElement.dataset.windowInactive) {
      document.documentElement.dataset.windowInactive = 'true'

      const setInactiveClass = () =>
        document.documentElement.classList.add('window-inactive')
      const clearInactiveClass = () =>
        document.documentElement.classList.remove('window-inactive')

      if (!document.hasFocus()) setInactiveClass()

      window.addEventListener('focus', clearInactiveClass)
      window.addEventListener('blur', setInactiveClass)

      return () => {
        document.documentElement.removeAttribute('data-window-inactive')
        window.removeEventListener('focus', clearInactiveClass)
        window.removeEventListener('blur', setInactiveClass)
      }
    }
  })

  return <></>
}
