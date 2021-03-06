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
            <div style={{'marginBottom':'10px'}}>
                <ContentsTitle title={props.title}></ContentsTitle> 
            </div>
            <TableHeader></TableHeader>
            {TableRows}
            <ContentsAddButton buttonText='새로운 제품 추가하기'></ContentsAddButton>
        </div>
    )
}

function TableRow(props) {
    return (
        <div className='product-table-row'>
            <button className='product-table-contents product'>
                <span>{props.product}</span>
            </button>
            <button className='product-table-contents sales-ratio'>
                <span>{props.salesRatio}%</span>
            </button>
            <button className='product-table-contents growth'>
                <span>{props.growth}%</span>
            </button>
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
                <span>제품</span>
            </div>
            <div className='product-table-contents sales-ratio'>
                <span>매출비율</span>
            </div>
            <div className='product-table-contents growth'>
                <span>전년대비 성장</span>
            </div>
            <div className='product-table-contents tag-list-container'>
                <span>태그</span>
            </div>
        </div>
    )
}