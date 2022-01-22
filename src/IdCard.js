import React from "react";

const IdCard = (props) => {
    return (
        <div className="IdCard">
            <img src={props.picture} alt="id card"/>
            <ul>
                <li>First Name: {props.firstName}</li>
                <li>Last Name: {props.lastName}</li>
                <li>Gender: {props.gender}</li>
                <li>Height: {props.height}</li>
                <li>Birth: {props.birth}</li>
            </ul>
        </div>
    )
}

export default IdCard;
