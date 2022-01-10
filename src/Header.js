
import "./Header.css";
import Icons from "./Icons";
import { AccountBox, BusinessCenter, Home, NetworkCell, People, Search } from '@material-ui/icons'


function Header(){
    return(
        <div>
       <div className="MainHeader">
           <div className="Licon"><img height="35px" width="35px"  src="https://cdn.pixabay.com/photo/2017/08/22/11/56/linked-in-2668700_960_720.png"></img></div>
           <div class="search">
           <Search></Search>
             <input type="text" placeholder="Search" /> 
                 
           </div>
          
      

        <div>
           <Icons></Icons>
          </div>
       </div>
        <div className="Subheader">
            <div className="sub"><Home></Home> <span className="name">Home</span></div>
         <div className="sub" ><People></People><span className="name">Networks</span></div>
         <div className="sub"><BusinessCenter></BusinessCenter><span className="name">Job Offers</span></div>
         <div className="sub"><AccountBox></AccountBox><span className="name">My Profile</span></div>
         
        </div>
        </div>
    );
}
export default Header;