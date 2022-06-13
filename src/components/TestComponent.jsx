import { useContext } from 'react';
import { BlogContext } from '../context/BlogContext';

export default function TestComponent() {
  const { blogList } = useContext(BlogContext);

  return (
    <div>
      <h3> Test Component uwu</h3>

      {blogList.length > 0 && blogList.map((blogPost) => <p key={blogPost.id}>{blogPost.title}</p>)}
    </div>
  );
}
