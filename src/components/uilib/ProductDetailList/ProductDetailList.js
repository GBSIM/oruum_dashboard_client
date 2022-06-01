import './ProductDetailList.css';
import ContentsTitle from '../ContentsTitle/ContentsTitle';
import ContentsAddButton from '../ContentsAddButton/ContentsAddButton';

export default function ProductDetailList(props) {
    const ProductDetailList = props.productList.map((product,index) => 
        (<ProductDetail 
            key={index} 
            product={product}
            productSummary={props.productSummaryList[index]}
            productDetailList={props.productDetailLists[index]}></ProductDetail>));

    return (
        <div className='product-detail-list-container'>
            <div style={{'marginBottom':'10px'}}>
                <ContentsTitle title={props.title}></ContentsTitle>
            </div>
            {ProductDetailList}
        </div>
    )
}

function ProductDetail(props) {
    const ProductDetailContentsList = props.productDetailList.map((productDetail,index) => 
        (<ProductDetailContents key={index} productDetail={productDetail}></ProductDetailContents>));
    let Summary;
    if (props.productSummary == '') {
        Summary = <ContentsAddButton buttonText='새로운 설명 추가하기'></ContentsAddButton>;
    } else {
        Summary = props.productSummary;
    }

    return (
        <div className='product-detail'>
            <div className='product-summary-container'>
                <h3 className='product-name'>{props.product}</h3>
                <div className='product-summary-divider'></div>
                <button className='product-summary-button'>
                    <h3 className='product-summary'>
                        {Summary}
                    </h3>
                </button>
            </div>
            {ProductDetailContentsList}
            <ContentsAddButton buttonText='새로운 설명 추가하기'></ContentsAddButton>        
        </div>
    )
}

function ProductDetailContents(props) {
    return (
        <div className='product-detail-contents-container'>
            <div className='product-detail-contents-icon-container'>
                <img src={require('./images/icon_detail.png')} className='product-detail-contents-icon'></img>
            </div>
            <button className='product-detail-contents'>
                <span>{props.productDetail}</span>
            </button>
        </div>
    )
}