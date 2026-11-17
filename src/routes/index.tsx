import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import arvore from "@/assets/arvore.webp.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Árvore de Natal Pinheiro Norueguês do Norte | Oferta" },
      { name: "description", content: "Árvore de Natal Pinheiro Norueguês do Norte com luzes LED quentes, galhos realistas e montagem fácil. Oferta de Natal." },
      { property: "og:title", content: "Árvore de Natal Pinheiro Norueguês do Norte" },
      { property: "og:description", content: "Galhos realistas, luzes LED quentes e frete grátis. Oferta de Natal." },
      { property: "og:type", content: "product" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Produto,
});

const tamanhos = [
  { label: "1,80 m", preco: 37.9, de: 137 },
  { label: "2,10 m", preco: 37.9, de: 137 },
  { label: "2,40 m", preco: 37.9, de: 137 },
];
const brl = (n: number) => n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

const abas = {
  Descrição: (
    <div className="space-y-3 text-muted-foreground leading-relaxed">
      <p>Inspirada nas florestas do norte da Noruega, esta árvore traz galhos densos em dois tons de verde, com pontas moldadas que imitam as agulhas de um pinheiro de verdade.</p>
      <p>Já vem com luzes LED em branco quente distribuídas galho a galho — é só montar, ligar e decorar.</p>
    </div>
  ),
  "Ficha técnica": (
    <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 text-sm">
      {[["Altura","1,80 m / 2,10 m / 2,40 m"],["Luzes","LED branco quente"],["Galhos","PE + PVC, toque realista"],["Base","Metal dobrável"],["Montagem","3 partes encaixáveis"],["Garantia","12 meses"]].map(([k,v])=>(
        <div key={k} className="flex justify-between border-b border-border py-3"><dt className="text-muted-foreground">{k}</dt><dd className="font-medium">{v}</dd></div>
      ))}
    </dl>
  ),
  Avaliações: (
    <div className="space-y-5">
      {[["Mariana S.","Parece natural de verdade, as visitas acharam que era pinheiro real!"],["Ricardo P.","Montei em 10 minutos. As luzes são lindas, bem aconchegantes."],["Fernanda L.","Cheia, volumosa e chegou muito bem embalada."]].map(([n,t])=>(
        <div key={n} className="border-b border-border pb-4"><div className="text-gold">★★★★★</div><p className="mt-1">{t}</p><p className="text-sm text-muted-foreground mt-1">{n} · Compra verificada</p></div>
      ))}
    </div>
  ),
};

function Produto() {
  const [t, setT] = useState(0);
  const [qtd, setQtd] = useState(1);
  const [aba, setAba] = useState<keyof typeof abas>("Descrição");
  const s = tamanhos[t] ?? tamanhos[0]!;
  const off = Math.round((1 - s.preco / s.de) * 100);
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <div className="bg-primary text-primary-foreground text-center text-sm py-2">🎄 Frete grátis para todo o Brasil · Entrega antes do Natal</div>
      <header className="border-b border-border">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <span className="font-display text-2xl font-bold text-primary">Casa Nórdica</span>
          <nav className="hidden md:flex gap-6 text-sm text-muted-foreground"><span>Árvores</span><span>Enfeites</span><span>Luzes</span><span>Presentes</span></nav>
          <span className="text-sm">🛒 Carrinho</span>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-4 py-6">
        <p className="text-sm text-muted-foreground mb-6">Início / Natal / Árvores / <span className="text-foreground">Pinheiro Norueguês do Norte</span></p>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="relative rounded-lg overflow-hidden bg-card border border-border">
            <span className="absolute top-4 left-4 bg-accent text-accent-foreground text-sm font-bold px-3 py-1 rounded-full">-{off}%</span>
            <img src={arvore.url} alt="Árvore de Natal Pinheiro Norueguês do Norte iluminada" className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="text-sm uppercase tracking-widest text-accent font-medium">Coleção Natal 2026</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold mt-2 leading-tight">Árvore de Natal Pinheiro Norueguês do Norte</h1>
            <p className="mt-3 text-sm"><span className="text-gold">★★★★★</span> <span className="text-muted-foreground">4,9 (312 avaliações)</span></p>
            <div className="mt-6">
              <p className="text-muted-foreground line-through">{brl(s.de)}</p>
              <p className="font-display text-4xl font-bold text-primary">{brl(s.preco)}</p>
              <p className="text-sm text-muted-foreground">ou 3x de {brl(s.preco / 3)} sem juros · 5% off no Pix</p>
            </div>
            <div className="mt-6">
              <p className="text-sm font-medium mb-2">Altura</p>
              <div className="flex gap-2">
                {tamanhos.map((x, i) => (
                  <button key={x.label} onClick={() => setT(i)} className={`px-4 py-2 rounded-md border text-sm ${i === t ? "border-primary bg-primary text-primary-foreground" : "border-border hover:border-primary"}`}>{x.label}</button>
                ))}
              </div>
            </div>
            <div className="mt-6 flex gap-3">
              <div className="flex items-center border border-border rounded-md">
                <button className="px-3 py-3" onClick={() => setQtd(Math.max(1, qtd - 1))}>−</button>
                <span className="w-8 text-center">{qtd}</span>
                <button className="px-3 py-3" onClick={() => setQtd(qtd + 1)}>+</button>
              </div>
              <button className="flex-1 bg-accent text-accent-foreground font-bold rounded-md py-3 hover:opacity-90 transition">Comprar agora</button>
            </div>
            <button className="mt-3 w-full border border-primary text-primary font-medium rounded-md py-3 hover:bg-secondary transition">Adicionar ao carrinho</button>
            <p className="mt-3 text-sm text-accent font-medium">🔥 Restam poucas unidades em estoque</p>
            <ul className="mt-6 grid grid-cols-2 gap-3 text-sm">
              {["✨ LEDs branco quente inclusos","🌲 Galhos com toque realista","🔧 Montagem em 10 minutos","🛡️ Garantia de 12 meses"].map((b)=>(<li key={b} className="bg-secondary rounded-md p-3">{b}</li>))}
            </ul>
          </div>
        </div>
        <section className="mt-14">
          <div className="flex gap-6 border-b border-border">
            {(Object.keys(abas) as (keyof typeof abas)[]).map((k) => (
              <button key={k} onClick={() => setAba(k)} className={`pb-3 -mb-px font-medium ${aba === k ? "border-b-2 border-primary text-primary" : "text-muted-foreground"}`}>{k}</button>
            ))}
          </div>
          <div className="py-6 max-w-3xl">{abas[aba]}</div>
        </section>
      </main>
      <footer className="border-t border-border py-6 text-center text-sm text-muted-foreground">© 2026 Casa Nórdica · Pagamento seguro</footer>
    </div>
  );
}
