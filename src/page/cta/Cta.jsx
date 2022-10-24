import React from 'react';
import style from './Cta.module.scss'
import dasbord from '../../img/Cta/dashbord.png'
import oval from '../../img/Cta/Oval.svg'
import ovalup from '../../img/Cta/OvalUp.svg'
import fill from '../../img/Cta/fill.svg'


const Cta = () => {
    return (
        <>
            <section className={style.cta}>
                <div className="container">
                    <div className={style.cta_row}>
                        <img className={style.cta_oval} src={oval} alt=""/>
                        <img className={style.cta_oval} src={fill} alt=""/>
                        <img className={style.cta_oval_up} src={ovalup} alt=""/>
                        <div className={style.cta_img}>
                            <div className={style.img_wrapper}>
                                    <img src={dasbord} alt=""/>
                            </div>

                        </div>
                        <div className={style.cta_text}>
                             <h1>Start using our product</h1>
                            <p>Quid ex eo ortum, tam inportuno tamque crudeli; sin, ut aliquid ex</p>
                            <div className={style.cta_buttons}>
                                <button>Contact Us</button>
                                <button>Watch now</button>
                            </div>
                            
                        </div>

                    </div>

                </div>

            </section>

        </>
    );
};

export default Cta;
