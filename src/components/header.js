import logo from "../images/Logo.png"

function Header(){
    return (
        <div className="navbar">
           <ul>
            <li className="logo"> <img src={logo}/> </li>
            <li className="text">React Course - Project 3</li>
           </ul>
        </div>
    )
}

export default Header