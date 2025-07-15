import Icon, { Stack } from '@mdi/react';
import { mdiHomeAnalytics, mdiCalendarAlertOutline, mdiAccountGroup, mdiEmailFastOutline, mdiBellOutline, mdiCogOutline, mdiLogout, mdiAccount } from '@mdi/js';
import SideBarNavLink from './SideBarNavLink';
import { useLocation } from 'react-router-dom';

function SideBar () {
    const location = useLocation();
    const checkIfPageIsActive = (path) => {
        return location.pathname === path;
    }

  return (
      <nav className="sidebar__nav">
        <aside className="w-1/10 px-12">
            <div className="bg-white rounded-full w-20 ml-auto mr-auto flex flex-col flex-grow justify-between items-center my-2 shadow-md p-2">
                <SideBarNavLink href="/" isActive={checkIfPageIsActive('/')}>
                    <Icon path={mdiHomeAnalytics} size={2} />
                </SideBarNavLink>
                <SideBarNavLink href="/calendar" isActive={checkIfPageIsActive('/calendar')}>
                    <Icon path={mdiCalendarAlertOutline} size={2} />
                </SideBarNavLink>
                <SideBarNavLink href="/leads" isActive={checkIfPageIsActive('/leads')}>
                    <Icon path={mdiAccountGroup} size={2} />
                </SideBarNavLink>
                <SideBarNavLink href="/inbox" isActive={checkIfPageIsActive('/inbox')}>
                    <Icon path={mdiEmailFastOutline} size={2} />
                </SideBarNavLink>
            </div>

            <div className="bg-white rounded-full w-20 centercenterml-auto mr-auto flex flex-col flex-grow justify-between items-center my-2 shadow-md p-2 border-box">                
                <SideBarNavLink>
                    <Icon path={mdiBellOutline} size={2}/>
                </SideBarNavLink>
                <SideBarNavLink>
                    <Icon path={mdiCogOutline} size={2} className="hover:animate-spin"/>
                </SideBarNavLink>
            </div>

            <div className="bg-white rounded-full w-20 centercenterml-auto mr-auto flex flex-col flex-grow justify-between items-center my-2 shadow-md p-2">
                <SideBarNavLink>
                    <Icon path={mdiLogout} size={2} className="rotate-180 mr-1"/>
                </SideBarNavLink>
                <SideBarNavLink>
                    <Icon path={mdiAccount} className="w-full"/>
                </SideBarNavLink>
            </div>
        </aside>
      </nav>
  );
}
export default SideBar;