import { useEffect } from 'react'
import { createPortal } from 'react-dom'

const portalRoot = document.querySelector('#portal')

const Portal = ({ children }) => {
    const el = document.createElement('div')

    useEffect(() => {
        portalRoot.appendChild(el)

        return () => {
            portalRoot.removeChild(el)
        }
    })

    return createPortal(children, el)
}

export default Portal
