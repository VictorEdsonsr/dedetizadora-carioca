import Image from "next/image";
import Link from "next/link";
import { Navbar } from "../Navbar";
import { useState, useEffect } from "react";

export const Layout = ({ children }) => {
    const [fixed, setFixed] = useState("");

    const nav = [
        { name: "Início", link: "/" },
        { name: "Sobre Nós", link: "/Atividade" },
        { name: "Serviços", link: "/Acampamento" },
        { name: "Contatos", link: "/Contato" },
    ];
    // on render, set listener
    useEffect(() => {
        window.addEventListener("scroll", isFixed);
        return () => {
            window.removeEventListener("scroll", isFixed);
        };
    }, []);

    const isFixed = () => {
        /* Method that will fix header after a specific scrollable */
        const scrollTop = window.scrollY;
        const fixedClass =
            scrollTop >= 1
                ? "flex justify-between items-center bg-slate-100 transition   py-7 px-12 h-24   shadow-xl  sticky top-0 left-0 right-0 z-50 "
                : "";
        setFixed(fixedClass);
    };

    return (
        <>
            <header
                className={
                    fixed
                        ? fixed
                        : "flex justify-between items-center py-7 px-12 bg-slate-100 h-24 transition"
                }
            >
                <Link href="/">
                    LOGO
                </Link>

                <Navbar />

            </header>

            <main>{children}</main>

            <footer className="bg-gray-300 flex flex-col items-center justify-center">
                <div className="container flex flex-col sm:flex-row items-center justify-between text-white p-3">


                    <article className="my-5 sm:my-0 text-center sm:text-left">
                        Está com dúvidas? <br />
                        Adoramos conversar <br />
                        Agende uma conversa com nossos <br />
                        coordenadores e diretores
                    </article>

                    <ul className="text-center sm:text-left">
                        {nav.map((navLink, index) => (
                            <li className="px-3 text-white hover:text-orange-500" key={index}>
                                <Link href={navLink.link}>{navLink.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </footer>
        </>
    );
};
