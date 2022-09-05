import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;600;700&display=swap"
            rel="stylesheet"
          />
          <meta
            name="description"
            content="Mohamed Fadel Moumeni ,  a self-taught Full Stack JavaScript Developer, UI/UX Designer,Security Pentester."
          />
          <meta
            name="keywords"
            content="Mohamed Fadel Moumeni, Develepement informatique, Software engineer, software developer, developer , javascript, mohamed fadel moumeni, moumeni , portfolio, reactjs "
          />
          <meta httpEquiv="content-language" content="en" />
          <meta
            property="og:description"
            content="Mohamed Fadel Moumeni ,  a self-taught Full Stack JavaScript Developer, UI/UX Designer,Security Pentester."
          />
          <meta property="og:url" content="https://medfadelmoumeni.com" />
          <meta property="og:type" content="website" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
