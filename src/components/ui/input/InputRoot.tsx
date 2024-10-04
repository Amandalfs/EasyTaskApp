import { ReactNode } from "react"

interface InputRootProps {
    children: ReactNode
}

export function InputRoot({children}: InputRootProps){
    return (<section className="flex flex-col gap-1">
        {children}
    </section>)
}