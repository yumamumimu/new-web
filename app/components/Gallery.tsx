"use client";

import React, { useState, useEffect } from 'react';
import styled from 'styled-components'; // Import styled-components

const Gallery: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);
  const [descriptions, setDescriptions] = useState<string[]>([]);

  useEffect(() => {
    // Set gambar yang ingin ditampilkan (3 gambar)
    setImages([
      '/c.png',  // Path relatif gambar
      '/g.png',
      '/b.png',
    ]);

    // Deskripsi untuk setiap gambar
    setDescriptions([
      'Tidur adalah hobi saya',
      'Ngoding yang awalnya menjadi musuh sekarang menjadi teman dekat',
      'Bermain musik walaupun tidak pernah didengar',
    ]);
  }, []); // Pastikan array kosong di sini untuk hanya memanggil sekali

  return (
    <Container>
      <Header>Hobbies Gallery</Header>
      <GalleryWrapper>
        {images.map((image, index) => (
          <ImageWrapper key={index}>
            <img src={image} alt={`Hobi ${index + 1}`} />
            <Description>{descriptions[index]}</Description>
          </ImageWrapper>
        ))}
      </GalleryWrapper>
    </Container>
  );
};

// Gaya komponen menggunakan styled-components
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: rgba(30, 30, 30, 0.8);
  color: #E0E0E0;
  border-radius: 8px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
`;

const Header = styled.h2`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 20px;
  color: #BB86FC;
`;

const GalleryWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 10px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr; /* 2 kolom pada layar kecil */
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr; /* 1 kolom pada layar sangat kecil */
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 0px 10px #000;
  cursor: pointer;
  transition: transform 0.2s;
  position: relative;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

const Description = styled.p`
  text-align: center;
  color: #E0E0E0;
  padding: 10px;
  font-size: 1rem;
  background-color: #333;
  border-radius: 0 0 8px 8px;
  margin-top: 10px;
`;

export default Gallery;
