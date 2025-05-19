// eslint-disable-next-line no-unused-vars
import React from 'react';

const Map = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', paddingTop: '20px' }}>
      <h1>Map Page</h1>
      <div style={{ width: '100%', height: '500px' }}>
        <iframe
          title="Scout Group Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d634578.9247871682!2d-1.6823120016330029!3d51.58979032964842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876b95982a7588f%3A0x209b9589a54c5d42!2sDidcot%20Methodist%20Church!5e0!3m2!1sen!2suk!4v1740854236543!5m2!1sen!2suk"
          width="90%"
          height="95%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
