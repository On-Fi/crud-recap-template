import useSWR, { SWRConfig } from "swr";
import GlobalStyle from "../styles";
import fetcher from "@/lib/fetcher";

export default function App({ Component, pageProps }) {
  const {
    data: recipes,
    isLoading,
    error,
  } = useSWR("http://localhost:3000/api", fetcher);

  if (isLoading || error) {
    return (
      <>
        <SWRConfig value={{ fetcher }}>
        </SWRConfig>
      </>
    );
  }

  return (
    <>
      <SWRConfig value={{ fetcher }}>
        <GlobalStyle />
        <Component {...pageProps} recipes={recipes} />
      </SWRConfig>
    </>
  );
}