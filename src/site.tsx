import { Link, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';

export const solutionItems = [
  { slug: 'ai-technology', title: 'AI・テクノロジー活用支援' },
  { slug: 'automation', title: '業務改善・自動化' },
  { slug: 'product-development', title: 'デジタルプロダクト開発' },
  { slug: 'business-systems', title: '業務システム開発' },
  { slug: 'poc-rd', title: 'PoC・R&D' },
  { slug: 'system-improvement', title: '既存システム改善' },
];
export const challengeItems = [
  { slug: 'ai-adoption', title: 'AIを業務に活用したい' },
  { slug: 'reduce-manual-work', title: '手作業を減らしたい' },
  { slug: 'launch-service', title: '新しいサービスを立ち上げたい' },
  { slug: 'improve-existing-system', title: '既存システムを改善したい' },
  { slug: 'technology-selection', title: '技術選定から相談したい' },
  { slug: 'shape-an-idea', title: 'アイデアを形にしたい' },
];
export const caseItems = [
  { slug: 'workflow-platform', title: 'Workflow Management Platform' },
  { slug: 'dog-face-recognition-ai', title: 'Dog Face Recognition AI' },
  { slug: 'content-optimization', title: 'Web/App Content Optimization Tool' },
  { slug: 'ai-chatbot', title: 'AI Chatbot' },
  { slug: 'ecommerce-platform', title: 'E-Commerce Platform' },
];
export const insightItems = [
  { slug: 'ai-adoption', title: 'AI活用・導入' },
  { slug: 'automation', title: '業務改善・自動化' },
  { slug: 'product-development', title: 'プロダクト開発' },
  { slug: 'technology', title: 'テクノロジー' },
];
export const companyItems = [
  { slug: 'about', title: 'Specdestについて' },
  { slug: 'philosophy', title: 'Philosophy / Vision' },
  { slug: 'representative', title: '代表紹介' },
  { slug: 'profile', title: '会社概要' },
];
const solutions = solutionItems.map((item) => item.title);
const challenges = challengeItems.map((item) => item.title);

const baseRoutes = [
  { path: '/', title: 'Specdest | Better, through technology.', description: '可能性を広げ、より良い未来へ。Specdestは、事業課題から考え、技術選定から実装まで担うテクノロジーパートナーです。' },
  { path: '/solutions', title: 'ソリューション | Specdest', description: 'AI活用、業務改善、自動化、プロダクト開発、業務システム、PoC・R&Dを課題起点で支援します。' },
  { path: '/challenges', title: '課題から探す | Specdest', description: 'AI活用、業務自動化、新規サービス、既存システム改善など、課題から最適な技術アプローチを考えます。' },
  { path: '/cases', title: '導入事例 | Specdest', description: 'AI、ワークフロー、Web・アプリ、業務システム、R&DなどSpecdestの導入事例。' },
  { path: '/insights', title: 'インサイト | Specdest', description: 'AI、業務改善、プロダクト開発、テクノロジー活用に関するSpecdestのインサイト。' },
  { path: '/company', title: '会社情報 | Specdest', description: 'Specdest株式会社について。Better, through technology. 技術で可能性を広げ、より良い未来へ。' },
  { path: '/contact', title: 'お問い合わせ | Specdest', description: 'Specdestへのお問い合わせ。事業課題、AI活用、業務改善、プロダクト開発、システム開発についてご相談ください。' },
  { path: '/terms', title: '利用規約 | Specdest', description: 'Specdestウェブサイトの利用規約。' },
  { path: '/privacy', title: 'プライバシーポリシー | Specdest', description: 'Specdest株式会社のプライバシーポリシー。' },
  { path: '/security', title: '情報セキュリティ | Specdest', description: 'Specdest株式会社の情報セキュリティに関する方針。' },
  { path: '/cookies', title: 'Cookie Policy | Specdest', description: 'SpecdestウェブサイトのCookie Policy。' },
];
const detailRoutes = [
  ...solutionItems.map((item) => ({ path: `/solutions/${item.slug}`, title: `${item.title} | Specdest`, description: `${item.title}について、課題整理から技術選定、実装、改善まで支援します。` })),
  ...challengeItems.map((item) => ({ path: `/challenges/${item.slug}`, title: `${item.title} | Specdest`, description: `${item.title}という課題に対して、最適な技術アプローチを整理します。` })),
  ...caseItems.map((item) => ({ path: `/cases/${item.slug}`, title: `${item.title} | 導入事例 | Specdest`, description: `${item.title}の導入事例。課題、アプローチ、実装、継続支援を紹介します。` })),
  ...insightItems.map((item) => ({ path: `/insights/${item.slug}`, title: `${item.title} | インサイト | Specdest`, description: `${item.title}に関するSpecdestの考え方と実務的な知見。` })),
  ...companyItems.map((item) => ({ path: `/company/${item.slug}`, title: `${item.title} | Specdest`, description: `${item.title}。Specdest株式会社の企業情報。` })),
];
export const siteRoutes = [...baseRoutes, ...detailRoutes];

function useSeo() {
  const { pathname } = useLocation();
  useEffect(() => {
    const meta = siteRoutes.find((route) => route.path === pathname) ?? siteRoutes[0];
    document.title = meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', meta.description);
  }, [pathname]);
}

function Header() {
  const [menu, setMenu] = useState<string | null>(null);
  const menus = useMemo(() => ({
    solutions: { title: 'テクノロジーを、事業の前進につなげる。', base: '/solutions', links: solutionItems },
    challenges: { title: '「何を作るか」より、「何を良くしたいか」から。', base: '/challenges', links: challengeItems },
    company: { title: 'Better, through technology.', base: '/company', links: companyItems },
  }), []);
  return <header className="site-header" onMouseLeave={() => setMenu(null)}>
    <div className="header-inner">
      <Link className="logo" to="/">Specdest</Link>
      <nav className="nav" aria-label="Primary">
        <Link onMouseEnter={() => setMenu('solutions')} to="/solutions">ソリューション</Link>
        <Link onMouseEnter={() => setMenu('challenges')} to="/challenges">課題から探す</Link>
        <Link onMouseEnter={() => setMenu(null)} to="/cases">導入事例</Link>
        <Link onMouseEnter={() => setMenu(null)} to="/insights">インサイト</Link>
        <Link onMouseEnter={() => setMenu('company')} to="/company">会社情報</Link>
      </nav>
      <Link className="contact-button" to="/contact">お問い合わせ</Link>
    </div>
    {menu && <div className="mega-menu">
      <div className="mega-inner">
        <div className="mega-message"><strong>{menus[menu as keyof typeof menus].title}</strong><p>課題を整理し、必要な技術を見極め、実装までつなげます。</p><Link className="mega-parent-link" to={menus[menu as keyof typeof menus].base}>一覧を見る ↗</Link></div>
        <div className="mega-links">{menus[menu as keyof typeof menus].links.map((item) => <Link key={item.slug} to={`${menus[menu as keyof typeof menus].base}/${item.slug}`}>{item.title}<span>↗</span></Link>)}</div>
      </div>
    </div>}
  </header>;
}

function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    }), { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
  return <div className={`reveal ${className}`}>{children}</div>;
}

