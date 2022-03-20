import React from "react";

function BodyList({ path, total, changeItem }) {
  const pathArr = path.split("/");
  const title = pathArr[pathArr.length - 1];
  let imgArr = [];

  for (let i = 0; i < total; i++) {
    imgArr.push(
      <div
        id={`${title}`}
        className={
          changeItem ? "clickable square selected" : "clickable square"
        }
      >
        <img
          className="img-center"
          src={`${path}/${i + 1}.png`}
          alt=""
          height={"60"}
          style={{ top: "50%" }}
          onClick={() => changeItem(title, i + 1)}
        />
      </div>
    );
  }

  return (
    <div className="list-section">
      <h2>
        {title.includes("layer") ? title.replace("layer_", "clothes ") : title}
      </h2>
      <div className="list">{imgArr}</div>
    </div>
  );
}

export default BodyList;
