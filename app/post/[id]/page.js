import Post from "@/app/components/Post";

export async function generateMetadata({ params, searchParams }) {
  const post = await fetchData(params.id);

  return {
    title: post.title,
    description: post.body,
  };
}

export async function generateStaticParams() {
  // Здесь вы должны получить список всех возможных значений параметра `id`
  // Например, из базы данных или API
  const ids = await fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => data.map((post) => post.id));

  // Возвращаем список объектов с параметром `id` для каждой страницы
  return ids.map((id) => ({
    id: id.toString(),
  }));
}

async function fetchData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/` + id);
  const result = await res.json();
  return result;
}

const PagePosts = async ({ params: { id } }) => {
  const post = await fetchData(id);
  return (
    <div className="post">
      <Post post={post} />
    </div>
  );
};

export default PagePosts;
