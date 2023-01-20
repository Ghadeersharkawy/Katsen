import React from "react";
const CatDetails = ({ cat }) => {
    const { id, name, email } = cat;
    return (
        <>
            <div class="card-container" key={id}>
                <img alt="monster" src={`https://robohash.org/${id}?set=set4&amp;size=180x180`} />
                <h2> {name}</h2>
                <p> {email} </p>
            </div>
        </>
    )
}
export default CatDetails;