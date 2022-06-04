import { useSelector } from "react-redux";

import TagsWithButton from "../../block/TagsWithAddButton/TagsWithButton";

export default function StockTags() {
    const {tagList} = useSelector(state => state.stock);
    
    return (
        <TagsWithButton tagList={tagList} buttonText='추가하기'></TagsWithButton>
    )
}