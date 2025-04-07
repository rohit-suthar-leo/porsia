import React from 'react';

export default function ProductHuntBadge() {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <a 
        href="https://www.producthunt.com/posts/porsia?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-porsia" 
        target="_blank" 
        rel="noopener noreferrer"
        className="block"
      >
        <img 
          src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=950375&theme=light&t=1744004588751" 
          alt="Porsia - Grow Your Brand & Leads—All in One No-Code Platform | Product Hunt" 
          style={{ width: '250px', height: '54px' }} 
          width="250" 
          height="54" 
        />
      </a>
    </div>
  );
} 