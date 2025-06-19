import React, { useEffect, useState } from "react";
import "./CustomersSection.css";

const customers = [
  {
    name: "ramp",
    logo: "https://th.bing.com/th/id/OIP.9NGvNnHrVeSh_Z5yKRl4PwHaD4?r=0&rs=1&pid=ImgDetMain",
  },
  {
    name: "OpenAI",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg",
  },
  {
    name: "scale",
    logo: "https://cdn.freelogovectors.net/wp-content/uploads/2022/10/scale_logo-freelogovectors.net_.png",
  },
  {
    name: "BOOM",
    logo: "https://logos-world.net/wp-content/uploads/2023/05/Boom-Technology-Logo.png",
  },
  {
    name: "Cash App",
    logo: "https://logos-world.net/wp-content/uploads/2020/11/Cash-App-Symbol.png",
  },
  {
    name: "Vercel",
    logo: "https://assets.vercel.com/image/upload/front/assets/design/vercel-triangle-black.svg",
  },
];


function getRandomIndexes(count, max) {
  const indexes = new Set();
  while (indexes.size < count) {
    indexes.add(Math.floor(Math.random() * max));
  }
  return Array.from(indexes);
}

export default function CustomersSection() {
  const [visibleIndexes, setVisibleIndexes] = useState([0, 1, 2, 3, 4, 5]);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndexes(getRandomIndexes(6, customers.length));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="customers-section">
      <div className="customers-grid">
        {visibleIndexes.map((idx, i) => (
          <div key={customers[idx].name} className="customer-box">
            <img
              src={customers[idx].logo}
              alt={customers[idx].name}
              className="customer-logo"
            />
            <div className="customer-name">{customers[idx].name}</div>
          </div>
        ))}
      </div>
      <button className="meet-customers-button">Meet our customers</button>
    </section>
  );
}