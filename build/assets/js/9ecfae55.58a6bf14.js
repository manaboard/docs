"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[150],{1037:(e,s,o)=>{o.r(s),o.d(s,{assets:()=>d,contentTitle:()=>n,default:()=>l,frontMatter:()=>r,metadata:()=>t,toc:()=>c});var a=o(4848),i=o(8453);const r={sidebar_position:2},n="Diagramas de fluxo do sistema",t={id:"requisitos/fluxogramas",title:"Diagramas de fluxo do sistema",description:"Login",source:"@site/docs/requisitos/fluxogramas.md",sourceDirName:"requisitos",slug:"/requisitos/fluxogramas",permalink:"/docs/requisitos/fluxogramas",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/requisitos/fluxogramas.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Lista de Requisitos",permalink:"/docs/requisitos/requisitos-funcionais"},next:{title:"Tutorial - Basics",permalink:"/docs/category/tutorial---basics"}},d={},c=[{value:"Login",id:"login",level:2},{value:"Signup",id:"signup",level:2},{value:"Create Project",id:"create-project",level:2}];function u(e){const s={h1:"h1",h2:"h2",header:"header",mermaid:"mermaid",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.header,{children:(0,a.jsx)(s.h1,{id:"diagramas-de-fluxo-do-sistema",children:"Diagramas de fluxo do sistema"})}),"\n",(0,a.jsx)(s.h2,{id:"login",children:"Login"}),"\n",(0,a.jsx)(s.mermaid,{value:'graph LR;\n  A[In\xedcio] --\x3e B(Solicitar usu\xe1rio e senha);\n  B --\x3e C[[Dados de acesso]];\n  C --\x3e D[Verificar as credenciais];\n  D --\x3e E{"`Credenciais\n    v\xe1lidas?`"};\n  E --\x3e |Yes| F(Dar acesso ao sistema);\n  F --\x3e G[Fim];\n  E ----\x3e|No| B;'}),"\n",(0,a.jsx)(s.h2,{id:"signup",children:"Signup"}),"\n",(0,a.jsx)(s.mermaid,{value:"graph LR;\n  A[In\xedcio] --\x3e B(Solicitar os dados do usu\xe1rio);\n  B --\x3e C[[Dados do usu\xe1rio]];\n  C --\x3e D[Verificar dados];\n  D --\x3e E{Dados v\xe1lidos?};\n  E --\x3e |Yes| F[Processar dados];\n  F --\x3e G[(Persistir os dados no banco)];\n  G --\x3e H(Informar sucesso da opera\xe7\xe3o);\n  H --\x3e I(Transferir usu\xe1rio para a tela de login);\n  I --\x3e J[Fim];\n  E ----\x3e|No| B;"}),"\n",(0,a.jsx)(s.h2,{id:"create-project",children:"Create Project"}),"\n",(0,a.jsx)(s.mermaid,{value:'graph LR;\n  A[In\xedcio] --\x3e B(Solicitar dados do Projeto);\n  B --\x3e C[[Dados do usu\xe1rio]];\n  C --\x3e D[Verificar dados];\n  D --\x3e E{Dados v\xe1lidos?};\n  E --\x3e |Yes| F[Processar dados];\n  F --\x3e G[("`Persistir os dados de\n    projeto e padr\xf5es no\n    banco no banco`")];\n  G --\x3e H["`Enviar email para todos os\n    participantes do projeto`"];\n  H --\x3e I(Informar sucesso da opera\xe7\xe3o);\n  I --\x3e J(Transferir usu\xe1rio para a lista de projetos);\n  J --\x3e K[Fim];\n  E ----\x3e|No| B;'})]})}function l(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},8453:(e,s,o)=>{o.d(s,{R:()=>n,x:()=>t});var a=o(6540);const i={},r=a.createContext(i);function n(e){const s=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:n(e.components),a.createElement(r.Provider,{value:s},e.children)}}}]);