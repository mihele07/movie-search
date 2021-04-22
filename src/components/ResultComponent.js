import React from 'react'

const ResultComponent = ({result, openPopup}) => {
    return (
        <div className = "result" onClick = {() => openPopup(result.imdbID)}>
            <img src={result.Poster} />
            <h3>{result.Title}</h3>
            {console.log(result)}
            <h3>{result.Year}</h3>
        </div>
    )
}

export default ResultComponent
