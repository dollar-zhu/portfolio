import React from "react";

const RowImageComponent = ({ list }) => {
  return (
    <div className="row-image-component">
      {list.map((item) => {
        return (
          <div key={item.id}>
            <img src={item.img} alt={item.title} />
            <h3 className="section-title">{item.title}</h3>
            <p className="item-text">{item.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default RowImageComponent;
