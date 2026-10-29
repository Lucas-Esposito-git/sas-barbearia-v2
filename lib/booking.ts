import { BARBERS, SERVICES } from './data';
export type BookingStatus = 'agendado'|'cancelado';
export type Booking = { id: string; name: string; phone: string; email?: string; serviceId: string; barberId: string; date: string; time: string; status: BookingStatus; createdAt: string; demo?: boolean };
export const STORAGE_KEY = 'prime_barber_bookings_v2';
export const friendlyDate = (iso: string) => new Date(`${iso}T12:00:00`).toLocaleDateString('pt-BR',{day:'2-digit',month:'short'});
export const fullDate = (iso: string) => new Date(`${iso}T12:00:00`).toLocaleDateString('pt-BR',{weekday:'long',day:'numeric',month:'long'});
export function dateISO(date: Date) { const y=date.getFullYear();const m=String(date.getMonth()+1).padStart(2,'0');const d=String(date.getDate()).padStart(2,'0');return `${y}-${m}-${d}`; }
export function nextDays(count: number){ const dates: Date[]=[];let offset=0;while(dates.length<count && offset<40){const d=new Date();d.setHours(12,0,0,0);d.setDate(d.getDate()+offset++);if(d.getDay()!==0)dates.push(d);}return dates;}
function demoAt(offset: number, time: string, barberId: string, serviceId: string, name: string): Booking {
  const d=new Date();d.setDate(d.getDate()+offset);return {id:`DEMO-${offset}-${time}-${barberId}`, name, phone:'(62) 9••••-••••', barberId,serviceId,date:dateISO(d),time,status:'agendado',createdAt:new Date().toISOString(),demo:true};
}
export function demoBookings(): Booking[]{return [demoAt(0,'10:00','rafael','corte','Matheus Oliveira'),demoAt(0,'11:30','andre','combo','Felipe Santos'),demoAt(0,'14:00','caio','barba','Guilherme Rocha'),demoAt(0,'16:00','rafael','combo','Pedro Augusto'),demoAt(1,'09:30','caio','corte','Lucas Almeida'),demoAt(1,'11:00','andre','barba','Bruno Costa'),demoAt(2,'15:00','rafael','combo','João Victor'),demoAt(3,'14:00','caio','corte','Thiago Ferreira')];}
export function savedBookings(): Booking[]{if(typeof window==='undefined')return [];try{const a=JSON.parse(localStorage.getItem(STORAGE_KEY)||'[]');return Array.isArray(a)?a:[];}catch{return [];}}
export function allBookings():Booking[]{return [...demoBookings(), ...savedBookings()];}
export function saveBooking(booking:Booking){const entries=savedBookings();localStorage.setItem(STORAGE_KEY,JSON.stringify([...entries,booking]));window.dispatchEvent(new Event('prime-bookings-updated'));}
export function cancelBooking(id:string){localStorage.setItem(STORAGE_KEY,JSON.stringify(savedBookings().map(b=>b.id===id?{...b,status:'cancelado'}:b)));window.dispatchEvent(new Event('prime-bookings-updated'));}
function toMinutes(hm:string){const [h,m]=hm.split(':').map(Number);return h*60+m;}
export function isSlotAvailable(date:string,time:string,barberId:string,serviceId:string,bookings:Booking[]) {
  const duration=SERVICES.find(s=>s.id===serviceId)?.duration||30;
  const start=toMinutes(time),end=start+duration;
  if(end>19*60)return false;
  if (date===dateISO(new Date()) && start<=new Date().getHours()*60+new Date().getMinutes()+30)return false;
  return !bookings.some(b=> b.status==='agendado' && b.barberId===barberId && b.date===date && start<toMinutes(b.time)+(SERVICES.find(s=>s.id===b.serviceId)?.duration||30) && end>toMinutes(b.time));
}
export function availableBarber(date:string,time:string,barberId:string,serviceId:string,bookings:Booking[]):string|null {
  if(barberId!=='any') return isSlotAvailable(date,time,barberId,serviceId,bookings)?barberId:null;
  return BARBERS.find(b=>isSlotAvailable(date,time,b.id,serviceId,bookings))?.id||null;
}
export function timesFor(date:string,barberId:string,serviceId:string,bookings:Booking[]){
  const times: string[]=[];for(let mins=9*60;mins<19*60;mins+=30){const hh=String(Math.floor(mins/60)).padStart(2,'0'),mm=String(mins%60).padStart(2,'0');const time=`${hh}:${mm}`;if(availableBarber(date,time,barberId,serviceId,bookings))times.push(time);}return times;
}
