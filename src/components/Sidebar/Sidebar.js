import SidebarOption from  '../SidebarItem/SidebarItem'
import { HomeIcon,SearchIcon,PlusIcon,HeartIcon } from '@heroicons/react/solid'
import Playlist from '../../Playlist/Playlist'
function Sidebar() {
  return (
    <div className="container-sidebar hidden  h-full p-3 lg:w-1/6 lg:block bg-gray-900 md:w-2/6 ">
      
       <SidebarOption Icons={HomeIcon} title="Home" />
       <SidebarOption Icons={SearchIcon} title="Search"/>
       <SidebarOption Icons={SearchIcon} title="Your Library"/>

       
      <SidebarOption Icons={PlusIcon} title="Create Playlist"/>
      <SidebarOption Icons={HeartIcon} title="Liked Songs"/>
       <hr className='mt-2'/>

       <Playlist />
       <Playlist />
       <Playlist />
       <Playlist />
       <Playlist />
       <Playlist />

    </div>
      
  )
}

export default Sidebar