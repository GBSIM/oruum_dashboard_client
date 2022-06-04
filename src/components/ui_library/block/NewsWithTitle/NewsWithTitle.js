import ContentsTitle from "../../unit/ContentsTitle/ContentsTitle";
import News from "../../unit/News/News";

export default function NewsWithTitle(props) {
    const imageUrlList = props.imageUrlList;
    const titleList = props.titleList;
    const summaryList = props.summaryList;
    const journalList = props.journalList;
    const dateList = props.dateList;
    const linkList = props.linkList;

    const NewsList = titleList.map((title,index) => (
        <News
            imageUrl={imageUrlList[index]}
            title={title}
            summary={summaryList[index]}
            journal={journalList[index]}
            date={dateList[index]}
            link={linkList[index]}
            key={index}></News>
    ))

    return (
        <div>
            <ContentsTitle title='NEWS'></ContentsTitle>
            {NewsList}
        </div>
    )
}