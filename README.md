<p align="center">
  <img src="https://github.com/rafaelcostappz/abct/blob/main/assets/banner.png" alt="AbacatePay Banner" width="100%">
</p>

# AbacatePay Node.js SDK

[![npm version](https://img.shields.io/npm/v/@coelho38r/abct01)](https://www.npmjs.com/package/abacatepay-sdk)
[![build status](https://github.com/rafaelcostappz/ab03/actions/workflows/lint-test.yml/badge.svg)](https://github.com/rafaelcostappz/ab03/actions)
[![code coverage](https://img.shields.io/codecov/c/github/rafaelcostappz/ab03)](https://codecov.io/gh/rafaelcostappz/ab03)
[![license](https://img.shields.io/github/license/rafaelcostappz/ab03)](LICENSE)


🥑 SDK oficial open source da [AbacatePay](https://abacatepay.com) para integração com a API REST da plataforma em aplicações Node.js.

Desenvolvido com foco em simplicidade, segurança e extensibilidade.

---

## Instalação

Use o gerenciador de pacotes de sua escolha:

```bash
npm install abacatepay-sdk
# ou
yarn add abacatepay-sdk
```

---

## Requisitos

- Node.js 18 ou superior
- Conta ativa na [AbacatePay](https://painel.abacatepay.com)

---

## Exemplo Rápido

```js
import { AbacatePay } from "abacatepay-sdk";

const client = new AbacatePay({ apiKey: "sua-chave-secreta" });

const pix = await client.payment.createPix({
  amount: 1500,
  customer: {
    name: "Maria Silva",
    document: "12345678909",
  },
});
```

Para mais exemplos, consulte a [documentação oficial](https://docs.abacatepay.com/sdk/node).

---

## Testes

Este SDK utiliza [Jest](https://jestjs.io/) para testes.

Para rodar localmente:

```bash
npm test
```

Cobertura mínima exigida: 80%.

---

## Contribuindo

Este é um projeto open source mantido com apoio da comunidade.

Antes de contribuir, leia o nosso [Guia de Contribuição](https://github.com/rafaelcostappz/abct/blob/main/languages/nodejs/CONTRIBUTING.md) e siga o fluxo de desenvolvimento indicado.

---

## Segurança

Caso identifique alguma vulnerabilidade, consulte a nossa [Política de Segurança](https://github.com/rafaelcostappz/abct/blob/main/policies/SECURITY_POLICY.md) para saber como reportar de forma responsável.

---

## Versionamento

Este projeto segue o [Versionamento Semântico](https://semver.org/lang/pt-BR/).  
As versões são gerenciadas automaticamente via [Changesets](https://github.com/changesets/changesets).

---

## Licença

Distribuído sob a licença [MIT](LICENSE).  
Você é livre para usar, modificar e distribuir com atribuição.

---
