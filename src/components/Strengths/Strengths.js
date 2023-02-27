import React from 'react';

const Strengths = () => {
    return (
        <div>
            <div className='gallery'>
                <div>
                    <h3 className='slide-text-gallery'>
                        Основні переваги <br/>
                        веб-сервісу
                    </h3>
                </div>

                <div className='container'>
                    <div className='hero-benefits-cards'>
                        <div className='benefits-cards-inner'>
                            <div className='benefits-card' >
                                <img width="164" height="164" src="https://surfshark.com/wp-content/themes/surfshark/assets/img/home/browse-privately.png" alt="free"/>
                                <h2>
                                    Сервіс повністю безкоштовний
                                </h2>
                                <p>
                                    Можливість використання програми як для зручної організацій файлів та папок, або для власного використання
                                </p>
                            </div>
                            <div className='benefits-card' >
                                <img width="164" height="164" src="https://surfshark.com/wp-content/themes/surfshark/assets/img/home/browse-privately.png" alt=""/>
                                <h2>
                                    Розроблений з використання сучасних технологій
                                </h2>
                                <p>
                                    Стек технолгій використаний в розробці: React.JS, Node.JS, MongoDB, Express
                                </p>
                            </div>
                            <div className='benefits-card' >
                                <img width="164" height="164" src="https://surfshark.com/wp-content/themes/surfshark/assets/img/home/browse-privately.png" alt=""/>
                                <h2>
                                    Простота використання
                                </h2>
                                <p>
                                    У програму додано лише най необхідніший функціонал, для легкості викорисання
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Strengths;