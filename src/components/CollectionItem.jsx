/*eslint-disable*/
export default function CollectionItem({ label, text, data, char }) {

    function renderChar(characters) {
        if (characters.length > 0) {
            return characters.map((item, index) => (
                <figure className={`collection__char ${item.classItem} ${item.pos}`} key={index}>
                    <img src={item.img} alt="" />
                </figure>
            ));
        } else {
            return null; // Return null if there are no characters to render
        }
    }

    return (
        <div className="collection__item">
            <div className="collection__header">
                <p className="collection__title" dangerouslySetInnerHTML={{ __html: label }}></p>
            </div>
            <div className="collection__body">
                <p className="collection__label" dangerouslySetInnerHTML={{ __html: text }}></p>
                {
                    data &&
                    <div className="collection__data">
                        <p className="collection__text" dangerouslySetInnerHTML={{ __html: data }}></p>
                    </div>
                }
            </div>
            {char && renderChar(char)}
        </div>
    )
}
