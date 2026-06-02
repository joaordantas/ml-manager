export default function StatCard({
  title,
  value,
  color,
  subtitle
}) {
  return (
    <div className="stat-card">

      <h3>{title}</h3>

      <h1
        style={{
          color
        }}
      >
        {value}
      </h1>

      <p>{subtitle}</p>

    </div>
  )
}