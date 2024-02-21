import { useState, useEffect } from 'react';
import { gsap, Power3 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

import bgBricks from '../assets/img/bg-bricks.jpg';

gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger

/**
 * A register page component that handles form submission and validation.
 * @returns {JSX.Element} The register page JSX element.
 */
export default function Register() {
    const divStyle = {
        backgroundImage: `url(${bgBricks})`,
        backgroundRepeat: 'repeat',
        backgroundPosition: 'center center',
        minHeight: '100vh'
    };

    // Form state variables and setter functions
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const [privacyPolicyChecked, setPrivacyPolicyChecked] = useState(false);
    const [errors, setErrors] = useState({});

    const handlePrivacyPolicyChange = (e) => {
        setPrivacyPolicyChecked(e.target.checked);
    };

    /**
     * Handles form submission.
     * @param {Event} e - The form submission event.
     */
    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = {};

        // Basic email validation
        if (!email.trim()) {
            validationErrors.email = 'メールアドレスを入力してください';
        } else if (!/^\S+@\S+\.\S+$/.test(email)) {
            validationErrors.email = '有効なメールアドレスを入力してください';
        }

        // Basic password validation (minimum length)
        if (!password.trim()) {
            validationErrors.password = 'パスワードを入力してください';
        } else if (password.length <= 6) {
            validationErrors.password = 'パスワードは少なくとも6文字以上である必要があります';
        }

        // Confirm password validation
        if (password !== confirmPassword) {
            validationErrors.confirmPassword = 'パスワードが一致しません';
        }

        // Basic dropdown validation
        if (!selectedOption) {
            validationErrors.selectedOption = '選択項目を選択してください';
        }

        // Privacy policy validation
        if (!privacyPolicyChecked) {
            validationErrors.privacyPolicy = 'プライバシーポリシーに同意する必要があります';
        }

        // If there are validation errors, update the state
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            validationErrors.email = '';
            validationErrors.confirmPassword = '';
            validationErrors.privacyPolicy = '';
            setErrors({});

            // Submit the form or perform further actions
            console.log('Form submitted successfully');
        }
    }

    /**
     * Use effect to initialize animations on component mount.
     */
    useEffect(() => {
        // Define the animations for elements with individual animations (main__header and collection__item)
        const animatioIntial = gsap.to([".main__header", ".collection__item"], {
            opacity: 0,
            y: 50,
        });

        // Create stagger animation for main__heade and collection__item
        const fadeInUpAnimation = gsap.to([".main__header", ".collection__item"], {
            opacity: 1,
            y: 0,
            visibility: "visible",
            duration: 1,
            ease: Power3.easeOut,
            stagger: 0.5,
        });

        // Combine all animations into a timeline
        const animationTimeline = gsap.timeline();
        animationTimeline.add(animatioIntial).add(fadeInUpAnimation);

        // Initialize the animations when the component mounts
        window.onload = function () {
            animationTimeline.play();
        };

    }, []);

    return (
        <div className="main__wrapper login" style={divStyle}>
            <section className="introSection">
                <div className="main__inner">
                    <header className="main__header">
                        <nav className="nav">
                            <div className="nav__item">
                                <p className="nav__text">エアドロコンシェルジュ</p>
                            </div>
                        </nav>
                    </header>
                    <div className="main__body">
                        <div className="collection">
                            <div className="collection__item">
                                <div className="collection__header">
                                    <p className="collection__title">新規登録</p>
                                </div>
                                <div className="collection__body">
                                    <form className="form" onSubmit={handleSubmit}>
                                        <div className="form__group">
                                            <label className="form__label">メールアドレス</label>
                                            <input
                                                type="email"
                                                className={`form__input ${errors.email ? 'error' : ''}`}
                                                placeholder=""
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                            {errors.email && <p className="error-message">{errors.email}</p>}
                                        </div>
                                        <div className="form__group">
                                            <label className="form__label">パスワード</label>
                                            <input
                                                type="password"
                                                className={`form__input ${errors.password ? 'error' : ''}`}
                                                placeholder=""
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                            {errors.password && <p className="error-message">{errors.password}</p>}
                                        </div>
                                        <div className="form__group">
                                            <label className="form__label">パスワード（確認用）</label>
                                            <input
                                                type="password"
                                                className={`form__input ${errors.confirmPassword ? 'error' : ''}`}
                                                placeholder=""
                                                value={confirmPassword}
                                                onChange={(e) => setConfirmPassword(e.target.value)}
                                            />
                                            {errors.confirmPassword && <p className="error-message">{errors.confirmPassword}</p>}
                                        </div>
                                        <div className="form__group">
                                            <label className="form__label">購入プラン</label>
                                            <div className="custom-dropdown">
                                                <select
                                                    className="form__input custom-dropdown-select"
                                                    value={selectedOption}
                                                    onChange={(e) => setSelectedOption(e.target.value)}
                                                >
                                                    {/* Instead of Select make it japanese text choose */}
                                                    <option value="">選択してください</option>
                                                    <option value="item-1">Item 1</option>
                                                    <option value="item-2">Item 2</option>
                                                </select>
                                                <div className="custom-dropdown-arrow"></div>
                                            </div>
                                            {errors.selectedOption && <p className="error-message">{errors.selectedOption}</p>}
                                        </div>
                                        <div className="form__group">
                                            <div className="form__privacyData">
                                                <p className="form__privacyDataTxt">
                                                    <b>利用規約</b><br />
                                                    <br />
                                                    第1条（適用範囲）<br />
                                                    <br />
                                                    本利用規約（以下、「本規約」といいます。）は、エアドロコンシェルジュ（以下、「当社」といいます。）が提供するツール（以下、「本ツール」といいます。）の利用に関して、当社とユーザーとの間で適用されるものとします。<br />
                                                    <br />
                                                    第2条（本ツールに関する注意事項）<br />
                                                    <br />
                                                    本ツールはエアードロップの取得を保証するものではありません。<br />
                                                    本ツールはエアードロップの受給条件と予想されるものの作業を自動化する機能を有しています。<br />
                                                    受け取ったエアードロップの30％の成果報酬が払われない場合、ユーザーのライセンスは剥奪されます。<br />
                                                    事情により、本ツールの内容は予告なく変更されることがあります。<br />
                                                    経営上の判断により、本ツールの価格は変動することがあります。<br />
                                                    <br />
                                                    第3条（サービスの停止・中断）<br />
                                                    <br />
                                                    当社は、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本ツールの全部または一部の提供を停止または中断することができるものとします。<br />
                                                    本ツールにかかるコンピュータシステムの保守点検または更新を行う場合<br />
                                                    地震，落雷，火災，停電または天災などの不可抗力により，本ツールの提供が困難となった場合<br />
                                                    コンピュータまたは通信回線等が事故により停止した場合<br />
                                                    その他，当社が本ツールの提供が困難と判断した場合<br />
                                                    当社は，本ツールの提供の停止または中断により，ユーザーまたは第三者が被ったいかなる不利益または損害についても，一切の責任を負わないものとします。<br />
                                                    <br />
                                                    第4条（ライセンスの取り消し）<br />
                                                    <br />
                                                    第2条3項に基づき、成果報酬が払われない場合、当社はユーザーのライセンスを無通知で剥奪することができます。<br />
                                                    <br />
                                                    第5条（改定・変更）<br />
                                                    <br />
                                                    当社は、必要と認めた場合には、ユーザーに通知することなく本規約の内容を変更することができます。<br />
                                                    本規約の変更後、ユーザーが本ツールを利用した場合、新しい利用規約に同意したものとみなされます。<br />
                                                    <br />
                                                    第6条（免責事項）<br />
                                                    <br />
                                                    本ツールの利用により発生したいかなる損害に対しても、当社は一切の責任を負わないものとします。<br />
                                                    <br />
                                                    第7条（適用法と管轄裁判所）<br />
                                                    <br />
                                                    本規約の解釈及び適用は、日本国の法律に従うものとします。<br />
                                                    本ツールに関する一切の紛争については、東京地方裁判所を第一審の専属的合意管轄裁判所とします。<br />
                                                </p>
                                                <div className="form__checkbox">
                                                    <input
                                                        type="checkbox"
                                                        id="checkbox"
                                                        checked={privacyPolicyChecked}
                                                        onChange={handlePrivacyPolicyChange}
                                                    />
                                                    <label htmlFor="checkbox">プライバシーポリシーに同意する</label>
                                                </div>
                                            </div>
                                            {errors.privacyPolicy && <p className="error-message">{errors.privacyPolicy}</p>}
                                        </div>
                                        <div className="form__group form--btn">
                                            <button className="btn btn--primary">登録</button>
                                        </div>
                                    </form>
                                    <div className="form__content">
                                        <p className="form__contentTxt">
                                            既にアカウントをお持ちの方は、
                                            <Link to="/login">ログイン</Link>
                                            してください。
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
