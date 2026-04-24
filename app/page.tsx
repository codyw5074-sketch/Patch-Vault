export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#0f172a",
      color: "white",
      fontFamily: "sans-serif",
      padding: "40px"
    }}>
      <nav style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "40px"
      }}>
        <h2>🚀 PatchVault</h2>
        <div>
          <button style={{ marginRight: "10px" }}>Login</button>
          <button>Sign Up</button>
        </div>
      </nav>

      <section style={{ textAlign: "center", marginTop: "80px" }}>
        <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
          The Future of Patch Trading
        </h1>
        <p style={{ fontSize: "18px", opacity: 0.8 }}>
          Buy, sell, and trade law enforcement patches in one secure platform.
        </p>

        <div style={{ marginTop: "30px" }}>
          <button style={{
            padding: "12px 20px",
            marginRight: "10px",
            background: "#3b82f6",
            color: "white",
            border: "none",
            borderRadius: "8px"
          }}>
            Browse Patches
          </button>

          <button style={{
            padding: "12px 20px",
            background: "#1e293b",
            color: "white",
            border: "1px solid #334155",
            borderRadius: "8px"
          }}>
            Upload Patch
          </button>
        </div>
      </section>
    </main>
  );
}