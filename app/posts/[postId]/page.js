import React from "react";

export async function generateMetadata({ params, searchParams }) {
  const product = await getProduct(params.productId);

  return {
    title: product.title,
  };
}

const page = ({ params }) => {
  return <div>Post {params.postId}</div>;
};

export default page;
