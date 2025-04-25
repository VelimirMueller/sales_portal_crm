function SideBarNavLink ({ children }) {
    return (
        <div class="rounded-full w-16 h-16 hover:cursor-pointer flex justify-center items-center my-2 p-1 transition-all ease-in-out duration-300 hover:border-4 border-yellow-400 hover:bg-gray-900 hover:text-yellow-400 hover:shadow-md hover:w-20">
            {children}
        </div>
    )
}

export default SideBarNavLink;