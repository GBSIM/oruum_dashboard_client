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
                {props.opinion}
            </div>
            <div className='opinion-table-contents number'>
                {props.number}
            </div>
            <div className='opinion-table-contents ratio'>
                {props.ratio}
            </div>
        </div>
    )
}

function TableHeader(props) {
    return (
        <div className='opinion-table-row header'>
            <div className='opinion-table-contents opinion'>
                의견
            </div>
            <div className='opinion-table-contents number'>
                갯수
            </div>
            <div className='opinion-table-contents ratio'>
                비율
            </div>
        </div>
    )
}

