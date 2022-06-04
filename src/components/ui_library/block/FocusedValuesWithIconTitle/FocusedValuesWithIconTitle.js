import './FocusedValuesWithIconTitle.css';

import IconTitle from '../../unit/IconTitle/IconTitle';
import FocusedValue from '../../unit/FocusedValue/FocuesdValue';

export default function FocusedValuesWithIconTitle(props) {
    const title = props.title;
    const image = props.image;
    const focusedTitleList = props.focusedTitleList;
    const focusedValueList = props.focusedValueList;

    const FocusedValueList = focusedValueList.map((value,index) => (
        <div>
            <FocusedValue title={focusedTitleList[index]} value={value} key={index}></FocusedValue>
            <div style={{minHeight:'10px'}}></div>
        </div>
    ))

    return (
        <div style={{flex:'1'}}>
            <IconTitle title={title} image={image}></IconTitle>
            <div style={{minHeight:'10px'}}></div>
            {FocusedValueList}
        </div>
    )
}