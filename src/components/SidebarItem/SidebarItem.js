
function SidebarItem({ Icons,title }) {
  return (
   
        <div className="flex items-center p-1 cursor-pointer mt-3">
            {Icons && <Icons  className="h-5 text-white mr-2 text-gray-400 hover:text-white" />}
            {title && <h1 className="text-white hover:text-white text-gray-400">{title}</h1>}
            
        </div>

  )
}

export default SidebarItem

