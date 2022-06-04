import { useSelector } from "react-redux";

import NewsWithTitle from "../../block/NewsWithTitle/NewsWithTitle";

export default function StockNews() {
    const {newsLinkList, newsImageList, newsTitleList, 
           newsSummaryList, newsJournalList, newsDateList} = useSelector(state => state.stock);
        
    return (
        <NewsWithTitle
            imageUrlList={newsImageList}
            titleList={newsTitleList}
            summaryList={newsSummaryList}
            journalList={newsJournalList}
            dateList={newsDateList}
            linkList={newsLinkList}></NewsWithTitle>
    )

}