export default function MetricCard({
  titulo,
  valor,
  cor,
}) {
  return (
    <div
      style={{
        background: "#0f172a",
        borderRadius: "16px",
        padding: "25px",
        border: "1px solid #1e293b",
      }}
    >
      <p
        style={{
          color: "#94a3b8",
          marginBottom: "10px",
        }}
      >
        {titulo}
      </p>

      <h2
        style={{
          color: cor,
          fontSize: "32px",
        }}
      >
        {valor}
      </h2>
    </div>
  );
}