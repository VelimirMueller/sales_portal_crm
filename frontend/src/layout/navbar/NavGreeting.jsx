function NavGreeting () {
    return (
        <div className="flex flex-col ml-16 mt-4">
            <div className="text-5xl text-left font-bold pt-4">
            Hi, Username!
            </div>
            <div className="text-xl text-left font-bold text-gray-500 -mt-2">
                Let's take a look at your activity today.
            </div>
        </div>
    )
}

export default NavGreeting;