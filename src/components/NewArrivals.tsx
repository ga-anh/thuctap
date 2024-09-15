// components/NewArrivals.tsx
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const Container = styled.div`
  width:100%;
  margin:auto;
  padding:auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: span 2;
  border: 1px solid #e0e0e0;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
`;

const SeeAll = styled.a`
  font-size: 14px;
  text-decoration: none;
  color: #000;
  cursor: pointer;
  font-weight: bold;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  border: 1px solid #e0e0e0;
  text-align: center;
  position: relative;
  background: #f5f5f5;
`;

const CardHeader = styled.div`

 
`;

const Category = styled.span`
  position: absolute;
  background: black;
  color: white;
  padding: 5px 10px;
  top: 10px;
  left: 10px;
  font-size: 10px;
  margin-bottom: 5px;
`;

const ProductTitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin: 10px 0;
`;

const Brand = styled.p`
  font-size: 12px;
  color: #888;
  margin: 5px 0;
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

const ShopNowButton = styled.button`
  background-color: #FFFFFF;
  border: 1px solid #000;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 14px;
  margin-top: 200px;
  position:absolute;
  font-weight:bold;
`;

const NewArrivals: React.FC = () => {
  return (
    <Container>
      <div className='flex items-center justify-between pt-4 pb-4' >       
        <Title>New Arrivals</Title>
        <SeeAll href="#">See All</SeeAll>
      </div> 
      <Grid>
        <Header>
          
       
            
            <Image className='' src="/images/banner-min1.jpg" alt="Product Image" width={700} height={400} />       
       
          <ShopNowButton>Shop Now</ShopNowButton> 
          
        </Header>              
        <Card>
          <Image src="/images/product1.png" alt="Product Image" width={500} height={500} />
          <CardHeader>
            <Category>Category</Category>
            <ProductTitle>Product Title Goes Here</ProductTitle>
            <Brand>Brand</Brand>
            
            <PriceContainer>
              <OriginalPrice>AED 32.00</OriginalPrice>
              <DiscountedPrice>AED 25.60</DiscountedPrice>
              <DiscountLabel>30% Off</DiscountLabel>
          </PriceContainer>
          </CardHeader>
        </Card>
        <Card>
          <Image src="/images/product1.png" alt="Product Image" width={500} height={500} />
          <CardHeader>
            <Category>Skin Care</Category>
            <ProductTitle>Product Title Goes Here</ProductTitle>
            <Brand>Brand</Brand>
            <PriceContainer>
              <OriginalPrice>AED 32.00</OriginalPrice>
              <DiscountedPrice>AED 25.60</DiscountedPrice>
              <DiscountLabel>30% Off</DiscountLabel>
          </PriceContainer>
          </CardHeader>
        </Card>

        <Card>
          <Image src="/images/product2.jpg" alt="Product Image" width={500} height={500} />
          <CardHeader>
            <Category>Category</Category>
            <ProductTitle>Product Title Goes Here</ProductTitle>
            <Brand>Brand</Brand>
            <PriceContainer>
              <OriginalPrice>AED 32.00</OriginalPrice>
              <DiscountedPrice>AED 25.60</DiscountedPrice>
              <DiscountLabel>30% Off</DiscountLabel>
          </PriceContainer>
          </CardHeader>
        </Card>
        <Card>
          <Image src="/images/product3.jpg" alt="Product Image" width={500} height={500} />
          <CardHeader>
            <Category>Skin Care</Category>
            <ProductTitle>Product Title Goes Here</ProductTitle>
            <Brand>Brand</Brand>
            <PriceContainer>
              <OriginalPrice>AED 32.00</OriginalPrice>
              <DiscountedPrice>AED 25.60</DiscountedPrice>
              <DiscountLabel>30% Off</DiscountLabel>
          </PriceContainer>
          </CardHeader>
        </Card>
        <Header>
          <Image src="/images/banner-min3.jpg" alt="Product Image" width={700} height={400} />
          <ShopNowButton>Shop Now</ShopNowButton>
        </Header>
      </Grid>
    </Container>
  );
};

export default NewArrivals;
