import Icon, { Stack } from '@mdi/react';
import { mdiHomeAnalytics, mdiCalendarAlertOutline, mdiAccountGroup, mdiEmailFastOutline, mdiBellOutline, mdiCogOutline, mdiLogout, mdiAccount } from '@mdi/js';
import SideBarNavLink from './SideBarNavLink';

function SideBar () {
  return (
      <nav className="sidebar__nav">
        <aside class="w-1/10 px-12">
            <div class="bg-white rounded-full w-20 ml-auto mr-auto flex flex-col flex-grow justify-between items-center my-2 shadow-md p-2">
                <SideBarNavLink>
                    <Icon path={mdiHomeAnalytics} size={2}/>
                </SideBarNavLink>
                <SideBarNavLink>
                    <Icon path={mdiCalendarAlertOutline} size={2}/>
                </SideBarNavLink>
                <SideBarNavLink>
                    <Icon path={mdiAccountGroup} size={2}/>
                </SideBarNavLink>
                <SideBarNavLink>
                    <Icon path={mdiEmailFastOutline} size={2}/>
                </SideBarNavLink>
            </div>

            <div class="bg-white rounded-full w-20 centercenterml-auto mr-auto flex flex-col flex-grow justify-between items-center my-2 shadow-md p-2 border-box">                
                <SideBarNavLink>
                    <Icon path={mdiBellOutline} size={2}/>
                </SideBarNavLink>
                <SideBarNavLink>
                    <Icon path={mdiCogOutline} size={2} class="hover:animate-spin"/>
                </SideBarNavLink>
            </div>

            <div class="bg-white rounded-full w-20 centercenterml-auto mr-auto flex flex-col flex-grow justify-between items-center my-2 shadow-md p-2">
                <SideBarNavLink>
                    <Icon path={mdiLogout} size={2} class="rotate-180 mr-1"/>
                </SideBarNavLink>
                <SideBarNavLink>
                    <Icon path={mdiAccount} class="w-full"/>
                </SideBarNavLink>
            </div>
        </aside>
      </nav>
  );
}
export default SideBar;