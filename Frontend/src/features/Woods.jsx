import Card from "../components/molecule/card"
import CardData from "../sampleData/cardData"

const WoodsPage = () => {
  return (
    <section className="wood-showcase-section">
      <div className="wood-grid">
        {CardData.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

export default WoodsPage;