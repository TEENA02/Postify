import React from 'react'
import {Container,Logo ,LogoutBtn} from  '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
function Header() {
    const authStatus=useSelector((state)=>state.auth.status)
    const navigate=useNavigate()
    const navItems=[
        {
            name:"Home",
            slug:"/",
            active:true
        },
        {
            name:"Login",
            slug:"/login",
            active:!authStatus,
        },
        {
            name:"Signup",
            slug:"/signup",
            active:!authStatus,
        },
        {
            name:"All Posts",
            slug:"/all-posts",
            active:authStatus,
        },
        {
            name:"Add Post",
            slug:"/add-post",
            active:authStatus,
        },
        

    ]
 return(

<header className="py-3 shadow bg-[#010418] border-b-2 border-white">
    <Container>
        <nav className="flex border-t-white">
            <div className="mr-4">
                <Link to='/'>
                <Logo width='70px' />
                </Link>
            </div>
            <ul className='flex ml-auto'>
                {navItems.map((item)=>
                item.active?(
                    <li key={item.name}>
                        <button
                        onClick={()=>navigate(item.slug)}
                        className='inline-block font-sans  text-white px-6 py-2 duration-200 hover:bg-[#60a5fa] hover:text-black rounded-full'
                        >{item.name}</button>
                    </li>
                ):null
                )}
                {/* if authstatus this is true then code inside( )will be dislplayed */}
                {authStatus && (
                    <li>
                        <LogoutBtn/>
                    </li>
                )}
            </ul>
        </nav>
    </Container>
</header>

 )
}

export default Header