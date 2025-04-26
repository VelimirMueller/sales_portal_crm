import NavGreeting from './NavGreeting';
import NavLogo from './NavLogo';
import MenuButton from './MenuButton';

function NavBar () {
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center">
                <NavLogo />
                <NavGreeting />
            </div>
            <div className="flex items-center h-16 rounded-full justify-end">
                <MenuButton />
            </div>
        </div>
    )
}

export default NavBar;