import React from 'react';
import style from './Clients.module.scss'
import cart1  from  '../../img/Clients/1.svg';
import cart2  from  '../../img/Clients/2.svg';
import cart3  from  '../../img/Clients/3.svg';
import cart4  from  '../../img/Clients/4.svg';




const Clients = () => {
    return (
        <>
            <section className={style.clients}>
                <div className="container">
                    <div className={style.clients_row}>
                        <ul>
                            <li><a href=""><img src={cart1} alt=""/></a></li>
                            <li><a href=""><img src={cart2} alt=""/></a></li>
                            <li><a href=""><img src={cart3} alt=""/></a></li>
                            <li><a href=""><img src={cart4} alt=""/></a></li>

                        </ul>
                    </div>

                </div>

            </section>

        </>
    );
};

export default Clients;
