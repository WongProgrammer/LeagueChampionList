import React from 'react'

function List({ champions }) {
    return (
        champions.map((champion) => (
            <article key={champion.name}>
                <img src={champion.image} alt={champion.name}/>
                <h3>{champion.name}</h3>
                <p>{champion.date}</p>
            </article>
        ))
    );
}
export default List
