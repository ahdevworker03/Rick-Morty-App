import "./CharacterCard.css";

function CharacterCard({ character }) {
  const getStatusColor = (status) => {
    switch (status) {
      case "Alive":
        return "#51e051";
      case "Dead":
        return "#e05151";
      case "unknown":
        return "#9e9e9e";
      default:
        return "#9e9e9e";
    }
  };

  return (
    <div className="character-card">
      <div className="character-image-container">
        <img
          src={character.image}
          alt={character.name}
          className="character-image"
        />
      </div>

      <div className="character-info">
        <h2 className="character-name">{character.name}</h2>

        <div className="character-status">
          <span
            className="status-indicator"
            style={{ backgroundColor: getStatusColor(character.status) }}
          ></span>
          <span className="status-text">{character.status}</span>
        </div>

        <div className="character-details">
          <div className="detail-item">
            <span className="detail-label">Species:</span>
            <span className="detail-value">{character.species}</span>
          </div>

          <div className="detail-item">
            <span className="detail-label">Gender:</span>
            <span className="detail-value">{character.gender}</span>
          </div>

          <div className="detail-item">
            <span className="detail-label">Type:</span>
            <span className="detail-value">{character.type || "N/A"}</span>
          </div>

          <div className="detail-item">
            <span className="detail-label">Origin:</span>
            <span className="detail-value">{character.origin.name}</span>
          </div>

          <div className="detail-item">
            <span className="detail-label">Location:</span>
            <span className="detail-value">{character.location.name}</span>
          </div>
        </div>

        <div className="character-id">
          Episode Count: {character.episode.length}
        </div>
      </div>
    </div>
  );
}

export default CharacterCard;
