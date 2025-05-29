"use client";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterIcon,
  TwitterShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  RedditIcon,
  RedditShareButton,
  TumblrIcon,
  TumblrShareButton,
} from "react-share";

interface SocialIconsProps {
  slug: string;
  title: string;
}

export default function SocialIcons({
  slug,
  title,
}: SocialIconsProps): JSX.Element {
  const url = `https://www.uprankly.com/blog/${slug}`;
  const buttonClassNames = "text-gray-800 hover:text-amber-400 p-2 mr-2 mt-2";

  return (
    <>
      <FacebookShareButton url={url} title={title} className={buttonClassNames}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>

      <TwitterShareButton url={url} title={title} className={buttonClassNames}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>

      <LinkedinShareButton url={url} title={title} className={buttonClassNames}>
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>

      <RedditShareButton url={url} title={title} className={buttonClassNames}>
        <RedditIcon size={32} round />
      </RedditShareButton>

      <TumblrShareButton
        url={url}
        title={title}
        className={buttonClassNames}
        windowWidth={660}
        windowHeight={460}
      >
        <TumblrIcon size={32} round />
      </TumblrShareButton>
    </>
  );
}
