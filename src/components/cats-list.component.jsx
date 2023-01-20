import React from "react";
import CatDetails from "./cat details/cat-details.component";
const CatsList = ({ cats }) => {
    return (
        <>
            {cats.map((cat) => {
                return (
                    <CatDetails cat={cat} />
                )
            })

            }
        </>
    )
}
export default CatsList;