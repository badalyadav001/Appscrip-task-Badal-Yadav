import Head from 'next/head';

import Header from '../components/Header';
import ProductList from '../components/ProductList';

export async function getServerSideProps() {
  try {
    const res = await fetch('https://fakestoreapi.com/products');
    const products = await res.json();

    return {
      props: {
        products,
      },
    };
  } catch {
    return {
      props: {
        products: [],
      },
    };
  }
}

export default function Home({ products }) {
  return (
    <>
    <Head>
  <title>Product Listing Page | Appscrip Task</title>
  <meta
  name="description"
  content="Browse a wide range of products with images, prices and categories. Built using Next.js as part of Appscrip frontend assignment."
/>
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Product Listing Page",
      itemListElement: products.map((product, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: product.title
      }))
    })
  }}
/>


   </Head>

      <Header />

      <main style={{ padding: '20px' }}>
        <h1>Product Listing Page</h1>
        <h2>Explore Our Products</h2>
        <ProductList products={products} />
      </main>
    </>
  );
}
