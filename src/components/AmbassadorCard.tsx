// components/AmbassadorCard.tsx
import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import Image from 'next/image';

const Card = styled.div`
  background: #fff;
  border: 1px solid #ddd;
  padding: 20px;
  text-align: center;
  position: relative;
  width: 250px;
  margin: 0 10px;
  flex-shrink: 0;
  margin-bottom: 20px;
`;

const Name = styled.h3`
  font-size: 18px;
  margin: 10px 0;
`;

const Username = styled.p`
  font-size: 14px;
  color: #666;
  margin: 5px 0;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 10px 0;
`;

const ShopButton = styled.button`
  background: black;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  margin-top: 10px;
  text-transform: uppercase;
`;

const Avatar = styled(Image)`
  border-radius: 50%;
`;

interface AmbassadorCardProps {
  name: string;
  username: string;
}

const AmbassadorCard: React.FC<AmbassadorCardProps> = ({ name, username }) => {
  return (
    <Card>
      <Avatar src="/images/avatar.png" alt="Avatar" width={200} height={200} />
      <Name>{name}</Name>
      <Username>@{username}</Username>
      <SocialIcons>
        <FaFacebook />
        <FaTwitter />
        <FaYoutube />
      </SocialIcons>
      <ShopButton>Shop with me</ShopButton>
    </Card>
  );
};

export default AmbassadorCard;
