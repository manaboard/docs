---
sidebar_position: 1
---
# Lista de Requisitos

## Problemática

Hoje possuímos diversas ferramentas para gerenciamento de desenvolvimento, cada uma com sua peculiaridade e suas integrações, porém nenhuma tão completa e intuitiva, o principal problema são as integrações muito difíceis de se fazer, com isso o pensamento é desenvolver uma ferramneta que simplifique a forma de integração e unifique as diversas ferramentas que as equipes de desenvolvimento usam atualmente.

## Requisitos Funcionais

- `RF001` Login no sistema: O usuário deve realizar o login fornecendo:
  - e-mail;
  - nome de usuário;
  - número de telefone;
  - senha de acesso.

- `RF002` Criar usuário: Para entrar no sistema o usuário deve fornecer:
  - primeiro nome;
  - segundo nome;
  - e-mail;
  - confirmação de email;
  - nome de usuário;
  - número de telefone;
  - senha;
  - confirmação de senha.

- `RF003` Criar organização: Para criar projetos no sistema o usuário precisará criar sua organização, para isso o mesmo precisará fornecer:
  - nome da organização;
  - url personalizada da organização (opcional).

  Caso a url não seja fornecida a mesma será um slug baseado no nome da organização.

- `RF004` Criar projeto: Para criar um projeto o usuário precisará fornecer:
  - nome do projeto;
  - usuário responsável (gerente ou SM);
  - usuários da equipe do projeto (opcional);
  - descrição (opcional).

- `RF005` Criar milestone: Para criar uma milestone o usuário precisa fornecer:
  - título:
  - data de início;
  - data de fim;
  - descrição.

- `RF006` Criar etiqueta/tag: Para criar uma etiqueta o usuário precisará fornecer:
  - título;
  - descrição (opcional);
  - cor.

- `RF007` Criar atividade/task: Para criar a atividade no projeto o usuário precisará fornecer:
  - título;
  - descrição;
  - usuário responsável (opcional);
  - milestone (opcional);
  - prioridade;
  - data de início;
  - data de fim;
  - estimativa;
  - observadores (opcional).

## Requisitos não funcionais

- `RNF001` O sistema deve ter acesso a internet.

- `RNF002` O sistema deve rodar em multiplataformas, sendo elas
  - android
  - ios
  - web
  - desktop (windows, macOS, Linux).

- `RNF003` O sistema deve rodar em um servidor com no mínimo 8GB de RAM.

- `RNF004` O sistema deve rodar em um servidor com no mínimo 100GB de armazenamento.
