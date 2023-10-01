import { useState,useEffect } from "react";

export default function () {
  const [blogs, setblogs] = useState([]);
  useEffect(() => {
    fetch("/api/notion")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setblogs(() => {
            return data;
          });
        } else {
          setblogs(() => {
            return [];
          });
        }
      })
      .catch((error) => {
        setblogs(() => {
          return [];
        });
      });
  }, []);

  return blogs;
}
