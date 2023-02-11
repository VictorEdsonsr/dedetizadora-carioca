import Image from "next/image";
import Link from "next/link";
import { Navbar } from "../Navbar";
import { FaInstagram, FaFacebook, FaPhone, FaWhatsapp } from "react-icons/fa"
import { useState, useEffect } from "react";

export const Layout = ({ children }) => {
    const [fixed, setFixed] = useState("");

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

            <footer className="flex flex-col items-center justify-center bg-blue-500 p-10">
                <div className="container text-white flex flex-col sm:flex-row items-center justify-around ">


                    <article className="my-5 sm:my-0 text-center">
                        <h1 className="text-2xl mb-3">Contatos</h1>
                        <div>
                            <Link className="flex border-white border-solid border-2 rounded-full p-4 hover:bg-white hover:text-blue-500 transition-all mb-2" href="tel:+55929999999999">
                                <FaPhone className="mr-2" size={20} />
                                <span>(92)9 9999-9999</span>
                            </Link>

                            <Link className="flex border-white border-solid border-2 rounded-full p-4 hover:bg-white hover:text-blue-500 transition-all" href="">
                                <FaWhatsapp className="mr-2 " size={20} />
                                <span>(92)9 9999-9999</span>
                            </Link>
                        </div>
                    </article>


                    <figure className="text-center my-5 sm:my-0 border-double py-12 sm:px-14 sm:py-0 border-white border-t-4 border-b-4 sm:border-t-0 sm:border-b-0 sm:border-r-4 sm:border-l-4">
                        LOGO
                    </figure>

                    <article className="my-5 sm:my-0 text-center">
                        <h1 className="text-2xl mb-5">Redes Sociais</h1>
                        <div className="flex justify-around">
                            <Link className="border-white border-solid border-2 rounded-full p-4 hover:bg-white hover:text-blue-500 transition-all" href="www.instagram.com"><FaInstagram size={22} /></Link>
                            <Link className="border-white border-solid border-2 rounded-full p-4 hover:bg-white hover:text-blue-500 transition-all" href="www.facebook.com"><FaFacebook size={22} /></Link>
                        </div>
                    </article>
                </div>
            </footer>
        </>
    );
};
