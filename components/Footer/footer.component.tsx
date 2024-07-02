import { Logo } from "../Icons";

export const Footer = () => {
  return (
    <div className="container relative z-10 flex-col overflow-hidden !text-zinc-900">
      <div className="flex w-full flex-col gap-12 border-b-2 border-b-primary-400 py-16 lg:flex-row">
        <div className="flex w-full flex-col items-start justify-start gap-6 md:flex-row md:justify-between lg:w-min lg:flex-col lg:justify-start">
          <Logo className="h-16 text-zinc-900" />
          <div className="flex flex-col items-start gap-6 md:items-end md:gap-2 lg:items-start lg:gap-6">
            <div className="text-right text-xs">Nosso trabalho escolar.</div>
          </div>
        </div>
      </div>
      <div className="py-16">
        <div className="text-xs opacity-75">
          <b>&copy; 2024 Arthur. All rights reserved. </b>
        </div>
      </div>
    </div>
  );
};
