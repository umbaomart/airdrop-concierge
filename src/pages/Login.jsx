
import { useState, useEffect } from 'react';
import { gsap, Power3 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

import bgBricks from '../assets/img/bg-bricks.jpg'

gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger

/**
 * A login page component that handles form submission and validation.
 * @returns {JSX.Element} The login page JSX element.
 */
export default function Login() {
    const divStyle = {
        backgroundImage: `url(${bgBricks})`,
        backgroundRepeat: 'repeat',
        backgroundPosition: 'center center',
        minHeight: '100vh'
    }

    // Add initial state of the main__wrapper element to be hidden (opacity: 0, y: 50)

    // Form state variables and setter functions
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    /**
     * Handles form submission.
     * @param {Event} e The form submission event.
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
        } else if (password.length < 6) {
            validationErrors.password = 'パスワードは少なくとも6文字以上である必要があります';
        }

        // If there are validation errors, update the state
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            validationErrors.email = '';
            validationErrors.confirmPassword = '';
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
                                    <p className="collection__title">ログイン</p>
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
                                        <div className="form__group form--btn">
                                            <button className="btn btn--primary">ログイン</button>
                                        </div>
                                    </form>
                                    <div className="form__content">
                                        <p className="form__contentTxt">
                                            新規登録は
                                            <Link to="/register">こちら</Link>
                                        </p>
                                        <p className="form__contentTxt">
                                            パスワードをリセットする場合は
                                            <Link to="/forgot-pass">こちら</Link>
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}