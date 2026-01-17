import Head from 'next/head';
import Header from '../components/Header';
import ProductList from '../components/ProductList';

const products = [
  { id: 1, title: "Men's Cotton Shirt", price: 999, image: "https://picsum.photos/300/200?1", category: "Men" },
  { id: 2, title: "Women's Kurti", price: 1299, image: "https://picsum.photos/300/200?2", category: "Women" },
  { id: 3, title: "Smart Watch", price: 2499, image: "https://picsum.photos/300/200?3", category: "Accessories" },
  { id: 4, title: "Running Shoes", price: 1999, image: "https://picsum.photos/300/200?4", category: "Footwear" },
  { id: 5, title: "Leather Wallet", price: 799, image: "https://picsum.photos/300/200?5", category: "Accessories" },
  { id: 6, title: "Casual Jeans", price: 1499, image: "https://picsum.photos/300/200?6", category: "Men" },
  { id: 7, title: "Women's Handbag", price: 1799, image: "https://picsum.photos/300/200?7", category: "Women" },
  { id: 8, title: "Bluetooth Headphones", price: 2999, image: "https://picsum.photos/300/200?8", category: "Electronics" },
  { id: 9, title: "Sports T-Shirt", price: 899, image: "https://picsum.photos/300/200?9", category: "Men" },
  { id: 10, title: "Sunglasses", price: 1199, image: "https://picsum.photos/300/200?10", category: "Accessories" },
  { id: 11, title: "Women's Sandals", price: 1399, image: "https://picsum.photos/300/200?11", category: "Footwear" },
  { id: 12, title: "Laptop Backpack", price: 1899, image: "https://picsum.photos/300/200?12", category: "Bags" },
  { id: 13, title: "Fitness Band", price: 2299, image: "https://picsum.photos/300/200?13", category: "Electronics" },
  { id: 14, title: "Formal Shoes", price: 2499, image: "https://picsum.photos/300/200?14", category: "Footwear" },
  { id: 15, title: "Women's Scarf", price: 699, image: "https://picsum.photos/300/200?15", category: "Women" },
];


export default function Home() {
  return (
    <>
      <Head>
        <title>Product Listing Page | Appscrip Task</title>
        <meta
          name="description"
          content="Browse a wide range of products with images, prices and categories. Built using Next.js as part of Appscrip frontend assignment."
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
