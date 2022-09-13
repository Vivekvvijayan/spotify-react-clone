import Footer from "../../components/Footer/Footer"
import Sidebar from "../../components/Sidebar/Sidebar"
import Main from "../../Main/Main"


function Player() {
  return (
    <div className="bg-black h-screen overflow-y-hidden">
        
          {/* body */}

          {/* side */}
    <div className="flex justify-around w-full items-center h-full ">

        <Sidebar />

          {/* bodyPortion */}


          <Main />

    </div>
   
          <Footer />

          {/* footer */}
      
         </div>
  )
}

export default Player