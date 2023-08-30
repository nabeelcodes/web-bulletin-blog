import Link from "next/link";
import { Styled404 } from "styles/404.styled";

export default function custom404() {
  return (
    <Styled404>
      <h1>404</h1>
      <h2>Oops, We couldn&apos;t find that page!</h2>

      <div>
        <Link href={`/`}>
          <button>Go to Home</button>
        </Link>
        <Link href={`/blogs`}>
          <button>Go to Blogs</button>
        </Link>
      </div>
    </Styled404>
  );
}
