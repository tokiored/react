import React from "react"
import useToggle from "../../hooks/useToggle"

const MenuContext = React.createContext()
export { MenuContext }


export default function Menu({ children, onOpen }) {
    // Params as a configuration object to pass only variables we want to pass to useToggle()
    const [open, toggleOpen] = useToggle({
        initialValue: true, 
        onToggle: onOpen
    })

    return (
        <MenuContext.Provider value={{ open, toggleOpen }}>
            <div className="menu">
                {children}
            </div>
        </MenuContext.Provider>
    )
}
