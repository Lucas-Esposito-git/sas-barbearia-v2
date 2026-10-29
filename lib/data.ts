export const BRAND = {
  name: 'PRIME',
  descriptor: 'BARBER CLUB',
  city: 'Goiânia',
  neighborhood: 'Setor Bueno',
  address: 'Setor Bueno, Goiânia - GO',
  mapQuery: 'Setor Bueno Goiânia Goiás',
  opening: 'Seg–Sáb • 09:00 às 19:00',
  instagram: '', // Ex.: https://www.instagram.com/nomedabarbearia
  whatsapp: '' // Preencher apenas com número real: 5562999999999
};
export type Service = {id: string; name: string; short: string; description: string; price: number; duration: number; image: string; tag?: string; category: 'corte'|'barba'|'especial'};
export const SERVICES: Service[] = [
  {id:'corte',name:'Corte Signature',short:'Precisão em cada detalhe',description:'Clássico, social, degradê ou o estilo que combina com você. Finalização impecável.',price:50,duration:45,category:'corte',tag:'Mais pedido',image:'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1100&q=85'},
  {id:'barba',name:'Barba Premium',short:'O ritual completo',description:'Toalha quente, alinhamento preciso, hidratação e acabamento na navalha.',price:40,duration:30,category:'barba',image:'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=1100&q=85'},
  {id:'combo',name:'Combo Prime',short:'A experiência por inteiro',description:'Corte Signature + Barba Premium em um atendimento completo.',price:80,duration:75,category:'especial',tag:'Melhor escolha',image:'https://images.unsplash.com/photo-1592647420148-bfcc177e2117?auto=format&fit=crop&w=1100&q=85'},
  {id:'sobrancelha',name:'Design de Sobrancelha',short:'Os detalhes fazem diferença',description:'Alinhamento masculino, natural e discreto, na medida certa.',price:20,duration:15,category:'especial',image:'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1100&q=85'},
  {id:'pigmentacao',name:'Camuflagem de Fios',short:'Acabamento de alto nível',description:'Pigmentação leve para realçar o corte e disfarçar falhas.',price:35,duration:30,category:'especial',image:'https://images.unsplash.com/photo-1593702295094-aea22597af65?auto=format&fit=crop&w=1100&q=85'},
  {id:'pezinho',name:'Acabamento Express',short:'Visual sempre em dia',description:'Contorno, pezinho e pequenos ajustes para manter o visual alinhado.',price:25,duration:20,category:'corte',image:'https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&w=1100&q=85'}
];
export type Barber = {id: string; name: string; surname: string; role: string; image: string; years: string; specialty: string};
export const BARBERS: Barber[] = [
  {id:'rafael',name:'Rafael',surname:'Monteiro',role:'Master Barber',years:'8 anos de experiência*',specialty:'Degradês e cortes clássicos',image:'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=850&q=85'},
  {id:'andre',name:'André',surname:'Martins',role:'Barber Specialist',years:'6 anos de experiência*',specialty:'Barba e visagismo',image:'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=850&q=85'},
  {id:'caio',name:'Caio',surname:'Ferreira',role:'Creative Barber',years:'5 anos de experiência*',specialty:'Cortes atuais e finalização',image:'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=850&q=85'}
];
export const GALLERY = [
  {category:'Cortes',title:'Fade de precisão',image:'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=1000&q=85'},
  {category:'Ambiente',title:'Nosso espaço',image:'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1000&q=85'},
  {category:'Cortes',title:'Estilo clássico',image:'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1000&q=85'},
  {category:'Barba',title:'Barba alinhada',image:'https://images.unsplash.com/photo-1592647420148-bfcc177e2117?auto=format&fit=crop&w=1000&q=85'},
  {category:'Ambiente',title:'Cada detalhe importa',image:'https://images.unsplash.com/photo-1512690459411-b9245aed614b?auto=format&fit=crop&w=1000&q=85'},
  {category:'Cortes',title:'Acabamento premium',image:'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1000&q=85'}
];
export function money(amount: number){return new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL',maximumFractionDigits:0}).format(amount)}
