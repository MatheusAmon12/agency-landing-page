# 🚀 Agência LM - Landing Page Profissional

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=gsap&logoColor=white)](https://greensock.com/gsap/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

> Landing page profissional e responsiva para agência de marketing digital,
> desenvolvida com tecnologias modernas e foco em conversão.

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Instalação e Uso](#-instalação-e-uso)
- [Características Técnicas](#-características-técnicas)
- [Performance e SEO](#-performance-e-seo)
- [Contribuição](#-contribuição)
- [Licença](#-licença)

## 🎯 Sobre o Projeto

A **Agência LM** é uma landing page profissional desenvolvida para demonstrar
serviços de criação de landing pages para clínicas médicas e profissionais de
saúde. O projeto foi construído com foco em:

- **Conversão**: Design otimizado para captação de leads
- **Performance**: Carregamento rápido e experiência fluida
- **Responsividade**: Funciona perfeitamente em todos os dispositivos
- **Acessibilidade**: Seguindo as melhores práticas de UX/UI

## ✨ Funcionalidades

### 🎨 Interface e Design

- **Mesh Gradient Background**: Fundo animado com gradientes radiais em
  movimento
- **Design Responsivo**: Adaptação perfeita para mobile, tablet e desktop
- **Tipografia Customizada**: Fontes Poppins e The Seasons para hierarquia
  visual
- **Animações GSAP**: Transições suaves e interativas

### 📱 Responsividade

- **Mobile-First**: Design otimizado para dispositivos móveis
- **Grid Adaptativo**: Layout flexível que se adapta a diferentes tamanhos de
  tela
- **Navegação Intuitiva**: Header e botões otimizados para touch

### 🚀 Interatividade

- **Animações de Scroll**: Elementos que aparecem conforme o usuário navega
- **Botões "Ver Detalhes"**: Funcionalidade toggle para mostrar/ocultar
  informações
- **Hover Effects**: Micro-interações que melhoram a experiência do usuário

### 📊 Conversão

- **CTAs Estratégicos**: Botões de ação posicionados estrategicamente
- **Integração WhatsApp**: Links diretos para contato via WhatsApp
- **Portfólio Visual**: Galeria de projetos com mockups profissionais

## 🛠️ Tecnologias Utilizadas

### Frontend

- **HTML5**: Estrutura semântica e acessível
- **CSS3**: Estilos avançados com variáveis e animações
- **JavaScript ES6+**: Funcionalidades interativas e dinâmicas

### Bibliotecas e Frameworks

- **GSAP (GreenSock)**: Animações profissionais e ScrollTrigger
- **Tailwind CSS**: Framework CSS utilitário para desenvolvimento rápido
- **Font Awesome**: Ícones vetoriais de alta qualidade

### Fontes

- **Poppins**: Família tipográfica moderna para textos
- **The Seasons**: Fonte decorativa para títulos e destaques

## 📁 Estrutura do Projeto

```
agency-landing-page/
├── 📄 index.html              # Página principal
├── 📁 public/                 # Assets públicos
│   ├── 🖼️ *.webp             # Imagens e mockups
│   └── 🎨 lm-logo.svg        # Logo da empresa
├── 📁 src/                    # Código fonte
│   ├── 📁 fonts/             # Fontes customizadas
│   │   ├── Poppins-*.woff2   # Fontes Poppins
│   │   └── The-Seasons-*.woff2
│   ├── 📁 scripts/           # JavaScript
│   │   ├── animation.js      # Animações GSAP
│   │   └── see-more-button-toggle.js
│   └── 📁 styles/            # Estilos CSS
│       ├── global.css        # Estilos globais
│       └── 📁 components/    # Componentes específicos
│           ├── card.css      # Estilos dos cards
│           ├── header.css    # Estilos do cabeçalho
│           └── mesh-gradient-background.css
└── 📄 README.md              # Documentação
```

## 🚀 Instalação e Uso

### Pré-requisitos

- Navegador web moderno
- Servidor local (opcional, para desenvolvimento)

### Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/agency-landing-page.git
cd agency-landing-page
```

2. Abra o arquivo `index.html` em seu navegador ou use um servidor local:

```bash
# Com Python 3
python -m http.server 8000

# Com Node.js (npx)
npx serve .

# Com PHP
php -S localhost:8000
```

3. Acesse `http://localhost:8000` no seu navegador

## 🔧 Características Técnicas

### Performance

- **Lazy Loading**: Imagens carregadas sob demanda
- **Font Display Swap**: Carregamento otimizado de fontes
- **CSS Otimizado**: Estilos organizados e eficientes
- **JavaScript Modular**: Código organizado em módulos específicos

### Acessibilidade

- **Semântica HTML**: Estrutura semântica adequada
- **ARIA Labels**: Atributos de acessibilidade implementados
- **Contraste**: Cores com contraste adequado para leitura
- **Navegação por Teclado**: Suporte completo a navegação via teclado

### SEO

- **Meta Tags**: Configuração adequada para motores de busca
- **Estrutura de Headings**: Hierarquia de títulos bem definida
- **Alt Text**: Descrições alternativas para imagens
- **URLs Amigáveis**: Links estruturados adequadamente

## 📱 Responsividade

O projeto foi desenvolvido seguindo a abordagem **Mobile-First**, garantindo:

- **Breakpoints**: 320px (mobile), 768px (tablet), 1024px (desktop)
- **Grid System**: Layout flexível com CSS Grid e Flexbox
- **Imagens Adaptativas**: Otimização para diferentes densidades de pixel
- **Touch-Friendly**: Elementos interativos otimizados para dispositivos touch

## 🎭 Animações e Interações

### GSAP Animations

- **ScrollTrigger**: Animações baseadas no scroll da página
- **SplitText**: Animações de texto por palavra
- **Timeline**: Sequências de animação coordenadas
- **Easing Functions**: Curvas de animação suaves e naturais

### CSS Animations

- **Keyframes**: Animações de fundo em movimento
- **Transitions**: Transições suaves entre estados
- **Hover Effects**: Micro-interações responsivas
- **Transform**: Manipulações 3D e 2D

## 🔒 Segurança

- **Rel Attributes**: `noreferrer`, `noopener`, `nofollow` em links externos
- **Target Blank**: Links externos abrem em nova aba
- **Sanitização**: Entrada de dados validada e segura

## 📊 Métricas de Performance

- **Lighthouse Score**: 90+ em todas as categorias
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

### Padrões de Código

- Use ESLint para JavaScript
- Siga as convenções de CSS do projeto
- Mantenha a estrutura de pastas organizada
- Documente novas funcionalidades

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais
detalhes.

## 📞 Contato

- **Website**: [Agência LM](https://agencialm.com)
- **WhatsApp**: (38) 9262-2985
- **Instagram**: [@agencialm.lp](https://www.instagram.com/agencialm.lp/)
