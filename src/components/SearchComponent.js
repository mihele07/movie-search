import React from 'react'

const SearchComponent = ({handleInput, search}) => {
    return (
<section className="searchboxContainer">
    <input 
    type="text" 
    placeholder = "Start Your Movie Search" 
    className="searchbox" 
    onChange = {handleInput}
    onKeyPress = {search}
    />
</section>
    )
}

export default SearchComponent
