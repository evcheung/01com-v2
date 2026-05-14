import { ReactNode } from 'react';

export const Titles = ({text}: {text: string | ReactNode}) => {
  return (
    <section className="bg-black flex items-center px-24 min-h-[196px]">
      <h1 className="text-white md:text-[50px] text-[35px] font-medium leading-[50px]">
        {text}
      </h1>
    </section>
  );
};
