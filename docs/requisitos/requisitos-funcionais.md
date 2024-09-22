---
sidebar_position: 1
---

# Problematica

Hoje possuímos diversas ferramentas para gerenciamento de desenvolvimento, cada uma com sua peculiaridade e suas integrações, porem nenhum tão completa e intuitiva, o principal problema são as integrações muito dificeis de se fazer, com isso o pensamento e desenvolver uma ferramneta que simplifique a forma de integração e unifique as diversas ferramentas que as equipes de desenvolvimento usam atualmente.

## Requisitos Funcionais

- `RF001` Login no sistema: O usuário deve realizar o login fornecendo, `email`, `nome de usuário` ou `numero de telefone` e a `senha de acesso`.

- `RF002` Crar usuário: Para entrar no sistema o usuário deve fornecer `primeiro nome`, `segundo nome`, `email`, `confirmação de email`, `nome de usuário`, `numero de telefone`, `senha`, `confimação de senha`.

- `RF003` Criar organização: Para criar projetos no sistema o usuário precisará criar sua organização, para isso o mesmo precisará ronecer `nome da organização`, `url personalizada da organização (opcional)` caso a url não seja fornecida a mesma sera um slug baseado no nome da organização.

- `RF004` Criar projeto: Para criar um projeto o usuário precisará fornecer `nome do projeto`, `nomes de usuarios da equipe do projeto (opcional)`, `descrição (opcional)`.

- `RF005` Criar milestone: Para criar uma milestone o usuário precisa pornecer `titulo`, `inicio`, `fim`, `descrição`.

- `RF006` Criar etiqueta/tag: Para criar uma etiqueta o usuário precisará fornecer `titulo`, `descrição (opcional)`, `cor`.

- `RF007` Criar atividade/task: Para criar a atividade no projeto o usuário precisará fornecer `titulo`, `descrição`, `usuario responsavel (opcional)`, `milestone (opcional)`, `prioridade`, `inicio da atividade`, `fim da atividade`, `estimativa`, `observadores (opcional)`.

## Requisitos não funcionais

- `RNF001` O sistema deve ter acesso a internet.

- `RNF002` O sistema deve rodar nas plataformas android, ios, web e desktop.

- `RNF003` O sistema deve rodar em um servidor com pelomenos 8GB de ram.

- `RNF004` O sistema deve rodar em um servidor com pelomenos 100GB de armazenamento.
