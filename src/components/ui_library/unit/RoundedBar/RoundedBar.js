import './RoundedBar.css';
import { convert_Number_to_text } from '../../../function_library/DataConversion';

export default function RoundedBar(props) {
    const maxValue = props.maxValue;
    const value = props.value;
    const unit = props.unit;
    const period = props.period;
    const maxHeight = props.maxHeight;

    const barHeight = String(Math.round(Math.abs(value)/maxValue*maxHeight)) + "px";
    // const barHeight = '150px';
    const valueText = convert_Number_to_text(value,unit);

    if (value >= 0) {
        return (
            <div className = 'rounded-bar-container'>
                <span className = 'rounded-bar-value positive'>{valueText}</span>
                <div className = 'rounded-bar positive' 
                     style={{height:barHeight}}></div>
                <span className = 'rounded-bar-period'>{period}</span>
            </div>
        )
    }

    return (
        <div className='rounded-bar-container'>
            <span className = 'rounded-bar-value negative'>{valueText}</span>
            <div className = 'rounded-bar negative'
                 style={{height:barHeight}}></div>
            <span className = 'rounded-bar-period'>{period}</span>
        </div>
    )
}