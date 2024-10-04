import { ComponentProps } from "react"

type TitleProps = ComponentProps<'h1'>

export function ModalTitle({children, ...rest}: TitleProps){
    return (<h1 className="
        text-primaryColors-1 
        text-center
        justify-center
        items-center
        text-base
        font-sans
        font-semibold
        mx-14
        mb-2
        " 
        {...rest}
    >
        {children}
    </h1>)   
}