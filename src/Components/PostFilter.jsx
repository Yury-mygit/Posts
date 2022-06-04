import React from 'react';
import RcInput from "./UI/Inputs/RcInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <RcInput
                value={filter.query}
                onChange = {  e => setFilter(  { ...filter, query: e.target.value}  )    }
                plaseholder="Поиск..."
            />
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter(  {...filter,sort: selectedSort}   )     }
                defaultValue="Сортировка"
                options={[
                    {value:'title', name:'По названию'},
                    {value:'body',  name:'По описание'},
                ]}
            />
        </div>
    );
};

export default PostFilter;