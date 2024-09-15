import React from 'react';
import styled from 'styled-components';
import { FaFacebookF, FaTwitter, FaGooglePlusG } from 'react-icons/fa';
const FooterMin = styled.footer`
  padding: 2rem;
  background-color: #f8f8f8;
  text-align: center;
  width:100%;
`;
const FooterContainer = styled.footer`
  background-color: #E8E8E8;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
`;

const Section = styled.div`
  flex: 1;
  min-width: 200px;
  margin: 10px;
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
  font-size: 14px;
`;

const SubscribeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const SubscribeInput = styled.input`
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #ccc;
  flex: 1;
`;

const SubscribeButton = styled.button`
  padding: 10px 20px;
  background-color: #000;
  color: #fff;
  border: none;
  cursor: pointer;
  margin-top: 10px;
`;

const SocialIcons = styled.div`
  display: flex;
  margin-top: 10px;
`;

const SocialIcon = styled.a`
  color: #000;
  font-size: 20px;
  margin-right: 10px;
  text-decoration: none;
`;
const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <div className="container mx-auto flex ">
      <Section>
        <Title>Your Logo</Title>
        <SocialIcons>
          <SocialIcon href="#"><FaFacebookF /></SocialIcon>
          <SocialIcon href="#"><FaTwitter /></SocialIcon>
          <SocialIcon href="#"><FaGooglePlusG /></SocialIcon>
        </SocialIcons>
      </Section>
      <Section>
        <Title>Main Pages</Title>
        <List>
          <ListItem>Sell with Us</ListItem>
          <ListItem>About Us</ListItem>
          <ListItem>Contact Us</ListItem>
          <ListItem>Promos</ListItem>
          <ListItem>Become an Ambassador</ListItem>
        </List>
      </Section>
      <Section>
        <Title>Policy</Title>
        <List>
          <ListItem>Terms of Usage</ListItem>
          <ListItem>Privacy Policy</ListItem>
          <ListItem>Return Policy</ListItem>
        </List>
      </Section>
      <Section>
        <Title>Categories</Title>
        <List>
          <ListItem>Skincare</ListItem>
          <ListItem>Makeup</ListItem>
          <ListItem>Hair Care</ListItem>
          <ListItem>Bath & Body</ListItem>
          <ListItem>Beauty Supplements</ListItem>
        </List>
      </Section>
      <Section>
        <Title>Subscribe</Title>
        <SubscribeContainer>
          <p>Subscribe to our newsletter, so that you can be the first to know about new offers and promotions.</p>
          <form>
            <SubscribeInput type="email" placeholder="Enter Email Address" />
            <SubscribeButton type="submit">Subscribe</SubscribeButton>
          </form>
        </SubscribeContainer>
      </Section>
      </div>
      

        
      <FooterMin>
    <p>&copy; 2023 Your Company. All rights reserved.</p>
    </FooterMin>
  
      
    </FooterContainer>
   
  );
};

export default Footer;
