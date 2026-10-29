# PRIME Barber Club — Versão Premium (Demo)

**Demonstração interativa de site + painel de gestão para barbearias**, criada com Next.js 16, React 19, TypeScript e CSS responsivo. O projeto foi pensado para demonstração comercial em desktop e celular.

## O que mudou na versão premium
- Identidade visual editorial preta, creme e dourada, com tipografia premium.
- Animações de entrada ao rolar a página (IntersectionObserver), zoom suave de fotos, hero animado, marquee, hover e transições no agendamento.
- Site completo: apresentação, experiência, serviços, profissionais, galeria com filtros, depoimentos ilustrativos, FAQ, localização, contatos.
- **Agendamento funcional no navegador** em 3 etapas: serviço, profissional, data/horário, dados do cliente.
- Datas úteis (segunda a sábado), horários dinâmicos, duração dos serviços e bloqueio de sobreposições entre reservas locais.
- Tela de confirmação, código do agendamento, cópia de resumo e área "Meus horários" para cancelamento.
- **Painel `/painel`** com indicadores, gráfico semanal, agenda com pesquisa/filtros, cancelamento de registros locais, exportação CSV, catálogo de serviços e equipe.
- Menu mobile e respeito à opção de movimento reduzido do dispositivo.

## Rodar localmente

Requisitos: **Node.js 20 ou superior**, preferencialmente 22.

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000` para o site e `http://localhost:3000/painel` para a demonstração do painel.

Para validar o projeto: `npm run typecheck` e `npm run build`.

## Subir na Vercel

1. Descompacte o ZIP e envie **os arquivos da pasta** para um repositório GitHub (não envie o ZIP diretamente ao projeto).
2. Na Vercel escolha **Add New > Project**, importe o repositório e publique. O Next.js é detectado automaticamente.
3. Verifique as imagens, contatos e textos antes de apresentar ao cliente. Fotos remotas dependem de conexão com a internet.

## Personalizar o site para uma barbearia real

Altere `lib/data.ts`:
- `BRAND`: nome, localização, horário, WhatsApp real (com DDI + DDD + número sem espaços), Instagram.
- `SERVICES`: serviços, valores, duração, descrições, fotos.
- `BARBERS`: nomes, perfis e fotos reais, autorizadas para divulgação.
- `GALLERY`: fotos do portfólio real do estabelecimento.

A identidade e animações ficam em `app/globals.css`. O conteúdo institucional está em `app/page.tsx`. Dados do painel em `app/painel/page.tsx`.

## Aviso: DEMONSTRAÇÃO, NÃO SISTEMA DE PRODUÇÃO

**Este projeto é 100% front-end.** Reservas feitas no site são salvas via `localStorage` somente no navegador onde foram criadas. Não existe autenticação, banco de dados, sincronização entre dispositivos, envio de SMS, notificações, pagamento real ou confirmação com a empresa. Disponibilidade e relatórios são fictícios. O painel não tem proteção de acesso e não deve ser disponibilizado como sistema operacional real. A interface mostra avisos de demonstração.

**Para vender como SaaS real** é preciso implementar: banco de dados, API segura, autenticação e controle de acesso, verificação de conflitos atômica no servidor, calendário persistente, política de privacidade/LGPD, sistema de notificações e configuração de serviços/barbeiros no painel. O protótipo não substitui esses componentes.

Os nomes e depoimentos são inventados. Algumas fotos são externas (Unsplash), apenas para ilustrar; substitua por imagens autorizadas e verifique as condições de uso. Não exiba avaliações fictícias como verdadeiras. Textos de anos de experiência também são fictícios.

## Arquivos

```
app/
  layout.tsx
  globals.css
  page.tsx
  painel/page.tsx
components/
  BookingWidget.tsx
  Navbar.tsx
  Reveal.tsx
lib/
  booking.ts
  data.ts
```
