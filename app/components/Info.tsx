import React from 'react';

interface InfoProps {
  ttl?: string;
  gender?: string;
  height?: number;
  weight?: number;
  maritalStatus?: string;
  whatsapp?: string;
  email?: string;
}

const Info: React.FC<InfoProps> = ({ ttl, gender, height, weight, maritalStatus, whatsapp, email }) => {
  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', width: '300px' }}>
      <h2>Informasi Pribadi</h2>
      <ul style={{ listStyle: 'none', padding: '0' }}>
        {ttl && <li><strong>TTL:</strong> {ttl}</li>}
        {gender && <li><strong>Gender:</strong> {gender}</li>}
        {height !== undefined && <li><strong>Tinggi Badan:</strong> {height} cm</li>}
        {weight !== undefined && <li><strong>Berat Badan:</strong> {weight} kg</li>}
        {maritalStatus && <li><strong>Status Pernikahan:</strong> {maritalStatus}</li>}
        {whatsapp && <li><strong>WhatsApp:</strong> {whatsapp}</li>}
        {email && <li><strong>Email:</strong> {email}</li>}
      </ul>
    </div>
  );
};

export default Info;
