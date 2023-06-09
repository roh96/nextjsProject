import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          httpEquiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
      </Head>
      {/* <script src="https://developers.kakao.com/sdk/js/kakao.min.js"></script> */}
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
