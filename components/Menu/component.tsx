"use client";

import { Logo } from "@/components/Icons/index";
import { Button } from "@/components/new-ui/button";
import { useScrollPos } from "@/lib/hooks/useScrollpos";
import { cn } from "@/lib/utils";
import { Cross2Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useScrollDirection } from "react-use-scroll-direction";

export const MenuClient = () => {
  const [scrollPosition] = useScrollPos();
  const [direction, _direction] = useState("UP");
  const { isScrollingDown, isScrolling, scrollDirection } =
    useScrollDirection();

  const [open, _open] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    if (scrollDirection) _direction(scrollDirection);
  }, [scrollDirection]);

  return (
    <>
      <div
        className={cn(
          "fixed left-0 right-0 top-0 z-50 bg-white/90 backdrop-blur-lg transition-all duration-500",
          scrollPosition > 100 || pathname != "/" ? "" : "",
          scrollPosition > 350 && direction == "DOWN" ? "-translate-y-full" : ""
        )}
      >
        <div
          className={cn(
            "container mx-auto flex h-20 justify-between border-b-[1px] border-b-primary-400 transition-[border] duration-500",
            scrollPosition > 100 || pathname != "/" ? "py-1" : ""
          )}
        >
          <div className="flex items-center px-0 md:px-4">
            <Link
              href={`/`}
              aria-label="Voltar para a home"
              title="Voltar para a home"
              className="opacity-80 transition-opacity ease-in-out hover:opacity-100"
            >
              <Logo className="h-12" />
            </Link>
          </div>
          <button
            aria-label="Abrir menu"
            className="flex items-center py-4 lg:hidden"
            onClick={() => _open(true)}
          >
            <HamburgerMenuIcon className="h-6 w-6" />
          </button>
          <div className="hidden items-center gap-5 px-4 py-4 lg:flex">
            <Button
              asChild
              size={"sm"}
              variant={"link"}
              className="opacity-80 transition-opacity ease-in-out hover:opacity-100"
            >
              <Link href={`#tech`}>Técnologia</Link>
            </Button>
            <Button
              asChild
              size={"sm"}
              variant={"link"}
              className="opacity-80 transition-opacity ease-in-out hover:opacity-100"
            >
              <Link href={`#services`}>Serviços</Link>
            </Button>
            <Button
              asChild
              size={"sm"}
              variant={"link"}
              className="opacity-80 transition-opacity ease-in-out hover:opacity-100"
            >
              <Link href={`#agricultura`}>Agricultura</Link>
            </Button>
          </div>
        </div>
      </div>
      <div
        className={cn(
          !open && "translate-x-full",
          "fixed bottom-0 right-0 top-0 z-50 w-1/2 min-w-[300px] justify-end border-l-2 border-l-primary-500 bg-white/90 p-10 pl-4 backdrop-blur-md transition-all duration-200 lg:hidden"
        )}
      >
        <button
          aria-label="Fechar menu"
          className="flex justify-end"
          onClick={() => _open(false)}
        >
          <Cross2Icon className="h-6 w-6 text-primary-700" />
        </button>
        <div className="flex flex-col items-start gap-y-2 py-10">
          <Button asChild size={"lg"} variant={"link"}>
            <Link href={`/home`} onClick={() => _open(false)}>
              Início
            </Link>
          </Button>
          <Button asChild size={"lg"} variant={"link"}>
            <Link href={`/sobre`} onClick={() => _open(false)}>
              Sobre
            </Link>
          </Button>
          <Button asChild size={"lg"} variant={"link"}>
            <Link href={`/empreendimentos`} onClick={() => _open(false)}>
              Empreendimentos
            </Link>
          </Button>
          <Button asChild size={"lg"} variant={"link"}>
            <Link href={`/cidades`} onClick={() => _open(false)}>
              Cidades
            </Link>
          </Button>

          <Button asChild size={"lg"} variant={"link"}>
            <Link href={`/cub-sc`} onClick={() => _open(false)}>
              CUB / SC
            </Link>
          </Button>
          <Button asChild size={"lg"} variant={"link"}>
            <Link href={`/fale-conosco`} onClick={() => _open(false)}>
              Fale conosco
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
};
