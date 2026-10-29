'use client';
import { useEffect,useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Menu, Scissors, X, CalendarDays, LayoutDashboard } from 'lucide-react';
export default function Navbar({dashboard=false}:{dashboard?:boolean}){
  const [opened,setOpened]=useState(false);
  const [scrolled,setScrolled]=useState(false);
  useEffect(()=>{const fn=()=>setScrolled(window.scrollY>25);window.addEventListener('scroll',fn,{passive:true});fn();return()=>window.removeEventListener('scroll',fn)},[]);
  const links=[{href:'/\u0023sobre',name:'A experiência'},{href:'/\u0023servicos',name:'Serviços'},{href:'/\u0023equipe',name:'Equipe'},{href:'/\u0023galeria',name:'Galeria'}];
  return <>
    <div className="top-notice"><span className="notice-pulse"/> PROJETO DEMONSTRATIVO <span className="notice-divider">/</span> Informações, valores e avaliações ilustrativos</div>
    <header className={`header ${scrolled?'header-scrolled':''}`}>
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="Prime Barber Club, página inicial"><span className="brand-icon"><Scissors size={21} strokeWidth={1.6}/></span><span className="brand-type"><strong>PRIME<span>.</span></strong><small>BARBER CLUB</small></span></Link>
        <nav className="nav-desktop" aria-label="Navegação principal">{links.map(l=><Link key={l.href} href={l.href}>{l.name}</Link>)}</nav>
        <div className="header-actions"><Link href="/painel" className="nav-panel"><LayoutDashboard size={15}/> Painel demo</Link><Link href="/#agendar" className="btn btn-gold nav-cta"><CalendarDays size={17}/> Agendar agora <ArrowUpRight size={16}/></Link></div>
        <button className="mobile-menu-trigger" aria-label={opened?'Fechar menu':'Abrir menu'} aria-expanded={opened} onClick={()=>setOpened(v=>!v)}>{opened?<X size={23}/>:<Menu size={23}/>}</button>
      </div>
      <div className={`mobile-nav ${opened?'mobile-nav-open':''}`}><nav aria-label="Navegação móvel">{links.map(l=><Link key={l.href} href={l.href} onClick={()=>setOpened(false)}>{l.name}<ArrowUpRight size={18}/></Link>)}<Link href="/painel" onClick={()=>setOpened(false)}>Painel do proprietário <LayoutDashboard size={18}/></Link><Link className="mobile-book" href="/#agendar" onClick={()=>setOpened(false)}>Agendar meu horário <CalendarDays size={18}/></Link></nav></div>
    </header>
  </>;
}
