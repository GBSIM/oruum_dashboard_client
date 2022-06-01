import './ExpertOpinionTable.css';

export default function ExpertOpniionTable(props) {
    let ratioList = [];
    const totalOpinionNumber = props.numberList.reduce((a,b) => a + b,0);
    props.numberList.map((number,index) => 
    {
        let ratio = (number/totalOpinionNumber*100).toFixed(1);
        let ratioText = ratio.toString() + "%";
        ratioList.push(ratioText)
    })

    const TableRows = props.opinionList.map((opinion,index) => 
    (<TableRow 
        opinion={opinion} 
        number={props.numberList[index]}
        ratio={ratioList[index]}
        key={index}></TableRow>));

    return (
        <div className='opinion-table-container'>
            <TableHeader></TableHeader>
            {TableRows}
        </div>
    )
}

function TableRow(props) {
    return (
        <div className='opinion-table-row'>
            <div className='opinion-table-contents opinion'>
                <span>{props.opinion}</span>
            </div>
            <div className='opinion-table-contents number'>
                <span>{props.number}</span>
            </div>
            <div className='opinion-table-contents ratio'>
                <span>{props.ratio}</span>
            </div>
        </div>
    )
}

function TableHeader(props) {
    return (
        <div className='opinion-table-row header'>
            <div className='opinion-table-contents opinion'>
                <span>의견</span>
            </div>
            <div className='opinion-table-contents number'>
                <span>개수</span>
            </div>
            <div className='opinion-table-contents ratio'>
                <span>비율</span>
            </div>
        </div>
    )
}

