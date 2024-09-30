import { ComponentProps } from "react"

type ModalSeparatorColProps = ComponentProps<"article">

export function ModalSeparatorCol({ children, ...rest}: ModalSeparatorColProps){
    return (<article
        className="flex flex-col gap-[10px] border-2 border-green-600"
        {...rest}
    >
        {children}
    </article>)
}