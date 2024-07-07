import '../style/Header.css';
import image from "../assets/images/logo.png";
export const Header = () => {

    return (
    <header className='main-header'>
        <div className='logo'> 
            <img src={image} alt= "logo" />
        </div>
        <nav>
            <ul>
                <li>Home</li>
                <li>Login</li>
                <li>Register</li>
                <li>About</li>
                <li>Contact Us</li>
            </ul>
        </nav>

        
    </header>
    );
};