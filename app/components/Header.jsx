"use client";
import Image from "next/image";
import Container from "../Container";
import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  return (
    <Container>
      <header className="w-full flex justify-between pt-14 items-center">
        <Image
          src="/wedesigner-blue-red.svg"
          width={64}
          height={31}
          alt="Logo Wedesigner bleu et rouge"
        />
        <Bars3Icon
          onClick={() => setIsOpen(!isOpen)}
          className="h-10 w-10 text-gray-500 z-50 cursor-pointer"
        />
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } absolute top-0 right-0 h-1/2 w-1/2 bg-black`}
        ></nav>
      </header>
    </Container>
  );
};

export default Header;
