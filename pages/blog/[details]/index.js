import { useEffect, useState } from "react";
import Layout from "../../../layout/Layout";
import styles from "../../../styles/BlogDetail.module.css";
import { useRouter } from "next/router"; // Import the useRouter hook

function BlogDetail() {
  const router = useRouter(); // Initialize the router
  const id = Number(router.query.details); // Use the router to get the query parameter

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
  const text = blogPosts[id]?.properties?.Description?.rich_text[0]?.plain_text; // Metni alın
  const paragraphs = text?.split("<br>"); 


  return (
    <Layout>
      <div className={styles.blogDetail}>
      <img
          className={styles.headerImg}
          width='100'
          alt={blogPosts[id]?.properties?.cover?.files[0]?.name}
          height='100'
          src={blogPosts[id]?.properties?.cover?.files[0]?.file?.url}
        />
        <article>
          <div className={styles.box}>
            <div></div>
          </div>
          <h1>{blogPosts[id]?.properties?.Title?.url}</h1>
          <div className={styles.textContainer}>
      {paragraphs?.slice(0, paragraphs.length / 2).map((paragraph, index) => (
        <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
      ))}
    </div>
    <img className={styles.blogImg} src={blogPosts[id]?.properties?.image?.files[0]?.file?.url} alt="Blog Resmi" />
    <div className={styles.textContainer}>
      {paragraphs?.slice(paragraphs.length / 2).map((paragraph, index) => (
        <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
      ))}
    </div>

        </article>
        <article>
          <div className={styles.tags}>
            <span>
               {blogPosts[id]?.properties?.Tags?.multi_select[0]?.name} 
            </span>
            <span>
               {blogPosts[id]?.properties?.Tags?.multi_select[1]?.name} 
            </span>
          </div>
          <div>

          </div>
        </article>
      </div>
    </Layout>
  );
}

export default BlogDetail;
