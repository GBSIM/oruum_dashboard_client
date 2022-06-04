import { useSelector } from "react-redux";

import IconTextWithTitle from "../../block/IconTextWithTitle/IconTextWithTitle";

export default function StockBuyPoint() {
    const {name, checkListBuy} = useSelector(state => state.stock);

    return (
        <div style={{flex:'1'}}>
            <IconTextWithTitle
                title={{name}.name+', 매수하자!'}
                image={require('./images/icon_up.png')}
                textList={checkListBuy}></IconTextWithTitle>
        </div>
    )
}