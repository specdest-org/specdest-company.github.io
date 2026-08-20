import { Link, Navigate, Route, Routes, useLocation } from 'react-router-dom';
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
  { slug: 'ios-search-ads-optimization', title: 'iOS Search Ads 運用最適化' },
  { slug: 'advanced-rd-poc', title: '先端技術・R&D実証実験' },
  { slug: 'shift-scheduling-system', title: 'Shift Scheduling System' },
  { slug: 'line-chat-automation', title: 'Chat System Automation / LINE' },
  { slug: 'video-cv-platform', title: '動画CV Platform' },
  { slug: 'stroller-sharing', title: 'ベビーカーシェアリング' },
  { slug: 'medical-shift-management', title: '医療法人シフト管理' },
];

const caseCategories: Record<string,string> = {
  'workflow-platform':'Platform / SaaS',
  'dog-face-recognition-ai':'AI / Computer Vision',
  'content-optimization':'Optimization / Web & App',
  'ai-chatbot':'Generative AI / Product',
  'ecommerce-platform':'E-Commerce / Platform',
  'ios-search-ads-optimization':'Optimization / Recommendation',
  'advanced-rd-poc':'AI / OCR / IoT / R&D',
  'shift-scheduling-system':'Scheduling / Business System',
  'line-chat-automation':'Automation / Messaging',
  'video-cv-platform':'Recruitment / Video Platform',
  'stroller-sharing':'IoT / Mobile / Sharing',
  'medical-shift-management':'Healthcare / Business System',
};
export const companyItems = [
  { slug: '', title: 'Specdestについて' },
  { slug: 'philosophy', title: 'Philosophy / Vision' },
  { slug: 'profile', title: '会社概要' },
];

export const insightItems = [
  { slug: 'how-to-choose-system-development-company', title: 'システム開発会社の選び方' },
  { slug: 'system-development-cost-guide', title: 'システム開発の費用相場' },
  { slug: 'business-system-failure-reasons', title: '業務システム開発で失敗する理由' },
  { slug: 'excel-to-business-system', title: 'Excel管理をシステム化するタイミング' },
  { slug: 'generative-ai-business-introduction', title: '生成AIを業務に導入する方法' },
];

const siteImages: Record<string,string> = {
  solutions:'/images/solutions/overview.jpg',
  challenges:'/images/challenges/overview.webp',
  cases:'/images/cases/overview.webp',
  company:'/images/company/company-overview.jpg',
  contact:'/images/contact/contact-office.webp',
  'ai-technology':'/images/solutions/ai-technology.jpg',
  automation:'/images/solutions/automation.webp',
  'product-development':'/images/solutions/product-development.webp',
  'business-systems':'/images/solutions/business-systems.webp',
  'poc-rd':'/images/solutions/poc-rd.webp',
  'system-improvement':'/images/solutions/system-improvement.webp',
  'ai-adoption':'/images/challenges/ai-adoption.webp',
  'reduce-manual-work':'/images/challenges/reduce-manual-work.webp',
  'launch-service':'/images/challenges/launch-service.webp',
  'improve-existing-system':'/images/challenges/improve-existing-system.webp',
  'technology-selection':'/images/challenges/technology-selection.webp',
  'shape-an-idea':'/images/challenges/shape-an-idea.webp',
  'workflow-platform':'/images/cases/workflow-platform.webp',
  'dog-face-recognition-ai':'/images/cases/dog-face-recognition-ai.webp',
  'content-optimization':'/images/cases/content-optimization.webp',
  'ai-chatbot':'/images/cases/ai-chatbot.webp',
  'ecommerce-platform':'/images/cases/ecommerce-platform.webp',
  'ios-search-ads-optimization':'/images/cases/ios-search-ads-optimization.jpg',
  'advanced-rd-poc':'/images/cases/advanced-rd-poc.jpg',
  'shift-scheduling-system':'/images/cases/shift-scheduling-system.jpg',
  'line-chat-automation':'/images/cases/line-chat-automation.jpg',
  'video-cv-platform':'/images/cases/video-cv-platform.jpg',
  'stroller-sharing':'/images/cases/stroller-sharing.jpg',
  'medical-shift-management':'/images/cases/medical-shift-management.jpg',
  'company-about':'/images/company/about.jpg',
  'company-philosophy':'/images/company/philosophy.webp',
  'company-profile':'/images/company/profile.webp',
  approach:'/images/approach/project-flow.webp',
};

const solutions = solutionItems.map((item) => item.title);
const challenges = challengeItems.map((item) => item.title);

const baseRoutes = [
  { path: '/', title: 'Specdest | Better, through technology.', description: 'Specdestは、業務システム開発、AI業務自動化、Webシステム開発、PoC・R&Dを通じて、日本企業の事業課題を整理し、技術選定から実装・改善まで一貫して支援するテクノロジーパートナーです。' },
  { path: '/solutions', title: 'ソリューション | Specdest', description: 'Specdestのソリューション一覧です。AI活用、業務改善・自動化、業務システム開発、Webシステム開発、MVP開発、PoC・R&D、既存システム改善を、課題整理から実装・継続改善まで支援します。' },
  { path: '/challenges', title: '課題から探す | Specdest', description: 'AIを業務に活用したい、手作業を減らしたい、新規サービスを立ち上げたい、既存システムを改善したいなど、日本企業の課題から必要な技術、開発方法、進め方を整理します。' },
  { path: '/cases', title: '導入事例 | Specdest', description: 'AI開発、業務プラットフォーム、Webシステム、アプリ、EC、R&Dなど、Specdestが支援した開発・技術支援事例を紹介します。課題、取り組み、開発内容を整理しています。' },
  { path: '/insights', title: 'システム開発・AI活用の実務記事 | Specdest', description: 'システム開発会社の選び方、費用相場、業務システム、Excel管理のシステム化、生成AI導入について、日本企業が発注前に確認したい実務ポイントを整理した記事一覧です。' },
  { path: '/approach', title: 'ご支援の進め方 | Specdest', description: '課題整理、技術選定、PoC・技術検証、設計・開発、運用・継続改善まで、Specdestのプロジェクトの進め方をご紹介します。要件が固まる前の相談から支援できます。' },
  { path: '/company', title: '会社情報 | Specdest', description: 'Specdest株式会社は、事業課題の整理、技術選定、AI活用、業務改善、システム開発、継続改善まで支援する日本のテクノロジーパートナーです。会社概要と考え方をご紹介します。' },
  { path: '/contact', title: '無料相談・お問い合わせ | Specdest', description: '業務システム開発、AI業務自動化、Webシステム開発、MVP開発、PoC・R&D、既存システム改善についてSpecdestへ無料相談できます。要件が固まっていない段階でもご相談ください。' },
  { path: '/services/business-system-development', title: '業務システム開発会社 | Specdest', description: '業務システム開発、管理システム、予約・在庫・CRM・ワークフローなど、現場業務に合わせたシステム開発を支援します。業務整理、要件定義、設計、開発、運用改善まで対応します。' },
  { path: '/services/ai-automation-development', title: 'AI業務自動化・生成AI導入支援 | Specdest', description: 'AI業務自動化、生成AI導入、社内業務へのAI活用、PoC、AI機能開発を、課題整理から設計・実装・継続改善まで支援します。既存システムや業務フローへのAI組み込みも相談できます。' },
  { path: '/services/web-system-development', title: 'Webシステム開発会社 | Specdest', description: 'Webシステム開発、業務Webアプリ、管理画面、外部サービス連携、運用改善まで、日本企業の業務と事業課題に合わせて支援します。構想整理から継続改善まで一貫して対応します。' },
  { path: '/services/mvp-development', title: 'MVP開発・新規サービス開発 | Specdest', description: 'MVP開発、新規サービス開発、デジタルプロダクト開発を、構想整理、要件整理、技術選定、本番開発、継続改善まで支援します。小さく検証しながら事業化を進めます。' },
  { path: '/services/system-development-cost', title: 'システム開発の費用相場 | Specdest', description: 'システム開発、業務システム開発、Webシステム開発、AI導入、PoCの費用目安と、見積もりが変わる理由を日本企業向けに整理します。固定料金ではなく発注前の判断材料として解説します。' },
];
const solutionSeoDescriptions: Record<string,string> = {
  'ai-technology': 'AI・テクノロジー活用支援について、生成AI、AI機能開発、PoC、Computer Vision、OCR、業務システムへのAI組み込みなど、課題整理から実装・改善まで支援します。',
  automation: '業務改善・自動化について、手作業、Excel管理、確認作業、社内ワークフローを整理し、SaaS連携、API連携、業務システム開発、AI活用を組み合わせて改善します。',
  'product-development': 'デジタルプロダクト開発について、新規サービス、MVP、Webアプリ、モバイルアプリ、管理画面、外部連携を、構想整理から開発・継続改善まで支援します。',
  'business-systems': '業務システム開発について、予約、在庫、顧客管理、ワークフロー、管理画面、社内業務の一元管理など、現場業務に合わせたシステムを設計・開発します。',
  'poc-rd': 'PoC・R&Dについて、AI、画像認識、OCR、IoT、外部サービス連携など、技術的不確実性が高いテーマを小さく検証し、本格開発の判断材料を整理します。',
  'system-improvement': '既存システム改善について、古くなったWebシステム、使いにくい管理画面、属人化した運用、外部連携不足などを整理し、段階的な改善を支援します。',
};

