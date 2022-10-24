import React from 'react';
import style from './Space.module.scss'

import card1 from '../../img/Card/card1.png'
import card2 from '../../img/Card/card2.png'
import card_info from '../../img/space/spaceinfo.svg'

const Space = () => {
    return (
        <>
            <section className={style.space}>
                <div className="container-line">
                    <div className={style.space_row}>
                        <div className={style.space_img}>
                            <div className={style.card}>
                                <img src={card1} alt=""/>
                            </div>
                            <div className={style.card}>
                                <img src={card2} alt=""/>
                                <div className={style.card_info}>
                                    <div className={style.info_wrapper}>
                                        <img src={card_info} alt=""/>
                                        <div className={style.info_text}>
                                            <h3>Twelve West Lake</h3>
                                            <p>Space for up to 150 people</p>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        </div>
                        <div className={style.space_info}>
                            <h2>We provide best space for you!</h2>
                            <p>Quid ex eo ortum, tam inportuno tamque crudeli; sin, ut aliquid ex ea quid est et via procedat oratio quaerimus.</p>
                            <p>quid aut ad id omnia referri oporteat, ipsum autem nusquam hoc epicurus in ea commodi consequatur?</p>
                            <button>
                                Learn more
                            </button>

                        </div>
                    </div>

                </div>

            </section>

        </>
    );
};

export default Space;
