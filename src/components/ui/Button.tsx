import { ComponentProps } from "react"

interface ButtonProps extends ComponentProps<'button'>{
    color?: 'primary' | 'secondary'
}

export function Button({ 
    color,
    ...rest
    }: ButtonProps){

    return (<button {...rest} 
        data-color={color}
        className='
        rounded-lg
        font-sans text-[16px]
        font-semibold 
        leading-[22.4px] 
        text-center 
        h-12 
        w-80
        data-[color=primary]:bg-[#8003D3]
        data-[color=primary]:text-neutral-4

        data-[color=secondary]:bg-primaryColors-5
        data-[color=secondary]:text-[#8003D3]
        data-[color=secondary]:border-[#8003D3]
        data-[color=secondary]:border-2
        '
    />)
}