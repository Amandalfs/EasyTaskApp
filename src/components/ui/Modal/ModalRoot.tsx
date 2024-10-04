import { ComponentProps } from "react"
import { tv } from "tailwind-variants"

interface ModalRootProps extends ComponentProps<"section"> {
    activated: boolean
}

const modalClasses = tv({
    base: `
      px-[35px]
      py-[55px]
      gap-5
      fixed inset-x-0 bottom-0 z-50
      bg-primaryColors-5
      rounded-tl-xl
      flex
      flex-col
    `,
    variants: {
      activated: {
        true: 'translate-y-0 animate-slideUp',
        false: 'translate-y-full animate-slideDown', 
      },

    },
    defaultVariants: {
      activated: false,
    },
})

export function ModalRoot({children, activated, ...rest}: ModalRootProps){
    return (<section
        className={modalClasses({ activated })}
        {...rest}
    >
    {children}
    </section>)
}


