import { useState, useEffect } from 'react';
import { gsap, Power3 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import bgBricks from '../assets/img/bg-bricks.jpg';

gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger

/**
 * A forgot password page component that handles requesting a password reset.
 * @returns {JSX.Element} The forgot password page JSX element.
 */
export default function ForgotPass() {
    const divStyle = {
        backgroundImage: `url(${bgBricks})`,
        backgroundRepeat: 'repeat',
        backgroundPosition: 'center center',
        minHeight: '100vh',
    };

    // Form state variables and setter functions
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    /**
     * Handles form submission to request a password reset.
     * @param {Event} e - The form submission event.
     */
    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = {};

        // Basic email validation
        if (!email.trim()) {
            validationErrors.email = 'メールアドレスを入力してください';
        } else if (!/^\S+@\S+\.\S+$/.test(email)) {
            validationErrors.email = '有効なメールアドレスを入力してください';
        }

        // If there are validation errors, update the state
        if (Object.keys(validationErrors).length > 0) {
            setError(Object.values(validationErrors)[0]);
        } else {
            setError('');
        }
    };

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
                                    <p className="collection__title">パスワードを忘れた場合</p>
                                </div>
                                <div className="collection__body">
                                    <form className="form" onSubmit={handleSubmit}>
                                        <div className="form__group">
                                            <label className="form__label">メールアドレス</label>
                                            <input
                                                type="email"
                                                className={`form__input ${error ? 'error' : ''}`}
                                                placeholder=""
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                            {error && <p className="error-message">{error}</p>}
                                        </div>
                                        <div className="form__group form--btn">
                                            <button className="btn btn--primary">リセットメールを送信</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
