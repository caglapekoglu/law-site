import React, { useEffect, useState } from "react";
import HeaderImage from "../../public/assets/header_image_blog.png";
import styles from "../../styles/BlogPage.module.css";
import Layout from "../../layout/Layout";
import Image from "next/image";
import Logo from "../../public/assets/blogLogo.png";
import Link from "next/link";
const BlogPage = () => {
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
      <div className={styles.blog}>
        <div className={styles.logo}>
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
            Gayrimenkul hukuku, mülkiyet hakları, tapu işlemleri, kiracı-hak
            sahibi ilişkileri ve emlak yatırımları gibi konuları kapsayan
            karmaşık bir hukuk dalıdır. Herkesin bir şekilde gayrimenkule sahip
            olduğu veya gayrimenkul işlemleriyle ilgilendiği bir noktada bu
            konular hakkında bilgi sahibi olmak önemlidir. Bu blog yazısında,
            gayrimenkul hukukunun temel kavramlarına ve mülkiyetinizi ve
            yatırımlarınızı nasıl koruyabileceğinize dair bazı önemli ipuçlarına
            odaklanacağız.
          </p>
          <ul>
            {blogPosts.map((post, index) => {
              return (
                <div key={index}>
                  <img src={post.properties.images.files[0].file.url} alt="" />
                  <div>
                    <h3>{post.properties.Title.url}</h3>
                    <p>
                      {post.properties.Description.rich_text[0].text.content
                        .length > 200
                        ? post.properties.Description.rich_text[0].text.content.substring(
                            0,
                            150
                          ) + "..."
                        : post.properties.Description.rich_text[0].text.content}
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
