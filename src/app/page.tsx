import Image from 'next/image'
import Robot from "@/assets/robot.png";
import Logo from "@/assets/logo.png";

export default function Home() {
  return (
    <section className="flex flex-col justify-center items-center h-screen mx-8 gap-8">
        <header className="flex flex-row gap-1">
          <Image      
            src={Logo}
            alt="Task Easy" 
          />
          <h1 className="font-sans font-semibold text-2xl text-primaryColors-2">TaskEasy</h1>
        </header>

      <section className="flex flex-col gap-5  items-center m-8">
        <article className="flex flex-col gap-5">
          <h1 className="font-sans text-[24px] font-semibold leading-[28.8px] text-left text-primaryColors-3">Boas-vindas!</h1>
          <p className="font-sans text-[16px] font-normal leading-[22.4px] text-left text-primaryColors-1">Precisando de uma ferramenta pra te acompanhar em todos os aspectos da sua vida?</p>
        </article>

        <Image      
        src={Robot}
        width={260}
        height={178}
        alt="Robot" />
      </section>

      <footer className='flex flex-col gap-2'>
        <button className='rounded-lg
        bg-primaryColors-1
          font-sans text-[16px]
          font-semibold 
          leading-[22.4px] 
          text-center 
          text-neutral-4
          h-12 
          w-80

        '>Criar uma conta</button>
        <button className='
          rounded-lg 
          font-sans 
          text-[16px] 
          font-semibold 
          leading-[22.4px] 
          text-center 
          bg-primaryColors-5 
          text-primaryColors-1 
          h-12 
          w-80

          border-2
          border-[#8003D3] 
        '>Já tenho uma conta</button>
      </footer>
    </section>
  );
}
