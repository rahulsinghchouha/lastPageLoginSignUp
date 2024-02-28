
import logo from '../assets/Logo.svg'
import {Link} from 'react-router-dom'
import {toast} from 'react-hot-toast';


const Navbar = (props)=>{
    let isLoggedIn=props.isLoggedIn;
    let setIsLoggedIn=props.setIsLoggedIn;
    
    
    return (

        <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>
            <Link to="/">

                <img src={logo} alt="Logo" width={160} height={32} loading='lazy'/>

            </Link>
            <nav>
                <ul className='flex gap-x-6 text-cyan-100'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/">About</Link>
                    </li>
                    <li>
                        <Link to="/">Contact</Link>
                    </li>


                </ul>


           </nav>

           {/* LogIn- LogOut- SignUp- Button */}

            {/* hm condition bhi add krenge button men isliye hm alag tarah se button create krenge */}
           
           <div className='flex  gap-x-4 items-center'>
                {/* jb loggedIn nhi hoga tb hmara ye Login button visible hoga */}
                {     !isLoggedIn &&
                    <Link to="/login">
                        <button className='bg-cyan-950 text-cyan-100 py-2 px-2
                         rounded-[8px] border borders-cyan-800'
                        >Log In</button>
                    </Link>
                }
                {/* jb loggedIn nhi hoga tb hmara ye signup vala button visible hoga 
                logged nhi hai to sign up dikhega*/}

                {   !isLoggedIn &&
                    <Link to="/signup">
                        <button className='bg-cyan-950 text-cyan-100 py-2 px-2
                         rounded-[8px] border borders-cyan-800'
                        >Sign Up</button>
                    </Link>
                }
                {/* Log out vala button visible th dikhega jb user log in hoga */}
                {  isLoggedIn &&
                    <Link to="/">
                        <button onClick={()=>{
                            setIsLoggedIn(false);
                            toast.success("Logged Out");
                        }}
                        className='bg-cyan-950 text-cyan-100 py-2 px-2
                         rounded-[8px] border borders-cyan-800'
                        >LogOut</button>
                    </Link>
                } 
                {/* dashboard bhi tabhi dikhega jb user logged in hoga */}
                {   isLoggedIn &&
                    <Link to="/dashboard">
                        <button className='bg-cyan-950 text-cyan-100 py-2 px-2
                         rounded-[8px] border borders-cyan-800'
                        >Dashboard</button>
                    </Link>
                }




           </div>


        </div>
    )
}
export default Navbar;