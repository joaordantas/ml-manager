import {
  AlertTriangle,
  BarChart3,
  Bell,
  Box,
  CalendarDays,
  Check,
  ChevronDown,
  ChevronRight,
  CircleDollarSign,
  Gift,
  Lightbulb,
  LineChart,
  Menu,
  MessageCircle,
  PackageCheck,
  Percent,
  Plane,
  Plug,
  Settings,
  ShieldAlert,
  ShoppingBag,
  Store,
  Wallet,
} from "lucide-react";
import {
  Area,
  AreaChart,
  Cell,
  Line,
  LineChart as RechartsLineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./Dashboard.css";

const sparklineData = [
  { value: 12 },
  { value: 12 },
  { value: 13 },
  { value: 16 },
  { value: 21 },
  { value: 17 },
  { value: 19 },
  { value: 17 },
  { value: 21 },
  { value: 27 },
  { value: 13 },
  { value: 16 },
  { value: 15 },
  { value: 18 },
  { value: 16 },
  { value: 19 },
  { value: 16 },
  { value: 18 },
  { value: 22 },
  { value: 27 },
];

const profitChartData = [
  { date: "02/05", profit: 90 },
  { date: "04/05", profit: 210 },
  { date: "06/05", profit: 180 },
  { date: "08/05", profit: 320 },
  { date: "10/05", profit: 370 },
  { date: "12/05", profit: 340 },
  { date: "14/05", profit: 560 },
  { date: "16/05", profit: 420 },
  { date: "18/05", profit: 330 },
  { date: "20/05", profit: 360 },
  { date: "22/05", profit: 460 },
  { date: "24/05", profit: 260 },
  { date: "26/05", profit: 290 },
  { date: "28/05", profit: 150 },
  { date: "30/05", profit: 340 },
  { date: "01/06", profit: 250 },
];

const metricCards = [
  {
    title: "Faturamento Total",
    value: "R$ 12.850,90",
    variation: "+15,2%",
    description: "em relação ao período anterior",
    color: "purple",
    icon: CircleDollarSign,
  },
  {
    title: "Lucro Real",
    value: "R$ 3.420,50",
    variation: "+8,7%",
    description: "em relação ao período anterior",
    color: "green",
    icon: LineChart,
  },
  {
    title: "Produtos com Prejuízo",
    value: "5 anúncios",
    variation: "+2",
    description: "em relação ao período anterior",
    color: "red",
    icon: AlertTriangle,
  },
  {
    title: "Margem Média",
    value: "21,4%",
    variation: "+2,1%",
    description: "em relação ao período anterior",
    color: "yellow",
    icon: Percent,
  },
];

const alerts = [
  {
    product: "Doce de Leite 500g",
    image: "🍯",
    accent: "red",
    margin: "Margem: -4,2%",
    profit: "Prejuízo: R$ -2,10 por venda",
    action: "Ação recomendada: Aumentar preço para R$ 44,90",
  },
  {
    product: "Kit 3 Canecas Personalizadas",
    image: "☕",
    accent: "yellow",
    margin: "Margem: 2,1%",
    profit: "Lucro: R$ 0,87 por venda",
    action: "Ação recomendada: Revisar frete ou preço",
  },
  {
    product: "Garrafa Térmica 1L",
    image: "🧴",
    accent: "orange",
    margin: "Margem caiu 12% nos últimos 7 dias",
    profit: "",
    action: "Ação recomendada: Verifique seus custos",
  },
];

const attentionProducts = [
  ["Doce de Leite 500g", "-R$ 2,10", "-4,2%", "danger"],
  ["Kit 3 Canecas", "R$ 0,87", "2,1%", "warning"],
  ["Caneca Premium", "R$ 1,20", "3,8%", "warning"],
  ["Squeeze 750ml", "R$ 2,10", "4,5%", "warning"],
  ["Quadro Decorativo", "R$ 0,50", "1,2%", "danger"],
];

const topProducts = [
  ["Kit Festa 10 Pessoas", "R$ 520,30"],
  ["Caneca Premium", "R$ 410,50"],
  ["Garrafa Térmica 1L", "R$ 390,20"],
  ["Quadro Decorativo", "R$ 310,00"],
  ["Squeeze 750ml", "R$ 280,10"],
];

const distributionData = [
  { name: "Lucrativos", value: 25, percent: "65,8%", color: "#35c96f" },
  { name: "Margem baixa", value: 12, percent: "31,6%", color: "#f6bd2d" },
  { name: "Prejuízo", value: 4, percent: "10,6%", color: "#ff5555" },
];

const sidebarItems = [
  [BarChart3, "Dashboard", true],
  [Box, "Produtos"],
  [Plane, "Anúncios"],
  [ShoppingBag, "Vendas"],
  [Wallet, "Custos"],
  [PackageCheck, "Simulador"],
  [Bell, "Alertas"],
  [BarChart3, "Relatórios"],
  [MessageCircle, "Análise de Comentários", false, "Novo"],
  [Settings, "Configurações"],
  [Plug, "Integrações"],
];

function MetricCard({ card }) {
  const Icon = card.icon;

  return (
    <section className={`metric-card metric-card--${card.color}`}>
      <div className="metric-card__top">
        <div className="metric-card__icon">
          <Icon size={25} />
        </div>
        <div>
          <p>{card.title}</p>
          <strong>{card.value}</strong>
        </div>
      </div>

      <p className="metric-card__variation">
        <span>{card.variation}</span> {card.description}
      </p>

      <div className="metric-card__chart">
        <ResponsiveContainer width="100%" height={58}>
          <RechartsLineChart data={sparklineData}>
            <Line
              type="monotone"
              dataKey="value"
              stroke="currentColor"
              strokeWidth={2.5}
              dot={false}
            />
          </RechartsLineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}

function Panel({ title, action = "Ver todos", children, className = "" }) {
  return (
    <section className={`panel ${className}`}>
      <div className="panel__header">
        <h2>{title}</h2>
        {action && <button>{action}</button>}
      </div>
      {children}
    </section>
  );
}

export default function Dashboard() {
  return (
    <div className="dashboard-shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand__logo">🤝</div>
          <div>
            <strong>ML Manager</strong>
            <span>Análise de Lucros</span>
          </div>
        </div>

        <nav className="sidebar__nav">
          {sidebarItems.map(([Icon, label, active, badge]) => (
            <button className={active ? "active" : ""} key={label}>
              <Icon size={19} />
              <span>{label}</span>
              {badge && <em>{badge}</em>}
            </button>
          ))}
        </nav>

        <div className="quick-tip">
          <strong>Dica rápida</strong>
          <p>
            Conecte sua conta do Mercado Livre para sincronizar seus anúncios
            automaticamente.
          </p>
          <button>Conectar agora</button>
        </div>
      </aside>

      <main className="dashboard-main">
        <header className="topbar">
          <button className="menu-button" aria-label="Abrir menu">
            <Menu size={24} />
          </button>

          <div className="topbar__right">
            <div className="sync-status">
              <p>
                <span />
                Mercado Livre conectado
                <Check size={14} />
              </p>
              <small>Última sincronização: 01/06/2026 20:30</small>
            </div>

            <button className="notification-button" aria-label="Notificações">
              <Bell size={21} />
              <b>3</b>
            </button>

            <div className="profile">
              <div>JD</div>
              <p>
                João da Silva
                <span>Plano Pro</span>
              </p>
              <ChevronDown size={17} />
            </div>
          </div>
        </header>

        <section className="dashboard-heading">
          <div>
            <h1>Dashboard</h1>
            <p>Visão geral da sua operação no Mercado Livre</p>
          </div>
          <button className="date-filter">
            <CalendarDays size={17} />
            01/05/2026 - 01/06/2026
            <ChevronDown size={17} />
          </button>
        </section>

        <section className="metrics-grid">
          {metricCards.map((card) => (
            <MetricCard card={card} key={card.title} />
          ))}
        </section>

        <section className="middle-grid">
          <Panel title="Alertas importantes" className="alerts-panel">
            <div className="alerts-list">
              {alerts.map((alert) => (
                <article className={`alert-item alert-item--${alert.accent}`} key={alert.product}>
                  <div className="alert-item__image">{alert.image}</div>
                  <div>
                    <h3>{alert.product}</h3>
                    <p>
                      {alert.margin}
                      {alert.profit && <span> | {alert.profit}</span>}
                    </p>
                    <small>{alert.action}</small>
                  </div>
                  <button aria-label={`Abrir ${alert.product}`}>
                    <ChevronRight size={18} />
                  </button>
                </article>
              ))}
            </div>
          </Panel>

          <Panel title="Produtos que precisam de atenção">
            <table className="attention-table">
              <thead>
                <tr>
                  <th>Produto</th>
                  <th>Lucro por venda</th>
                  <th>Margem</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {attentionProducts.map(([product, profit, margin, status]) => (
                  <tr key={product}>
                    <td>{product}</td>
                    <td className={profit.includes("-") ? "negative" : "positive"}>{profit}</td>
                    <td className={margin.includes("-") ? "negative" : "positive"}>{margin}</td>
                    <td>
                      <span className={`status-dot status-dot--${status}`} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Panel>

          <Panel title="Top 5 mais lucrativos">
            <div className="ranking-list">
              {topProducts.map(([product, value], index) => (
                <div className="ranking-list__row" key={product}>
                  <span>{index + 1}</span>
                  <p>{product}</p>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>
          </Panel>
        </section>

        <section className="bottom-grid">
          <Panel title="Lucro nos últimos 30 dias" action="Últimos 30 dias" className="profit-panel">
            <ResponsiveContainer width="100%" height={215}>
              <AreaChart data={profitChartData} margin={{ left: -18, right: 2, top: 8, bottom: 0 }}>
                <defs>
                  <linearGradient id="profitGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#35c96f" stopOpacity={0.45} />
                    <stop offset="100%" stopColor="#35c96f" stopOpacity={0.03} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="date" stroke="#8b95aa" tickLine={false} axisLine={false} />
                <YAxis
                  stroke="#8b95aa"
                  tickFormatter={(value) => `R$ ${value}`}
                  tickLine={false}
                  axisLine={false}
                />
                <Tooltip
                  contentStyle={{
                    background: "#111a2b",
                    border: "1px solid #253149",
                    borderRadius: 12,
                    color: "#fff",
                  }}
                  formatter={(value) => [`R$ ${value}`, "Lucro"]}
                />
                <Area
                  type="monotone"
                  dataKey="profit"
                  stroke="#35c96f"
                  strokeWidth={3}
                  fill="url(#profitGradient)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </Panel>

          <Panel title="Distribuição dos produtos" action="">
            <div className="distribution">
              <ResponsiveContainer width="42%" height={170}>
                <PieChart>
                  <Pie
                    data={distributionData}
                    dataKey="value"
                    innerRadius={52}
                    outerRadius={80}
                    startAngle={90}
                    endAngle={450}
                    stroke="none"
                  >
                    {distributionData.map((item) => (
                      <Cell fill={item.color} key={item.name} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>

              <div className="distribution__legend">
                {distributionData.map((item) => (
                  <div className="distribution__item" key={item.name}>
                    <span style={{ background: item.color }} />
                    <p>{item.name}</p>
                    <strong>{item.value}</strong>
                    <small>{item.percent}</small>
                  </div>
                ))}
              </div>
            </div>
          </Panel>

          <div className="side-summary">
            <Panel title="Resumo operacional" action="">
              <div className="summary-list">
                <div>
                  <Store size={17} />
                  <span>Vendas hoje</span>
                  <strong>12</strong>
                  <em className="positive">+2%</em>
                </div>
                <div>
                  <ShoppingBag size={17} />
                  <span>Pedidos pendentes</span>
                  <strong>3</strong>
                  <em className="negative">-1%</em>
                </div>
                <div>
                  <Wallet size={17} />
                  <span>Aguardando repasse ML</span>
                  <strong>R$ 820,50</strong>
                </div>
                <div>
                  <Gift size={17} />
                  <span>Ticket médio</span>
                  <strong>R$ 43,20</strong>
                  <em className="positive">+5%</em>
                </div>
              </div>
            </Panel>

            <section className="lost-profit">
              <Lightbulb size={31} />
              <div>
                <h3>Potencial de lucro perdido</h3>
                <p>Ajustando os preços dos produtos com prejuízo, você pode ganhar até:</p>
                <strong>R$ 430,00 / mês</strong>
              </div>
            </section>
          </div>
        </section>

        <section className="analysis-cta">
          <div className="analysis-cta__icon">
            <ShieldAlert size={39} />
          </div>
          <div>
            <h2>Análise completa dos seus anúncios</h2>
            <p>
              Recomendamos analisar todos os anúncios para identificar
              oportunidades de aumento de lucro.
            </p>
          </div>
          <button>
            Analisar todos os anúncios
            <ChevronRight size={20} />
          </button>
        </section>
      </main>
    </div>
  );
}
