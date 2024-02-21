export default function Images({img, imgClass, children}) {
    return (
        <figure className={`app__bg--${imgClass} appsolute`}>
            <img src={img} alt={imgClass} />
            {children}
        </figure>
    )
}