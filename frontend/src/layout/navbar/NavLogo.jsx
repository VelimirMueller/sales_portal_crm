import Icon from '@mdi/react';
import { mdiSalesforce } from '@mdi/js';

function NavLogo () {
    return (
        <div class="pl-4 mt-2">
            <Icon path={mdiSalesforce} size={5} />
        </div>
    )
}

export default NavLogo;