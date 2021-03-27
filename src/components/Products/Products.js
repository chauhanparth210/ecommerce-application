import React from 'react';
import Product from './Product/Product';

// const products = [
//   {
//     id: 1,
//     name: 'Shoes',
//     description: 'Running shoes',
//     price: '$5',
//     image:
//       'https://images.ctfassets.net/od02wyo8cgm5/5WzY2w9rAJzIqD8YqIP0S4/412d03f1188a703bd05644dae445c09b/cloud_2-fw20-slate_grey-m-g1.png?w=525&h=525&fl=progressive&q=91&bg=rgb:f7f7f7&fm=jpg',
//   },
//   {
//     id: 2,
//     name: 'Macbook',
//     description: 'Apple macbook',
//     price: '$10',
//     image:
//       'https://techcrunch.com/wp-content/uploads/2020/05/00100trPORTRAIT_00100_BURST20200506153653558_COVER.jpg?w=1390&crop=1',
//   },
//   {
//     id: 3,
//     name: 'Shoes',
//     description: 'Running shoes',
//     price: '$5',
//     image:
//       'https://images.ctfassets.net/od02wyo8cgm5/5WzY2w9rAJzIqD8YqIP0S4/412d03f1188a703bd05644dae445c09b/cloud_2-fw20-slate_grey-m-g1.png?w=525&h=525&fl=progressive&q=91&bg=rgb:f7f7f7&fm=jpg',
//   },
//   {
//     id: 4,
//     name: 'Macbook',
//     description: 'Apple macbook',
//     price: '$10',
//     image:
//       'https://techcrunch.com/wp-content/uploads/2020/05/00100trPORTRAIT_00100_BURST20200506153653558_COVER.jpg?w=1390&crop=1',
//   },
//   {
//     id: 5,
//     name: 'Shoes',
//     description: 'Running shoes',
//     price: '$5',
//     image:
//       'https://images.ctfassets.net/od02wyo8cgm5/5WzY2w9rAJzIqD8YqIP0S4/412d03f1188a703bd05644dae445c09b/cloud_2-fw20-slate_grey-m-g1.png?w=525&h=525&fl=progressive&q=91&bg=rgb:f7f7f7&fm=jpg',
//   },
//   {
//     id: 6,
//     name: 'Macbook',
//     description: 'Apple macbook',
//     price: '$10',
//     image:
//       'https://techcrunch.com/wp-content/uploads/2020/05/00100trPORTRAIT_00100_BURST20200506153653558_COVER.jpg?w=1390&crop=1',
//   },
// ];

const Products = ({ products }) => {
  return (
    <div className="d-flex flex-wrap gap mt-10 px-8 py-6 mb-5">
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Products;
