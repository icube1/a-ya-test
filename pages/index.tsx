import allProducts from "./data/products.json";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { useState } from "react";

export type Product = {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  }
};

interface Props {
  data: Product[];
}

export default function Home({ data }: Props) {
  
  return (
    <>
      <Head>
        <title>Store | Home</title>
      </Head>
      <div className="container">
        <h2 className={styles.title}>
          All Products <span>🌿</span>
        </h2>
        {data.map((product: Product) => {return (
          <div className={styles.product_card} key={product.id}>
          <Link href={{pathname:`products/${product.id}`, query: {slug: product.id, title: product.title}}}>
              <div className={styles.product_img}>
                <img style={{width: 200, height: 200}} src={product.image} alt={product.title} />
              </div>
          </Link>
          <div className={styles.product_content}>
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <button
              className="btn snipcart-add-item"
              disabled
              // data-item-id={product.id}
              // data-item-price={product.price}
              // data-item-url={`products/${product.slug}`}
              // data-item-image={product.image.url}
              // data-item-name={product.name}
            >
              Add to cart 🛒
            </button>
          </div>
        </div>
        )}
        )}

          
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    'https://fakestoreapi.com/products?limit=10');
    const data = await res.json();

    // Passing data to the Product Page using props
    return {
        props : {data}
    }
  }
