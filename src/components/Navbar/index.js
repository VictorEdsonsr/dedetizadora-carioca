import styles from "./styles.module.scss";
import Link from "next/link";
import { useState } from "react";

export const Navbar = () => {
    const [active, setActive] = useState(false);

    const nav = [
        { name: "Início", link: "/" },
        { name: "Sobre Nós", link: "/Atividade" },
        { name: "Serviços", link: "/Acampamento" },
        { name: "Contatos", link: "/Contato" },
    ];

    return (
        <nav>
            <ul className={active ? styles.activeNavbar : styles.navbar}>
                {nav.map((navLink, index) => (
                    <Link key={index} href={navLink.link}>
                        <li
                            onClick={() => setActive(active ? !active : active)}
                            className="p-3 cursor-pointer font-mons text-xl mx-4 hover:text-white hover:bg-blue-500 rounded-full transition"
                        >
                            {navLink.name}
                        </li>
                    </Link>
                ))}
            </ul>

            <div
                onClick={() => setActive(!active)}
                className={active ? styles.activeHamburguer : styles.hamburguer}
            />
        </nav>
    );
};