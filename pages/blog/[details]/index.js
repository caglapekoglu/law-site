import { useEffect, useState } from "react";
import Layout from "../../../layout/Layout";
import styles from '../../../styles/BlogDetail.module.css'
import Image from "next/image";
function BlogDetail() {
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
    <Layout>
      <div className={styles.blogDetail}>
        <Image
          className={styles.headerImg}
          width='100'
          alt={blogPosts[id]?.properties.images.files[0].name}
          height='100'
          src={blogPosts[id]?.properties.images.files[0].file.url}
        />
        <article>
          <div className={styles.box}>
            <div></div>
          </div>
            <h1>{blogPosts[id]?.properties.Title.url}</h1>
      <p>{blogPosts[id]?.properties.Description.rich_text[0].plain_text}</p>

  
    </article>
    </div>
    </Layout>
  );
}

export default BlogDetail;
