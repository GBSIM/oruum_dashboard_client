import IconText from '../../unit/IconText/IconText';
import { useState } from 'react';

export default function IconTextList(props) {
    const initialTextList = props.textList;
    const image = props.image;

    const [textList,setTextList] = useState(initialTextList);

    const textEditEvent = (newText,index) => {
        let textListCopy = [...textList];
        textListCopy[index] = newText;
        setTextList([...textListCopy]);
    }

    const IconTextList = textList.map((text,index) => (
        <IconText 
            image={image} 
            key={index} 
            order={index} 
            text={text}
            textEditEvent={textEditEvent}></IconText>
    ))

    return (
        <div style={{display:'flex',flexDirection:'column'}}>
            {IconTextList}
        </div>
    )
}