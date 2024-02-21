import bg from './../assets/img/kv-bg.jpg'
import bgSp from './../assets/img/kv-bg-sp.jpg'
import cloud01 from './../assets/img/kv-cloud-01.png'
import cloud02 from './../assets/img/kv-cloud-02.png'
import cloud03 from './../assets/img/kv-cloud-03.png'
import cloud04 from './../assets/img/kv-cloud-04.png'
import cloud05 from './../assets/img/kv-cloud-05.png'
import banner from './../assets/img/kv-banner.png'
import key from './../assets/img/kv-key.png'
import prince from './../assets/img/kv-prince.png'
import soldier from './../assets/img/kv-soldier.png'
import treasure from './../assets/img/kv-treasure.png'
import treasureBlack from './../assets/img/kv-treasure-black.png'
import dragon from './../assets/img/char-dragon.png'
import archer from './../assets/img/char-archer.png'
import ghostFork from './../assets/img/char-ghost-fork.png'
import ghostWitch from './../assets/img/char-ghost-witch.png'
import ghostWhite from './../assets/img/char-ghost-white.png'
import witch from './../assets/img/char-witch.png'
import Images from './../components/Image'


// Check if vw is more than 768px
const isPc = window.matchMedia('(min-width: 768px)').matches

export default function Home() {

    return (
        <>
            <div className="home__wrapper">
                <div className="app__main">
                    <img src={isPc ? bg : bgSp} alt="" />
                </div>
                <Images img={cloud01} imgClass="clouds cloud-01" />
                <Images img={cloud02} imgClass="clouds cloud-02" />
                <Images img={cloud03} imgClass="clouds cloud-03" />
                <Images img={cloud04} imgClass="clouds cloud-04" />
                <Images img={cloud05} imgClass="clouds cloud-05" />
                <Images img={dragon} imgClass="dragon" />
                <Images img={archer} imgClass="archer" />
                <Images img={ghostFork} imgClass="ghost-fork" />
                <Images img={ghostWitch} imgClass="ghost-witch" />
                <Images img={ghostWhite} imgClass="ghost-white" />
                <Images img={witch} imgClass="witch" />
                <Images img={banner} imgClass="banner">
                    <div className="banner__container">
                        <h1 className="banner__title">NAME or ID</h1>
                        <p className="banner__text">MY PAGE</p>
                    </div>
                </Images>
                <Images img={key} imgClass="key" />
                <Images img={prince} imgClass="prince" />
                <Images img={soldier} imgClass="soldier" />
                <Images img={treasureBlack} imgClass="treasure-black" />

                <div className="text text--white text-balance p-md">
                    <p className="text__title">残高</p>
                </div>
                <div className="text text--white text-treasure">
                    <figure className="iconTreasure">
                        <img src={treasure} alt="treasure" />
                    </figure>
                    <p className="text__title">12,345,678<small className='text__sm'>円</small></p>
                </div>
                <div className="text text--white text-private-key p-sm">
                    <p className="text__title">プライベートキー</p>
                </div>
                <div className="text text--white p-lg text-password">
                    <p className="text__title">nv@d*dv++zdo</p>
                </div>
                <div className="text text--yellow text-automation">
                    <p className="text__title">自動化開始</p>
                </div>
            </div>
        </>
    )
}