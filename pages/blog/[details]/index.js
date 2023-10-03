import { useEffect, useState } from "react";
import Layout from "../../../layout/Layout";
import styles from "../../../styles/BlogDetail.module.css";
import WP from "../../../public/assets/WpIcon.svg";
import Linkedin from "../../../public/assets/LinkedinIcon.svg";
import X from "../../../public/assets/XIcon.svg";
import Insta from "../../../public/assets/instaIcon.svg";
import { useRouter } from "next/router"; // Import the useRouter hook
import Image from "next/image";
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
  const pageUrl = `${window.location.protocol}//${window.location.host}${router.asPath}`;
  const textTitle = blogPosts[id]?.properties?.Title?.url;
  const shareOnWhatsApp = () => {
    const whatsappUrl = `https://api.whatsapp.com/send?text=${textTitle}%20${pageUrl}`;
    window.open(whatsappUrl, "_blank");
  };
  const shareOnLinkedIn = () => {
    const pageUrl = encodeURIComponent(window.location.href);
    const linkedinUrl = `https://www.linkedin.com/shareArticle?url=${pageUrl}&title=${textTitle}`;
    window.open(linkedinUrl, "_blank");
  };
  const shareOnX = () => {
    const twitterShareUrl = `https://twitter.com/intent/tweet?text=${textTitle}&url=${pageUrl}`;
    window.open(twitterShareUrl, "_blank");
  };

  return (
    <Layout>
      <div className={styles.blogDetail}>
        <img
          className={styles.headerImg}
          width="100"
          alt={blogPosts[id]?.properties?.cover?.files[0]?.name}
          height="100"
          src={blogPosts[id]?.properties?.cover?.files[0]?.file?.url}
        />
        <article>
          <div className={styles.box}>
            <div></div>
          </div>
          <h1>{blogPosts[id]?.properties?.Title?.url}</h1>
          <div className={styles.textContainer}>
            {paragraphs
              ?.slice(0, paragraphs.length / 2)
              .map((paragraph, index) => (
                <p
                  key={index}
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
              ))}
          </div>
          <img
            className={styles.blogImg}
            src={blogPosts[id]?.properties?.image?.files[0]?.file?.url}
            alt="Blog Resmi"
          />
          <div className={styles.textContainer}>
            {paragraphs
              ?.slice(paragraphs.length / 2)
              .map((paragraph, index) => (
                <p
                  key={index}
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
              ))}
          </div>
        </article>
        <article className={styles.tagsandsm}>
          <div className={styles.tags}>
            <span>
              {blogPosts[id]?.properties?.Tags?.multi_select[0]?.name}
            </span>
            <span>
              {blogPosts[id]?.properties?.Tags?.multi_select[1]?.name}
            </span>
          </div>
          <div className={styles.socialmedia}>
            <p>Sosyal Medyada Paylaş</p>
            <div style={{ display: "flex", gap: "3px" }}>
              <button onClick={shareOnWhatsApp}>
                <Image src={WP} />
              </button>
              <button onClick={shareOnLinkedIn}>
                <Image src={Linkedin} />
              </button>
              <button onClick={shareOnX}>
                <Image src={X} />
              </button>
            </div>
          </div>
        </article>
      </div>
    </Layout>
  );
}

export default BlogDetail;
