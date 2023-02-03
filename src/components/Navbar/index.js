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
                    <li
                        onClick={() => setActive(active ? !active : active)}
                        className="px-3 text-white text-xl mx-4 hover:text-orange-500 "
                        key={index}
                    >
                        <Link href={navLink.link}>{navLink.name}</Link>
                    </li>
                ))}
            </ul>

            <div
                onClick={() => setActive(!active)}
                className={active ? styles.activeHamburguer : styles.hamburguer}
            />
        </nav>
    );
};