function Footer() {
  return <footer className="footer">
    <div className="footer-grid shell">
      <div className="footer-brand"><strong>Specdest</strong><p>Better, through technology.<br/>可能性を広げ、より良い未来へ。</p></div>
      <div><h4>ソリューション</h4>{solutionItems.slice(0,5).map((x)=><Link key={x.slug} to={`/solutions/${x.slug}`}>{x.title}</Link>)}</div>
      <div><h4>導入事例</h4>{caseItems.slice(0,4).map((x)=><Link key={x.slug} to={`/cases/${x.slug}`}>{x.title}</Link>)}</div>
      <div><h4>リソース</h4>{insightItems.map((x)=><Link key={x.slug} to={`/insights/${x.slug}`}>{x.title}</Link>)}</div>
      <div><h4>Specdestについて</h4>{companyItems.map((x)=><Link key={x.slug} to={`/company/${x.slug}`}>{x.title}</Link>)}</div>
    </div>
    <div className="footer-bottom shell"><span>© Specdest Inc.</span><div><a href="/sitemap.xml">サイトマップ</a><Link to="/terms">利用規約</Link><Link to="/privacy">プライバシーポリシー</Link><Link to="/security">情報セキュリティ</Link><Link to="/cookies">Cookie Policy</Link></div></div>
  </footer>;
}

