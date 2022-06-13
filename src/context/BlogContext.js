import { createContext, useState } from 'react';

export const BlogContext = createContext();

export default function BlogContextProvider({ children }) {
  const [blogList, updateBlogList] = useState([]);

  return <BlogContext.Provider value={{ blogList, updateBlogList }}>{children}</BlogContext.Provider>;
}
