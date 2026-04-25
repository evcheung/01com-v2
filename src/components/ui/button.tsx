interface ButtonProps {
  text: string;
  url: string;
}


export const Button = ({ text, url }: ButtonProps) => {
  const w = 250;
  const h = 54;
  const r = 22; // radio de las dos esquinas redondeadas

  return (
    <a
      href={url}
      className="inline-block border border-white/60 rounded-bl-lg rounded-tr-lg text-white text-[12px] font-medium uppercase tracking-widest px-6 py-3 hover:bg-white/10 transition-colors">
      {text}
    </a>
  );
};
