import type { IconType } from "react-icons";

interface FrameworkCardProps {
    name: string;
    Icon: IconType;
}

export default function FrameworkCard({ name, Icon }: FrameworkCardProps) {
    return (
        <div className="flex flex-col items-center justify-center w-40 h-40 p-4 rounded-2xl shadow-lg bg-white dark:bg-neutral-900">
            <Icon className="w-12 h-12 mb-3 text-blue-500" />
            <p className="text-base text-black font-medium text-center">{name}</p>
        </div>
    );
}
