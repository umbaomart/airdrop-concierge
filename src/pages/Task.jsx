import bgBricks from '../assets/img/bg-bricks.jpg'
import CollectionItem from '../components/CollectionItem'

import soldier from './../assets/img/kv-soldier.png'
import prince from './../assets/img/kv-prince.png'
import treasureBlack from './../assets/img/kv-treasure-black.png'
import ghostWhite from './../assets/img/char-ghost-white.png'
import dragon from './../assets/img/char-dragon.png'
import treasure from './../assets/img/kv-treasure.png'

export default function Task() {
    const divStyle = {
        backgroundImage: `url(${bgBricks})`,
        backgroundRepeat: 'repeat',
        backgroundPosition: 'center center',
        minHeight: '100vh'
    }

    return (
        <div className="task__wrapper" style={divStyle}>
            <div className="task__inner">
                <header className="task__header">
                    <nav className="nav">
                        <div className="nav__item">
                            <p className="nav__text">エアドロコンシェルジュ</p>
                        </div>
                        <div className="nav__item item--box">
                            <p className="nav__text">0X45X3...J9S87</p>
                        </div>
                    </nav>
                </header>
                <div className="task__body">
                    <div className="collection">
                        <div className="collection__item">
                            <div className="collection__header">
                                <p className="collection__title">プロジェクトを<span>選択</span></p>
                            </div>
                            <div className="collection__body">
                                <p className="collection__label label--lg">zkSync</p>
                            </div>
                            <figure className="collection__char char--soldier pos--botLeft">
                                <img src={soldier} alt="" />
                            </figure>
                        </div>

                        <CollectionItem
                            label="事前<span>準</span>備"
                            text="ウォレットに0.08 ETH準備しよう<br>完了したらチェックボタンを押してみて"
                            data="チェック"
                        />

                        <CollectionItem
                            label="タスク<span>1</span>"
                            text="まずはETHをブリッジするよ"
                            data="チェック"
                        />

                        <CollectionItem
                            label="タスク<span>2</span>"
                            text="次にUSDTにスワップしてね"
                            data="チェック"
                            char={
                                [
                                    { img: prince, classItem: 'char--prince', pos: 'pos--topRight' },
                                    { img: treasureBlack, classItem: 'char--treasureBlack', pos: 'pos--botLeft' },
                                ]
                            }
                        />

                        <CollectionItem
                            label="タスク<span>3</span>"
                            text="トランザクションを刻むよ"
                            data="チェック"
                        />

                        <CollectionItem
                            label="タスク<span>4</span>"
                            text="1STGだけステーキングしておこう"
                            data="チェック"
                            char={
                                [
                                    { img: ghostWhite, classItem: 'char--ghostWhite', pos: 'pos--botLeft' },
                                ]
                            }
                        />

                        <CollectionItem
                            label="タスク<span>5</span>"
                            text="NFTも取得しとこう"
                            data="チェック"
                        />

                        <CollectionItem
                            label="タスク<span>6</span>"
                            text="次のチェーンにブリッジするよ"
                            data="チェック"
                            char={
                                [
                                    { img: dragon, classItem: 'char--dragon', pos: 'pos--topRight' },
                                ]
                            }
                        />

                        <CollectionItem
                            label="タスク<span>7</span>"
                            text="最後はETHに戻す"
                            data="チェック"
                        />

                        <CollectionItem
                            label="<span>完了</span>！"
                            text="今回のタスクはこれで終了<br><span>タスク2,3,4は定期的に繰り返し<br>こなしておこう</span>"
                            char={
                                [
                                    { img: treasure, classItem: 'char--treasure', pos: 'pos--botRight' },
                                ]
                            }
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}