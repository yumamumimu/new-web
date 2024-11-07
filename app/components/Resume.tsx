import React from 'react';
import { CSSProperties } from 'react';

const Resume = () => {
    const basicInfo = {
        ttl: 'Bogor, 18 Januari 2003',
        gender: 'Laki-laki',
        height: ~175,
        weight: ~70,
        maritalStatus: 'Belum Menikah',
        whatsapp: '+6281234567890',
        email: 'yumamumimu@gmail.com'
    };

    const pekerjaan = [
        {
            posisi: 'Manager & Editor',
            perusahaan: 'Aoshi Market',
            tahun: '2022 - 2023',
            deskripsi: 'Bertanggung jawab atas konten sosial media',
        },
        {
            posisi: 'Worker & Editor',
            perusahaan: 'Takapedia',
            tahun: '2023 - Present',
            deskripsi: 'Mencari dan Membuat konten untuk kebutuhan sosial media',
        },
    ];

    const pendidikan = [
        {
            jenis: 'Sekolah Menengah Pertama',
            nama: 'SMPN 1 Rancaekek',
            tahun: '2015 - 2018',
            deskripsi: 'Jl. Raya Majalaya - Rancaekek No.87, Rancaekek Wetan, Kec. Rancaekek, Kabupaten Bandung, Jawa Barat 40394',
        },
        {
            jenis: 'Sekolah Menengah Kejuruan',
            nama: 'SMK Lugina Rancaekek',
            tahun: '2018 - 2021',
            deskripsi: 'Jl. Raya Majalaya - Rancaekek Desa No.5, Bojongloa, Kec. Rancaekek, Kabupaten Bandung, Jawa Barat 40394',
        },
        {
            jenis: 'Perguruan Tinggi',
            nama: 'Ma`soem University',
            tahun: '2022 - Present',
            deskripsi: 'Jl. Raya Cipacing No.22, Cipacing, Kec. Jatinangor, Kabupaten Sumedang, Jawa Barat 45363',
        },
    ];

    const skills = [
        { skill: 'JavaScript', level: 3 },
        { skill: 'React', level: 4 },
        { skill: 'Editing', level: 5 },
        { skill: 'HTML & CSS', level: 3 },
        { skill: 'Database Management', level: 2 },
    ];

    const renderStars = (level: number) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(i <= level ? '★' : '☆');
        }
        return stars.join(' ');
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Personal Information</h1>

            <section style={styles.section}>
                <h2 style={styles.subHeader}>Basic Info</h2>
                <div style={styles.card}>
                    <p><strong>TTL:</strong> {basicInfo.ttl}</p>
                    <p><strong>Gender:</strong> {basicInfo.gender}</p>
                    <p><strong>Tinggi Badan:</strong> {basicInfo.height} cm</p>
                    <p><strong>Berat Badan:</strong> {basicInfo.weight} kg</p>
                    <p><strong>Status Pernikahan:</strong> {basicInfo.maritalStatus}</p>
                    <p><strong>Whatsapp:</strong> {basicInfo.whatsapp}</p>
                    <p><strong>Email:</strong> {basicInfo.email}</p>
                </div>
            </section>

            <section style={styles.section}>
                <h2 style={styles.subHeader}>Riwayat Pekerjaan</h2>
                {pekerjaan.map((item, index) => (
                    <div key={index} style={styles.card}>
                        <h3 style={styles.cardTitle}>{item.posisi}</h3>
                        <p><strong>Perusahaan:</strong> {item.perusahaan}</p>
                        <p><strong>Tahun:</strong> {item.tahun}</p>
                        <p>{item.deskripsi}</p>
                    </div>
                ))}
            </section>

            <section style={styles.section}>
                <h2 style={styles.subHeader}>Riwayat Pendidikan</h2>
                {pendidikan.map((item, index) => (
                    <div key={index} style={styles.card}>
                        <h3 style={styles.cardTitle}>{item.nama}</h3>
                        <p><strong>Nama Sekolah:</strong> {item.jenis}</p>
                        <p><strong>Tahun:</strong> {item.tahun}</p>
                        <p>{item.deskripsi}</p>
                    </div>
                ))}
            </section>

            <section style={styles.section}>
                <h2 style={styles.subHeader}>Skill</h2>
                <div style={styles.skillContainer}>
                    {skills.map((item, index) => (
                        <div key={index} style={styles.skill}>
                            <span style={styles.skillName}>{item.skill}</span>
                            <span style={styles.stars}>{renderStars(item.level)}</span>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

const styles: { [key: string]: CSSProperties } = {
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '20px',
        backgroundColor: 'rgba(30, 30, 30, 0.8)',
        color: '#E0E0E0',
        borderRadius: '8px',
        boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.5)',
        backdropFilter: 'blur(10px)',
    },
    header: {
        textAlign: 'center',
        fontSize: '2rem',
        marginBottom: '20px',
        color: '#BB86FC',
    },
    section: {
        marginBottom: '30px',
    },
    subHeader: {
        fontSize: '1.5rem',
        color: '#BB86FC',
        marginBottom: '15px',
    },
    card: {
        backgroundColor: '#2E2E2E',
        padding: '15px',
        borderRadius: '8px',
        marginBottom: '15px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
    },
    cardTitle: {
        fontSize: '1.25rem',
        color: '#BB86FC',
    },
    skillContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
    },
    skill: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px',
        backgroundColor: '#333',
        borderRadius: '5px',
        boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.3)',
    },
    skillName: {
        fontWeight: 'bold',
    },
    stars: {
        fontSize: '1.2rem',
        color: '#FFD700',
    },
};

export default Resume;
