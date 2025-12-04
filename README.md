# Empire Soluções Automotivas - Versão HTML/CSS/JavaScript Puro

Site profissional para a mecânica automotiva **Empire Soluções Automotivas**, desenvolvido em **HTML5, CSS3 e JavaScript puro** (Vanilla JS).

## 📋 Características

✅ **Design Responsivo** - Funciona perfeitamente em mobile, tablet e desktop
✅ **Modo Noturno** - Toggle de tema com persistência em localStorage
✅ **Sem Dependências** - Código 100% puro, sem frameworks ou bibliotecas
✅ **Performance** - Carregamento rápido e otimizado
✅ **Acessibilidade** - Código semântico e acessível
✅ **SEO Friendly** - Estrutura HTML otimizada para buscadores
✅ **Animações Suaves** - Transições e efeitos visuais elegantes

## 🎨 Design

- **Paleta de Cores:** Cinza, Branco e Laranja Metálico (#FF6B35)
- **Tipografia:** System fonts (Roboto no React, -apple-system no vanilla)
- **Estilo:** Industrial Minimalist
- **Animações:** Fade-in, fade-up, bounce, smooth scroll

## 📁 Estrutura de Arquivos

```
empire_automotiva_vanilla/
├── index.html           # Arquivo HTML principal
├── css/
│   └── styles.css       # Estilos CSS completos
├── js/
│   └── script.js        # JavaScript com funcionalidades
├── images/              # Imagens do projeto
│   ├── hero-banner.jpg
│   ├── maintenance-service.jpg
│   ├── electrical-service.jpg
│   ├── suspension-service.jpg
│   └── diagnostic-service.jpg
└── README.md            # Este arquivo
```

## 🚀 Como Usar

### 1. Abrir Localmente

Simplesmente abra o arquivo `index.html` em seu navegador:

```bash
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

### 2. Usar com Servidor Local (Recomendado)

Para melhor performance e evitar problemas com CORS, use um servidor local:

**Python 3:**
```bash
python -m http.server 8000
```

**Node.js (http-server):**
```bash
npx http-server
```

**PHP:**
```bash
php -S localhost:8000
```

Acesse em: `http://localhost:8000`

## 🎯 Funcionalidades

### Tema (Modo Claro/Escuro)

- Clique no ícone de sol/lua no header para alternar temas
- A preferência é salva automaticamente em localStorage
- Detecta automaticamente a preferência do sistema operacional

### Botões de Contato

- **WhatsApp:** Abre o WhatsApp Web com mensagem pré-preenchida
- **Instagram:** Abre o perfil no Instagram
- **Email:** Abre o cliente de email padrão

### Seções

1. **Hero** - Apresentação principal com CTA
2. **Serviços** - 4 serviços principais com imagens
3. **Sobre** - Informações sobre a empresa e diferenciais
4. **Depoimentos** - 3 depoimentos de clientes
5. **Localização** - Endereço, horário e contato
6. **CTA Final** - Chamada para ação final

## 🔧 Personalização

### Mudar Cores

Edite as variáveis CSS em `css/styles.css`:

```css
:root {
  --primary: #FF6B35;           /* Cor primária (laranja) */
  --background: #FFFFFF;        /* Fundo claro */
  --foreground: #000000;        /* Texto claro */
  /* ... outras cores ... */
}

body.dark {
  --background: #1A1A1A;        /* Fundo escuro */
  --foreground: #FFFFFF;        /* Texto escuro */
  /* ... outras cores ... */
}
```

### Mudar Textos

Edite o arquivo `index.html` e procure pelas seções:

```html
<h2 class="section-title">Seu Novo Título</h2>
<p>Seu novo texto aqui</p>
```

### Adicionar Imagens

1. Coloque as imagens na pasta `images/`
2. Atualize o `src` no HTML:

```html
<img src="images/sua-imagem.jpg" alt="Descrição">
```

### Mudar Links de Contato

Procure por `href="https://wa.me/..."` e `href="https://instagram.com/..."` e atualize os valores.

## 📱 Responsividade

O site é totalmente responsivo com breakpoints em:

- **Mobile:** até 480px
- **Tablet:** 481px a 768px
- **Desktop:** acima de 768px

## ⚡ Performance

- Imagens otimizadas e lazy-loading
- CSS minificado
- JavaScript sem dependências externas
- Preload de recursos críticos

## 🌐 Deploy

### Opção 1: GitHub Pages

1. Crie um repositório no GitHub
2. Faça upload dos arquivos
3. Vá em Settings > Pages > Source: main branch
4. Seu site estará em: `https://seu-usuario.github.io/seu-repositorio`

### Opção 2: Netlify

1. Acesse [netlify.com](https://netlify.com)
2. Faça login com GitHub
3. Clique em "New site from Git"
4. Selecione seu repositório
5. Deploy automático!

### Opção 3: Vercel

1. Acesse [vercel.com](https://vercel.com)
2. Clique em "New Project"
3. Importe seu repositório GitHub
4. Deploy automático!

### Opção 4: Servidor Web Tradicional

Faça upload dos arquivos via FTP para seu servidor web.

## 🔍 SEO

O site já inclui:

- Meta tags básicas
- Estrutura HTML semântica
- Alt text em imagens
- Títulos e descrições apropriadas

Para melhorar ainda mais:

1. Adicione `<meta name="description" content="...">`
2. Adicione `<meta name="keywords" content="...">`
3. Crie um `sitemap.xml`
4. Registre em Google Search Console

## 🐛 Troubleshooting

### Imagens não carregam

- Verifique se os arquivos estão na pasta `images/`
- Confirme os caminhos no HTML (case-sensitive)
- Use um servidor local em vez de abrir direto

### Tema não persiste

- Limpe o cache do navegador
- Verifique se localStorage está habilitado
- Tente em modo anônimo

### Links de WhatsApp não funcionam

- Certifique-se de que o número tem o código de país (+55 para Brasil)
- Teste em um dispositivo com WhatsApp instalado

## 📄 Licença

Este projeto é fornecido como está para uso pessoal e comercial.

## 📞 Suporte

Para dúvidas ou sugestões sobre o site, entre em contato através dos canais:

- **WhatsApp:** (79) 9997-2-7920
- **Instagram:** @empiresolucoesautomotivas
- **Email:** contato@empire.com

---

**Desenvolvido com ❤️ para Empire Soluções Automotivas**

Última atualização: Dezembro 2025
