import NavGreeting from './NavGreeting';
import NavLogo from './NavLogo';
import MenuButton from './MenuButton';

function NavBar () {
    return (
        <div class="flex items-center justify-between">
            <div class="flex items-center">
                <NavLogo />
                <NavGreeting />
            </div>
            <div class="flex items-center h-16 rounded-full justify-end">
                <MenuButton />
            </div>
        </div>
    )
}

export default NavBar;