import "./Card.css";

const cardThemes = {
  blue: "blue",
  orange: "orange",
};

export default function Card({ theme, iconSrc, alt, title, description }) {
  return (
    <div className="cardWrapper">
      <div className={`cardTop ${cardThemes[theme]}`}>
        <img className="cardIcon" src={iconSrc} alt={alt} />
      </div>
      <div className="cardContent">
        <div className="cardTitleWrapper">
          <h3 className="cardTitle">{title}</h3>
        </div>
        <div className="divider"></div>
        <p className="cardDescription">{description}</p>
      </div>
    </div>
  );
}