function Hero() {
  return <section className="hero">
    <video autoPlay muted loop playsInline poster="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2000&q=80">
      <source src="https://cdn.coverr.co/videos/coverr-a-server-room-with-blue-lights-1575/1080p.mp4" type="video/mp4" />
    </video>
    <div className="hero-overlay" />
    <div className="hero-content shell"><h1>Better,<br/>through technology.</h1><p>可能性を広げ、より良い未来へ。</p></div>
  </section>;
}

function TrustStrip() {
  const items = ['上場企業との長期協業','AI / Computer Vision','プロダクト開発','2018 → 継続支援','Platform / SaaS'];
  return <div className="trust-strip"><div className="marquee">{[...items,...items].map((item,index)=><span key={`${item}-${index}`}><i />{item}</span>)}</div></div>;
}

function HomePage() {
  return <>
    <Hero />
    <section className="intro section"><div className="shell intro-grid"><Reveal><div className="eyebrow">Our Role</div><h2>技術をつくる前に、<br/>何を変えるべきかを考える。</h2></Reveal><Reveal><p className="lead">Specdestは、決められた仕様を実装するだけの開発会社ではありません。事業や業務の課題を整理し、必要な技術を見極め、実装が必要であれば最後まで担います。</p><p className="statement">AI、SaaS、業務自動化、システム連携、プロダクト開発。手段を限定せず、課題に対して合理的な方法を選ぶ。</p></Reveal></div></section>
    <TrustStrip />
    <Outcomes />
    <Philosophy />
    <ChallengesSection />
    <CasesSection />
    <CapabilitiesSection />
    <InsightsSection />
    <CompanySection />
    <ContactBand />
  </>;
}

function Outcomes() {
  const rows = [
    ['01','変える','既存業務を見直し、AI・自動化・システム改善によって生産性と運用品質を高める。'],
    ['02','つくる','新しいサービスやプロダクトを、企画・技術選定・設計・実装まで一つの流れで形にする。'],
    ['03','進める','要件が曖昧な段階から整理し、技術的な不確実性を減らしながらプロジェクトを前進させる。'],
  ];
  return <section className="section outcomes"><div className="shell"><div className="section-head"><div><div className="eyebrow">What We Enable</div><h2>事業を前に進めるために。</h2></div><p>開発ありきではなく、実現したい変化から考えます。</p></div><div className="outcome-list">{rows.map(([n,t,d])=><div className="outcome-row" key={n}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div><b>↗</b></div>)}</div></div></section>;
}

function Philosophy() {
  return <section className="section philosophy"><div className="shell split"><Reveal className="visual"><img src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1600&q=85" alt="チームとテクノロジーのイメージ" /></Reveal><Reveal><div className="eyebrow">Technology Philosophy</div><h2>Technology is a means,<br/>not the objective.</h2><p className="lead">解決策は、必ずしも新しいシステムではありません。既存SaaS、業務フローの変更、AI、自動化、連携、PoC。必要なものだけを選びます。</p><div className="principles"><p><strong>01 課題から考える</strong><span>技術ありきで提案しない。</span></p><p><strong>02 選択肢を比較する</strong><span>作る・つなぐ・変えるを判断する。</span></p><p><strong>03 必要なら実装まで担う</strong><span>提案だけで終わらせない。</span></p></div></Reveal></div></section>;
}

function ChallengesSection() {
  return <section className="section challenges"><div className="shell"><div className="eyebrow blue">Start From The Problem</div><h2>こうした課題から、<br/>相談できます。</h2><p className="lead inverse">要件書がなくても構いません。何が問題か、何を変えたいかという段階から整理します。</p><div className="challenge-list">{challengeItems.map((item,index)=><Link to={`/challenges/${item.slug}`} className="challenge-row" key={item.slug}><span>{String(index+1).padStart(2,'0')}</span><strong>{item.title}</strong><b>↗</b></Link>)}</div></div></section>;
}

