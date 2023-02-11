import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export const WhatsappButton = () => {
    return (
        <Link
            href="https://wa.me/5592984110076"
            className="bg-green-600 fixed z-50 bottom-10 right-10 font-semibold transition-all hover:bg-green-800 shadow-lg p-3 text-center rounded-full"
        >
            <FaWhatsapp color="white" size={40} />
        </Link>
    );
};