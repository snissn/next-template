import Link from "next/link";

const Footer = () => (
  <div>
    <footer className="footer has-background-grey-dark	has-text-light">
      <div className="content  has-text-centered">
        <p>
          <a
            className="has-text-primary"
            href="https://giuthub.com/snissn/next-template"
          >
            next-template
          </a>{" "}
          by{" "}
          <a className="has-text-primary" href="https://giuthub.com/snissn/">
            snissn
          </a>
          . The source code is licensed
          <a
            className="has-text-primary"
            href="http://opensource.org/licenses/mit-license.php"
          >
            {" "}
            MIT
          </a>
          . The website content is licensed{" "}
          <a
            className="has-text-primary"
            href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
          >
            CC BY NC SA 4.0
          </a>
          .
        </p>
      </div>
    </footer>
  </div>
);
export default Footer;
