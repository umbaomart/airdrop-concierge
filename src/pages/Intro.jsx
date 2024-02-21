import { useEffect } from 'react';
import { gsap, Power3 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import bgBricksBrown from '../assets/img/bg-bricks-br.jpg'
import bgBricks from '../assets/img/bg-bricks.jpg'
import msgKv from '../assets/img/kv-msg.png'
import karateKv from '../assets/img/kv-karate.png'
import groupChars from '../assets/img/kv-chars.png'
import witchKv from '../assets/img/char-witch.png'
import ghostFork from '../assets/img/char-ghost-fork.png'
import bannerFooter from '../assets/img/kv-banner-footer.png'
import heroTxt from '../assets/img/hero-txt.png'
import ghostWitch from '../assets/img/char-ghost-witch.png'

export default function Intro() {
    const divStyle = {
        backgroundImage: `url(${bgBricksBrown})`,
        backgroundRepeat: 'repeat',
        backgroundPosition: 'center center'
    }

    const introBg = {
        backgroundImage: `url(${bgBricks})`,
        backgroundRepeat: 'repeat',
        backgroundPosition: 'center center'
    }

    useEffect(() => {
        // Create a timeline for the initial animation
        const initialAnimation = gsap.timeline();

        initialAnimation.to([".main__header", ".collection__item", ".fadeInUp"], {
            opacity: 0,
            y: 50,
        });

        // Use ScrollTrigger for batch animations
        ScrollTrigger.batch([".main__header", ".collection__item", ".fadeInUp"], {
            interval: 0.5,
            onEnter: (batch) => {
                gsap.to(batch, {
                    opacity: 1,
                    visibility: 'visible',
                    y: 0,
                    stagger: 0.1,
                    overwrite: true,
                    ease: Power3.easeOut,
                });
            },
            start: "20px bottom",
            end: "bottom 20px",
        });

        // Trigger the animation when the component mounts
        initialAnimation.play();
    }, []);

    return (
        <div className="main__wrapper intro--wrapper">
            <section className="introSection" style={divStyle}>
                <div className="main__inner inner01">
                    <header className="main__header fadeInUp">
                        <nav className="nav">
                            <div className="nav__item">
                                <p className="nav__text">エアドロコンシェルジュ</p>
                            </div>
                            <div className="nav__item item--box">
                                <p className="nav__text">Wallet Connect</p>
                            </div>
                        </nav>
                    </header>
                    <div className="hero">
                        <div className="hero__inner">
                            <div className="hero__msg fadeInUp">
                                <figure className="hero__char char--warrior fadeInUp">
                                    <img src={karateKv} alt="" />
                                </figure>
                                <figure className="hero__msgKv">
                                    <img src={msgKv} alt="" />
                                </figure>
                                <h1 className="hero__msgLabel fadeInUp">
                                    <div className="hero__msgLabelKv">
                                        <img src={heroTxt} alt="" />
                                    </div>
                                </h1>
                            </div>
                            <div className="hero__data">
                                <figure className="hero__characters fadeInUp">
                                    <img src={groupChars} alt="" />
                                </figure>
                                <div className="notes fadeInUp">
                                    <p className="notes__txt">
                                        <span>「エアドロコンシェルジュ」</span>ってさ、<br />
                                        暗号通貨やトークンをタダでもらえる<br />
                                        <span>「エアドロップ」</span>ってやつのお手伝いを<br />
                                        してくれるツールなんだよ。<br />
                                        めちゃくちゃややこしいことを<br />
                                        全部やってくれるから、ボクたち<br />
                                        みたいに<span>簡単なボタン操作だけ</span>で、<br />
                                        <span>サクッともらえちゃう</span>んだって！
                                    </p>
                                    <figure className="notes__witch fadeInUp">
                                        <img src={witchKv} alt="" />
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="introSection" style={introBg}>
                <div className="main__inner">
                    <div className="intro__data fadeInUp">
                        <p className="intro___dataTxt">
                            <span>エアドロコンシェルジュ</span><br />
                            めっちゃすごい！<br />
                            <br />
                            <span className='withNum' data-num="1">リサーチ一切不要</span><br />
                            エアドロ情報なら任せて！<br />
                            <br />
                            <span className='withNum' data-num="2">タスクをかんたんに</span><br />
                            順番にボタンを押すだけ！<br />
                            <br />
                            <span className='withNum' data-num="3">サポート</span><br />
                            なんでも聞いてね！
                        </p>
                    </div>
                </div>
            </section>
            <section className="introSection" style={divStyle}>
                <div className="main__inner">
                    <div className="qAndA fadeInUp">
                        <div className="notes notes--qa">
                            <div className="notes__inner">
                                <div className="notes__label">
                                    <h2 className="notes__labelTxt">Q&A</h2>
                                </div>
                                <ul className="notes__list">
                                    <li className="notes__listItem"><span>⇒</span>エアドロはいつ実施されるか<br />誰にも分からん</li>
                                    <li className="notes__listItem"><span>⇒</span>エアドロの条件も<br />最後まで分からんよ</li>
                                    <li className="notes__listItem"><span>⇒</span>タスクをこなすほどもらえる<br />可能性は高くなる</li>
                                </ul>
                            </div>
                            <figure className="notes__char char--ghostFork fadeInUp">
                                <img src={ghostFork} alt="" />
                            </figure>
                        </div>
                    </div>
                </div>
            </section>
            <div className="footer" style={introBg}>
                <div className="footer__inner fadeInUp">
                    <figure className="footer__char">
                        <img src={ghostWitch} alt="" />
                    </figure>
                    <div className="footer__header">
                        <figure className="footer__headerKv">
                            <img src={bannerFooter} alt="" />
                            <p className="footer__headerTtl">購入はこちら</p>
                        </figure>
                    </div>
                    <div className="footer__data">
                        <p className="footer__dataLabel">
                            700 <span>USDT</span>
                        </p>
                        <div className="footer__dataGroup">
                            <p className="footer__dataTxt">決済方法</p>
                            <ul className="footer__dataList">
                                <li className="footer__dataItem">USDT</li>
                                <li className="footer__dataItem">クレジットカード</li>
                                <li className="footer__dataItem">銀行振込</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}