import { ComponentProps } from "react"

type ModalLinkProps = ComponentProps<"a">

export function ModalLink({children, ...rest}: ModalLinkProps){
    return (<a className="
        font-inter 
        font-normal 
        text-primaryColors-3
        text-xs 
        leading-4 
        text-center
        "
        {...rest}
    >{children}</a>)
} 