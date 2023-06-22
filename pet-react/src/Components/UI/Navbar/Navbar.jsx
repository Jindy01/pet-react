import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import MyButton from "../button/MyButton";
import {AuthContext} from "../../../context";

const Navbar = () => {
    const [isAuth, setIsAuth] = useContext(AuthContext);
    return (
        <div className='navbar'>
            <div className='navbar__links'>
                <MyButton onClick={() => setIsAuth(true)}>
                    Выйти
                </MyButton>
                <Link to='about'>О сайте </Link>
                <Link to='posts'>  Посты   </Link>
            </div>
        </div>
    );
};

export default Navbar;