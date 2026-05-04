export const Titles = ({text}: {text: string}) => {
  return (
    <section className="bg-black flex items-center px-24 min-h-[196px]">
      <h1 className="text-white text-[50px] font-medium leading-[50px]">
        {text}
      </h1>
    </section>
  );
};
