import react from "react"
import {FaHome, FaSearch, FaUserFriends, FaUserPlus , FaPlusSquare} from "react-icons/fa"
import {Link} from "react-router-dom"


const LargeNav = ()=>{
  let navigationsArray = [
    {
      name : "Search",
      path : "/search",
      icon : <FaSearch className="text-2xl" data-testid="FaSearch"/>
    },
    {
      name : "Followers",
      path : "/followers",
      icon : <FaUserFriends className="text-2xl" data-testid="FaUserFriends"/>
    },
    {
      name : "Following",
      path : "/following",
      icon : <FaUserPlus className="text-2xl" data-testid="FaUserPlus"/>
    },
    {
      name : "Create Post",
      path : "/createpost",
      icon : <FaPlusSquare className="text-2xl" data-testid="FaPlusSquare"/>
    },
    {
      name : "Profile",
      path : "/profile",
      icon : <img src ="https://cdn-icons-png.flaticon.com/128/3135/3135715.png" alt="Profile" className = "h-6 w-6"/>
    }
  ]

  return (
    <>
        <div className="md:w-[10%] lg:w-[20%] h-[100vh] border">
          <Link to="/" className="w-[80%] m-auto">
            <img className="hidden md:hidden lg:block" src="https://1000logos.net/wp-content/uploads/2017/02/Logo-Instagram.png" alt="Instgram"/>
          </Link>

          <div>  

            <Link to="/" className="w-full h-auto hover:bg-gray-300 flex items-center gap-x-4 p-4 rounded-md bg-trasparent" > <FaHome className="text-2xl" /> 
            <div className="text-lg font-semibold hidden lg:block">Home</div> </Link>

             {
               navigationsArray.map((item, idx)=>{
                 const { name, path, icon } = item
                    return (
                      <Link to={path} key={name} className="w-full h-auto hover:bg-gray-300 flex items-center gap-x-4 p-4 rounded-md bg-trasparent"> {icon} <div className="text-lg font-semibold hidden lg:block">{name}</div> </Link>
                    )
               })
             }
          </div>
        </div>
    </>
  )
}


export default LargeNav;