const challengeSeoDescriptions: Record<string,string> = {
  'ai-adoption': 'AIを業務に活用したい企業向けに、生成AI、LLM、AIチャットボット、検索、要約、OCR、画像認識などの使いどころを整理し、PoCから実装まで支援します。',
  'reduce-manual-work': '手作業を減らしたい企業向けに、Excel管理、紙業務、確認作業、転記、集計、社内ワークフローを整理し、業務システム化や自動化の進め方を提案します。',
  'launch-service': '新しいサービスを立ち上げたい企業向けに、アイデア整理、MVP開発、Webシステム、モバイルアプリ、管理画面、PoCを組み合わせてサービス化を支援します。',
  'improve-existing-system': '既存システムを改善したい企業向けに、古い画面、運用負荷、外部連携不足、保守性の問題を整理し、段階的なリニューアルと継続改善を支援します。',
  'technology-selection': '技術選定から相談したい企業向けに、SaaS利用、独自開発、AI活用、API連携、既存システム改善などの選択肢を比較し、実装方針を整理します。',
  'shape-an-idea': 'アイデアを形にしたい企業向けに、要件が固まっていない段階から相談でき、課題整理、プロトタイプ、MVP、PoC、本番開発まで段階的に支援します。',
};

const caseSeoDescriptions: Record<string,string> = {
  'workflow-platform': 'Workflow Management Platformの導入事例です。スタートアップの業務プラットフォーム開発を、プロダクト改善、ワークフロー設計、管理機能開発の面から継続的に支援しています。',
  'dog-face-recognition-ai': 'Dog Face Recognition AIの導入事例です。Computer Vision、画像認識、AIモデル活用を含むR&Dから実装まで、日本のスタートアップ向けに技術開発を支援しました。',
  'content-optimization': 'Web/App Content Optimization Toolの導入事例です。上場企業との長期協業により、Web・アプリ運用を支える最適化ツールと継続的なプロダクト改善を支援しています。',
  'ai-chatbot': 'AI Chatbotの導入事例です。生成AI・チャットボット領域で、プロダクトへのAI機能組み込み、運用設計、開発チーム連携を支援しています。',
  'ecommerce-platform': 'E-Commerce Platformの導入事例です。EC、商品管理、マスターデータ、管理画面など、事業運営を支えるWebシステム・プラットフォーム開発を支援しています。',
  'ios-search-ads-optimization': 'iOS Search Adsの運用最適化に関する開発事例です。広告運用データを活用した最適化・推薦領域のシステム開発を支援しました。',
  'advanced-rd-poc': 'AI、OpenCV、OCR、IoTなどを活用した先端技術・R&D実証実験の事例です。技術検証からプロトタイプ開発まで支援しました。',
  'shift-scheduling-system': 'シフト作成・管理業務を支えるShift Scheduling Systemの開発事例です。複雑な勤務条件を扱う業務システムを構築しました。',
  'line-chat-automation': 'LINEを利用したChat System Automationの開発事例です。チャットを起点とした業務フローの自動化を支援しました。',
  'video-cv-platform': '動画CV Platformの開発事例です。動画を活用した採用・プロフィール領域のデジタルプロダクト開発を支援しました。',
  'stroller-sharing': 'ベビーカーシェアリングサービスの開発事例です。モバイル、決済、IoT・物理デバイス連携を含むサービス基盤を開発しました。',
  'medical-shift-management': '医療法人向けシフト管理システムの開発事例です。医療現場の勤務管理を支える業務システムを構築しました。',
};

const companySeoDescriptions: Record<string,string> = {
  about: 'Specdestについて。業務システム開発、AI活用、Webシステム開発、MVP開発、PoC・R&Dを通じて、日本企業の課題整理から実装・改善まで支援する会社です。',
  philosophy: 'SpecdestのPhilosophy / Visionです。Technology is a means, not the objective. 技術を目的ではなく、事業と業務を前進させるための手段として考えます。',
  profile: 'Specdest株式会社の会社概要です。所在地、連絡先、Webサイト、事業内容など、業務システム開発・AI活用支援を行う会社の基本情報を掲載しています。',
};

const detailRoutes = [
  ...solutionItems.map((item) => ({ path: `/solutions/${item.slug}`, title: `${item.title} | Specdest`, description: solutionSeoDescriptions[item.slug] })),
  ...challengeItems.map((item) => ({ path: `/challenges/${item.slug}`, title: `${item.title} | Specdest`, description: challengeSeoDescriptions[item.slug] })),
  ...caseItems.map((item) => ({ path: `/cases/${item.slug}`, title: `${item.title} | 導入事例 | Specdest`, description: caseSeoDescriptions[item.slug] })),
  ...insightItems.map((item) => ({ path: `/insights/${item.slug}`, title: `${item.title} | システム開発・AI活用記事 | Specdest`, description: `${item.title}。システム開発・AI活用・業務改善の発注前に確認すべき実務ポイントを日本企業向けに整理します。` })),
  ...companyItems.filter((item)=>item.slug).map((item) => ({ path: `/company/${item.slug}`, title: `${item.title} | Specdest`, description: companySeoDescriptions[item.slug] })),
];
export const siteRoutes = [...baseRoutes, ...detailRoutes];

function useSeo() {
  const { pathname } = useLocation();
  useEffect(() => {
    const meta = siteRoutes.find((route) => route.path === pathname) ?? siteRoutes[0];
    document.title = meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', meta.description);
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    const frame = window.requestAnimationFrame(() => window.scrollTo({ top: 0, left: 0, behavior: 'auto' }));
    return () => window.cancelAnimationFrame(frame);
  }, [pathname]);
}

