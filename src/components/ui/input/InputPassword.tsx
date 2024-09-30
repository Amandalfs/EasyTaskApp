"use client"
import { useState } from "react";
import { ComponentProps } from "react";
import Image from "next/image";
import IconEyeOff from "@/assets/iconEyeOff.png";
import IconEyeOn from "@/assets/iconEyeOn.png";

interface InputPasswordProps extends ComponentProps<'input'>{
    holder: string
}

export function InputPassword({ holder, ...rest }: InputPasswordProps) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <article>
      <input
        type={showPassword ? "text" : "password"}
        className="
        w-full pr-10 pl-3 py-2 border border-neutral-2 
        rounded-[0px_5px_5px_5px] 
        placeholder:text-base placeholder:font-normal placeholder:leading-[22.4px] placeholder:text-left
        "
        placeholder={holder}
        {...rest}
      />

      <button
        type="button"
        className="absolute inset-y-0 right-0 flex items-center pr-3"
        onClick={togglePasswordVisibility}
      >
        <Image
          src={showPassword ? IconEyeOn : IconEyeOff}
          alt={showPassword ? "Hide password" : "Show password"}
          width={20}
          height={20}
        />
      </button>
    </article>
  );
}
