function Card({ item }) {
  return (
    <div className="wood-card">
      <img src={item.image} alt={item.title} className="wood-card-img" />

      <div className="wood-card-body">
        <span className="wood-card-category">{item.category}</span>

        <h3 className="wood-card-title">{item.title}</h3>

        <p className="wood-card-desc">{item.description}</p>

        <div className="wood-card-footer">
          <span className="wood-card-price">{item.price}</span>
          <button className="wood-card-btn" onClick={() => alert(`Inquiry for ${item.title} submitted!`)}>
            Get Quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;