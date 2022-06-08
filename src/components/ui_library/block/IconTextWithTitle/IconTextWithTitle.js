import { useState } from 'react';
import './IconTextWithTitle.css';
import ContentsTitle from '../../unit/ContentsTitle/ContentsTitle';
import IconText from '../../unit/IconText/IconText';
import IconTextList from '../IconTextList/IconTextList';

export default function IconTextWithTitle(props) {
    const title = props.title;
    const image = props.image;
    const textList = props.textList;

    return (
        <div>
            <ContentsTitle title={title}></ContentsTitle>
            <IconTextList image={image} textList={textList}></IconTextList>
            <div style={{minHeight:'10px'}}></div>
        </div>
    )
}