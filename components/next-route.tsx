import Link from "next/link";

export function NextRoute({
  href = "/journeys/kangra-dharamshala",
  title = "Kangra & Dharamshala",
  image = "/routes/kangra-cover.jpg",
}: {
  href?: string;
  title?: string;
  image?: string;
}) {
  return (
    <Link href={href} className="next-route group">
      <img
        src={image}
        alt=""
        width={1536}
        height={864}
        className="next-route-cover"
      />
      <div className="next-route-shade" />
      <div className="next-route-content">
        <div className="next-route-text">
          <p className="next-route-label">Next Route</p>
          <p className="next-route-title">{title}</p>
        </div>
        <p className="next-route-arrow" aria-hidden="true">
          →
        </p>
      </div>
    </Link>
  );
}
