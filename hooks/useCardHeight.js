import { useEffect, useState } from "react";

export default function useCardHeight() {
  const [height, setHeight] = useState();
  useEffect(() => {
    const myDiv = document.getElementById("cards");

    myDiv.addEventListener("resize", function () {
      const height = myDiv.clientHeight;
      console.log(height);
      setHeight(() => {
        return height;
      });
    });
  }, []);
  return height;
}
