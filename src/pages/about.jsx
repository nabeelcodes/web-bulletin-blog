import Head from "next/head";
import { Container } from "styles/utilities";
import { useRouter } from "next/router";
/*	CSS STYLES ARE FETCHED FROM 'src/styles/utilities.js'	*/

export default function About() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>About - Web Bulletin</title>
      </Head>

      <Container width="70%" aboutPageContainer>
        <h1>About the Project</h1>

        <p>
          Web Bulletin has been born as your everyday blogging site that is
          powered by{" "}
          <a
            href="https://supabase.com/docs"
            data-tooltip="Supabase developer docs"
            target="_blank"
            rel="noreferrer"
          >
            Supabase
          </a>
          on the backend and Nextjs on the frontend.
        </p>
        <p>
          Supabase is a BaaS(Backend as a Service) that provides us with a
          powerful
          <a
            href="https://app.supabase.com/project/ovxuyrukzdqmaklnapwf"
            data-tooltip="Supabase Dashboard for this Blog"
            target="_blank"
            rel="noreferrer"
          >
            Dashboard
          </a>
          , which facilitates posting Blog title, body, images and other
          information. This is converted into an easy to manage JSON response by
          the postgREST API.
        </p>
        <p>
          <a
            href="https://nextjs.org/docs"
            data-tooltip="NextJS developer docs"
            target="_blank"
            rel="noreferrer"
          >
            NextJS
          </a>
          on the other hand helps us paint the frontend using this JSON. The
          website also automatically fetches new blog posts due to powerful
          SSR(Server Side Rendering) & ISR(Incremental Static Regeneration)
          features provided by NextJS.
        </p>
      </Container>
    </>
  );
}
