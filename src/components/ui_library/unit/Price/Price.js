import './Price.css';

export default function Price(props) {
    const price = props.price;

    return (
        <div>
            <h2 className="price">
                {price}
            </h2>
        </div>
    )
}