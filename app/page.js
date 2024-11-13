import Link from "next/link";

async function fetchData() {
  const rest = await fetch("https://jsonplaceholder.typicode.com/posts");
  const result = await rest.json();
  return result;
}

export default async function Home() {
  const posts = await fetchData();

  return (
    <div>
      <h1>Главная страница</h1>
      {posts.map((post) => (
        <div key={post.id} className="post">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <Link href={`/post/` + post.id}>Детальнее</Link>
        </div>
      ))}
    </div>
  );
}
