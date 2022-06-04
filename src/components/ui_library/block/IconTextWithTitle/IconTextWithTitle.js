import './IconTextWithTitle';
import ContentsTitle from '../../unit/ContentsTitle/ContentsTitle';
import IconText from '../../unit/IconText/IconText';
import AddButton from '../../unit/AddButton/AddButton';

export default function IconTextWithTitle(props) {
    const title = props.title;
    const image = props.image;
    const textList = props.textList;

    const IconTextList = textList.map((text,index) => (
        <IconText image={image} key={index} text={text}></IconText>
    ))

    return (
        <div>
            <ContentsTitle title={props.title}></ContentsTitle>
            {IconTextList}
            <div style={{minHeight:'10px'}}></div>
            <AddButton buttonText='추가하기'></AddButton>
        </div>
    )
}