import React from "react";
const CatsList = ({ cats }) => {
    return (
        <>
            {cats.map((cat) => {
                return (
                    <div class="card-container" key={cat.id}>
                        <img alt="monster" src={`https://robohash.org/${cat.id}?set=set4&amp;size=180x180`} />
                        <h2> {cat.name}</h2>
                        <p> {cat.email} </p>
                    </div>
                )
            })

            }
        </>
    )
}
export default CatsList;