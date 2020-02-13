import React from "react";
import CardInfo from "./CardInfo"

function Card() {
    return(
        <div className="d-inline-block g-card" onClick={(e) => props.click(props.item)}>
            <img className="g-card-image" src={PaymentResponse.item.imgSrc} alt={PaymentResponse.item.imgSrc} />
            {props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link} />}
        </div>
    )
}

export default Card;