import { FC, SVGProps } from "react";

const No: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
      <rect width={18} height={18} x={1} y={1} stroke="#ffffff80" strokeWidth={2} rx={2} />
      <rect width={13} height={3} x={6.067} y={4} fill="#EA6266" rx={1} transform="rotate(43.541 6.067 4)" />
      <rect width={13} height={3} x={15.402} y={6.029} fill="#EA6266" rx={1} transform="rotate(135 15.402 6.03)" />
    </svg>
  );
};

export default No;
