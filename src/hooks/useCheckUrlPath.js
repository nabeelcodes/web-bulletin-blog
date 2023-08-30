import { useRouter } from "next/router";

export default function useCheckUrlPath(path) {
  const router = useRouter();

  if (router.asPath === path) {
    return true;
  }

  return false;
}
