import './ProductTable.css';
import ContentsTitle from '../ContentsTitle/ContentsTitle';
import TagBox from '../TagBox/TagBox';
import ContentsAddButton from '../ContentsAddButton/ContentsAddButton';

export default function ProductTable(props) {
    const TableRows = props.productList.map((product,index) => 
        (<TableRow 
            product={product} 
            salesRatio={props.salesRatioList[index]}
            growth={props.growthList[index]}
            tagList={props.tagLists[index]}
            key={index}></TableRow>));

    return (
        <div className='product-table-container'>
            <ContentsTitle title={props.title}></ContentsTitle>
            <TableHeader></TableHeader>
            {TableRows}
            <ContentsAddButton buttonText='새로운 제품 추가하기'></ContentsAddButton>
        </div>
    )
}

function TableRow(props) {
    return (
        <div className='product-table-row'>
            <div className='product-table-contents product'>
                {props.product}
            </div>
            <div className='product-table-contents sales-ratio'>
                {props.salesRatio}%
            </div>
            <div className='product-table-contents growth'>
                {props.growth}%
            </div>
            <div className='product-table-contents tag-list-container'>
                <TagBox tagList={props.tagList}></TagBox>
            </div>
        </div>
    )
}

function TableHeader(props) {
    return (
        <div className='product-table-row header'>
            <div className='product-table-contents product'>
                제품
            </div>
            <div className='product-table-contents sales-ratio'>
                매출비율
            </div>
            <div className='product-table-contents growth'>
                전년대비 성장
            </div>
            <div className='product-table-contents tag-list-container'>
                태그
            </div>
        </div>
    )
}