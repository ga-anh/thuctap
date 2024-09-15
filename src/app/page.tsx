// pages/index.tsx
"use client"
import React, { useState } from 'react';
import Banner from "@/components/Banner";
import { Example } from "@/components/Example";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NewArrivals from "@/components/NewArrivals";
import styled from 'styled-components';
import AmbassadorCard from "@/components/AmbassadorCard";
import ProductCard from "@/components/ProductCard";
import BannerSeller from "@/components/BannerSeller";
import ArrowButton from "@/components/ArrowButton";

export const ContainerFluid = styled.div`
  width: 100%;
  padding:auto;
  margin:auto;
`;

export const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 576px) {
    max-width: 540px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }
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

const ProductList = styled.div`
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

const CarouselContainer = styled.div`
  display: flex;
  overflow: hidden;
  position: relative;
  margin-top: 40px;
  width: 100%;
`;

const Carousel = styled.div`
  display: flex;
  transition: transform 0.3s ease-in-out;
`;

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const ambassadors = [
    { name: 'Name Surname', username: 'username' },
    { name: 'Name Surname', username: 'username' },
    { name: 'Name Surname', username: 'username' },
    { name: 'Name Surname', username: 'username' },
    { name: 'Name Surname', username: 'username' },
    { name: 'Name Surname', username: 'username' },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? ambassadors.length - 4 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === ambassadors.length - 4 ? 0 : prevIndex + 1));
  };

  return (
    <ContainerFluid>
      <Header />
      <div className="w-[100%] h-[25%]">
        <Example />
      </div>
      <div className="container mx-auto">
        <NewArrivals />
        <div className='flex items-center justify-between pt-4 pb-4'>
          <Title>NEW ARRIVALS</Title>
          <SeeAll href="#">See All</SeeAll>
        </div>
        <ProductList>
          <ProductCard category="CATEGORY" title="Product Title Goes Here" brand="BRAND" originalPrice="AED 32.00" discountedPrice="AED 25.60" discount="30% Off" />
          <ProductCard category="SKIN CARE" title="Product Title Goes Here" brand="BRAND" originalPrice="AED 32.00" discountedPrice="AED 25.60" discount="30% Off" />
          <ProductCard category="SKIN CARE" title="Product Title Goes Here" brand="BRAND" originalPrice="AED 32.00" discountedPrice="AED 25.60" discount="30% Off" />
          <ProductCard category="SKIN CARE" title="Product Title Goes Here" brand="BRAND" originalPrice="AED 32.00" discountedPrice="AED 25.60" discount="30% Off" />
        </ProductList>
        <Banner />
        <div className='flex items-center justify-between pt-4 pb-4'>
          <Title>TOP SELLER</Title>
          <SeeAll href="#">See All</SeeAll>
        </div>
        <ProductList>
          <ProductCard category="CATEGORY" title="Product Title Goes Here" brand="BRAND" originalPrice="AED 32.00" discountedPrice="AED 25.60" discount="30% Off" />
          <ProductCard category="SKIN CARE" title="Product Title Goes Here" brand="BRAND" originalPrice="AED 32.00" discountedPrice="AED 25.60" discount="30% Off" />
          <ProductCard category="SKIN CARE" title="Product Title Goes Here" brand="BRAND" originalPrice="AED 32.00" discountedPrice="AED 25.60" discount="30% Off" />
          <ProductCard category="SKIN CARE" title="Product Title Goes Here" brand="BRAND" originalPrice="AED 32.00" discountedPrice="AED 25.60" discount="30% Off" />
        </ProductList>
        <BannerSeller />
        <div className='flex items-center justify-between pt-4 pb-4'>
          <Title>AMBASSADORS</Title>
          <SeeAll href="#">View All</SeeAll>
        </div>
        <CarouselContainer>
          <ArrowButton direction="left" onClick={handlePrev} />
          <Carousel style={{ transform: `translateX(-${currentIndex * 270}px)` }}>
            {ambassadors.map((ambassador, index) => (
              <AmbassadorCard key={index} {...ambassador} />
            ))}
          </Carousel>
          <ArrowButton direction="right" onClick={handleNext} />
        </CarouselContainer>
        
      </div>
      <Footer />
    </ContainerFluid>
      
      

  );
}
