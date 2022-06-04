export function convert_Number_to_text(number,unit) {
    let scaleText = '';
    let text = '';
    const absoluteNumber = Math.abs(number);

    if (unit === 'dollar') {
        if (absoluteNumber >= 1000000000) {
            scaleText = 'B';
        } else if (absoluteNumber >= 1000000) {
            scaleText = 'M';
        } else if (absoluteNumber >= 1000) {
            scaleText = 'K';
        } else {
            scaleText = '';
        }
        if (absoluteNumber >= 10000000000) {
            text = Math.floor(absoluteNumber/1000000000);
        } else if (absoluteNumber >= 1000000000) {
            text = ((number/1000000000).toFixed(1));
        } else if (absoluteNumber >= 10000000) {
            text = Math.floor(absoluteNumber/1000000);
        } else if (absoluteNumber >= 1000000) {
            text = ((absoluteNumber/1000000).toFixed(1));
        } else if (absoluteNumber >= 10000) {
            text = Math.floor(absoluteNumber/1000);
        } else if (absoluteNumber >= 1000) {
            text = ((absoluteNumber/1000).toFixed(1));
        } else {
            text = Math.floor(absoluteNumber);
        }
    } else {
        if (absoluteNumber >= 1000000000000) {
            scaleText = '조';
        } else if (absoluteNumber >= 100000000) {
            scaleText = '억';
        } else if (absoluteNumber >= 10000) {
            scaleText = '만';
        } else {
            scaleText = '';
        }
        if (absoluteNumber >= 10000000000000) {
            text = Math.floor(absoluteNumber/1000000000000);
        } else if (absoluteNumber >= 1000000000000) {
            text = ((number/1000000000000).toFixed(1));
        } else if (absoluteNumber >= 1000000000) {
            text = Math.floor(absoluteNumber/100000000);
        } else if (absoluteNumber >= 100000000) {
            text = ((absoluteNumber/100000000).toFixed(1));
        } else if (absoluteNumber >= 100000) {
            text = Math.floor(absoluteNumber/10000);
        } else if (absoluteNumber >= 10000) {
            text = ((absoluteNumber/10000).toFixed(1));
        } else {
            text = Math.floor(absoluteNumber);
        }
    }

    if (number < 0) {
        return ("-"+String(text)+scaleText)
    } else {
        return (String(text)+scaleText)
    }
}