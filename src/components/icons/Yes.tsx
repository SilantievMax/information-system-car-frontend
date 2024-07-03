import { FC, SVGProps } from "react";

const Yes: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
      <rect width={18} height={18} x={1} y={1} stroke="#ffffff80" strokeWidth={2} rx={2} />
      <path fill="#31D7A7" d="M3.655 8.942a1 1 0 0 1 .1-1.411l.756-.655a1 1 0 0 1 1.41.1l5.975 6.892-1.512 1.31a1 1 0 0 1-1.41-.1L3.655 8.941Z" />
      <path fill="#31D7A7" d="M14.193 3.878a1 1 0 0 1 1.357-.4l.878.479a1 1 0 0 1 .4 1.356l-5.194 9.532L11.5 15l-.5.5H9.5L9 15v-1.59l5.193-9.532Z" />
    </svg>
  );
};

export default Yes;
