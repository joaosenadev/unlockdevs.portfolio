import { useEffect, useState } from "react";
import "./scrollTop.css"
import { FaLongArrowAltUp as Arrow } from "react-icons/fa"

export function ScrollTop() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        function handleScroll() {
            const isTopOfPage = window.scrollY != 0;
            setShowButton(isTopOfPage);
        }

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            className={`scrollTop ${showButton ? "show" : "close"}`}
            onClick={handleClick}
        >
            <Arrow size={25} />
        </button>
    );
}