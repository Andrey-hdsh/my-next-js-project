import Link from "next/link";

const Post = ({ post: { title, body, userId } }) => {
  return (
    <div>
      <Link href="/">Назад</Link>
      <br />
      <h2>{title}</h2>
      <p>{body}</p>
      <strong>Autor Id :{userId}</strong>
    </div>
  );
};

export default Post;