function CasesSection() {
  return <section className="section cases"><div className="shell"><div className="section-head"><div><div className="eyebrow">Selected Work</div><h2>技術だけではなく、<br/>事業の前進に関わる。</h2></div><Link className="text-link" to="/cases">すべての導入事例 ↗</Link></div><Reveal><Link to="/cases/workflow-platform" className="case-feature"><div className="case-image"><img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1800&q=85" alt="業務プラットフォームのイメージ" /></div><div className="case-copy"><span>Workflow / Platform</span><h3>事業成長を支える<br/>Workflow Management Platform</h3><p>継続的なプロダクト開発を支援し、事業の変化に合わせて改善を重ねています。</p><small>Funded startup / Cooperation since 2023</small></div></Link></Reveal><div className="case-grid"><Link to="/cases/dog-face-recognition-ai"><span>AI / Computer Vision</span><h3>Dog Face Recognition AI</h3><p>研究から実装まで、AI技術開発をR&Dとして支援。</p></Link><Link to="/cases/content-optimization"><span>Optimization / Web & App</span><h3>Content Optimization Tool</h3><p>上場企業との長期協業。2018年から継続して開発を支援。</p></Link></div></div></section>;
}

function CapabilitiesSection() {
  return <section className="section capabilities"><div className="shell"><div className="eyebrow">Capabilities</div><h2>考えるところから、<br/>実装するところまで。</h2><div className="cap-list">{solutions.slice(0,5).map((item,index)=><div className="cap-row" key={item}><span>{String(index+1).padStart(2,'0')}</span><h3>{item}</h3><p>{['AI導入判断、技術検証、活用設計、社内業務への適用まで支援。','手作業や分断された業務を整理し、自動化・連携を設計。','新規サービスの企画、MVP、本番開発、継続改善。','現場業務に合わせた管理・予約・在庫・CRM・ワークフロー等の開発。','画像認識、OCR、IoTなど、不確実性の高い技術テーマを小さく検証。'][index]}</p></div>)}</div></div></section>;
}

function InsightsSection() {
  const cards = [
    ['AI','生成AI導入で最初に決めるべきことは、モデルではない。','AI活用・導入支援'],
    ['AUTOMATION','「自動化できる業務」と「自動化すべき業務」は違う。','業務改善・自動化'],
    ['PRODUCT','新規サービスで、開発前に減らしておくべき3つの不確実性。','プロダクト開発'],
  ];
  return <section className="section insights"><div className="shell"><div className="eyebrow">Insights</div><h2>Technology, in context.</h2><div className="insight-grid">{cards.map(([tag,title,foot],index)=><Link to={`/insights/${insightItems[index].slug}`} key={tag}><div className="insight-image"><img src={`https://images.unsplash.com/photo-${['1516321318423-f06f85e504b3','1552664730-d307ca884978','1497366216548-37526070297c'][index]}?auto=format&fit=crop&w=1200&q=80`} alt="テクノロジーのイメージ" /></div><small>{tag}</small><h3>{title}</h3><p>{foot}</p></Link>)}</div></div></section>;
}

function CompanySection() {
  return <section className="company"><div className="company-grid"><Reveal className="company-copy"><div className="eyebrow dark">About Specdest</div><h2>難しい課題を、<br/>任せられる会社へ。</h2><p>クライアントのビジネスを理解し、技術的な判断と実行の両方を担うことで、長く信頼されるテクノロジーパートナーを目指します。</p><Link to="/company" className="text-link">Specdestについて ↗</Link></Reveal><Reveal className="company-image"><img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=85" alt="企業空間のイメージ" /></Reveal></div></section>;
}

function ContactBand() {
  return <section className="section contact-band"><div className="shell contact-inner"><div><div className="eyebrow">Contact</div><h2>What should<br/>we solve next?</h2></div><Link className="contact-circle" to="/contact">お問い合わせ<br/>↗</Link></div></section>;
}

function CollectionPage({ title, lead, base, items }: { title: string; lead: string; base: string; items: { slug: string; title: string }[] }) {
  return <main className="subpage"><section className="subhero"><div className="shell"><div className="eyebrow">Specdest</div><h1>{title}</h1><p>{lead}</p></div></section><section className="section"><div className="shell simple-list">{items.map((item,index)=><Link className="collection-row" key={item.slug} to={`${base}/${item.slug}`}><span>{String(index+1).padStart(2,'0')}</span><div><h2>{item.title}</h2><p>課題を整理し、目的に合う方法を比較しながら、必要に応じて設計・実装・改善まで担います。</p></div><b>↗</b></Link>)}</div></section></main>;
}

