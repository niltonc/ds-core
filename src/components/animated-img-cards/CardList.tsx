import React from 'react';
import './index.css';

type Card = {
  image?: string;
  heading?: string | TrustedHTML;
  text?: string;
  effect?: string;
};
const Card = ({ image, heading, text, effect }: Card) => {
  const backgroundImageStyle = {
    backgroundImage: `url("${image}")`
  };

  return (
    <div className={`crd ${effect}`}>
      <div className="crd-img" style={backgroundImageStyle}></div>
      <div className="crd-info">
        <h2
          className="crd-heading"
          dangerouslySetInnerHTML={{ __html: heading }}
        ></h2>
        <p className="crd-text">{text}</p>
      </div>
    </div>
  );
};

const CardList = ({ cards }: any) => {
  return (
    <div className="card-container">
      {cards.map((card: any, index: string) => (
        <Card
          key={index}
          image={card.image}
          heading={card.heading}
          text={card.text}
          effect={card.effect}
        />
      ))}
    </div>
  );
};

export default CardList;
