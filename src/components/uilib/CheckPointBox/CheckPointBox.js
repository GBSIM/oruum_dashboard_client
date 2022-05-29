import './CheckPointBox.css';

export default function CheckPointBox(props) {
    const headerText = props.headerText;
    const checkPointTextList = props.checkPointList;
    const image = props.image;

    const CheckPointList = checkPointTextList.map((checkPointText,index) => (<CheckPointText key={index} image={image} textCheckPoint={checkPointText}></CheckPointText>))

    return (
        <div className='check-point-box'>
            <CheckPointHeader headerText={headerText}></CheckPointHeader>
            {CheckPointList}
        </div>
    )
}

function CheckPointHeader(props) {
    return(
        <h2 className="check-point-header">
            {props.headerText}
        </h2>
    )
}

function CheckPointText(props) {
    return (
        <div className="check-point-container">
            <img className='check-point-image' src={props.image} alt='check'></img>
            <button className='check-point-text'>{props.textCheckPoint}</button>
        </div>
    )
}