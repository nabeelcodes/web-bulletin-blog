import Head from "next/head";
import Link from "next/link";
import BlogCard from "components/BlogCard/BlogCard";
import { AllBlogsListContainer } from "styles/utilities";
import { supabase } from "utils/supabaseClient";

export default function BlogList({ blogs }) {
  return (
    <>
      <Head>
        <title>All Blogs</title>
      </Head>

      <AllBlogsListContainer>
        {blogs.length > 0 &&
          blogs.map((blog) => {
            const regexPatternToReplace = /(,+ )|\.|,|\' | \'|\'|\/| |\?/gm;
            const shallowUrl = blog?.title?.replaceAll(
              regexPatternToReplace,
              "-",
            );

            return (
              <Link key={blog?.id} href={`/blogs/${blog?.id}-${shallowUrl}`}>
                <a>
                  <BlogCard blogDetails={blog} />
                </a>
              </Link>
            );
          })}
      </AllBlogsListContainer>
    </>
  );
}

export const getStaticProps = async () => {
  /* fetching list of SORTED(by id) blog posts from Supabase postgres DB */
  let { data, error } = await supabase
    .from("blogs")
    .select("id,title,description,published_on,content")
    .order("id", { ascending: false });

  if (error) {
    console.log(error.message);
    return {
      notFound: true,
    };
  }

  return {
    props: {
      blogs: data,
    },
    revalidate: 15,
  };
};
