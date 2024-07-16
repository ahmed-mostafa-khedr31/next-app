import Head from "next/head";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Home | Jaz Hotels & Resorts | JAZ Hotel Group</title>
        <meta
          name="description"
          content="Welcome to JAZ Hotel Group. Discover our luxurious hotels and resorts."
        />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="https://www.jazhotels.com/" />
      </Head>
      <h1>Welcome to Our Website</h1>
      <p>This is the home page.</p>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
