import Head from "next/head";
import styles from "../../styles/SingleProduct.module.css";
import { useRouter } from 'next/router';
import { Product } from "..";
import { ColorButton } from "@/components/ColorButton";
import SizeButton from "@/components/SizeButton";

interface Props {
  data: Product;
}

const singleproduct = ({data}: Props) => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>
      <div className={styles.single_container}>
        <div className={styles.left_section}>
          <img src={data.image} className={styles.left_img} alt="" />
        </div>
        <div className={styles.right_section}>
          <h3 className={styles.title}>{data.title}</h3>
          <p className={styles.price}>${data.price}</p>
          <div className={styles.para}>
            <p>
              {data.description}
            </p>
          <ColorButton />
          <SizeButton />
          </div>
          <button className="btn">Add to cart 🛒</button>
        </div>
      </div>
    </>
  );
};

export async function getStaticProps({params}: any) {
  console.log(params)
  const data = await fetch(`https://fakestoreapi.com/products/${params.productslug}`)
  .then(res => res.json());

  console.log(data)
  return {
    props: {
      data
    }
  }
}

export async function getStaticPaths() {
  const res = await fetch(
    `https://fakestoreapi.com/products?limit=10`);
    const data = await res.json();
    
    const paths = data.map((product: Product) => {
      return {
        params: {
          productslug: `${product.id}`
        }
      }
    })

    // Passing data to the Product Page using props
    return {
        paths,
        fallback: false
    }
  }


export default singleproduct;
