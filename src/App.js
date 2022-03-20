import React, { useEffect, useState } from "react";
import "./App.css";
import BodyList from "./components/BodyList";
import BodyPic from "./components/BodyPic";
import Header from "./components/Header";

const total = {
  body: 17,
  eyes: 17,
  hair: 73,
  mouth: 24,
  eyebrows: 15,
  hats: 28,
  glasses: 17,
  clothing1: 5,
  clothing2: 5,
  clothing3: 9,
  neckwear: 18,
  earrings: 18,
};

const total1 = {
  clothing1: 5,
  clothing2: 5,
  clothing3: 9,
};

function App() {
  const [item, setItem] = useState({
    body: 1,
    eyes: 1,
    hair: 1,
    mouth: 1,
    eyebrows: 1,
    hats: 1,
    glasses: 1,
    clothing1: 1,
    clothing2: 1,
    clothing3: 1,
    neckwear: 1,
    earrings: 1,
  });

  const changeItem = (itemSelected, num) => {
    if (itemSelected.includes("layer_")) {
      setItem({
        ...item,
        [itemSelected.replace("layer_", "clothing")]: num,
      });
    } else {
      setItem({ ...item, [itemSelected]: num });
    }
  };

  let arrDisplay = [];

  for (const [key, value] of Object.entries(total)) {
    arrDisplay.push(
      <BodyList
        path={`character/${
          key === "earrings" ||
          key === "glasses" ||
          key === "hats" ||
          key === "neckwear"
            ? `accessories/${key}`
            : key === "clothing1"
            ? `clothes/layer_1`
            : key === "clothing2"
            ? `clothes/layer_2`
            : key === "clothing3"
            ? `clothes/layer_3`
            : key
        }`}
        total={value}
        changeItem={changeItem}
      />
    );
  }

  const randomize = () => {
    setItem({
      ...item,
      body: Math.floor(Math.random() * total.body + 1),
      eyes: Math.floor(Math.random() * total.eyes + 1),
      hair: Math.floor(Math.random() * total.hair + 1),
      mouth: Math.floor(Math.random() * total.mouth + 1),
      eyebrows: Math.floor(Math.random() * total.eyebrows + 1),
      hats: Math.floor(Math.random() * total.hats + 1),
      glasses: Math.floor(Math.random() * total.glasses + 1),
      clothing1: Math.floor(Math.random() * total.clothing1 + 1),
      clothing2: Math.floor(Math.random() * total.clothing2 + 1),
      clothing3: Math.floor(Math.random() * total.clothing3 + 1),
      neckwear: Math.floor(Math.random() * total.neckwear + 1),
      earrings: Math.floor(Math.random() * total.earrings + 1),
    });
  };

  useEffect(() => {
    randomize();
  }, []);

  return (
    <>
      <div className="container">
        <Header title={"Character"} subtitle={"🛠️CUSTOMIZATION🛠️"} />
        <div className="avatar-group gap-30">
          <div>
            <div className="avatar-wrapper">
              <div className="avatar">
                <BodyPic parts={"body"} index={1} picNum={item.body} />
                <BodyPic parts={"eyes"} index={2} picNum={item.eyes} />
                <BodyPic
                  parts={"clothes/layer_1"}
                  index={3}
                  picNum={item.clothing1}
                />
                <BodyPic
                  parts={"clothes/layer_2"}
                  index={4}
                  picNum={item.clothing2}
                />
                <BodyPic
                  parts={"clothes/layer_3"}
                  index={5}
                  picNum={item.clothing3}
                />
                <BodyPic parts={"mouth"} index={5} picNum={item.mouth} />
                <BodyPic parts={"nose"} index={5} picNum={1} />
                <BodyPic parts={"eyebrows"} index={5} picNum={item.eyebrows} />
                <BodyPic
                  parts={"accessories/earrings"}
                  index={6}
                  picNum={item.earrings}
                />
                <BodyPic
                  parts={"accessories/hats"}
                  index={8}
                  picNum={item.hats}
                />
                <BodyPic
                  parts={"accessories/glasses"}
                  index={6}
                  picNum={item.glasses}
                />
                <BodyPic
                  parts={"accessories/neckwear"}
                  index={6}
                  picNum={item.neckwear}
                />
                <BodyPic parts={"hair"} index={7} picNum={item.hair} />
              </div>
              <div className="text-center">
                <button
                  className="button"
                  onClick={() => {
                    randomize();
                  }}
                >
                  Randomize!
                </button>
              </div>
            </div>
          </div>
          <div>{arrDisplay}</div>
        </div>
      </div>
    </>
  );
}

export default App;
