import { useRouter } from "next/router";
import { useEffect, useState } from "react";
function BlogDetail() {
  const router = useRouter();
  const id = Number(window.location.href.split("/").pop());
  const [blogPosts, setBlogPosts] = useState([]);
  useEffect(() => {
    fetch("/api/notion")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setBlogPosts(data);
          console.log(data);
        } else {
          console.error("Data is not an array:", data);
        }
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <p>Öğe ID: {id}</p>
      <p>{blogPosts[id]?.properties.Description.rich_text[0].text.content}</p>
    </div>
  );
}

export default BlogDetail;
