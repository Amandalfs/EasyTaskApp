import { ComponentProps } from "react"

type ModalSeparatorColProps = ComponentProps<"article">

export function ModalSeparatorCol({ children, ...rest}: ModalSeparatorColProps){
    return (<article
        className="flex flex-col gap-[10px]"
        {...rest}
    >
        {children}
    </article>)
}