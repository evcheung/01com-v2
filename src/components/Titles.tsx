import { ReactNode } from 'react';

export const Titles = ({text}: {text: string | ReactNode}) => {
  return (
    <section className="bg-black flex items-center px-6 sm:px-10 lg:px-16 xl:px-24 py-10 sm:py-12 min-h-[140px] lg:min-h-[196px]">
      <h1 className="text-white text-[35px] sm:text-[40px] lg:text-[50px] font-medium leading-tight lg:leading-[50px]">
        {text}
      </h1>
    </section>
  );
};
