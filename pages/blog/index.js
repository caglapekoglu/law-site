import React, { useEffect, useState } from "react";
import HeaderImage from "../../public/assets/header_image_blog.png";
import styles from "../../styles/BlogPage.module.css";
import Layout from "../../layout/Layout";
import Image from "next/image";
import Logo from "../../public/assets/blogLogo.png";
import Link from "next/link";
import useBlogs from "../../hooks/useBlogs";
const BlogPage = () => {
  const blogPosts = useBlogs();
  const [logoSlideIn, setLogoSlideIn] = useState(false);
  useEffect(() => {
    const timeId = setTimeout(() => {
      setLogoSlideIn(true);
    }, 300);
    return () => {
      clearTimeout(timeId);
    };
  }, []);
  return (
    <Layout>
      <div className={styles.blog}>
        <div
          className={`${styles.logo} ${logoSlideIn ? styles["slide-in"] : ""}`}
        >
          <Image alt="İğdeci Aytekin" src={Logo} />
        </div>
        <Image
          alt="İğdeci Aytekin"
          className={styles.headerImg}
          src={HeaderImage}
        />
        <article>
          <div className={styles.box}>
            <div></div>
          </div>
          <h1>Blog Yazıları</h1>
          <p>
          Hukuki konularda sizleri bilgilendirmek, haklarınızı korumanıza yardımcı olmak amacıyla düzenli olarak güncel blog yazıları sunuyoruz. Hukuk dünyasındaki son gelişmeleri, önemli yargı kararlarını ve hukuki ipuçlarını ele alıyoruz.
          </p>
          <ul>
            {blogPosts.map((post, index) => {
              return (
                <div key={index}>
                  <img
                    src={post?.properties?.cover?.files[0]?.file?.url}
                    alt=""
                  />
                  <div>
                    <h3>{post.properties.Title.url}</h3>
                    <p>
                      {post?.properties?.Description?.rich_text[0]?.text
                        ?.content?.length > 200
                        ? post?.properties?.Description?.rich_text[0]?.text?.content?.substring(
                            0,
                            150
                          ) + "..."
                        : post?.properties?.Description?.rich_text[0]?.text
                            ?.content}
                    </p>
                    <Link href={`/blog/${index}`}>
                      Detaylı İncele
                      <ion-icon name="arrow-forward-outline"></ion-icon>
                    </Link>
                  </div>
                </div>
              );
            })}
          </ul>
        </article>
      </div>
    </Layout>
  );
};

export default BlogPage;
