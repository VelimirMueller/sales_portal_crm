function NavGreeting () {
    return (
        <div className="flex flex-col ml-16 mt-4 w-90">
            <div className="text-5xl text-left font-bold pt-4">
            Hi, Username!
            </div>
            <span className="w-100 text-xl text-left font-bold text-gray-500 -mt-2 w-90">
                Let's take a look at your activity today.
            </span>
        </div>
    )
}

export default NavGreeting;