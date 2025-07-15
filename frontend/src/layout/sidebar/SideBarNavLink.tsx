import { ReactNode } from 'react';

interface SideBarNavLinkProps {
    children: ReactNode;
    href?: null|string;
    isActive?: boolean;
}

function SideBarNavLink ({ children, href = null, isActive = false }: SideBarNavLinkProps) {
    return (
        <a href={href as string} className={`rounded-full w-16 h-16 hover:cursor-pointer flex justify-center items-center my-2 p-1 transition-all ease-in-out duration-300 border-yellow-400 hover:border-4 hover:bg-gray-900 hover:text-yellow-400 hover:shadow-md hover:w-20 ${isActive ?  'border-4 bg-gray-900 text-yellow-400 shadow-md w-20' : ''}`}>
            {children}
        </a>
    )
}

export default SideBarNavLink;