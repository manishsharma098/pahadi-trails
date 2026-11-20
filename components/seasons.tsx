const seasons = [
  {
    months: "Mar–May",
    title: "Spring",
    body: "Rhododendron in bloom, Kangra tea plucking, paragliding at Bir.",
    image: "/seasons/spring.jpg?v=2",
    alt: "Red rhododendron blossoms in spring",
  },
  {
    months: "Jun–Aug",
    title: "Summer",
    body: "High passes open: Spiti, Lahaul and Pangi over Sach Pass.",
    image: "/seasons/summer.jpg?v=2",
    alt: "A high-altitude lake in summer",
  },
  {
    months: "Sep–Nov",
    title: "Autumn",
    body: "Clear skies, apple harvest, the Kullu Dussehra.",
    image: "/seasons/autumn.jpg?v=2",
    alt: "Crates of freshly picked apples in autumn",
  },
  {
    months: "Dec–Feb",
    title: "Winter",
    body: "Snow at Chanshal and Solang. Sach Pass closes until July.",
    image: "/seasons/winter.jpg?v=2",
    alt: "A village under fresh winter snow",
  },
];

export function Seasons() {
  return (
    <section id="seasons" className="seasons-section">
      <header className="seasons-header">
        <p className="seasons-eyebrow">All seasons, all reasons</p>
        <h2 className="seasons-title">Every month opens a valley</h2>
      </header>
      <div className="seasons-grid">
        {seasons.map((season) => (
          <article key={season.title} className="season-card">
            <div
              className="season-visual"
              style={{ backgroundImage: `url("${season.image}")` }}
            >
              <img src={season.image} alt={season.alt} width={1024} height={1280} />
            </div>
            <div className="season-text">
              <p className="season-months">{season.months}</p>
              <h3 className="season-name">{season.title}</h3>
              <p className="season-body">{season.body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
