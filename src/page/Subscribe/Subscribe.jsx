
import style from './Subscribe.module.scss'
import house from '../../img/house.png'
import email from '../../img/email.svg'

const Subscribe = () => {
    return (
        <>
            <section className={style.subscribe}>
                <div className="container">
                    <div className={style.subscribe_row}>
                        <div className={style.subscribe_text}>
                            <h1>Find your custom matched commercial real estate space.</h1>
                            <p>In oculis quidem exercitus quid ex ea consequatur? autem vel eum fugiat, quo pertineant ero tibique</p>
                            <form action="">

                                <label htmlFor='subscribe-inp'>
                                    <input  className='subscribe-inp' placeholder='Your email address' type="text"/>
                                    <button>Subscribe</button>
                                </label>
                            </form>
                        </div>
                        <div className={style.subscribe_img}>
                            <img src={house} alt=""/>
                        </div>

                    </div>
                   

                  
                </div> 
                
            </section>
          
        </>
    );
};

export default Subscribe;
