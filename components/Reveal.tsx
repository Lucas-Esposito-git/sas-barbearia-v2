'use client';
import { useEffect, useRef } from 'react';
export default function Reveal({children,className='',delay=0}:{children:React.ReactNode;className?:string;delay?:number}){
  const ref=useRef<HTMLDivElement>(null);
  useEffect(()=>{
    const el=ref.current;if(!el)return;
    if(!('IntersectionObserver' in window)){el.classList.add('visible');return;}
    const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.09,rootMargin:'0px 0px -28px 0px'});
    observer.observe(el);return()=>observer.disconnect();
  },[]);
  return <div ref={ref} className={`reveal ${className}`} style={{transitionDelay:`${delay}ms`}}>{children}</div>;
}
