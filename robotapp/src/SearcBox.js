import React from 'react'


const SearchBox = ({searchChange}) => {
    return(
        <div>
            <input type="search" 
            placeholder='Search your Robot'
            onChange={searchChange}
            />
        </div>
    )

}


export default SearchBox