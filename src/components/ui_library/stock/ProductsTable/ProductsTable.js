import './ProductsTable.css';
import TableContents from '../../unit/TableContents/TableContents';
import TableHeader from '../../unit/TableHeader/TableHeader';
import AddButton from '../../unit/AddButton/AddButton';
import TagsWithButton from '../../block/TagsWithAddButton/TagsWithButton';
import ContentsTitle from '../../unit/ContentsTitle/ContentsTitle';

import { useSelector } from "react-redux";

export default function ProductsTable() {
    const {name,productList,productSalesRatioList,productGrowthList,productTagLists} = useSelector(state => state.stock);

    const TableContentsList = productList.map((product,index) => (
        <TableContents
            contentsList={[product,
                           productSalesRatioList[index],
                           productGrowthList[index],
                           <TagsWithButton tagList={productTagLists[index]} 
            key={index}></TagsWithButton>]}></TableContents>
    ))

    return (
        <div>
            <ContentsTitle title={{name}.name + ', 어떤 제품을 파나요?'}></ContentsTitle>
            <div style={{marginTop:'10px'}}></div>
            <TableHeader headerList={['제품','매출비율','전년대비성장','태그']}></TableHeader>
            {TableContentsList}
            <div style={{marginTop:'10px'}}></div>
            <AddButton buttonText='새로운 제품 추가하기'></AddButton>
        </div>
    )
}