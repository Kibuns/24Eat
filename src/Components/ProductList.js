import { Link } from 'react-router-dom';

const ProductList = ({ products }) => {
  return (
    <div>
      {products.map(product => (
        <div key={product.id} >
          <Link to={`/products/${product.id}`}>
            <h2>{ product.name }</h2>
          </Link>
        </div>
      ))}
    </div>
  );
}
 
export default ProductList;