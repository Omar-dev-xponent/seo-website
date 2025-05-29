interface PostTitleProps {
  children?: React.ReactNode;
  title: string;
}

export default function PostTitle({ children, title }: PostTitleProps) {
  return <h1 dangerouslySetInnerHTML={{ __html: title }} />;
}
