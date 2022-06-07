import './IconTextWithTitle';
import ContentsTitle from '../../unit/ContentsTitle/ContentsTitle';
import IconText from '../../unit/IconText/IconText';

export default function IconTextWithTitle(props) {
    const title = props.title;
    const image = props.image;
    const textList = props.textList;

    const IconTextList = textList.map((text,index) => (
        <IconText image={image} key={index} text={text}></IconText>
    ))

    return (
        <div>
            <ContentsTitle title={title}></ContentsTitle>
            {IconTextList}
            <div style={{minHeight:'10px'}}></div>
        </div>
    )
}