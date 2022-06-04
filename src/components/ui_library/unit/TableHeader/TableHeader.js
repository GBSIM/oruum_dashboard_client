import HorizontalBar from '../HorizontalBar/HorizontalBar';

import './TableHeader.css';

export default function TableHeader(props) {
    const headerList = props.headerList;

    const HeaderTextList = headerList.map((header,index) => 
                                            (<div className='header-text-container'>
                                                <span className='header-text'>
                                                    {header}
                                                </span>
                                            </div>));

    return (
        <div>
            <div className='header-text-list-container'>
                {HeaderTextList}
            </div>
            <HorizontalBar height='2px'></HorizontalBar>
        </div>
    )
}