import Icon, { Stack } from '@mdi/react';
import { mdiHomeAnalytics, mdiCalendarAlertOutline, mdiAccountGroup, mdiEmailFastOutline, mdiBellOutline, mdiCogOutline, mdiLogout, mdiAccount } from '@mdi/js';
import SideBarNavLink from './SideBarNavLink';


function SideBar () {
  return (
      <nav className="sidebar__nav">
        <aside className="w-1/10 px-12">
            <div className="bg-white rounded-full w-20 ml-auto mr-auto flex flex-col flex-grow justify-between items-center my-2 shadow-md p-2">
                <SideBarNavLink href="/">
                    <Icon path={mdiHomeAnalytics} size={2}/>
                </SideBarNavLink>
                <SideBarNavLink href="/calendar">
                    <Icon path={mdiCalendarAlertOutline} size={2}/>
                </SideBarNavLink>
                <SideBarNavLink href="/leads">
                    <Icon path={mdiAccountGroup} size={2}/>
                </SideBarNavLink>
                <SideBarNavLink href="/inbox">
                    <Icon path={mdiEmailFastOutline} size={2}/>
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