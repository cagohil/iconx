import React from "react";
import Blade from "../../../assests/newBladeIcon.jpeg";
import iron from "../../../assests/iron.jpeg";
import box from "../../../assests/boxs.jpeg";
import blades from "../../../assests/baldesIcon.jpeg";
import bladeother from "../../../assests/blades.jpeg";
import factory from "../../../assests/factory.jpeg";
import handBlade from "../../../assests/handBlade.jpeg";
import factoryF from "../../../assests/factorya.jpeg";

const itemData = [
  { img: Blade },
  { img: blades },
  { img: factoryF },
  { img: iron },
  { img: box },
  { img: bladeother },
  { img: factory },
  { img: handBlade },
];

const ImageListItemAll = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "10px",
        width: "100%",
        marginTop: "15px",
      }}
    >
      {itemData.map((item, index) => (
        <img
          key={index}
          src={item.img}
          alt={`Image ${index + 1}`}
          style={{ width: "100%", height: "250px", objectFit: "cover" }}
          loading="lazy"
        />
      ))}
    </div>
  );
};

export default ImageListItemAll;
