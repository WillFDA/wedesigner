"use client";
import Image from "next/image";
import Container from "../Container";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  return (
    <Container>
      <header className="w-full flex justify-between pt-6">
        <Image
          src="/wedesigner-blue-red.svg"
          width={113}
          height={55}
          alt="Logo Wedesigner bleu et rouge"
        />
        <Image
          src="/Buger.svg"
          width={32}
          height={28}
          alt="Burger Icon for navbar"
          onClick={() => setIsOpen(!isOpen)}
          style={{ cursor: "pointer", zIndex: "20" }}
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
