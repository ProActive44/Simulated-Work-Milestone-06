import react from "react"
import {FaHome, FaSearch, FaUserFriends, FaUserPlus , FaPlusSquare} from "react-icons/fa"
import {Link} from "react-router-dom"
import { CgProfile } from "react-icons/cg";


const MobileNav = ()=>{
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

    },

  ]
  return (
    <>
    <div className="absolute bottom-0 border w-full flex items-center justify-center">

    <Link to="/" className="w-full h-auto hover:bg-gray-300 flex items-center justify-center p-4 rounded-md bg-trasparent"> <FaHome className="text-2xl" data-testid="FaHome"/> </Link>

             {
               navigationsArray.map((item, idx)=>{
                 const { name, path, icon } = item
                    return (
                      <Link to={path} key={name} className="w-full h-auto hover:bg-gray-300 flex items-center justify-center p-4 rounded-md bg-trasparent"> {icon} </Link>
                    )
               })
             }
          </div>
    </>
  )
}


export default MobileNav;