import Link from "next/link";
fontFamily: "Inter, sans-serif"
export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "linear-gradient(180deg, #020617, #0f172a)",
      color: "white",
      fontFamily: "sans-serif"
    }}>
      
      {/* NAVBAR */}
      <nav style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px 40px",
        alignItems: "center"
      }}>
        <h2 style={{ color: "#3b82f6" }}>🚀 PatchVault</h2>

        <div style={{ marginTop: "30px" }}>
<button
  style={btnPrimary}
  onClick={() => window.location.href = "/browse"}
>
  Browse Patches
</button>

<button
  style={btnSecondary}
  onClick={() => window.location.href = "/upload"}
>
  Upload Patch
</button>
      {/* HERO */}
      <section style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "60px 40px",
        flexWrap: "wrap"
      }}>
        <div style={{ maxWidth: "600px" }}>
          <p style={{ color: "#3b82f6", marginBottom: "10px" }}>
            THE #1 PLATFORM
          </p>

          <h1 style={{
            fontSize: "56px",
            fontWeight: "bold",
            lineHeight: "1.1"
          }}>
            Law Enforcement <br />
            Patch Trading <br />
            <span style={{ color: "#3b82f6" }}>& Design</span>
          </h1>

          <p style={{
            marginTop: "20px",
            opacity: 0.7,
            fontSize: "18px"
          }}>
            Buy, sell, and trade authentic patches from agencies worldwide.
          </p>

          <div style={{ marginTop: "30px" }}>
          <Link href="/browse">
  <button style={btnPrimary}>Browse Patches</button>
</Link>
        </div>

        {/* IMAGE / MOCK VISUAL */}
        <div style={{
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, #1e293b, #020617)",
          borderRadius: "20px",
          boxShadow: "0 0 60px rgba(59,130,246,0.3)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "40px"
        }}>
          <h2 style={{ opacity: 0.3 }}>Patch Preview</h2>
        </div>
      </section>

      {/* FEATURES */}
      <section style={{
        padding: "60px 40px"
      }}>
        <h2 style={{
          textAlign: "center",
          fontSize: "32px",
          marginBottom: "40px"
        }}>
          Everything You Need
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px"
        }}>
          <Feature title="Browse Patches" desc="Explore thousands of patches." />
          <Feature title="Upload & Sell" desc="List patches instantly." />
          <Feature title="Trusted Community" desc="Verified collectors." />
          <Feature title="Secure Trades" desc="Safe transactions." />
        </div>
      </section>

      {/* PATCH GRID */}
      <section style={{ padding: "60px 40px" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>
          Popular This Week
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px"
        }}>
          {[1,2,3,4,5,6].map((i) => (
            <div key={i} style={card}>
              <div style={cardImage}></div>
              <h3>Police Patch #{i}</h3>
              <p style={{ opacity: 0.6 }}>$24.99</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{
        margin: "60px 40px",
        padding: "40px",
        background: "linear-gradient(90deg, #1e293b, #020617)",
        borderRadius: "16px",
        textAlign: "center",
        boxShadow: "0 0 40px rgba(59,130,246,0.2)"
      }}>
        <h2>Join Thousands of Collectors</h2>
        <p style={{ opacity: 0.7 }}>Start trading today</p>
        <button style={{ ...btnPrimary, marginTop: "20px" }}>
          Create Account
        </button>
      </section>

    </main>
  );
}

/* COMPONENTS */

function Feature({ title, desc }: any) {
  return (
    <div style={{
      padding: "20px",
      background: "#020617",
      border: "1px solid #1e293b",
      borderRadius: "12px"
    }}>
      <h3>{title}</h3>
      <p style={{ opacity: 0.6 }}>{desc}</p>
    </div>
  );
}

/* STYLES */

const btnPrimary = {
  padding: "12px 20px",
  background: "#3b82f6",
  border: "none",
  borderRadius: "8px",
  color: "white",
  marginRight: "10px",
  cursor: "pointer"
};

const btnSecondary = {
  padding: "12px 20px",
  background: "#020617",
  border: "1px solid #1e293b",
  borderRadius: "8px",
  color: "white",
  cursor: "pointer"
};

const btnGhost = {
  padding: "10px 16px",
  background: "transparent",
  border: "none",
  color: "white",
  marginRight: "10px",
  cursor: "pointer"
};

const card = {
  padding: "20px",
  background: "#020617",
  border: "1px solid #1e293b",
  borderRadius: "12px"
};

const cardImage = {
  height: "120px",
  background: "#1e293b",
  borderRadius: "8px",
  marginBottom: "10px"
};
export default function Home() {
  return (
    <main>
      {/* your UI code here */}
    </main>
  );
}
const btnPrimary = {
  padding: "12px 20px",
  background: "#3b82f6",
  border: "none",
  borderRadius: "8px",
  color: "white",
  marginRight: "10px",
  cursor: "pointer",
  transition: "0.2s"
};
<button
  style={btnPrimary}
  onMouseOver={(e) => e.currentTarget.style.opacity = "0.8"}
  onMouseOut={(e) => e.currentTarget.style.opacity = "1"}
></button>
const patches = [
  { name: "NYPD Tactical Unit", price: "$39.99" },
  { name: "SWAT Team Patch", price: "$29.99" },
  { name: "Sheriff Department", price: "$24.99" },
];

{patches.map((p, i) => (
  <div key={i} style={card}>
    <div style={cardImage}></div>
    <h3>{p.name}</h3>
    <p style={{ opacity: 0.6 }}>{p.price}</p>
  </div>
))}
const card = {
  padding: "20px",
  background: "#020617",
  border: "1px solid #1e293b",
  borderRadius: "12px",
  transition: "0.2s"
};
onMouseOver={(e) => {
  e.currentTarget.style.transform = "translateY(-5px)";
  e.currentTarget.style.boxShadow = "0 10px 30px rgba(59,130,246,0.3)";
}}
onMouseOut={(e) => {
  e.currentTarget.style.transform = "translateY(0)";
  e.currentTarget.style.boxShadow = "none";
}}