import { NavLink } from "react-router-dom"

const MainPage = ()=>{ 
   return ( 
      <>
      <NavLink exact activeStyle={{"color":"red"}} to="/">Main</NavLink>
      <NavLink exact activeStyle={{"color":"red"}} to="/user">User</NavLink>
      </>
   )
}

export default MainPage