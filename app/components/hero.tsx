import React from 'react';
import foto from "../yumek.jpg";
import "../yuma-style.css";

export default function Hero() {
    return (
        <div style={styles.container}>
            <h1 style={styles.header}>CV Online</h1>
            <h2 style={styles.name}>Bayu Pratama</h2>
            <Profile />
            <p style={styles.bio}>
                <center>Seorang NPC yang ingin menguasai dunia</center>
            </p>
        </div>
    );
  
    function Profile() {
        return <img src={foto.src} alt="Bayu Pratama" style={styles.profileImage} />;
    }
}

const styles = {
    container: {
        maxWidth: '1200px', // Lebar maksimal yang lebih besar agar lebih lebar seperti gallery
        margin: '0 auto',
        padding: '20px',
        backgroundColor: 'rgba(30, 30, 30, 0.8)',  // Dark background with transparency
        color: '#E0E0E0',
        borderRadius: '8px',
        boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.5)',
        backdropFilter: 'blur(10px)', // Efek blur latar belakang
    },
    header: {
        textAlign: 'center' as 'center',  // Specify the type explicitly
        fontSize: '2rem',
        marginBottom: '10px',
        color: '#BB86FC',  // Violet color to match theme
    },
    name: {
        textAlign: 'center' as 'center',  // Specify the type explicitly
        fontSize: '2.5rem',
        marginBottom: '20px',
        color: '#E0E0E0',  // White color for name
    },
    profileImage: {
        borderRadius: '50%',
        width: '200px',
        height: '200px',
        objectFit: 'cover' as 'cover',  // Ensure the correct value for objectFit
        margin: '15px auto',
        display: 'block',
        border: 'solid 5px #333',  // Dark border
        boxShadow: '0px 0px 10px #000',  // Shadow for a subtle 3D effect
        cursor: 'pointer',
        transition: '0.2s',
    },
    bio: {
        fontSize: '1rem',
        lineHeight: '1.5',
        marginTop: '15px',
    },
};
