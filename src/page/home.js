import React from 'react';

import ButtonAgree from '../component/ButtonAgreement';
import ButtonRequest from '../component/ButtonRequest';
import ButtonRequestMoney from '../component/ButtonRequestMoney';
import ButtonDisburse from '../component/ButtonDisbursement';
import NewsCard from '../component/NewsCard';

function Home() {
  return (
    <div>
      
      <div style={{ padding: '70px' }}>
        <h1 style={{ textAlign: 'center' }}>บริการแนะนำ</h1>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
          <ButtonAgree />
          <ButtonRequest />
          <ButtonRequestMoney />
          <ButtonDisburse />
        </div>
      </div>
      <h1 style={{ textAlign: 'center' }}>สถานะรายการล่าสุด</h1>
      <div style={{ 
        background: '#f0f0f0', 
        borderRadius: '10px',  
        padding: '20px',       
        margin: '20px',        
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
      }}>
        <p>
          Text messaging, or texting, is the act of composing and sending electronic messages, typically consisting of alphabetic and numeric characters, between two or more users of mobile devices, desktops/laptops, or another type of compatible computer. Text messages may be sent over a cellular network or may also be sent via satellite or Internet connection.
          ...
        </p>
      </div>
      <h1 style={{ textAlign: 'center' }}>ข่าวประชาสัมพันธ์</h1>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        <NewsCard
          imageUrl="url_to_your_image_1"
          title="หัวข้อข่าวที่ 1"
          link="https://stiinfras.com/"
        />
        <NewsCard
          imageUrl="url_to_your_image_2"
          title="หัวข้อข่าวที่ 2"
          link="https://stiinfras.com/"
        />
        <NewsCard
          imageUrl="url_to_your_image_3"
          title="หัวข้อข่าวที่ 3"
          link="https://stiinfras.com/"
        />
      </div>
    
    </div>
  );
}

export default Home;