function DetailPage({ eyebrow, title, parentPath, parentLabel }: { eyebrow: string; title: string; parentPath: string; parentLabel: string }) {
  return <main className="subpage"><section className="subhero"><div className="shell"><div className="eyebrow">{eyebrow}</div><h1>{title}</h1><p>課題の背景を理解し、選択肢を比較したうえで、必要な技術と進め方を設計します。実装が必要な場合は、その後の開発・改善まで一貫して担います。</p><Link className="text-link" to={parentPath}>{parentLabel}一覧へ ←</Link></div></section><section className="section detail-content"><div className="shell split"><div><div className="eyebrow">Approach</div><h2>課題から考え、<br/>必要な方法を選ぶ。</h2></div><div><p className="lead">このページは各テーマの独立した詳細ページです。トップページや一覧ページの短い紹介ではなく、今後ここに課題、アプローチ、実施内容、成果、関連事例を詳しく掲載します。</p></div></div></section></main>;
}

function ContactPage() {
  return <main className="subpage"><section className="subhero"><div className="shell"><div className="eyebrow">Contact</div><h1>お問い合わせ</h1><p>事業課題、AI活用、業務改善、新規プロダクト、システム開発などについてご相談ください。</p><a className="email-link" href="mailto:info@specdest.com">info@specdest.com ↗</a></div></section></main>;
}

function LegalPage({ title }: { title: string }) {
  return <main className="subpage"><section className="subhero"><div className="shell"><div className="eyebrow">Legal</div><h1>{title}</h1><p>このページの正式な内容は公開前に確定します。</p></div></section></main>;
}

export function App() {
  useSeo();
  return <><Header /><Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/solutions" element={<CollectionPage title="ソリューション" lead="手段ではなく、実現したい変化から最適なアプローチを考えます。" base="/solutions" items={solutionItems} />} />
    {solutionItems.map((item)=><Route key={item.slug} path={`/solutions/${item.slug}`} element={<DetailPage eyebrow="Solution" title={item.title} parentPath="/solutions" parentLabel="ソリューション" />} />)}
    <Route path="/challenges" element={<CollectionPage title="課題から探す" lead="要件が固まっていない段階から、何を変えるべきかを整理します。" base="/challenges" items={challengeItems} />} />
    {challengeItems.map((item)=><Route key={item.slug} path={`/challenges/${item.slug}`} element={<DetailPage eyebrow="Challenge" title={item.title} parentPath="/challenges" parentLabel="課題から探す" />} />)}
    <Route path="/cases" element={<CollectionPage title="導入事例" lead="AI、業務システム、デジタルプロダクト、R&Dまで、実際の課題に技術で応えてきました。" base="/cases" items={caseItems} />} />
    {caseItems.map((item)=><Route key={item.slug} path={`/cases/${item.slug}`} element={<DetailPage eyebrow="Case Study" title={item.title} parentPath="/cases" parentLabel="導入事例" />} />)}
    <Route path="/insights" element={<CollectionPage title="インサイト" lead="AI、業務改善、プロダクト開発、テクノロジー活用を事業の文脈で考えます。" base="/insights" items={insightItems} />} />
    {insightItems.map((item)=><Route key={item.slug} path={`/insights/${item.slug}`} element={<DetailPage eyebrow="Insight" title={item.title} parentPath="/insights" parentLabel="インサイト" />} />)}
    <Route path="/company" element={<CollectionPage title="会社情報" lead="Better, through technology. 可能性を広げ、より良い未来へ。" base="/company" items={companyItems} />} />
    {companyItems.map((item)=><Route key={item.slug} path={`/company/${item.slug}`} element={<DetailPage eyebrow="Company" title={item.title} parentPath="/company" parentLabel="会社情報" />} />)}
    <Route path="/contact" element={<ContactPage />} />
    <Route path="/terms" element={<LegalPage title="利用規約" />} />
    <Route path="/privacy" element={<LegalPage title="プライバシーポリシー" />} />
    <Route path="/security" element={<LegalPage title="情報セキュリティ" />} />
    <Route path="/cookies" element={<LegalPage title="Cookie Policy" />} />
  </Routes><Footer /></>;
}
