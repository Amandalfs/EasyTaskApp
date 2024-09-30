interface InputLabelProps {
    text: string
}

export function InputLabel({ text }: InputLabelProps){
  return (<h1 className="font-sans font-normal leading-[22.4px] text-left text-sm text-neutral-2">{text}</h1>)
} 