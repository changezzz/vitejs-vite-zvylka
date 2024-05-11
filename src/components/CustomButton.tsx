import React, { forwardRef } from "react";

type ButtonProps = {
    children: React.ReactNode
    onClick: () => void
}

const CustomButton = 
 forwardRef<HTMLButtonElement, ButtonProps>(({children, onClick}: ButtonProps, ref) => {
    return <button ref={ref} onClick={onClick}>
        {children}
    </button>
})

CustomButton.displayName = 'CustomButton'

export default CustomButton