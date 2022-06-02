import { Link } from "react-router-dom";

const headerLinkStyle = {
    display: "inline",
    margin: "20px",
    color: "black"
}
const headerLinkContainerStyle = {
    margin: "20px"
}
function Header() {

    return <header>
        <nav>
            <ul style={headerLinkContainerStyle}>
                <li style={headerLinkStyle}><Link to="/">Home</Link></li> 
                <li style={headerLinkStyle}><Link to="/about">About</Link></li>
                <li style={headerLinkStyle}><Link to="/portfolio">Portfolio</Link></li>
            </ul>
        </nav>
    </header>
}

export default Header;