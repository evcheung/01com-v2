
export const GreenDots = ({color} : {color?: string}) => {
  return (
    <span aria-hidden className="inline-flex items-center gap-0.75 ml-1">
      <span className={`block size-1.25 rounded-full ${color || "bg-quantum-green"}`} />
      <span className={`block size-1.25 rounded-full ${color || "bg-quantum-green"}`} />
      <span className={`block size-1.25 rounded-full ${color || "bg-quantum-green"}`} />
    </span>
  );
}