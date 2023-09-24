import { ThirdwebProvider } from "@thirdweb-dev/react";

const activeChain = "goerli";

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider activeChain={activeChain}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;