
import style from './Header.module.scss'
// import '../scss/base/base.scss'
import logo from '../img/Logo.svg'


const Header = () => {
    return (
        <>
            <header className={style.naw}>
                <div className="container">
                    <div className={style.naw_row}>
                        <div className={style.logo}><img src={logo} alt="logo"/></div>
                        <naw className={style.navigation}>
                            <ul>
                                <li ><a className={style.active} href="">Home</a></li>
                                <li><a href="">About us</a></li>
                                <li><a href="">Find space</a></li>
                                <li><a href="">Share space</a></li>
                                <li><a href="">Promote space</a></li>
                            </ul>
                        </naw>
                    </div>
                </div>
            </header>

        </>
    );
};

export default Header;
