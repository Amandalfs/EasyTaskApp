import { ComponentProps } from "react";

interface InputDefaultProps extends ComponentProps<'input'>{
    holder: string
}

export function InputDefault({ holder, ...rest }: InputDefaultProps) {
  return (
    <article>
      <input
        className="
        w-full pr-10 pl-3 py-2 border border-neutral-2 
        rounded-[0px_5px_5px_5px] 
        placeholder:text-base placeholder:font-normal placeholder:leading-[22.4px] placeholder:text-left
        "
        placeholder={holder}
        {...rest}
      />
    </article>
  );
}