function Header() {
  const [menu, setMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const { pathname } = useLocation();
  useEffect(() => {
    setMenu(null);
    setMobileOpen(false);
    setMobileSection(null);
  }, [pathname]);
  const closeMenu = () => {
    setMenu(null);
    setMobileOpen(false);
    setMobileSection(null);
  };
  const toggleMobileSection = (section: string) => setMobileSection((current) => current === section ? null : section);
  const menus = useMemo(() => ({
    challenges: {
      title: '「何を作るか」より、「何を良くしたいか」から。',
      body: '要件が固まっていなくても、事業や業務の課題から整理します。',
      base: '/challenges',
      groups: [{ label: 'Business Challenges', links: challengeItems }],
    },
    solutions: {
      title: 'テクノロジーを、事業の前進につなげる。',
      body: 'AI、自動化、プロダクト、業務システム。手段ではなく目的から選びます。',
      base: '/solutions',
      groups: [
        { label: 'AI・テクノロジー活用', links: solutionItems.filter((x) => ['ai-technology','poc-rd'].includes(x.slug)) },
        { label: '業務改善', links: solutionItems.filter((x) => ['automation','system-improvement'].includes(x.slug)) },
        { label: 'プロダクト・システム開発', links: solutionItems.filter((x) => ['product-development','business-systems'].includes(x.slug)) },
      ],
    },
    cases: {
      title: '実際の課題に、技術で応える。',
      body: 'AI・R&DからSaaS、業務システム、ECまで、公開可能な事例をご紹介します。',
      base: '/cases',
      groups: [
        { label: 'AI / R&D', links: caseItems.filter((x) => ['dog-face-recognition-ai','ai-chatbot','advanced-rd-poc'].includes(x.slug)) },
        { label: 'Optimization / Automation', links: caseItems.filter((x) => ['content-optimization','ios-search-ads-optimization','shift-scheduling-system','line-chat-automation'].includes(x.slug)) },
        { label: 'Product / Platform', links: caseItems.filter((x) => ['workflow-platform','ecommerce-platform','video-cv-platform'].includes(x.slug)) },
        { label: 'IoT / Business Systems', links: caseItems.filter((x) => ['stroller-sharing','medical-shift-management'].includes(x.slug)) },
      ],
    },
    company: {
      title: 'Better, through technology.',
      body: '可能性を広げ、より良い未来へ。Specdestの考え方と会社情報をご紹介します。',
      base: '/company',
      groups: [{ label: 'About Specdest', links: companyItems }],
    },
  }), []);
  const current = menu ? menus[menu as keyof typeof menus] : null;
  return <header className="site-header" onMouseLeave={() => setMenu(null)}>
    <div className="header-inner">
      <Link className="logo" to="/" onClick={closeMenu}>Specdest</Link>
      <nav className="nav" aria-label="Primary">
        <Link onMouseEnter={() => setMenu('challenges')} onClick={closeMenu} to="/challenges">課題から探す</Link>
        <Link onMouseEnter={() => setMenu('solutions')} onClick={closeMenu} to="/solutions">ソリューション</Link>
        <Link onMouseEnter={() => setMenu(null)} onClick={closeMenu} to="/approach">ご支援の進め方</Link>
        <Link onMouseEnter={() => setMenu('cases')} onClick={closeMenu} to="/cases">導入事例</Link>
        <Link onMouseEnter={() => setMenu(null)} onClick={closeMenu} to="/insights">お役立ち記事</Link>
        <Link onMouseEnter={() => setMenu('company')} onClick={closeMenu} to="/company">会社情報</Link>
      </nav>
      <Link className="contact-button" to="/contact" onClick={closeMenu}>無料相談</Link>
      <button className={`mobile-menu-toggle ${mobileOpen ? 'is-open' : ''}`} type="button" aria-label={mobileOpen ? 'メニューを閉じる' : 'メニューを開く'} aria-expanded={mobileOpen} onClick={() => setMobileOpen((open) => !open)}><span/><span/><span/></button>
    </div>
    {mobileOpen && <nav className="mobile-nav" aria-label="Mobile">
      {([
        ['challenges','課題から探す',challengeItems],
        ['solutions','ソリューション',solutionItems],
        ['cases','導入事例',caseItems],
        ['company','会社情報',companyItems],
      ] as const).slice(0,2).map(([key,label,items]) => <div className={`mobile-nav-group ${mobileSection === key ? 'is-open' : ''}`} key={key}>
        <button type="button" className="mobile-nav-parent" aria-expanded={mobileSection === key} onClick={() => toggleMobileSection(key)}>{label}<span>⌄</span></button>
        {mobileSection === key && <div className="mobile-subnav"><Link className="mobile-all-link" to={`/${key}`} onClick={closeMenu}>{label}一覧<span>↗</span></Link>{items.map((item) => <Link key={item.slug||'root'} to={key==='company'&&!item.slug?'/company':`/${key}/${item.slug}`} onClick={closeMenu}>{item.title}<span>↗</span></Link>)}</div>}
      </div>)}
      <Link className="mobile-direct-link" to="/approach" onClick={closeMenu}>ご支援の進め方<span>↗</span></Link>
      <Link className="mobile-direct-link" to="/insights" onClick={closeMenu}>お役立ち記事<span>↗</span></Link>
      {([
        ['cases','導入事例',caseItems],
        ['company','会社情報',companyItems],
      ] as const).map(([key,label,items]) => <div className={`mobile-nav-group ${mobileSection === key ? 'is-open' : ''}`} key={key}>
        <button type="button" className="mobile-nav-parent" aria-expanded={mobileSection === key} onClick={() => toggleMobileSection(key)}>{label}<span>⌄</span></button>
        {mobileSection === key && <div className="mobile-subnav"><Link className="mobile-all-link" to={`/${key}`} onClick={closeMenu}>{label}一覧<span>↗</span></Link>{items.map((item) => <Link key={item.slug||'root'} to={key==='company'&&!item.slug?'/company':`/${key}/${item.slug}`} onClick={closeMenu}>{item.title}<span>↗</span></Link>)}</div>}
      </div>)}
      <Link className="mobile-contact" to="/contact" onClick={closeMenu}>無料相談<span>↗</span></Link>
    </nav>}
    {current && <div className="mega-menu">
      <div className="mega-inner">
        <div className="mega-message"><strong>{current.title}</strong><p>{current.body}</p><Link className="mega-parent-link" to={current.base} onClick={closeMenu}>一覧を見る ↗</Link></div>
        <div className={`mega-groups mega-groups-${current.groups.length}`}>{current.groups.map((group) => <div className="mega-group" key={group.label}><h4>{group.label}</h4>{group.links.map((item: {slug:string;title:string}) => <Link key={item.slug||'root'} to={current.base==='/company'&&!item.slug?'/company':`${current.base}/${item.slug}`} onClick={closeMenu}>{item.title}<span>↗</span></Link>)}</div>)}</div>
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
      <div><strong className="footer-heading">ソリューション</strong><Link to="/solutions/ai-technology">AI・テクノロジー活用</Link><Link to="/solutions/automation">業務改善・自動化</Link><Link to="/solutions/product-development">デジタルプロダクト開発</Link><Link to="/solutions/business-systems">業務システム開発</Link></div>
      <div><strong className="footer-heading">見る</strong><Link to="/approach">ご支援の進め方</Link><Link to="/cases">導入事例</Link><Link to="/insights">お役立ち記事</Link></div>
      <div><strong className="footer-heading">開発サービス</strong><Link to="/services/business-system-development">業務システム開発</Link><Link to="/services/ai-automation-development">AI業務自動化</Link><Link to="/services/web-system-development">Webシステム開発</Link></div>
      <div><strong className="footer-heading">会社情報</strong><Link to="/company">Specdestについて</Link><Link to="/company/philosophy">Philosophy / Vision</Link><Link to="/company/profile">会社概要</Link></div>
    </div>
    <div className="footer-bottom shell"><span>© Specdest Inc.</span><div><a href="/sitemap.xml">サイトマップ</a><Link to="/contact">お問い合わせ</Link></div></div>
  </footer>;
}

function Hero() {
  return <section className="hero">
    <video aria-hidden="true" tabIndex={-1} autoPlay muted loop playsInline poster="/images/home/hero-poster.jpg">
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
    <section className="intro section"><div className="shell intro-grid"><Reveal><div className="eyebrow">Our Role</div><h2>技術をつくる前に、<br/>何を変えるべきかを考える。</h2></Reveal><Reveal><p className="lead">Specdestは、事業や業務の課題を起点に、何を変えるべきかを整理します。必要な技術を見極め、設計・実装・改善まで一貫して担います。</p><p className="statement">AI、SaaS、業務自動化、システム連携、プロダクト開発。手段を限定せず、課題に対して合理的な方法を選ぶ。</p></Reveal></div></section>
    <TrustStrip />
    <Outcomes />
    <Philosophy />
    <ChallengesSection />
    <CasesSection />
    <CapabilitiesSection />
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
  return <section className="section philosophy"><div className="shell split"><Reveal className="visual"><img loading="lazy" decoding="async" src="/images/home/philosophy-working-session.jpg" alt="データ分析とテクノロジー活用のイメージ" /></Reveal><Reveal><div className="eyebrow">Technology Philosophy</div><h2>Technology is a means,<br/>not the objective.</h2><p className="lead">解決策は、必ずしも新しいシステムではありません。既存SaaS、業務フローの変更、AI、自動化、連携、PoC。必要なものだけを選びます。</p><div className="principles"><p><strong>01 課題から考える</strong><span>技術ありきで提案しない。</span></p><p><strong>02 選択肢を比較する</strong><span>作る・つなぐ・変えるを判断する。</span></p><p><strong>03 必要なら実装まで担う</strong><span>提案だけで終わらせない。</span></p></div></Reveal></div></section>;
}

function ChallengesSection() {
  return <section className="section challenges"><div className="shell"><div className="eyebrow blue">Start From The Problem</div><h2>こうした課題から、<br/>相談できます。</h2><p className="lead inverse">要件書がなくても構いません。何が問題か、何を変えたいかという段階から整理します。</p><div className="challenge-list">{challengeItems.map((item,index)=><Link to={`/challenges/${item.slug}`} className="challenge-row" key={item.slug}><span>{String(index+1).padStart(2,'0')}</span><strong>{item.title}</strong><b>↗</b></Link>)}</div></div></section>;
}

function CasesSection() {
  return <section className="section cases"><div className="shell"><div className="section-head"><div><div className="eyebrow">Selected Work</div><h2>技術だけではなく、<br/>事業の前進に関わる。</h2></div><Link className="text-link" to="/cases">すべての導入事例 ↗</Link></div><Reveal><Link to="/cases/workflow-platform" className="case-feature"><div className="case-image"><img loading="lazy" decoding="async" src="/images/home/case-workflow-platform.jpg" alt="業務プラットフォームの分析画面イメージ" /></div><div className="case-copy"><span>Workflow / Platform</span><h3>事業成長を支える<br/>Workflow Management Platform</h3><p>継続的なプロダクト開発を支援し、事業の変化に合わせて改善を重ねています。</p><small>Funded startup / Cooperation since 2023</small></div></Link></Reveal><div className="case-grid"><Link to="/cases/dog-face-recognition-ai"><span>AI / Computer Vision</span><h3>Dog Face Recognition AI</h3><p>研究から実装まで、AI技術開発をR&Dとして支援。</p></Link><Link to="/cases/content-optimization"><span>Optimization / Web & App</span><h3>Content Optimization Tool</h3><p>上場企業との長期協業。2018年から継続して開発を支援。</p></Link></div></div></section>;
}

function CapabilitiesSection() {
  return <section className="section capabilities"><div className="shell"><div className="eyebrow">Capabilities</div><h2>考えるところから、<br/>実装するところまで。</h2><div className="cap-list">{solutions.slice(0,5).map((item,index)=><div className="cap-row" key={item}><span>{String(index+1).padStart(2,'0')}</span><h3>{item}</h3><p>{['AI導入判断、技術検証、活用設計、社内業務への適用まで支援。','手作業や分断された業務を整理し、自動化・連携を設計。','新規サービスの企画、MVP、本番開発、継続改善。','現場業務に合わせた管理・予約・在庫・CRM・ワークフロー等の開発。','画像認識、OCR、IoTなど、不確実性の高い技術テーマを小さく検証。'][index]}</p></div>)}</div></div></section>;
}

function CompanySection() {
  return <section className="company"><div className="company-grid"><Reveal className="company-copy"><div className="eyebrow dark">About Specdest</div><h2>難しい課題を、<br/>任せられる会社へ。</h2><p>クライアントのビジネスを理解し、技術的な判断と実装を一貫して担うことで、事業の前進を支えるテクノロジーパートナーです。</p><Link to="/company" className="text-link">Specdestについて ↗</Link></Reveal><Reveal className="company-image"><img loading="lazy" decoding="async" src="/images/home/company-environment.jpg" alt="現代的な企業環境のイメージ" /></Reveal></div></section>;
}

function ContactBand() {
  return <section className="section contact-band"><div className="shell contact-inner"><div><div className="eyebrow">Contact</div><h2>What should<br/>we solve next?</h2></div><Link className="contact-circle" to="/contact">無料相談<br/>↗</Link></div></section>;
}

function SolutionsPage() {
  const groups = [
    { n:'01', label:'AI & Emerging Technology', title:'AI・テクノロジー活用', body:'AIを導入することではなく、事業や業務のどこに使うと意味があるかを見極めます。', slugs:['ai-technology','poc-rd'] },
    { n:'02', label:'Operational Improvement', title:'業務を変える', body:'手作業、二重入力、分断されたシステム。運用全体を見直し、必要な部分を自動化・連携します。', slugs:['automation','system-improvement'] },
    { n:'03', label:'Products & Systems', title:'新しくつくる', body:'新規サービスから業務基盤まで。構想を要件に変え、実際に使われるプロダクトとして形にします。', slugs:['product-development','business-systems'] },
  ];
  return <main className="subpage solutions-page">
    <section className="subhero menu-hero"><div className="shell"><div className="eyebrow">Solutions</div><h1>技術ではなく、<br/>変化を設計する。</h1><p>AI、SaaS、自動化、独自開発。最初に手段を決めず、実現したい状態から必要な方法を選びます。</p></div></section>
    <section className="menu-lead section"><div className="shell menu-lead-grid"><div><div className="eyebrow">How We Think</div><h2>作ることが、<br/>答えとは限らない。</h2></div><div><p className="lead">既存SaaSで解決できるなら、それを使う。連携で足りるなら、つなぐ。技術的な不確実性が高ければ、小さく検証する。独自開発が必要なら、実装まで担います。</p></div><div className="menu-lead-image"><img loading="lazy" decoding="async" src={siteImages.solutions} alt="複数のデジタルプロダクトのイメージ"/></div></div></section>
    <section className="solution-groups section"><div className="shell">{groups.map(g=><div className="solution-group" key={g.n}><div className="solution-group-head"><span>{g.n}</span><div><small>{g.label}</small><h2>{g.title}</h2><p>{g.body}</p></div></div><div className="solution-group-links">{g.slugs.map(slug=>{const item=solutionItems.find(x=>x.slug===slug)!;return <Link key={slug} to={`/solutions/${slug}`}><h3>{item.title}</h3><p>{collectionDescriptions[slug]}</p><b>↗</b></Link>})}</div></div>)}</div></section>
    <section className="choice-principle"><div className="shell"><span>Our Principle</span><strong>Build / Buy / Connect / Automate / Validate</strong><p>選択肢を比較し、目的に対して最も合理的な方法を選びます。</p></div></section>
    <RelatedCases slugs={['dog-face-recognition-ai','workflow-platform']}/><SubContact />
  </main>;
}

const challengePrompts: Record<string,string> = {
  'ai-adoption':'AIの使いどころが見えない。PoCで終わらせず、業務やサービスに組み込みたい。',
  'reduce-manual-work':'Excel、メール、転記、確認作業が増え、担当者の負荷とミスが積み上がっている。',
  'launch-service':'アイデアはあるが、最初に何を作り、何を検証すべきか決めきれない。',
  'improve-existing-system':'システムは動いているが、使いづらい。全面刷新すべきか部分改善でよいか判断したい。',
  'technology-selection':'SaaS、AI、API連携、独自開発。選択肢が多く、技術判断だけを社内で抱えたくない。',
  'shape-an-idea':'まだ仕様書ではない。曖昧な構想を、検証できる具体的な形にしたい。',
};
function ChallengesPage() {
  return <main className="subpage challenges-page">
    <section className="subhero menu-hero challenge-hero"><div className="shell"><div className="eyebrow">Start From The Problem</div><h1>「何を作るか」が、<br/>決まっていなくても。</h1><p>技術の相談ではなく、事業や業務の困りごとから始められます。状況を整理し、次に決めるべきことを明確にします。</p></div></section>
    <section className="challenge-diagnostic section"><div className="shell"><div className="diagnostic-intro"><div className="eyebrow">Which sounds familiar?</div><h2>今の状態に近いものから。</h2><p>同じ「システム開発」でも、出発点によって必要な進め方は異なります。</p></div><div className="challenge-cards">{challengeItems.map((item,index)=><Link className="challenge-card" key={item.slug} to={`/challenges/${item.slug}`}><div className="challenge-card-image"><img loading="lazy" decoding="async" src={siteImages[item.slug]} alt={`${item.title}のイメージ`} /></div><div className="challenge-card-copy"><span>{String(index+1).padStart(2,'0')}</span><h3>{item.title}</h3><p>{challengePrompts[item.slug]}</p><b>この課題を見る ↗</b></div></Link>)}</div></div></section>
    <section className="challenge-note section"><div className="shell"><div><div className="eyebrow">Before Requirements</div><h2>要件定義の前に、<br/>整理すべきことがある。</h2></div><div><p className="lead">現状の業務、利用者、制約、変えたい状態。そこが曖昧なまま技術を選ぶと、作ること自体が目的になります。</p><Link className="text-link" to="/approach">ご支援の進め方を見る ↗</Link></div></div></section><SubContact />
  </main>;
}

function CasesPage() {
  const featured=caseItems[0]; const rest=caseItems.slice(1);
  return <main className="subpage cases-page">
    <section className="subhero menu-hero cases-hero"><div className="shell"><div className="eyebrow">Selected Work</div><h1>違う課題に、<br/>違う技術で応える。</h1><p>AI、プラットフォーム、Web/App、EC。技術カテゴリではなく、実際の事業課題に合わせて支援してきた事例です。</p></div></section>
    <section className="case-index section"><div className="shell"><Link className="case-index-feature" to={`/cases/${featured.slug}`}><div className="case-index-image"><img loading="lazy" decoding="async" src={siteImages[featured.slug]} alt="Workflow Management Platform"/></div><div className="case-index-copy"><span>Featured / Platform</span><h2>{featured.title}</h2><p>{collectionDescriptions[featured.slug]}</p><strong>Case Study ↗</strong></div></Link><div className="case-index-grid">{rest.map((item,index)=><Link key={item.slug} to={`/cases/${item.slug}`}><div className="case-thumb"><img loading="lazy" decoding="async" src={siteImages[item.slug]} alt={`${item.title}の導入事例イメージ`} /></div><span>{caseCategories[item.slug]}</span><h3>{item.title}</h3><p>{collectionDescriptions[item.slug]}</p></Link>)}</div></div></section>
    <section className="proof-band"><div className="shell"><div><strong>2018 →</strong><span>長期継続支援の実績</span></div><div><strong>AI / R&D</strong><span>不確実性の高い技術検証</span></div><div><strong>Product</strong><span>構想から継続改善まで</span></div></div></section><SubContact />
  </main>;
}

function CompanyPage() {
  return <main className="subpage company-page">
    <section className="subhero menu-hero company-hero"><div className="shell"><div className="eyebrow">About Specdest</div><h1>構想から実装まで、<br/>事業を前に進める技術会社。</h1><p>AI、Web・モバイル、業務システム、プラットフォーム、R&D。課題整理から技術選定、設計、開発、改善まで一貫して支援します。</p></div></section>
    <section className="company-manifesto section"><div className="shell"><div className="company-manifesto-image"><img loading="lazy" decoding="async" src={siteImages.company} alt="現代的なテクノロジー企業を象徴する建築"/></div><div className="company-manifesto-copy"><div className="eyebrow">What We Do</div><h2>相談だけでも、<br/>実装だけでも終わらせない。</h2><p className="lead">要件が固まる前の整理から入り、必要な技術を選び、実際に動くシステムやプロダクトとして形にします。</p><p>新規開発だけでなく、既存システム改善、AI導入、業務自動化、PoC・技術検証まで対応します。</p><Link className="text-link" to="/solutions">Solutions ↗</Link></div></div></section>
    <section className="company-principles section"><div className="shell"><div className="section-head"><div><div className="eyebrow">Capabilities</div><h2>幅広く作れることを、<br/>一つの強みにする。</h2></div></div><div className="company-principle-grid"><article><span>01</span><h3>AI & R&D</h3><p>生成AI、Computer Vision、OCR、PoCなど、不確実性の高い技術も検証から実装まで。</p></article><article><span>02</span><h3>Products & Platforms</h3><p>Web、モバイル、EC、SaaS、プラットフォームを構想から継続改善まで。</p></article><article><span>03</span><h3>Business Systems</h3><p>現場業務に合わせた管理、予約、シフト、ワークフロー、自動化・連携。</p></article></div></div></section>
    <section className="company-paths section"><div className="shell"><Link to="/company/philosophy"><span>01 / Philosophy</span><h2>私たちの考え方</h2><p>なぜ技術を目的にせず、事業や業務の変化から考えるのか。</p></Link><Link to="/company/profile"><span>02 / Corporate Profile</span><h2>会社概要</h2><p>会社情報、所在地、お問い合わせ先。</p></Link></div></section><SubContact />
  </main>;
}

const collectionDescriptions: Record<string,string> = {
  'ai-technology':'AIを使うこと自体を目的にせず、導入判断、業務への適用、PoC、AI機能開発まで必要な範囲を設計します。',
  'automation':'手作業や分断された業務を整理し、自動化・システム連携・運用改善を組み合わせます。',
  'product-development':'新しいサービスを、構想整理からMVP、本番開発、継続改善まで形にします。',
  'business-systems':'現場の業務に合わせ、管理・予約・在庫・CRM・ワークフローなどの仕組みを構築します。',
  'poc-rd':'画像認識、OCR、IoT、AIなど、不確実性の高いテーマを小さく検証して次の判断につなげます。',
  'system-improvement':'既存システムの課題を整理し、機能改善、連携、再設計など必要な改善を行います。',
  'ai-adoption':'どこにAIを使うと意味があるかを整理し、導入判断から検証・実装まで進めます。',
  'reduce-manual-work':'現場の手作業を分解し、自動化すべき部分と人が判断すべき部分を整理します。',
  'launch-service':'事業アイデアを要件に落とし込み、必要な機能と技術を見極めてサービスとして形にします。',
  'improve-existing-system':'使いづらさ、運用負荷、機能不足を整理し、優先順位をつけて改善します。',
  'technology-selection':'特定の技術に決める前に、SaaS、連携、自動化、独自開発など複数の選択肢を比較します。',
  'shape-an-idea':'まだ要件になっていないアイデアを、実現方法・機能・検証計画へ具体化します。',
  'workflow-platform':'資金調達済みスタートアップの業務・プロダクト基盤を継続的に開発。2023年から支援しています。',
  'dog-face-recognition-ai':'犬の顔認識技術に関するAI開発をR&Dから支援。特許準備に関わる技術開発として2021年から継続しています。',
  'content-optimization':'東証プライム上場企業向けのWeb/Appコンテンツ最適化ツールを2018年から継続して開発支援しています。',
  'ai-chatbot':'スタートアップ向けAIチャットボット開発を2025年から支援しています。',
  'ecommerce-platform':'資金調達済みスタートアップ向けE-Commerce Platformを2023年から開発支援しています。',
  'ios-search-ads-optimization':'iOS Search Adsの運用データを活用し、広告運用の最適化・推薦を支えるシステムを開発しました。',
  'advanced-rd-poc':'AI、OpenCV、OCR、IoTなどを用いた先端技術テーマの実証実験・プロトタイプ開発を支援しました。',
  'shift-scheduling-system':'勤務条件を扱うシフト作成・管理業務をシステム化し、運用を支える仕組みを開発しました。',
  'line-chat-automation':'LINEを入口にしたチャット業務と後続処理をつなぎ、業務自動化を支えるシステムを開発しました。',
  'video-cv-platform':'動画を活用したCV・プロフィール領域のプラットフォームをプロダクトとして開発しました。',
  'stroller-sharing':'モバイル、決済、IoT・物理デバイス連携を組み合わせたベビーカーシェアリングサービスを開発しました。',
  'medical-shift-management':'医療法人の勤務・シフト管理業務に合わせた業務システムを開発しました。',
  'about':'Specdestは、事業課題から技術選定、設計、実装、改善までを一つの流れで担うテクノロジーカンパニーです。',
  'philosophy':'テクノロジーを目的にせず、実現したい変化から必要な方法を選ぶことを大切にしています。',
  'profile':'Specdest株式会社の基本情報をご案内します。',
};

type ServiceDetail = {intro:string; context:string; points:string[]; deliverables:string[]; related:string[]; perspectiveTitle?:string};
const solutionDetails: Record<string,ServiceDetail> = {
  'ai-technology':{perspectiveTitle:'AIは、使える場所より\n価値が出る場所を見極める。',intro:'AI導入の目的と業務上の価値を整理し、必要であればPoCやAI機能開発まで実行します。',context:'生成AIや画像認識などの選択肢が増える一方で、「どこに使うか」「既存サービスで足りるか」「独自開発すべきか」の判断が重要です。Specdestは技術ありきではなく、業務と目的から導入方法を設計します。',points:['導入候補業務と期待効果の整理','既存サービス・API・独自開発の比較','PoC・AI機能開発・業務への組み込み'],deliverables:['AI活用テーマの整理・優先順位付け','PoC / 技術検証','AI機能を含むWeb・業務システム開発'],related:['dog-face-recognition-ai','ai-chatbot']},
  'automation':{perspectiveTitle:'人が判断する仕事と、\n仕組みに任せる仕事を分ける。',intro:'業務を可視化し、手作業・重複入力・システム間の分断を減らします。',context:'自動化は、単に作業を機械化すればよいわけではありません。人が判断すべき工程と、ルール化・連携できる工程を分け、運用全体が無理なく回る形を設計します。',points:['業務フローとボトルネックの整理','自動化・連携・運用変更の設計','必要なシステムやツールの実装'],deliverables:['業務フロー整理','システム連携・自動処理','管理画面・ワークフロー機能'],related:['workflow-platform','content-optimization']},
  'product-development':{perspectiveTitle:'全部を作る前に、\n価値が届く最小形をつくる。',intro:'新規サービスやデジタルプロダクトを、構想から運用まで一貫して開発します。',context:'まだ仕様が固まっていない段階でも、誰にどの価値を提供するのか、最初に何を検証するのかを整理し、過不足のないMVPから本番サービスへつなげます。',points:['要件整理とMVP設計','Web・モバイル・バックエンド開発','リリース後の継続改善'],deliverables:['要件・画面・データ設計','MVP / 本番プロダクト','運用後の機能改善'],related:['workflow-platform','ecommerce-platform']},
  'business-systems':{perspectiveTitle:'現場にシステムを合わせ、\n業務そのものを強くする。',intro:'現場の業務に合わせたシステムを設計し、日々の運用を支える仕組みを構築します。',context:'汎用SaaSでは合わない業務や、複数の情報が分散している現場では、実際の運用を理解したうえでシステムを設計することが重要です。',points:['業務要件の整理','管理・予約・在庫・CRM等の設計','既存システムとの連携・運用改善'],deliverables:['管理・CRM・予約・在庫等の業務機能','権限・ワークフロー設計','外部サービスとの連携'],related:['workflow-platform','ecommerce-platform']},
  'poc-rd':{perspectiveTitle:'不確実な技術は、\n小さく試してから大きく進める。',intro:'技術的な不確実性が高いテーマを、小さな検証から始めて判断材料を作ります。',context:'実現可能性が読めない技術テーマを、いきなり本番開発する必要はありません。検証条件を定め、必要な部分だけを試作し、次に進むべきかを判断できる状態を作ります。',points:['技術仮説と検証条件の整理','AI・画像認識・OCR・IoT等の試作','検証結果を踏まえた次フェーズ設計'],deliverables:['技術検証プロトタイプ','検証結果・制約の整理','本開発へ向けた技術方針'],related:['dog-face-recognition-ai','content-optimization']},
  'system-improvement':{perspectiveTitle:'作り直す前に、\n残すものと変えるものを見極める。',intro:'既存システムを前提に、使いづらさや運用負荷を減らすための改善を行います。',context:'全面刷新だけが選択肢ではありません。既存資産を活かしながら、優先度の高い課題から段階的に改善することで、事業への影響を抑えながらシステムを良くしていきます。',points:['現状課題と優先順位の整理','機能改善・連携・再設計','段階的な移行と継続改善'],deliverables:['現状分析・改善計画','既存機能の改修・再設計','段階的な移行・運用改善'],related:['content-optimization','workflow-platform']},
};

const challengeDetails: Record<string,ServiceDetail> = {
  'ai-adoption':{intro:'AIを使う場所ではなく、AIで何を変えるかから整理します。',context:'AI導入で難しいのは、モデル選定よりも業務との接続です。対象業務、期待する変化、精度や運用上の制約を整理し、既存サービスで足りるのか、PoCが必要か、独自機能まで作るのかを判断します。',points:['AIを使う候補業務を見つける','期待効果と運用条件を定義する','小さく検証し、業務・サービスに組み込む'],deliverables:['AI活用候補と優先順位','PoC・評価設計','実運用に組み込むAI機能'],related:['dog-face-recognition-ai','ai-chatbot']},
  'reduce-manual-work':{intro:'作業をそのまま自動化する前に、なくせる工程と残すべき判断を分けます。',context:'手作業が増える原因は、単一の作業ではなく、Excel・メール・複数システム間の分断にあることが多いです。現行フローを分解し、入力、転記、確認、通知、承認のどこを変えるべきかを整理します。',points:['実際の業務フローを可視化する','人の判断とルール処理を切り分ける','連携・自動処理・管理画面を設計する'],deliverables:['業務フローとボトルネック整理','自動化・連携設計','必要なワークフロー機能'],related:['workflow-platform','content-optimization']},
  'launch-service':{intro:'アイデアを全部作るのではなく、最初に何を確かめるべきかを決めます。',context:'新規サービスでは、機能を増やすほど成功確率が上がるわけではありません。誰に何の価値を提供するのか、最初に検証すべき仮説は何かを整理し、MVPに必要な範囲へ落とし込みます。',points:['顧客・価値・利用シーンを具体化する','最初に検証する仮説とMVPを決める','本番運用を見据えて段階的に開発する'],deliverables:['構想・要件整理','MVP / プロトタイプ','本番プロダクトと継続改善'],related:['workflow-platform','ecommerce-platform']},
  'improve-existing-system':{intro:'全面刷新か部分改善か。まず、どこが本当に問題かを見極めます。',context:'既存システムの不満は、UI、性能、運用、データ構造、外部連携など複数の原因が重なります。現状資産を残す価値と、変えるべき部分を分け、事業への影響を抑えながら改善します。',points:['不満・障害・運用負荷を原因別に整理する','残す部分と変える部分を判断する','優先度の高い改善から段階的に進める'],deliverables:['現状診断と改善優先順位','改修・再設計方針','段階移行・継続改善'],related:['content-optimization','workflow-platform']},
  'technology-selection':{intro:'SaaS、API、AI、独自開発。作る前に、選択肢を比較します。',context:'技術選定は流行や得意技術で決めるものではありません。コスト、速度、柔軟性、運用負荷、将来の拡張性を比較し、今の事業にとって合理的な構成を決めます。',points:['要件と制約を技術判断の条件に変える','Build / Buy / Connectを比較する','採用理由と将来の変更余地を明確にする'],deliverables:['技術選択肢の比較','構成・連携方針','PoCが必要な論点の整理'],related:['dog-face-recognition-ai','workflow-platform']},
  'shape-an-idea':{intro:'まだ言葉になり切っていない構想を、検証できる形まで具体化します。',context:'「こんなことができたら」という段階では、仕様書を作るより先に、利用者、価値、必要なデータ、技術的な不確実性を整理することが重要です。図、画面、プロトタイプを使いながら、次の判断ができる状態にします。',points:['構想の背景と狙いを言語化する','利用体験と必要機能を可視化する','試作・技術検証の範囲を決める'],deliverables:['コンセプト・要件整理','画面・フロー・プロトタイプ','検証計画と次フェーズ案'],related:['workflow-platform','ecommerce-platform']},
};

type CaseDetail = {intro:string; background:string; approach:string; built:string[]; facts:string[]};
const caseDetails: Record<string,CaseDetail> = {
  'workflow-platform':{intro:'資金調達済みスタートアップのWorkflow Management Platform開発を支援しています。',background:'事業の成長や業務変化に合わせて進化する、ワークフロー管理のプロダクト基盤を継続的に開発しています。',approach:'一度作って終わるのではなく、事業側の変化を取り込みながら機能を追加・改善できるプロダクトとして支援しています。',built:['Workflow Management Platform','継続的な機能追加・改善','業務・サービス基盤のプロダクト開発'],facts:['2023年から継続支援','資金調達済みスタートアップ','Platform / SaaS']},
  'dog-face-recognition-ai':{intro:'犬の顔認識技術に関するAI開発をR&Dから支援しています。',background:'一般的な業務システムとは異なり、認識精度や実現方法そのものに技術的な不確実性があるテーマです。',approach:'R&Dとして技術検証から取り組み、実現可能性を確認しながらAI機能の開発を進めています。',built:['AI / Computer Vision','顔認識に関する技術検証','プロダクト化に向けた継続開発'],facts:['2021年から継続支援','特許準備に関わる技術開発','AI / R&D']},
  'content-optimization':{intro:'Web/Appのコンテンツ最適化ツールを長期にわたり開発支援しています。',background:'Webとアプリの運用・最適化を支えるツールとして、長期間にわたり継続的な開発を支援しています。',approach:'運用中のプロダクトとして、必要な改善や追加開発を継続しながら支援しています。',built:['Web/App Content Optimization Tool','運用を支える継続的な機能改善','Web / App向け機能開発'],facts:['東証プライム上場企業向け','2018年から継続支援','長期協業']},
  'ai-chatbot':{intro:'スタートアップ向けAIチャットボット開発を支援しています。',background:'生成AIをユーザー向けプロダクトの機能として組み込む開発テーマです。',approach:'AIそのものだけでなく、利用体験やプロダクトの一機能として成立する形で開発を支援しています。',built:['AI Chatbot','AI機能のプロダクト組み込み','Webプロダクト開発'],facts:['2025年から支援','スタートアップ','AI / Product']},
  'ecommerce-platform':{intro:'資金調達済みスタートアップ向けE-Commerce Platformを開発支援しています。',background:'EC事業を支えるプラットフォームとして、サービス運営に必要な機能を継続的に開発しています。',approach:'事業要件に合わせて、プロダクトとして必要な機能を段階的に設計・実装しています。',built:['E-Commerce Platform','サービス運営に必要な業務機能','継続的なプロダクト開発'],facts:['2023年から支援','資金調達済みスタートアップ','E-Commerce / Platform']},
  'ios-search-ads-optimization':{intro:'iOS Search Adsの運用最適化を支えるシステム開発に取り組みました。',background:'広告運用データを活用し、運用判断をより効率的に行うための最適化・推薦領域の開発テーマです。',approach:'運用データを扱う仕組みと最適化ロジックを組み合わせ、実務で利用できる形へ落とし込みました。',built:['Search Ads運用支援','データを用いた最適化・推薦','運用システム開発'],facts:['Optimization','Recommendation','iOS Search Ads']},
  'advanced-rd-poc':{intro:'AI、OpenCV、OCR、IoTなどを用いた先端技術のR&D・実証実験を支援しました。',background:'実現可能性や精度を事前に確認する必要がある、不確実性の高い技術テーマを扱いました。',approach:'技術検証と小規模なプロトタイプを通じて、実用化に向けた判断材料を作りました。',built:['AI / OpenCV / OCR','IoT連携','PoC・プロトタイプ'],facts:['R&D','PoC','Emerging Technology']},
  'shift-scheduling-system':{intro:'シフト作成・管理業務を支えるシステムを開発しました。',background:'勤務条件や人員配置を扱うシフト業務を、継続的に運用できるシステムとして整理する開発テーマです。',approach:'実際のシフト管理フローをシステム化し、日常運用に必要な管理機能を実装しました。',built:['シフト作成・管理','勤務条件の管理','業務管理機能'],facts:['Business System','Scheduling','Operations']},
  'line-chat-automation':{intro:'LINEを利用したChat System Automationを開発しました。',background:'チャット上のやり取りと後続の業務処理をつなぎ、手作業を減らす自動化テーマです。',approach:'LINEをユーザー接点として業務フローと連携し、チャットから処理につながる仕組みを構築しました。',built:['LINE連携','Chat System','業務自動化'],facts:['Automation','LINE','Integration']},
  'video-cv-platform':{intro:'動画を活用したCV・プロフィール領域のプラットフォームを開発しました。',background:'テキストだけでは伝わりにくい情報を動画で扱うためのデジタルプロダクト開発です。',approach:'動画を中心としたユーザー体験とサービス運営に必要な機能を、プラットフォームとして設計・実装しました。',built:['動画CV機能','Webプラットフォーム','管理・運用機能'],facts:['Video','Platform','Product Development']},
  'stroller-sharing':{intro:'ベビーカーシェアリングサービスのシステム開発を支援しました。',background:'モバイル操作、決済、IoT・物理デバイスを一つのサービス体験として連携させる開発テーマです。',approach:'アプリケーションと外部・物理デバイスの連携を含め、サービス運営に必要な仕組みを構築しました。',built:['モバイル機能','決済連携','IoT・物理デバイス連携'],facts:['IoT','Mobile','Sharing Service']},
  'medical-shift-management':{intro:'医療法人向けのシフト管理システムを開発しました。',background:'医療現場の勤務・シフト管理を、組織の運用に合わせて扱う業務システム開発です。',approach:'現場の管理業務を整理し、シフト情報を継続的に管理できる仕組みとして実装しました。',built:['勤務・シフト管理','管理画面','業務システム'],facts:['Medical Organization','Business System','Shift Management']},
};


type InsightDetail = {
  summary: string;
  target: string;
  sections: { heading: string; body: string; points?: string[] }[];
  cta: string;
};

const insightDetails: Record<string, InsightDetail> = {
  'how-to-choose-system-development-company': {
    summary: 'システム開発会社を選ぶ時は、技術スタックよりも、課題整理・見積もりの透明性・運用後の改善責任を確認することが重要です。',
    target: 'システム開発会社を比較している企業担当者',
    sections: [
      { heading: '最初に確認すること', body: '発注前に確認すべきなのは「何を作れるか」だけではありません。要件が固まっていない段階から相談できるか、業務の目的を整理できるか、作らない選択肢も含めて比較できるかを見ます。', points: ['要件整理から入れるか', 'SaaS・連携・独自開発を比較できるか', 'リリース後の改善まで対応できるか'] },
      { heading: '避けるべき選び方', body: '安さ、人数、技術名だけで選ぶと、作った後に使われないシステムになるリスクがあります。業務フロー、利用者、運用体制まで確認する会社を選ぶべきです。' },
      { heading: 'Specdestの考え方', body: 'Specdestは、事業や業務の課題を整理し、必要な技術を選び、設計・実装・改善まで一貫して支援します。' },
    ],
    cta: '開発会社選びの相談をする',
  },
  'system-development-cost-guide': {
    summary: 'システム開発費は要件、連携、権限、データ移行、運用条件で大きく変わります。固定価格ではなく、判断材料としての費用レンジを把握することが重要です。',
    target: 'システム開発の予算感を知りたい企業担当者',
    sections: [
      { heading: '費用レンジは「見積もり」ではなく判断材料', body: '日本のB2B開発では固定料金を大きく出さない会社も多いです。一方で、発注側は予算判断が必要です。そのため、Specdestでは固定パッケージ価格ではなく、一般的な目安として費用レンジを説明します。' },
      { heading: '目安レンジ', body: '実際の金額は要件確認後に変わります。以下は発注前に検討するための一般的な目安です。', points: ['小規模な業務ツール・自動化: 数十万円〜200万円程度', '単一業務のWebシステム: 200万円〜800万円程度', '複数業務を扱う業務システム: 800万円〜3,000万円以上', 'AI / PoC: 50万円〜500万円程度から検討されることが多い'] },
      { heading: '見積もりが変わる理由', body: '画面数だけでなく、権限設計、外部サービス連携、既存データ移行、セキュリティ、テスト、保守運用の範囲によって費用は大きく変わります。' },
    ],
    cta: '概算見積もりを相談する',
  },
  'business-system-failure-reasons': {
    summary: '業務システム開発の失敗は、技術力不足だけでなく、現場業務の理解不足、要件の固定化、運用設計不足から起きます。',
    target: '業務システム開発を検討中の企業担当者',
    sections: [
      { heading: 'よくある失敗', body: '現場の業務を十分に整理せず、画面や機能だけを作ると、入力負荷が増えたり、結局Excelに戻ったりします。', points: ['現場の例外業務を見ていない', '承認・確認フローが曖昧', '運用後の改善を想定していない'] },
      { heading: '防ぐ方法', body: '最初から完璧な仕様書を作るより、業務フロー、利用者、データ、判断ポイントを整理し、優先度の高い範囲から作ることが重要です。' },
      { heading: 'Specdestの支援', body: '要件が固まる前の課題整理、技術選定、PoC、本番開発、継続改善まで対応できます。' },
    ],
    cta: '業務システム開発を相談する',
  },
  'excel-to-business-system': {
    summary: 'Excel管理は便利ですが、複数人利用・権限管理・集計・履歴管理・外部連携が必要になった時点でシステム化を検討すべきです。',
    target: 'Excel運用に限界を感じている企業担当者',
    sections: [
      { heading: 'システム化のサイン', body: 'Excelそのものが悪いわけではありません。ただし、最新ファイルが不明、入力ミスが多い、担当者しか分からない、集計に時間がかかる状態なら見直し時期です。', points: ['複数人が同時に更新する', '権限や承認が必要', '履歴を残す必要がある', '毎月同じ集計作業がある'] },
      { heading: '全部を作り替える必要はない', body: '最初は入力・集計・通知など、負荷の高い部分だけを切り出して自動化する方法もあります。' },
      { heading: '進め方', body: '現状業務を整理し、Excelのまま残す部分、SaaSで足りる部分、独自システム化すべき部分を分けます。' },
    ],
    cta: 'Excel業務の改善を相談する',
  },
  'generative-ai-business-introduction': {
    summary: '生成AI導入は、ツール選定よりも業務接続が重要です。対象業務、評価方法、セキュリティ、運用ルールを小さく検証してから進めます。',
    target: '生成AIを業務利用したい企業担当者',
    sections: [
      { heading: '最初に決めること', body: 'ChatGPTやLLMを導入する前に、どの業務で何を減らすのか、誰が使うのか、どのデータを扱うのかを明確にします。', points: ['文章作成・要約', '社内文書検索', '問い合わせ対応', 'データ入力・分類補助'] },
      { heading: 'PoCで確認すること', body: '精度、回答の安定性、業務時間の削減効果、データ取り扱い、現場で使えるかを確認します。PoCで終わらせないために、本番運用条件も同時に整理します。' },
      { heading: 'Specdestの支援', body: 'AI導入判断、PoC、AI機能開発、既存業務システムへの組み込みまで支援します。' },
    ],
    cta: 'AI活用を相談する',
  },
};


const seoServicePages: Record<string, { title: string; eyebrow: string; detail: ServiceDetail; imageKey: string }> = {
  'business-system-development': {
    title: '業務システム開発',
    eyebrow: 'Service',
    imageKey: 'business-systems',
    detail: solutionDetails['business-systems'],
  },
  'ai-automation-development': {
    title: 'AI業務自動化・生成AI導入支援',
    eyebrow: 'Service',
    imageKey: 'ai-technology',
    detail: {
      intro: 'AI導入、生成AI活用、業務自動化を、課題整理からPoC・実装・改善まで支援します。',
      context: 'AIを入れること自体を目的にせず、どの業務で効果が出るか、既存サービスで足りるか、独自機能が必要かを整理します。',
      points: ['AI活用候補の整理', 'PoC・効果検証', '業務システムへのAI機能組み込み'],
      deliverables: ['AI活用テーマ整理', '生成AI / AI機能のPoC', '業務自動化・システム連携'],
      related: ['ai-chatbot','dog-face-recognition-ai'],
    },
  },
  'web-system-development': {
    title: 'Webシステム開発',
    eyebrow: 'Service',
    imageKey: 'product-development',
    detail: {
      intro: '業務Webアプリ、管理画面、予約・在庫・顧客管理、外部サービス連携などを設計・開発します。',
      context: 'Webシステム開発では、画面だけでなく、データ構造、権限、運用、外部連携、保守改善まで見据えることが重要です。',
      points: ['業務・利用者・データの整理', 'Webアプリ・管理画面の設計開発', '外部サービス連携と運用改善'],
      deliverables: ['Webシステム / 管理画面', 'API・外部サービス連携', '運用後の改善開発'],
      related: ['workflow-platform','ecommerce-platform'],
    },
  },
  'mvp-development': {
    title: 'MVP開発・新規サービス開発',
    eyebrow: 'Service',
    imageKey: 'product-development',
    detail: solutionDetails['product-development'],
  },
};

function SeoServicePage({ slug }: { slug:string }) {
  const page = seoServicePages[slug];
  return <StructuredDetailPage eyebrow={page.eyebrow} title={page.title} parentPath="/solutions" parentLabel="ソリューション" detail={page.detail} imageKey={page.imageKey} />;
}

function InsightsPage() {
  return <main className="subpage insights-page">
    <section className="subhero menu-hero"><div className="shell"><div className="eyebrow">お役立ち記事</div><h1>発注前に、<br/>判断材料を整理する。</h1><p>システム開発、AI活用、業務改善について、費用・進め方・失敗回避の観点から整理します。</p></div></section>
    <section className="insight-index section"><div className="shell"><div className="section-head"><div><div className="eyebrow">お役立ち記事</div><h2>実務記事</h2></div><p>検索流入と相談前の理解を増やすための、Specdest公式記事です。</p></div><div className="insight-list">{insightItems.map((item,index)=><Link className="insight-row" key={item.slug} to={`/insights/${item.slug}`}><span>{String(index+1).padStart(2,'0')}</span><div><h3>{item.title}</h3><p>{insightDetails[item.slug].summary}</p></div><b>↗</b></Link>)}</div></div></section>
    <SubContact />
  </main>;
}

function InsightDetailPage({ item }: { item:{slug:string;title:string} }) {
  const detail = insightDetails[item.slug];
  return <main className="subpage insight-detail-page">
    <section className="subhero detail-hero"><div className="shell"><div className="breadcrumb"><Link to="/insights">お役立ち記事</Link><span>/</span><span>{item.title}</span></div><div className="eyebrow">実務ガイド</div><h1>{item.title}</h1><p>{detail.summary}</p><div className="case-facts"><span>{detail.target}</span><span>日本企業向け記事</span></div></div></section>
    <section className="article-body section"><div className="shell article-layout"><aside><div className="eyebrow">Article</div><p>この記事は一般的な判断材料です。実際の費用・進め方は、要件・業務内容・運用条件によって変わります。</p></aside><article>{detail.sections.map((section,index)=><section key={section.heading}><span>{String(index+1).padStart(2,'0')}</span><h2>{section.heading}</h2><p>{section.body}</p>{section.points && <ul>{section.points.map(point=><li key={point}>{point}</li>)}</ul>}</section>)}<div className="article-cta"><h2>要件が固まっていなくても相談できます。</h2><p>現状の業務・課題を伺い、システム化すべき部分、SaaSで足りる部分、AIや自動化が使える部分を整理します。</p><Link to="/contact">{detail.cta} ↗</Link></div></article></div></section>
  </main>;
}

function ProcessSection() {
  const steps=[['01','整理する','現状、目的、制約を確認し、何を解決すべきかを明確にします。'],['02','選ぶ','SaaS、AI、自動化、連携、独自開発など複数の選択肢を比較します。'],['03','つくる','必要な範囲を設計し、PoCや本番システムとして実装します。'],['04','改善する','運用後の変化や新しい課題に合わせて、継続的に改善します。']];
  return <section className="sub-process section"><div className="shell"><div className="section-head"><div><div className="eyebrow">How We Work</div><h2>考えるところから、<br/>実装後まで。</h2></div><p>プロジェクトの状況に合わせ、必要なフェーズから参加します。</p></div><div className="process-grid">{steps.map(([n,t,d])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div></div></section>;
}

function RelatedCases({ slugs }: { slugs:string[] }) {
  const items=slugs.map(slug=>caseItems.find(item=>item.slug===slug)).filter(Boolean) as {slug:string;title:string}[];
  return <section className="related-cases section"><div className="shell"><div className="section-head"><div><div className="eyebrow">Related Work</div><h2>関連する導入事例</h2></div><Link className="text-link" to="/cases">導入事例一覧 ↗</Link></div><div className="related-grid">{items.map(item=><Link key={item.slug} to={`/cases/${item.slug}`}><span>Case Study</span><h3>{item.title}</h3><p>{collectionDescriptions[item.slug]}</p><b>↗</b></Link>)}</div></div></section>;
}

function SubContact() {
  return <section className="sub-contact"><div className="shell sub-contact-inner"><div><div className="eyebrow blue">Contact</div><h2>課題がまだ整理されていなくても、<br/>そこから一緒に考えます。</h2></div><Link to="/contact">無料相談 ↗</Link></div></section>;
}

function StructuredDetailPage({ eyebrow, title, parentPath, parentLabel, detail, imageKey }: { eyebrow:string; title:string; parentPath:string; parentLabel:string; detail:ServiceDetail; imageKey:string }) {
  return <main className="subpage">
    <section className="subhero detail-hero"><div className="shell"><div className="breadcrumb"><Link to={parentPath}>{parentLabel}</Link><span>/</span><span>{title}</span></div><div className="eyebrow">{eyebrow}</div><h1>{title}</h1><p>{detail.intro}</p></div></section>
    <section className="detail-overview section"><div className="shell detail-visual-grid"><div className="detail-visual-copy"><div className="eyebrow">Why It Matters</div><h2>{(detail.perspectiveTitle ?? '技術の前に、\n目的と使い方を決める。').split('\n').map((line,i)=><span key={line}>{i>0&&<br/>}{line}</span>)}</h2><p className="lead">{detail.context}</p></div><div className="detail-visual-image"><img loading="lazy" decoding="async" src={siteImages[imageKey] ?? siteImages.challenges} alt={`${title}のサンプルイメージ`} /></div></div></section>
    <section className="detail-approach section"><div className="shell"><div className="section-head"><div><div className="eyebrow">What We Do</div><h2>支援内容</h2></div><p>必要な部分だけを切り出すことも、設計から実装まで一貫して進めることも可能です。</p></div><div className="detail-point-grid">{detail.points.map((point,index)=><article key={point}><span>{String(index+1).padStart(2,'0')}</span><h3>{point}</h3></article>)}</div></div></section>
    <section className="deliverables section"><div className="shell"><div className="sub-intro-grid"><div><div className="eyebrow">Deliverables</div><h2>プロジェクトに応じて、<br/>必要な形まで。</h2></div><div className="deliverable-list">{detail.deliverables.map(item=><p key={item}><span>→</span>{item}</p>)}</div></div></div></section>
    <ProcessSection />
    <RelatedCases slugs={detail.related}/>
    <SubContact />
  </main>;
}

function CaseDetailPage({ item }: { item:{slug:string;title:string} }) {
  const detail=caseDetails[item.slug];
  return <main className="subpage case-detail">
    <section className="subhero detail-hero"><div className="shell"><div className="breadcrumb"><Link to="/cases">導入事例</Link><span>/</span><span>{item.title}</span></div><div className="eyebrow">Case Study</div><h1>{item.title}</h1><p>{detail.intro}</p><div className="case-facts">{detail.facts.map(fact=><span key={fact}>{fact}</span>)}</div></div></section>
    <section className="case-story section"><div className="shell case-visual"><div className="case-visual-image"><img loading="lazy" decoding="async" src={siteImages[item.slug] ?? siteImages.cases} alt={`${item.title}のサンプルイメージ`} /></div><div className="story-grid"><div className="story-label">01 / Background</div><div><h2>背景</h2><p className="lead">{detail.background}</p></div></div></div></section>
    <section className="case-story section alt"><div className="shell story-grid"><div className="story-label">02 / Approach</div><div><h2>取り組み</h2><p className="lead">{detail.approach}</p></div></div></section>
    <section className="case-story section"><div className="shell story-grid"><div className="story-label">03 / Development</div><div><h2>開発内容</h2><div className="deliverable-list">{detail.built.map(x=><p key={x}><span>→</span>{x}</p>)}</div></div></div></section>
    <section className="related-cases section"><div className="shell"><div className="section-head"><div><div className="eyebrow">More Work</div><h2>その他の導入事例</h2></div><Link className="text-link" to="/cases">すべて見る ↗</Link></div><div className="related-grid">{caseItems.filter(x=>x.slug!==item.slug).slice(0,2).map(x=><Link key={x.slug} to={`/cases/${x.slug}`}><span>Case Study</span><h3>{x.title}</h3><p>{collectionDescriptions[x.slug]}</p><b>↗</b></Link>)}</div></div></section>
    <SubContact />
  </main>;
}

function PhilosophyPage() {
  return <main className="subpage philosophy-page">
    <section className="subhero philosophy-hero"><div className="shell"><div className="eyebrow">Our Philosophy</div><h1>Technology is a means,<br/>not the objective.</h1><p>テクノロジーを目的にせず、実現したい変化から必要な方法を選ぶ。それがSpecdestの基本姿勢です。</p></div></section>
    <section className="philosophy-manifesto section"><div className="shell"><div className="philosophy-manifesto-copy"><div className="eyebrow">How We Think</div><h2>先に決めるのは、<br/>技術ではなく変えたいこと。</h2><p className="lead">AI、SaaS、自動化、システム連携、独自開発。選択肢が多いほど、最初に必要なのは「何を使うか」ではなく「何を良くしたいか」を明確にすることです。</p><p>目的、現場、制約を理解したうえで選択肢を比較し、必要なものだけを使います。実装が必要なら、その判断を実際に動く仕組みまでつなげます。</p></div><div className="philosophy-manifesto-image"><img loading="lazy" decoding="async" src={siteImages['company-philosophy']} alt="技術を選択し実装につなげるイメージ" /></div></div></section>
    <section className="philosophy-values section"><div className="shell"><div className="section-head"><div><div className="eyebrow">Three Principles</div><h2>Specdestが大切にする<br/>3つの判断基準。</h2></div></div><div className="philosophy-value-grid"><article><span>01</span><h3>Purpose before technology</h3><p>新しさではなく、事業や業務に生まれる変化を基準に技術を選びます。</p></article><article><span>02</span><h3>Compare before building</h3><p>SaaS、API、AI、既存資産、独自開発を比較し、作らない選択肢も含めて判断します。</p></article><article><span>03</span><h3>Decision through delivery</h3><p>判断を提案だけで終わらせず、必要なら設計・実装・改善まで一つの責任として担います。</p></article></div></div></section>
    <section className="philosophy-next section"><div className="shell"><div><div className="eyebrow">From Thinking to Delivery</div><h2>考え方を、<br/>プロジェクトの進め方へ。</h2></div><div><p>課題整理、技術選定、PoC、設計・開発、継続改善。プロジェクトの現在地に合わせて必要なフェーズから支援します。</p><Link className="text-link" to="/approach">ご支援の進め方 ↗</Link></div></div></section>
    <SubContact />
  </main>;
}

function CompanyDetailPage({ item }: { item:{slug:string;title:string} }) {
  if(item.slug==='profile') return <main className="subpage"><section className="subhero"><div className="shell"><div className="eyebrow">Company</div><h1>会社概要</h1><p>Specdest株式会社の基本情報です。</p></div></section><section className="section company-profile"><div className="shell"><div className="company-profile-image"><img loading="lazy" decoding="async" src={siteImages['company-profile']} alt="オフィスのサンプルイメージ" /></div><div className="profile-table"><div><span>会社名</span><p>Specdest株式会社</p></div><div><span>設立</span><p>2022年</p></div><div><span>所在地</span><p>東京都港区南青山3-1-36 青山丸竹ビル6F</p></div><div><span>電話</span><p>050-5896-5929</p></div><div><span>メール</span><p>info@specdest.com</p></div><div><span>Web</span><p>www.specdest.com</p></div></div></div></section><SubContact /></main>;
  const philosophy=item.slug==='philosophy';
  return <Navigate to="/company" replace />;
}

function ApproachPage() {
  const phases = [
    ['01','課題整理・構想','現状、目的、制約を整理し、何を変えるべきかを明確にします。まだ要件書がない段階でも進められます。'],
    ['02','技術選定','SaaS、AI、自動化、システム連携、独自開発などを比較し、目的に対して合理的な方法を選びます。'],
    ['03','PoC・技術検証','不確実性が高い場合は、小さな検証から始めます。実現可能性や制約を確認し、本開発の判断材料を作ります。'],
    ['04','設計・開発','必要な範囲を設計し、Web、モバイル、業務システム、AI機能などとして実装します。'],
    ['05','運用・継続改善','リリース後の運用や事業変化を見ながら、必要な改善・追加開発を継続します。'],
  ];
  return <main className="subpage">
    <section className="subhero"><div className="shell"><div className="eyebrow">How We Work</div><h1>ご支援の進め方</h1><p>仕様が完成してからではなく、課題整理や技術選定の段階から参加できます。必要なフェーズだけでも、構想から継続改善まで一貫してでも支援します。</p></div></section>
    <section className="approach-lead section"><div className="shell sub-intro-grid"><div><div className="eyebrow">Our Role</div><h2>考えるところと、<br/>つくるところを分断しない。</h2></div><div><p className="lead">技術的な判断を提案だけで終わらせず、その判断を実際のプロダクトや業務システムとして形にするところまで担います。</p><p>プロジェクトの状況によって、最初から全フェーズを行う必要はありません。必要なところから入り、次の判断ができる状態を作りながら進めます。</p></div></div></section>
    <section className="approach-phases section"><div className="shell"><div className="section-head"><div><div className="eyebrow">Project Flow</div><h2>5つのフェーズ</h2></div><p>案件ごとに順序や範囲を調整します。</p></div><div className="phase-list">{phases.map(([n,t,d]) => <article key={n}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div></article>)}</div></div></section>
    <section className="approach-visual section"><div className="shell"><img loading="lazy" decoding="async" src={siteImages.approach} alt="プロジェクト設計のイメージ"/><div className="approach-caption"><div className="eyebrow">Flexible Engagement</div><h2>必要なフェーズから。</h2><p>相談、技術検証、開発、改善。プロジェクトの現在地に合わせて支援範囲を設計します。</p></div></div></section>
    <SubContact />
  </main>;
}

function ContactPage() {
  return <main className="subpage"><section className="subhero"><div className="shell"><div className="eyebrow">Contact</div><h1>お問い合わせ</h1><p>事業課題、AI活用、業務改善、新規プロダクト、システム開発などについてお問い合わせください。</p></div></section><section className="section contact-content"><div className="shell contact-layout"><div className="contact-image"><img loading="lazy" decoding="async" src={siteImages.contact} alt="お問い合わせのサンプルイメージ" /></div><div className="simple-list"><article><span>01</span><h2>メール</h2><p><a className="email-link" href="mailto:info@specdest.com">info@specdest.com ↗</a></p></article><article><span>02</span><h2>電話</h2><p><a className="email-link" href="tel:+815058965929">050-5896-5929</a></p></article><article><span>03</span><h2>所在地</h2><p>東京都港区南青山3-1-36 青山丸竹ビル6F</p></article></div></div></section></main>;
}

export function App() {
  useSeo();
  return <><Header /><Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/solutions" element={<SolutionsPage />} />
    {solutionItems.map((item)=><Route key={item.slug} path={`/solutions/${item.slug}`} element={<StructuredDetailPage eyebrow="Solution" title={item.title} parentPath="/solutions" parentLabel="ソリューション" detail={solutionDetails[item.slug]} imageKey={item.slug} />} />)}
    <Route path="/challenges" element={<ChallengesPage />} />
    {challengeItems.map((item)=><Route key={item.slug} path={`/challenges/${item.slug}`} element={<StructuredDetailPage eyebrow="Challenge" title={item.title} parentPath="/challenges" parentLabel="課題から探す" detail={challengeDetails[item.slug]} imageKey={item.slug} />} />)}
    <Route path="/approach" element={<ApproachPage />} />
    <Route path="/cases" element={<CasesPage />} />
    {caseItems.map((item)=><Route key={item.slug} path={`/cases/${item.slug}`} element={<CaseDetailPage item={item} />} />)}
    <Route path="/insights" element={<InsightsPage />} />
    {insightItems.map((item)=><Route key={item.slug} path={`/insights/${item.slug}`} element={<InsightDetailPage item={item} />} />)}
    <Route path="/company" element={<CompanyPage />} />
    <Route path="/company/about" element={<Navigate to="/company" replace />} />
    <Route path="/company/philosophy" element={<PhilosophyPage />} />
    {companyItems.filter((item)=>item.slug==='profile').map((item)=><Route key={item.slug} path={`/company/${item.slug}`} element={<CompanyDetailPage item={item} />} />)}
    <Route path="/services/business-system-development" element={<SeoServicePage slug="business-system-development" />} />
    <Route path="/services/ai-automation-development" element={<SeoServicePage slug="ai-automation-development" />} />
    <Route path="/services/web-system-development" element={<SeoServicePage slug="web-system-development" />} />
    <Route path="/services/mvp-development" element={<SeoServicePage slug="mvp-development" />} />
    <Route path="/services/system-development-cost" element={<InsightDetailPage item={insightItems.find((x)=>x.slug==='system-development-cost-guide')!} />} />
    <Route path="/contact" element={<ContactPage />} />
  </Routes><Footer /></>;
}
