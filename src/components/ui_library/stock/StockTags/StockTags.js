import { useSelector, useDispatch } from "react-redux";

import TagsWithButton from "../../block/TagsWithAddButton/TagsWithButton";
import { addStockTag, editNewStockTag } from "../../../../_reducers/stock";

export default function StockTags() {
    const dispatch = useDispatch();

    const {tagList,tagListCopy,newTag} = useSelector(state => state.stock);

    const stockTagAddEvent = (event) => {
        event.preventDefault();
        if ((newTag !== "") && (newTag !== null)) {
            dispatch(addStockTag(newTag));
        }
        editNewStockTag("");
    }

    const stockTagEditEvent = (event) => {
        event.preventDefault();
        const newTagInput = event.target.value.toString();
        dispatch(editNewStockTag(newTagInput));
    }
    
    return (
        <div>
            <TagsWithButton tagList={tagList} buttonText='추가하기' editInputSubmitEvent={stockTagAddEvent} editInputChangeEvent={stockTagEditEvent}></TagsWithButton>
            {tagListCopy}
        </div>
    )
}