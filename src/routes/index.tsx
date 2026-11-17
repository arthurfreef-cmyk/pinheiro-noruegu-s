import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import arvore from "@/assets/arvore.webp.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Árvore de Natal Pinheiro Norueguês | Protótipo" },
    { name: "description", content: "Protótipo visual demonstrativo de página de produto." },
  ] }),
  component: Produto,
});

const tamanhos = [
  { label: "1,80 m", preco: 37.9, de: 137 },
  { label: "2,10 m", preco: 37.9, de: 137 },
  { label: "2,40 m", preco: 37.9, de: 137 },
];
const brl = (n: number) => n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

function Produto() {
  const [t, setT] = useState(0);
  const [qtd, setQtd] = useState(1);
  const [aba, setAba] = useState("Descrição");
  const [foto, setFoto] = useState(0);
  const s = tamanhos[t] ?? tamanhos[0]!;
  const fotos = [arvore.url, arvore.url, arvore.url, arvore.url];

  return <div className="min-h-screen bg-[#ededed] text-[#333]">
    <header className="bg-[#fff159]">
      <div className="mx-auto flex max-w-[1200px] items-center gap-5 px-4 py-3">
        <div className="flex shrink-0 items-center gap-2">
          <span className="flex h-10 w-14 items-center justify-center rounded-full border-[3px] border-[#263b80] bg-white text-xl font-bold text-[#263b80]">↔</span>
          <span className="hidden text-[19px] font-bold tracking-tight text-[#263b80] sm:block">mercado livre</span>
        </div>
        <div className="flex h-10 flex-1 items-center overflow-hidden rounded-sm bg-white shadow-sm">
          <input aria-label="Buscar produtos" placeholder="Buscar produtos, marcas e muito mais..." className="min-w-0 flex-1 px-4 text-sm outline-none" />
          <button className="border-l px-4 text-xl text-[#555]" aria-label="Buscar">⌕</button>
        </div>
        <span className="hidden text-xs lg:block">Ofertas especiais<br/><b>Árvore de Natal</b></span>
      </div>
      <nav className="mx-auto hidden max-w-[1200px] justify-between px-4 pb-3 text-[12px] text-[#514b28] md:flex">
        <div className="flex gap-5"><span>Categorias</span><span>Ofertas</span><span>Cupons</span><span>Supermercado</span><span>Moda</span><span>Mercado Play</span><span>Vender</span></div>
        <div className="flex gap-4"><span>Enviar para o Brasil</span><span>Crie sua conta</span><span>Entre</span><span>Compras</span></div>
      </nav>
    </header>
    <div className="border-b border-[#eadf9c] bg-[#fff8c5] py-1.5 text-center text-[10px] font-bold tracking-wide text-[#594d12]">PROTÓTIPO VISUAL NÃO OFICIAL · AMBIENTE DE TESTE · SEM VÍNCULO COM O MERCADO LIVRE</div>

    <main className="mx-auto max-w-[1200px] px-3 pb-10 pt-4 sm:px-4">
      <div className="mb-3 flex flex-wrap gap-1 text-[11px] text-[#3483fa]"><span>Início</span><span className="text-gray-400">›</span><span>Casa, Móveis e Decoração</span><span className="text-gray-400">›</span><span>Natal</span><span className="text-gray-400">›</span><span>Árvores de Natal</span></div>
      <section className="rounded-md bg-white p-3 shadow-sm sm:p-5">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1.55fr_1fr_.88fr] lg:gap-6">
          <div className="min-w-0">
            <div className="mb-2 flex justify-between text-[11px] text-[#999]"><span>Novo | + de 50 vendidos</span><button className="text-xl text-[#3483fa]" aria-label="Favoritar">♡</button></div>
            <div className="flex gap-2">
              <div className="hidden w-[54px] shrink-0 flex-col gap-2 sm:flex">{fotos.map((src,i)=><button key={i} onClick={()=>setFoto(i)} className={`h-[58px] overflow-hidden rounded border ${foto===i?"border-2 border-[#3483fa]":"border-gray-200"}`}><img src={src} alt={`Miniatura ${i+1}`} className="h-full w-full object-contain"/></button>)}</div>
              <button onClick={()=>setFoto((foto+1)%fotos.length)} className="flex min-h-[300px] flex-1 items-center justify-center sm:min-h-[430px]"><img src={fotos[foto]} alt="Árvore de Natal Pinheiro Norueguês do Norte" className="max-h-[430px] w-full object-contain"/></button>
            </div>
            <div className="mt-3 flex justify-center gap-2 sm:hidden">{fotos.map((_,i)=><button key={i} onClick={()=>setFoto(i)} aria-label={`Foto ${i+1}`} className={`h-1.5 w-5 rounded-full ${foto===i?"bg-[#3483fa]":"bg-gray-300"}`}/>)}</div>
            <div className="mt-5 border-t pt-4"><h3 className="font-semibold">O que você precisa saber sobre este produto</h3><ul className="mt-3 list-disc space-y-2 pl-5 text-[13px] leading-relaxed text-[#555]"><li>Galhos densos em dois tons de verde e aparência natural.</li><li>Luzes LED em branco quente distribuídas pelos galhos.</li><li>Base metálica dobrável e montagem em partes encaixáveis.</li><li>Disponível em três alturas: 1,80 m, 2,10 m e 2,40 m.</li></ul></div>
          </div>

          <div className="min-w-0">
            <p className="mb-2 text-[11px] text-[#777]">Novo | +50 vendidos</p>
            <h1 className="text-[21px] font-medium leading-tight">Árvore De Natal Pinheiro Norueguês Do Norte Com Luzes LED</h1>
            <div className="mt-2 text-[13px]"><span className="text-[#3483fa]">4,9 ★★★★★</span> <span className="text-[#3483fa]">(312 avaliações)</span></div>
            <div className="mt-5"><p className="text-sm text-[#999] line-through">{brl(s.de)}</p><div className="flex items-center gap-2"><span className="text-[32px] font-light">{brl(s.preco)}</span><span className="text-sm font-medium text-[#00a650]">{Math.round((1-s.preco/s.de)*100)}% OFF</span></div><p className="mt-1 text-[13px] text-[#00a650]">em até 3x sem juros</p><p className="mt-1 text-[11px] text-[#888]">Preço demonstrativo do projeto.</p></div>
            <div className="mt-5"><p className="text-[13px] font-semibold">Altura: <span className="font-normal">{s.label}</span></p><div className="mt-2 flex flex-wrap gap-2">{tamanhos.map((x,i)=><button key={x.label} onClick={()=>setT(i)} className={`rounded border px-3 py-2 text-[12px] ${i===t?"border-[#3483fa] bg-[#f5faff] text-[#3483fa]":"border-gray-300"}`}>{x.label}</button>)}</div></div>
            <div className="mt-5 border-t pt-4"><h3 className="text-[15px] font-semibold">Características do produto</h3><div className="mt-3 grid grid-cols-2 gap-3 text-[12px]"><div><span className="block text-[#999]">Marca</span>Pinheiro Norueguês</div><div><span className="block text-[#999]">Modelo</span>Árvore iluminada</div><div><span className="block text-[#999]">Material</span>PE + PVC</div><div><span className="block text-[#999]">Iluminação</span>LED branco quente</div></div><button onClick={()=>setAba("Ficha técnica")} className="mt-4 text-[12px] text-[#3483fa]">Ver todas as características</button></div>
          </div>

          <aside className="min-w-0">
            <div className="rounded-lg border border-[#eee] p-4">
              <p className="text-[12px] font-semibold text-[#00a650]">● Frete grátis</p><p className="mt-1 text-[13px] font-semibold">Chegará antes do Natal</p><p className="mt-1 text-[11px] text-[#777]">Prazo ilustrativo para demonstração.</p>
              <div className="mt-4 border-t pt-3"><p className="text-[13px] font-semibold">Estoque disponível</p><label className="mt-2 block text-[12px] text-[#666]">Quantidade</label><select value={qtd} onChange={e=>setQtd(Number(e.target.value))} className="mt-1 w-full rounded border border-gray-300 bg-white px-3 py-2 text-[13px]"><option value={1}>1 unidade</option><option value={2}>2 unidades</option><option value={3}>3 unidades</option><option value={4}>4 unidades</option></select></div>
              <button className="mt-4 w-full rounded-md bg-[#3483fa] py-3 text-[14px] font-semibold text-white">Comprar agora</button><button className="mt-2 w-full rounded-md bg-[#d9e9ff] py-3 text-[14px] font-semibold text-[#3483fa]">Adicionar ao carrinho</button>
              <div className="mt-4 space-y-3 border-t pt-3 text-[12px]"><p><b className="text-[#3483fa]">Compra protegida</b><br/><span className="text-[#777]">Informação ilustrativa do protótipo.</span></p><p><b className="text-[#3483fa]">Devolução grátis</b><br/><span className="text-[#777]">Consulte as condições da loja.</span></p><p><b className="text-[#3483fa]">12 meses de garantia</b></p></div>
            </div>
            <div className="mt-3 rounded-lg border border-[#eee] bg-white p-4 text-[12px]"><b>Informações da loja</b><p className="mt-2 text-[#777]">Produto apresentado em protótipo visual para teste de interface.</p></div>
          </aside>
        </div>
      </section>

      <section className="mt-4 rounded-md bg-white p-4 shadow-sm sm:p-6"><h2 className="text-xl font-medium">Produtos relacionados</h2><div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">{["Árvore de Natal Pinheiro Norueguês","Árvore de Natal com LED","Pinheiro de Natal decorativo","Árvore de Natal tradicional"].map((name,i)=><div key={i} className="rounded border border-[#eee] p-2"><img src={arvore.url} alt={name} className="h-32 w-full object-contain"/><p className="mt-2 text-[12px]">{name}</p><p className="mt-2 text-lg">{brl(37.9)}</p><p className="text-[11px] text-[#00a650]">Frete grátis</p></div>)}</div></section>

      <section className="mt-4 rounded-md bg-white p-4 shadow-sm sm:p-6"><div className="flex flex-wrap gap-5 border-b text-[14px]">{["Descrição","Ficha técnica","Avaliações"].map(k=><button key={k} onClick={()=>setAba(k)} className={`border-b-2 pb-3 ${aba===k?"border-[#3483fa] font-semibold text-[#3483fa]":"border-transparent text-[#666]"}`}>{k}</button>)}</div>
        {aba==="Descrição"&&<div className="max-w-3xl py-5 text-[13px] leading-7 text-[#555]"><p>Inspirada nas florestas do norte da Noruega, esta árvore traz galhos densos em dois tons de verde, com pontas moldadas que imitam as agulhas de um pinheiro de verdade.</p><p className="mt-3">Já vem com luzes LED em branco quente distribuídas galho a galho — é só montar, ligar e decorar.</p></div>}
        {aba==="Ficha técnica"&&<div className="grid max-w-3xl gap-x-10 py-4 text-[13px] sm:grid-cols-2">{[["Altura","1,80 m / 2,10 m / 2,40 m"],["Luzes","LED branco quente"],["Galhos","PE + PVC, toque realista"],["Base","Metal dobrável"],["Montagem","3 partes encaixáveis"],["Garantia","12 meses"]].map(([k,v])=><div key={k} className="flex justify-between border-b py-3"><span className="text-[#888]">{k}</span><b>{v}</b></div>)}</div>}
        {aba==="Avaliações"&&<div className="max-w-3xl space-y-5 py-5 text-[13px]">{[["Mariana S.","Parece natural de verdade, as visitas acharam que era pinheiro real!"],["Ricardo P.","Montei em 10 minutos. As luzes são lindas, bem aconchegantes."],["Fernanda L.","Cheia, volumosa e chegou muito bem embalada."]].map(([n,txt])=><div key={n} className="border-b pb-4"><div className="text-[#3483fa]">★★★★★</div><p className="mt-1">{txt}</p><p className="mt-1 text-[11px] text-[#888]">{n} · Avaliação ilustrativa do protótipo</p></div>)}</div>}
      </section>
      <footer className="py-8 text-center text-[11px] text-[#777]">Protótipo de interface para avaliação · Não é uma página oficial do Mercado Livre e não realiza transações.</footer>
    </main>
  </div>;
}
