import Image from "next/image";
import { FaLink } from "react-icons/fa";


export default function WorkCard({item}) {
    return (
        <div className="relative group rounded-2xl overflow-hidden shadow-lg w-[350px] h-[250px]">
            {/* Project Image */}
            <Image
                src={item.image}
                alt={"Project Image"}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay Layer */}
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col items-center justify-center text-white p-4 text-center">
                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm md:text-base">
                    {item.description}
                </p>
                <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 flex items-center justify-center w-12 h-12 rounded-full bg-pink-600 hover:bg-pink-700 transition"
                >
                    <FaLink size={20} />
                </a>
            </div>
        </div>
    );
}
