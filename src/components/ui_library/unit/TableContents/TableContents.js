import HorizontalBar from '../HorizontalBar/HorizontalBar';

import './TableContents.css';

export default function(props) {
    const contentsList = props.contentsList;

    const ContentsTextList = contentsList.map((content,index) => 
                                            (<div className='contents-text-container'>
                                                <span className='contents-text'>
                                                    {content}
                                                </span>
                                            </div>));

    return (
        <div>
            <div className='contents-text-list-container'>
                {ContentsTextList}
            </div>
            <HorizontalBar height='1px'></HorizontalBar>
        </div>
    )
}