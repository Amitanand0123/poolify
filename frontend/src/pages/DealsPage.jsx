import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchProductsByCategory } from '../services/productApi';
import ProductCard from '../components/Product/ProductCard';
import { ChevronRight } from 'lucide-react';

const DealsPage = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      setIsLoading(true);
      const productData = await fetchProductsByCategory(category);
      setProducts(productData);
      setIsLoading(false);
    };
    getProducts();
  }, [category]);

  const pageTitle = category.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

  if (isLoading) {
    return <div className="text-center p-10">Loading Deals...</div>;
  }

  return (
    <div className="container mx-auto max-w-7xl p-4 sm:p-6 lg:p-8">
      {/* Breadcrumbs */}
      <nav className="flex items-center text-sm text-gray-500 mb-4">
        <Link to="/" className="hover:text-walmart-blue">Home</Link>
        <ChevronRight className="w-4 h-4 mx-1" />
        <span>Deals</span>
        <ChevronRight className="w-4 h-4 mx-1" />
        <span className="font-semibold text-gray-700">{pageTitle}</span>
      </nav>
      
      <h1 className="text-3xl font-bold mb-6">{pageTitle}</h1>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {products.length > 0 ? (
          products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="col-span-full text-center">No products found for this category.</p>
        )}
      </div>
    </div>
  );
};

export default DealsPage;