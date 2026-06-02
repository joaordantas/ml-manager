export default function Sidebar() {
  return (
    <aside
      style={{
        width: "250px",
        padding: "40px",
        background: "transparent",
        border: "none",
        color: "#94a3b8",
        
      }}
    >
      <h2
        style={{
          color: "#8b5cf6",
          marginBottom: "40px",
        }}
      >
        ML Manager
      </h2>

      <nav
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <button>Dashboard</button>
        <button>Produtos</button>
        <button>Simulador</button>
        <button>Alertas</button>
        <button>Integrações</button>
        <button>Configurações</button>
      </nav>
    </aside>
  );
}
