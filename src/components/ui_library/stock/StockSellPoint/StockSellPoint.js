import { useSelector } from "react-redux";

import IconTextWithTitle from "../../block/IconTextWithTitle/IconTextWithTitle";

export default function StockSellPoint() {
    const {name, checkListSell} = useSelector(state => state.stock);

    return (
        <div style={{flex:'1'}}>
            <IconTextWithTitle
                title={{name}.name+', 좀 더 생각해봐야!?'}
                image={require('./images/icon_down.png')}
                textList={checkListSell}></IconTextWithTitle>
        </div>
    )
}