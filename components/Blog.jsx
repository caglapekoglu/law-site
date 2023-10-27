import styles from "../styles/Blog.module.css"; 
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
const Blog = () => {
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
    <div className={styles.container}>
      <div className={styles.box}>
        <div></div>
      </div>
      <h1>
        Güncel <span>Blog</span> Yazılarımız
      </h1>
      <p>
        Hukuki konularda sizleri bilgilendirmek, haklarınızı korumanıza yardımcı
        olmak amacıyla düzenli olarak güncel blog yazıları sunuyoruz. Hukuk
        dünyasındaki son gelişmeleri, önemli yargı kararlarını ve hukuki
        ipuçlarını ele alıyoruz.
      </p>
      <Link className={styles.button} href='/blog'>
          Tamamını gör
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </Link>
        <ul>
          {blogPosts?.slice(0, 2)?.map((post, index) => {
            return (
              <div key={index}>
                <img src={post?.properties?.cover?.files[0]?.file?.url} alt={post.properties.Title.url} />
                <div>
                  <h3>{post.properties?.Title?.rich_text[0]?.plain_text}</h3>
                  <p>
                  {post?.properties?.Description?.rich_text[0]?.text?.content?.length > 200
                  ? post?.properties?.Description?.rich_text[0]?.text?.content?.substring(0, 150) + "..."
                  : post?.properties?.Description?.rich_text[0]?.text?.content}
                  </p>
                  <Link href={`/blog/${index}`}>Detaylı İncele 
                  <ion-icon name="arrow-forward-outline"></ion-icon></Link>
                </div>
              </div>
            );
          })}
        </ul>
      </div>
  );
};

export default Blog;
