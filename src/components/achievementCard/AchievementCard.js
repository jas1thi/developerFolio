import React from "react";
import "./AchievementCard.scss";

export default function AchievementCard({cardInfo, isDark}) {
  function openUrlInNewTab(url, name) {
    console.log(`Opening: ${url}`);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <div className={isDark ? "dark-mode certificate-card" : "certificate-card"}>
      <div className="certificate-image-div">
        <img
          src={cardInfo.image}
          alt={cardInfo.imageAlt || "Card Thumbnail"}
          className="card-image"
        ></img>
      </div>
      <div className="certificate-detail-div">
        <h5 className={isDark ? "dark-mode card-title" : "card-title"}>
          {cardInfo.title}
        </h5>
        <p className={isDark ? "dark-mode card-subtitle" : "card-subtitle"}>
          {cardInfo.description}
        </p>
      </div>
      <div className="certificate-card-footer">
        {cardInfo.footer && cardInfo.footer.length > 0 ? cardInfo.footer.map((v, i) => {
          return (
            <a
              key={i}
              href={v.url}
              target="_blank"
              rel="noopener noreferrer"
              className={
                isDark ? "dark-mode certificate-tag" : "certificate-tag"
              }
              style={{ cursor: 'pointer', textDecoration: 'none' }}
            >
              {v.name}
            </a>
          );
        }) : (
          <span className={isDark ? "dark-mode certificate-tag" : "certificate-tag"}>
            No Link Available
          </span>
        )}
      </div>
    </div>
  );
}
