import './Post.css';

// Component that renders part of the data of a single post passed in as a prop
export default function Post({post}) {
  return (
    <article className="post-excerpt">
      <h4>{post.title}</h4>
      <p>{post.body.substring(0, 100)}</p>
    </article>
  );
}