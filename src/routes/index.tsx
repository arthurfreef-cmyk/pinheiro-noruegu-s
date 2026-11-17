import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Search, ShoppingCart, Heart, ChevronRight, MapPin, ShieldCheck, Truck, Store, MessageCircle, ThumbsUp, ChevronDown, Camera, Info } from "lucide-react";
import arvore from "@/assets/arvore.webp.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Árvore de Natal Pinheiro Norueguês | Protótipo de interface" },
    { name: "description", content: "Demonstração visual de uma página de produto. Não realiza vendas." },
    { name: "robots", content: "noindex,nofollow" },
  ] }),
  component: Produto,
});

const tamanhos = [
  { label: "1,80 m", preco: 37.9, de: 137 },
  { label: "2,10 m", preco: 37.9, de: 137 },
  { label: "2,40 m", preco: 37.9, de: 137 },
];
const brl = (n: number) => n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
const reviews = [
  { nome: "Exemplo de avaliação", data: "Conteúdo ilustrativo", texto: "Este espaço demonstra como uma avaliação poderá aparecer quando houver comentários reais enviados por clientes.", helpful: 0 },
  { nome: "Exemplo de avaliação", data: "Conteúdo ilustrativo", texto: "As avaliações reais deverão ser adicionadas somente após autorização e confirmação de sua origem.", helpful: 0 },
];
const perguntas = [
  ["A árvore acompanha a base?", "Sim, a demonstração considera a base metálica dobrável inclusa."],
  ["As luzes já vêm instaladas?", "Sim, o modelo apresentado possui iluminação LED branco quente."],
  ["É possível escolher a altura?", "Sim. Use as opções de altura na área do produto para alternar a variação."],
];

