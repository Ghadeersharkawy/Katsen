import React from "react";
import CatDetails from "../cat-details/cat-details.component";
import './cats-list.styles.css';
const CatsList = ({ cats }) => {
    return (
        <div className="card-list">
            {cats.map((cat) => {
                return (
                    <CatDetails cat={cat} />
                )
            })

            }
        </div>
    )
}
export default CatsList;