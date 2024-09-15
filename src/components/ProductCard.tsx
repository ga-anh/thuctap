// components/ProductCard.tsx
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: #f5f5f5;
  border: 1px solid #ddd;
  text-align: center;
  position: relative;
 
`;

const CategoryLabel = styled.span`
  background: black;
  color: white;
  padding: 5px 10px;
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 10px;
`;

const ProductTitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin: 10px 0;
`;

const Brand = styled.p`
  color: #666;
  font-size: 14px;
`;

const PriceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

const OriginalPrice = styled.span`
  text-decoration: line-through;
  color: #999;
  margin-right: 10px;
`;

const DiscountedPrice = styled.span`
  color: black;
  font-weight: bold;
`;

const DiscountLabel = styled.span`
  background: #eee;
  color: black;
  padding: 5px 10px;
  margin-left: 10px;
`;

interface ProductCardProps {
  category: string;
  title: string;
  brand: string;
  originalPrice: string;
  discountedPrice: string;
  discount: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ category, title, brand, originalPrice, discountedPrice, discount }) => {
  return (
   

    <div className='mt-4 mb-4'>
      <Card >
        <div className=' pb-5'>
        <CategoryLabel>{category}</CategoryLabel>
        <Image src="/images/product1.png" alt="Product Image" width={500} height={500}/>
        <ProductTitle>{title}</ProductTitle>
        <Brand>{brand}</Brand>
        <PriceContainer>
          <OriginalPrice>{originalPrice}</OriginalPrice>
          <DiscountedPrice>{discountedPrice}</DiscountedPrice>
          <DiscountLabel>{discount}</DiscountLabel>
        </PriceContainer>
        </div>
      </Card>
      </div>
  );
};

export default ProductCard;