function Produto() {
  const [t, setT] = useState(0);
  const [qtd, setQtd] = useState(1);
  const [aba, setAba] = useState("Descrição");
  const [foto, setFoto] = useState(0);
  const [favorito, setFavorito] = useState(false);
  const [aviso, setAviso] = useState("");
  const [perguntaAberta, setPerguntaAberta] = useState<number | null>(0);
  const s = tamanhos[t] ?? tamanhos[0]!;
  const fotos = [arvore.url];
  const showTestNotice = () => setAviso("Esta é uma página de teste. Nenhuma compra, reserva ou transação será realizada.");

  return <div className="min-h-screen bg-[#ededed] text-[#333]">
    <header className="sticky top-0 z-40 border-b border-[#e2c900] bg-[#fff159] shadow-sm">
      <div className="mx-auto flex max-w-[1240px] items-center gap-4 px-4 py-3">
        <a href="/" className="flex shrink-0 items-center gap-2.5" aria-label="Pinheiro Norueguês — início">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#2d3277] bg-white text-sm font-bold text-[#2d3277]">PN</span>
          <span className="hidden text-[16px] font-bold leading-[15px] tracking-[-.5px] text-[#2d3277] sm:block">PINHEIRO<br/>NORUEGUÊS</span>
        </a>
        <div className="hidden min-w-[150px] flex-1 items-center rounded-sm border border-[#eee] bg-white px-3 py-2.5 shadow-sm sm:flex">
          <input aria-label="Buscar produtos nesta demonstração" placeholder="Buscar produtos, marcas e muito mais..." className="min-w-0 flex-1 text-[14px] outline-none" />
          <Search size={19} className="text-[#555]" />
        </div>
        <div className="hidden items-center gap-2 rounded-full bg-white/70 px-3 py-2 text-[11px] text-[#2d3277] lg:flex"><MapPin size={16}/><span>Entrega demonstrativa<br/><b>Rio Branco</b></span></div>
        <button onClick={showTestNotice} className="ml-auto rounded p-2 text-[#2d3277]" aria-label="Carrinho demonstrativo"><ShoppingCart size={22}/></button>
      </div>
      <nav className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-x-5 gap-y-2 px-4 pb-3 text-[12px] text-[#514b28]">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2"><span>Categorias⌄</span><span>Ofertas</span><span>Árvores de Natal</span><span>Decoração</span><span>Inspirações</span><span>Atendimento</span></div>
        <div className="flex items-center gap-4"><span>Conta demonstrativa</span><span>Compras</span></div>
      </nav>
    </header>

    <div className="border-b border-[#e4c64b] bg-[#fff8c5] px-3 py-2 text-center text-[11px] font-bold tracking-wide text-[#594d12]">
      <Info size={14} className="mr-1 inline-block"/> PÁGINA DE TESTE — NÃO É OFICIAL, NÃO REALIZA VENDAS E NÃO PROCESSA PAGAMENTOS.
    </div>

    <main className="mx-auto max-w-[1240px] px-3 pb-12 pt-4 sm:px-4">
      <div className="mb-3 flex flex-wrap items-center gap-1 text-[11px] text-[#3483fa]">
        <span>Voltar à lista</span><span className="mx-2 text-gray-400">|</span><span>Casa, Móveis e Decoração</span><ChevronRight size={12}/><span>Enfeites e Decoração da Casa</span><ChevronRight size={12}/><span>Árvores e Enfeites de Natal</span>
      </div>
      <div className="mb-3 flex justify-between text-[11px] text-[#3483fa]"><span>Você também pode estar interessado: pinheiro natural · árvore de natal · decoração natalina</span><span className="hidden sm:block">Compartilhar</span></div>

      <section className="rounded-md bg-white p-3 shadow-sm sm:p-5">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1.42fr_1.05fr_.92fr] lg:gap-6">
          <div className="min-w-0">
            <div className="mb-2 flex items-center justify-between text-[11px] text-[#999]"><span>Novo | Produto demonstrativo</span><button onClick={()=>setFavorito(!favorito)} className="p-1 text-[#3483fa]" aria-label="Favoritar produto"><Heart size={22} fill={favorito?"#3483fa":"none"}/></button></div>
            <div className="flex gap-2">
              <div className="hidden w-[58px] shrink-0 flex-col gap-2 sm:flex">{fotos.map((src,i)=><button key={i} onClick={()=>setFoto(i)} className={`h-[62px] overflow-hidden rounded border bg-white p-1 ${foto===i?"border-2 border-[#3483fa]":"border-gray-200"}`}><img src={src} alt={`Miniatura do produto ${i+1}`} className="h-full w-full object-contain"/></button>)}</div>
              <button onClick={()=>setFoto((foto+1)%fotos.length)} className="flex min-h-[300px] flex-1 items-center justify-center bg-white sm:min-h-[430px]" aria-label="Próxima foto"><img src={fotos[foto]} alt="Árvore de Natal Pinheiro Norueguês do Norte com luzes LED" className="max-h-[430px] w-full object-contain"/></button>
            </div>
            <div className="mt-3 flex justify-center gap-2 sm:hidden">{fotos.map((_,i)=><button key={i} onClick={()=>setFoto(i)} aria-label={`Foto ${i+1}`} className={`h-1.5 w-5 rounded-full ${foto===i?"bg-[#3483fa]":"bg-gray-300"}`}/>)}</div>
            <div className="mt-5 border-t pt-4">
              <h3 className="font-semibold">O que você precisa saber sobre este produto</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-[13px] leading-relaxed text-[#555]">
                <li>Galhos densos em dois tons de verde e aparência natural.</li><li>Luzes LED em branco quente distribuídas pelos galhos.</li><li>Base metálica dobrável e montagem em partes encaixáveis.</li><li>Disponível em três alturas: 1,80 m, 2,10 m e 2,40 m.</li>
              </ul>
            </div>
          </div>

          <div className="min-w-0">
            <div className="mb-2 text-[11px] text-[#3483fa]">Produto demonstrativo · Pinheiro Norueguês</div>
            <h1 className="text-[21px] font-medium leading-tight">Árvore De Natal Pinheiro Norueguês Do Norte Com Luzes LED</h1>
            <div className="mt-2 flex items-center gap-2 text-[13px]"><span className="text-[#3483fa]">4,9 <span className="tracking-[1px]">★★★★★</span></span><span className="text-[#3483fa]">(avaliações de demonstração)</span></div>
            <div className="mt-5">
              <p className="text-sm text-[#999] line-through">{brl(s.de)}</p>
              <div className="flex flex-wrap items-center gap-2"><span className="text-[32px] font-light">{brl(s.preco)}</span><span className="rounded-sm bg-[#00a650] px-1.5 py-0.5 text-[12px] font-medium text-white">{Math.round((1-s.preco/s.de)*100)}% OFF</span></div>
              <p className="mt-1 text-[13px] text-[#00a650]">3x {brl(s.preco/3)} sem juros</p>
              <button onClick={showTestNotice} className="mt-1 text-[12px] text-[#3483fa]">Ver meios de pagamento</button>
              <p className="mt-1 text-[10px] text-[#888]">Preço e condições exibidos apenas para teste de interface.</p>
            </div>
            <div className="mt-5 border-t pt-4">
              <p className="text-[13px] font-semibold">Cor: <span className="font-normal">Verde</span></p>
              <div className="mt-2 flex gap-2"><button onClick={()=>setFoto(0)} className="h-[58px] w-[58px] rounded border-2 border-[#3483fa] p-1"><img src={arvore.url} alt="Cor verde" className="h-full w-full object-contain"/></button></div>
              <p className="mt-3 text-[13px] font-semibold">Altura: <span className="font-normal">{s.label}</span></p>
              <div className="mt-2 flex flex-wrap gap-2">{tamanhos.map((x,i)=><button key={x.label} onClick={()=>setT(i)} className={`rounded border px-3 py-2 text-[12px] ${i===t?"border-[#3483fa] bg-[#f5faff] text-[#3483fa]":"border-gray-300"}`}>{x.label}</button>)}</div>
            </div>
            <div className="mt-5 border-t pt-4">
              <h3 className="text-[15px] font-semibold">Características do produto</h3>
              <div className="mt-3 grid grid-cols-2 gap-3 text-[12px]"><div><span className="block text-[#999]">Marca</span>Pinheiro Norueguês</div><div><span className="block text-[#999]">Modelo</span>Árvore iluminada</div><div><span className="block text-[#999]">Material</span>PE + PVC</div><div><span className="block text-[#999]">Iluminação</span>LED branco quente</div></div>
              <button onClick={()=>setAba("Ficha técnica")} className="mt-4 text-[12px] text-[#3483fa]">Conferir todas as características <ChevronDown size={13} className="inline"/></button>
            </div>
          </div>

          <aside className="min-w-0 space-y-3">
            <div className="rounded-lg border border-[#eee] p-4">
              <span className="inline-block rounded-sm bg-[#008f52] px-2 py-1 text-[10px] font-bold text-white">FRETE GRÁTIS</span>
              <p className="mt-3 text-[13px] font-semibold">Receba no endereço desejado</p>
              <p className="mt-1 text-[12px] text-[#777]">Prazo de entrega ilustrativo, exibido apenas para demonstração.</p>
              <button onClick={showTestNotice} className="mt-2 text-[12px] text-[#3483fa]">Mais detalhes e formas de entrega</button>
              <div className="mt-4 border-t pt-3"><p className="text-[13px] font-semibold">Estoque disponível</p><p className="mt-1 text-[11px] text-[#777]">Quantidade demonstrativa</p><label className="mt-2 block text-[12px] text-[#666]">Quantidade</label><select value={qtd} onChange={e=>setQtd(Number(e.target.value))} className="mt-1 w-full rounded border border-gray-300 bg-white px-3 py-2 text-[13px]"><option value={1}>1 unidade</option><option value={2}>2 unidades</option><option value={3}>3 unidades</option><option value={4}>4 unidades</option></select></div>
              <button onClick={showTestNotice} className="mt-4 w-full rounded-md bg-[#3483fa] py-3 text-[14px] font-semibold text-white hover:bg-[#2968c8]">Comprar agora</button>
              <button onClick={showTestNotice} className="mt-2 flex w-full items-center justify-center gap-2 rounded-md bg-[#d9e9ff] py-3 text-[14px] font-semibold text-[#3483fa]"><ShoppingCart size={16}/> Adicionar ao carrinho</button>
              <div className="mt-4 space-y-3 border-t pt-3 text-[12px]"><p className="flex gap-2"><ShieldCheck size={17} className="shrink-0 text-[#3483fa]"/><span><b className="text-[#3483fa]">Compra protegida</b><br/><span className="text-[#777]">Informação visual de demonstração.</span></span></p><p className="flex gap-2"><Truck size={17} className="shrink-0 text-[#3483fa]"/><span><b className="text-[#3483fa]">Devolução grátis</b><br/><span className="text-[#777]">Condição ilustrativa.</span></span></p></div>
            </div>
            <div className="rounded-lg border border-[#eee] p-4 text-[12px]"><div className="flex items-center gap-2"><Store size={20} className="text-[#3483fa]"/><b>Informações da loja</b></div><p className="mt-2 font-semibold text-[#3483fa]">Pinheiro Norueguês</p><p className="mt-1 text-[#777]">Perfil de vendedor demonstrativo · Não representa uma loja oficial do marketplace.</p><div className="mt-3 border-t pt-3 text-[#777]">Atendimento e reputação não estão conectados.</div></div>
          </aside>
        </div>
      </section>

      <section className="mt-4 rounded-md bg-white p-4 shadow-sm sm:p-6">
        <h2 className="text-xl font-medium text-[#174b35]">Produtos relacionados</h2>
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">{["Árvore de Natal Pinheiro Norueguês","Árvore de Natal com LED","Pinheiro de Natal decorativo","Árvore de Natal tradicional"].map((name,i)=><button key={i} onClick={showTestNotice} className="rounded border border-[#eee] p-2 text-left transition hover:shadow-md"><img src={arvore.url} alt={name} className="h-32 w-full object-contain"/><p className="mt-2 text-[12px]">{name}</p><p className="mt-2 text-lg">{brl(s.preco)}</p><p className="text-[11px] text-[#00a650]">Frete grátis · demonstração</p></button>)}</div>
      </section>

      <section className="mt-4 rounded-md bg-white p-4 shadow-sm sm:p-6">
      <section className="mt-4 rounded-md bg-white p-4 shadow-sm sm:p-6">
        <h2 className="text-lg font-medium">Produtos da loja</h2>
        <p className="mt-1 text-[12px] text-[#777]">Outros itens demonstrativos da mesma vitrine.</p>
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {["Pinheiro Norueguês com LED","Árvore de Natal decorativa","Pinheiro verde tradicional","Árvore iluminada"].map((name)=><article key={name} className="rounded border border-[#eee] p-3">
            <div className="flex h-28 items-center justify-center bg-[#fafafa]"><span className="text-4xl text-[#28734b]">♧</span></div>
            <p className="mt-2 text-[12px]">{name}</p><p className="mt-2 text-base font-medium">{brl(s.preco)}</p><p className="text-[11px] text-[#00a650]">Informação ilustrativa</p>
          </article>)}
        </div>
      </section>

      <section className="mt-4 rounded-md bg-white p-4 shadow-sm sm:p-6">
        <h2 className="text-lg font-medium">Características do produto</h2>
        <div className="mt-4 grid gap-8 md:grid-cols-2">
          <div><h3 className="mb-2 text-[14px] font-semibold">Características principais</h3>
            {[["Marca","Pinheiro Norueguês"],["Modelo","Árvore iluminada"],["Formato","Tradicional"],["Cor","Verde"]].map(([k,v])=><div key={k} className="grid grid-cols-2 border-b bg-[#f5f5f5] px-3 py-3 text-[12px] even:bg-white"><span>{k}</span><b className="font-normal">{v}</b></div>)}
          </div>
          <div><h3 className="mb-2 text-[14px] font-semibold">Especificações</h3>
            {[["Alturas disponíveis","1,80 m · 2,10 m · 2,40 m"],["Materiais","PE + PVC e metal"],["Iluminação","LED branco quente"],["Base","Metal dobrável"],["Montagem","Partes encaixáveis"]].map(([k,v])=><div key={k} className="grid grid-cols-2 border-b bg-[#f5f5f5] px-3 py-3 text-[12px] even:bg-white"><span>{k}</span><b className="font-normal">{v}</b></div>)}
          </div>
        </div>
      </section>

      <section className="mt-4 rounded-md bg-white p-4 shadow-sm sm:p-6">
        <h2 className="text-lg font-medium">Fotos do produto</h2>
        <p className="mt-1 text-[12px] text-[#777]">Imagem disponível no cadastro atual do produto.</p>
        <div className="mt-4 flex justify-center"><img src={arvore.url} alt="Pinheiro Norueguês com iluminação LED" className="max-h-[520px] w-full max-w-[680px] object-contain"/></div>
      </section>

        <div className="flex flex-wrap gap-5 border-b text-[14px]">{["Descrição","Ficha técnica","Avaliações"].map(k=><button key={k} onClick={()=>setAba(k)} className={`border-b-2 pb-3 ${aba===k?"border-[#3483fa] font-semibold text-[#3483fa]":"border-transparent text-[#666]"}`}>{k}</button>)}</div>
        {aba==="Descrição"&&<div className="max-w-3xl py-5 text-[13px] leading-7 text-[#555]"><h2 className="mb-3 text-lg font-medium text-[#333]">Árvore de Natal Pinheiro Norueguês</h2><p>Inspirada nas florestas do norte da Noruega, esta árvore traz galhos densos em dois tons de verde, com pontas moldadas que imitam as agulhas de um pinheiro natural.</p><p className="mt-3">O modelo demonstrativo possui luzes LED em branco quente distribuídas pelos galhos, base metálica dobrável e montagem em partes encaixáveis.</p><div className="mt-5 grid gap-3 sm:grid-cols-3"><div className="rounded bg-[#f5f5f5] p-3"><b>Visual natural</b><p className="text-[12px]">Galhos verdes e volumosos.</p></div><div className="rounded bg-[#f5f5f5] p-3"><b>Luzes LED</b><p className="text-[12px]">Iluminação branco quente.</p></div><div className="rounded bg-[#f5f5f5] p-3"><b>Montagem prática</b><p className="text-[12px]">Estrutura em partes encaixáveis.</p></div></div></div>}
        {aba==="Ficha técnica"&&<div className="grid max-w-4xl gap-8 py-5 md:grid-cols-2"><div><h3 className="mb-3 font-semibold">Características principais</h3>{[["Marca","Pinheiro Norueguês"],["Modelo","Árvore iluminada"],["Formato","Tradicional"],["Cor","Verde"]].map(([k,v])=><div key={k} className="grid grid-cols-2 border-b bg-[#f5f5f5] px-3 py-3 text-[12px] even:bg-white"><span>{k}</span><b className="font-normal">{v}</b></div>)}</div><div><h3 className="mb-3 font-semibold">Peso e dimensões</h3>{[["Alturas disponíveis","1,80 m · 2,10 m · 2,40 m"],["Materiais","PE + PVC e metal"],["Iluminação","LED branco quente"],["Base","Metal dobrável"],["Montagem","Partes encaixáveis"]].map(([k,v])=><div key={k} className="grid grid-cols-2 border-b bg-[#f5f5f5] px-3 py-3 text-[12px] even:bg-white"><span>{k}</span><b className="font-normal">{v}</b></div>)}</div></div>}
        {aba==="Avaliações"&&<div className="py-5">
          <div className="mb-6 border-b pb-5"><h3 className="text-base font-semibold text-[#174b35]">Área de avaliações — demonstração</h3><p className="mt-1 text-[12px] text-[#777]">Este protótipo não está conectado a avaliações reais. Nenhuma nota ou opinião de comprador é apresentada como autêntica.</p></div>
          <div className="mb-4 rounded border border-[#f0d982] bg-[#fff9df] p-3 text-[11px] text-[#6b5710]"><Info size={14} className="mr-1 inline"/> Conteúdo de exemplo para visualizar o layout. Não representa clientes, compras ou avaliações reais.</div>
          <div className="max-w-3xl space-y-5">{reviews.map((r)=><article key={r.nome} className="border-b pb-5"><div className="flex items-center justify-between"><span className="text-[13px] font-semibold">{r.nome}</span><span className="text-[11px] text-[#999]">{r.data}</span></div><div className="mt-1 text-[13px] tracking-[1px] text-[#3483fa]">Avaliação ilustrativa</div><p className="mt-2 text-[13px] leading-6 text-[#555]">{r.texto}</p><div className="mt-3 flex items-center gap-1 text-[11px] text-[#777]"><Info size={13}/> Conteúdo de demonstração</div></article>)}</div>
        </div>}
      </section>

      <section className="mt-4 rounded-md bg-white p-4 shadow-sm sm:p-6">
        <div className="flex items-center gap-2"><MessageCircle size={20} className="text-[#3483fa]"/><h2 className="text-xl font-medium text-[#174b35]">Dúvidas sobre o produto</h2></div>
        <p className="mt-1 text-[12px] text-[#777]">Respostas ilustrativas para demonstração do componente.</p>
        <div className="mt-4 max-w-4xl divide-y">{perguntas.map(([q,a],i)=><div key={q} className="py-4"><button onClick={()=>setPerguntaAberta(perguntaAberta===i?null:i)} className="flex w-full items-center justify-between text-left text-[13px] font-medium"><span>{q}</span><ChevronDown size={16} className={perguntaAberta===i?"rotate-180 transition":"transition"}/></button>{perguntaAberta===i&&<div className="mt-3 rounded bg-[#f7f7f7] p-3 text-[13px] text-[#666]"><b>Resposta:</b> {a}</div>}</div>)}</div>
      </section>

      <section className="mt-4 rounded-md bg-white p-4 shadow-sm sm:p-6">
        <div className="flex items-center gap-2"><Camera size={20} className="text-[#3483fa]"/><h2 className="text-xl font-medium text-[#174b35]">Detalhes do produto</h2></div>
        <p className="mt-1 text-[11px] text-[#888]">Imagem de demonstração do produto cadastrado.</p>
        <div className="mt-5 flex justify-center"><img src={arvore.url} alt="Foto demonstrativa da árvore de Natal Pinheiro Norueguês" className="max-h-[520px] w-full max-w-[650px] object-contain"/></div>
      </section>

      <section className="mt-4 rounded-md bg-white p-4 shadow-sm sm:p-6">
        <h2 className="text-lg font-medium">Quem viu este produto também se interessou</h2>
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {["Decoração de Natal","Enfeites natalinos","Iluminação decorativa","Árvores de Natal"].map((name)=><div key={name} className="rounded border border-[#eee] p-3"><div className="flex h-24 items-center justify-center bg-[#fafafa] text-3xl text-[#28734b]">✦</div><p className="mt-2 text-[12px]">{name}</p><p className="mt-1 text-[11px] text-[#777]">Sugestão ilustrativa</p></div>)}
        </div>
      </section>

      <footer className="mt-6 border-t border-[#ddd] py-7 text-center text-[11px] leading-6 text-[#777]">
        <b className="text-[#555]">PROTÓTIPO DE INTERFACE — NÃO OFICIAL</b><br/>
        Esta é uma demonstração independente, com layout inspirado em páginas de marketplace. Não possui vínculo oficial com o Mercado Livre, não anuncia uma oferta real, não confirma estoque ou frete e não realiza vendas nem processa pagamentos.<br/>
        Produto e preço mantidos conforme o cadastro atual do projeto.
      </footer>
    </main>
    {aviso&&<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4" role="dialog" aria-modal="true" aria-label="Aviso de página de teste"><div className="w-full max-w-sm rounded-lg bg-white p-6 shadow-xl"><div className="flex items-center gap-2 text-[#3483fa]"><Info size={21}/><b>Ambiente de teste</b></div><p className="mt-3 text-[14px] leading-6 text-[#555]">{aviso}</p><button onClick={()=>setAviso("")} className="mt-5 w-full rounded bg-[#3483fa] py-2.5 text-sm font-semibold text-white">Entendi</button></div></div>}
  </div>;
}
