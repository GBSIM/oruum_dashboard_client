import ContentsTitle from "../../unit/ContentsTitle/ContentsTitle";
import TextWithVerticalBar from "../../unit/TextWithVerticalBar/TextWithVerticalBar";
import IconText from "../../unit/IconText/IconText";
import AddButton from "../../unit/AddButton/AddButton";
import IconTextList from "../../block/IconTextList/IconTextList";

import { useSelector } from "react-redux";

export default function ProductsDetail() {
    const {name,productList,productSummaryList,productDetailLists} = useSelector(state => state.stock);

    const ProductDetailList = productList.map((product,index) => (
        <ProductDetail 
            product={product}
            summary={productSummaryList[index]}
            detailList={productDetailLists[index]}
            key={index}></ProductDetail>
    ));


    return (
        <div>
            <ContentsTitle title={{name}.name+'의 제품에 대해 자세히 알고싶어요.'}></ContentsTitle>
            {ProductDetailList}
        </div>
    )
}

function ProductDetail(props) {
    const product = props.product;
    const summary = props.summary;
    const detailList = props.detailList;

    const DetailList = <IconTextList 
                            textList={detailList} 
                            image={require('./images/icon_detail.png')}></IconTextList>;

    let rightText = "";
    if (summary === "") {
        rightText = <AddButton buttonText="추가하기"></AddButton>
    } else {
        rightText = summary
    }

    return (
        <div>
            <div style={{minHeight:'10px'}}></div>
            <TextWithVerticalBar textType='h3' leftText={product} rightText={rightText}></TextWithVerticalBar> 
            {DetailList}
            <div style={{minHeight:'10px'}}></div>
            <AddButton buttonText='추가하기'></AddButton>
        </div>
    )
}