import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (220)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          officia deserunt praesentium molestiae. Nobis quia adipisci qui,
          blanditiis itaque quam voluptates, earum ex tenetur vel dolores fugit
          repellat et ab ipsam saepe sunt dicta iste? Vitae ullam ipsa
          architecto veniam illum, a ad aut nobis iure cupiditate dolorem ab
          voluptatem suscipit perferendis.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint a,
          voluptas iusto corrupti rerum similique, soluta cumque saepe fugiat
          ea, non vel vitae quidem asperiores. Consectetur quos molestias
          repudiandae, neque qui omnis.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
