import { ComponentProps } from "react"

type ModalRootProps = ComponentProps<"section">

export function ModalRoot({children, ...rest}: ModalRootProps){
    return (<section
        className="
            px-[35px]
            py-[55px]
            gap-5
            fixed inset-x-0 bottom-0 z-50
            bg-primaryColors-5
            rounded-tl-xl
            flex
            flex-col
        "
        {...rest}
    >
    {children}
    </section>)
}