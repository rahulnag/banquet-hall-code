import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ height: "100vh", textAlign: "center", marginTop: "5rem" }}>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">
        <button className="primary-button">Return Home</button>
      </Link>
    </div>
  );
}
