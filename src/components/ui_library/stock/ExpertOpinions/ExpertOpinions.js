import TableContents from "../../unit/TableContents/TableContents"
import TableHeader from "../../unit/TableHeader/TableHeader"

import { useSelector } from "react-redux";

export default function ExpertOpinions() {
    const {opinionList,opinionNumberList} = useSelector(state => state.stock);

    const OpinionList = opinionList.map((opinion,index) => (
        <TableContents
            contentsList={[opinion,opinionNumberList[index],opinionNumberList[index]/opinionNumberList.reduce((a, b) => a + b, 0)]}
            key={index}></TableContents>
    ));

    return (
        <div style={{flex:'1',width:'100%'}}>
            <TableHeader
                headerList={['의견','개수','비율']}></TableHeader>
            {OpinionList}
        </div>
        
    )
}