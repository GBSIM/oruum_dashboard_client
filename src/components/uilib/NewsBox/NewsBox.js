import './NewsBox.css';

export default function NewsBox(props) {
    const newsLinkList = props.newsLinkList;
    const newsImageList = props.newsImageList;
    const newsTitleList = props.newsTitleList;
    const newsSummaryList = props.newsSummaryList;
    const newsJournalList = props.newsJournalList;
    const newsDateList = props.newsDateList;

    const NewsBlockList = newsTitleList.map((newsTitle,index) => (
        <NewsBlock
            newsLink = {newsLinkList[index]}
            image={newsImageList[index]}
            newsTitle={newsTitle}
            newsSummary={newsSummaryList[index]}
            newsJournal={newsJournalList[index]}
            newsDate={newsDateList[index]}></NewsBlock>
    ));

    return (
        <div>
            {NewsBlockList}
        </div>
    )
}

function NewsBlock(props) {
    return (
        <div className='news-block-container'>
            <div className='news-block-horizontal-divider'></div>
            <a href={props.newsLink} target="_blank" className='news-block'>
                <img className='news-block-image' src={props.image} alt='newsImage'></img>
                <div className='news-block-contents'>
                    <h3 className='news-block-title'>{props.newsTitle}</h3>
                    <div className='news-block-summary'>{props.newsSummary}</div>
                    <div className='news-basic-information'>{props.newsJournal} | {props.newsDate}</div>
                </div>
            </a>
        </div>
        
    )
}