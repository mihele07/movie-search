import React from 'react'
import ResultComponent from './ResultComponent'

const ResultsComponent = ({results, openPopup}) => {
    return (
       <section className = "results">
           {results.map(result => (
               <ResultComponent key = {result.imdbID} result = {result} openPopup = {openPopup} />
           ))}
       </section>
    )
}



export default ResultsComponent
