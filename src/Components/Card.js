import React from "react";
import "./Card.css";
import CardIner from "./CardIner";

const Card = (props) => {
  return (
    <div className="container mx-auto mt-5">
      <div className="card-header text-center mb-5 text-white">Cards</div>
      <div className="row ml-4 ">
        <CardIner
          image="https://i.imgur.com/ZTkt4I5.jpg"
          title="Dog"
          subTitle="It is German Dog"
        />
        <CardIner
          image="https://i.imgur.com/ZTkt4I5.jpg"
          title="Dog"
          subTitle="It is German Dog"
        />
        <CardIner
          image="https://i.imgur.com/ZTkt4I5.jpg"
          title="Dog"
          subTitle="It is German Dog"
        />
        <CardIner
          image="https://i.imgur.com/ZTkt4I5.jpg"
          title="Dog"
          subTitle="It is German Dog"
        />
        <CardIner
          image="https://i.imgur.com/ZTkt4I5.jpg"
          title="Dog"
          subTitle="It is German Dog"
        />
        <CardIner
          image="https://i.imgur.com/ZTkt4I5.jpg"
          title="Dog"
          subTitle="It is German Dog"
        />
      </div>
    </div>
  );
};
export default Card;
