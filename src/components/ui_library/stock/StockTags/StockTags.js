import { useSelector, useDispatch } from "react-redux";

import TagsWithButton from "../../block/TagsWithAddButton/TagsWithButton";

export default function StockTags() {
    const {tagList,tagListCopy} = useSelector(state => state.stock);
    
    return (
        <div>
            <TagsWithButton tagList={tagList} buttonText='추가하기'></TagsWithButton>
            {tagListCopy}
        </div>
    )
}