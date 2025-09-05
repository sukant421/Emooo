import React, { useEffect, useState } from "react";

export default function Loader({ setScore, isTimeLeft }) {
  const selectedImposterEmoticon = [
    "😈",
    "👹",
    "💀",
    "🤡",
    "👻",
    "💩",
    "👾",
    "👽",
    "🤢",
    "👺",
  ];
  const [bitArray, setBitArray] = useState(new Array(5).fill(0));
  const [intervalValue, setIntervalValue] = useState(0);
  const [imposterEmoticon, setImposterEmoticon] = useState(
    selectedImposterEmoticon[Math.floor(Math.random() * 10)]
  );
  const [happyEmoticon, setHappyEmoticon] = useState("😀");
  const [imposterIndex, setImposterIndex] = useState(
    Math.floor(Math.random() * 10)
  );

  const getRandomIndex = () => {
    let randomIndex = Math.floor(Math.random() * 10);
    do {
      randomIndex = Math.floor(Math.random() * 10);
    } while (randomIndex === imposterIndex);
    return randomIndex;
  };

  console.log(isTimeLeft);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImposterIndex(getRandomIndex());
    }, 2500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ display: "flex", overflow: "hidden" }}>
        {bitArray &&
          bitArray.length > 0 &&
          bitArray.map((item, index) => {
            return (
              <div
                role="button"
                onClick={() => {
                  if (imposterIndex === index) {
                    setScore((score) => score + 1);
                    setImposterEmoticon(
                      selectedImposterEmoticon[
                        Math.floor(
                          Math.random() * selectedImposterEmoticon.length
                        )
                      ]
                    );
                    setImposterIndex(getRandomIndex());
                    setHappyEmoticon("😀");
                  } else {
                    setScore((score) => (score > 5 ? score - 5 : 0));
                    setImposterEmoticon(
                      selectedImposterEmoticon[
                        Math.floor(
                          Math.random() * selectedImposterEmoticon.length
                        )
                      ]
                    );
                    setImposterIndex(getRandomIndex());
                    setHappyEmoticon("🙁");
                  }
                }}
                key={index}
                style={{
                  fontSize: "50px",
                  padding: "5px",
                  pointerEvents: isTimeLeft ? "auto" : "none",
                  opacity: isTimeLeft ? 1 : 0.5,
                }}
              >
                {imposterIndex === index ? imposterEmoticon : happyEmoticon}
              </div>
            );
          })}
      </div>
    </div>
  );
}
