// components/Banner.tsx
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const BannerContainer = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('/images/banner-1-1.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  height: 200px; 
  margin-bottom:40px;
`;

const TextContainer = styled.div`
  text-align: left;
  color:white;
`;

const DiscountText = styled.h2`
  font-size: 36px;
  margin: 0;
`;

const ShopNowButton = styled.button`
  background: white;
  border: 2px solid black;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
  color:black;
  font-weight:bold;
`;

const Header=styled.div`
  padding-left:800px;
`;



const BannerSeller: React.FC = () => {
  return (
    <BannerContainer>
      <Header>
      <TextContainer>
    <div className='flex'>
        <div className='me-3'>
        <DiscountText>35% OFF
        </DiscountText>  
        <p>All SKINCARE ITEMS</p>  
        </div>
        <ShopNowButton>SHOP NOW</ShopNowButton>
     
    </div>
        
        
      </TextContainer>
      </Header>
     
    </BannerContainer>
  );
};

export default BannerSeller;