<p align="center">
  <img src="https://github.com/rafaelcostappz/abct/blob/main/assets/banner.png" alt="AbacatePay Banner" width="100%">
</p>

<p align="center">
  <a href="https://rafaelcostappz.github.io/abct/#/languages/nodejs/CONTRIBUTING">
    <img alt="Contributing" src="https://img.shields.io/badge/Contributing-Guide-blue?style=for-the-badge">
  </a>
  <a href="https://rafaelcostappz.github.io/abct/#/policies/SECURITY_POLICY">
    <img alt="Security" src="https://img.shields.io/badge/Security-Policy-red?style=for-the-badge">
  </a>
  <a href="#licença">
    <img alt="License" src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge">
  </a>
</p>

# AbacatePay Node.js SDK

[![npm version](https://img.shields.io/npm/v/@coelho38r/abct01)](https://www.npmjs.com/package/abacatepay-sdk)

SDK oficial open source da [AbacatePay](https://abacatepay.com) para integração com a API REST da plataforma em aplicações Node.js.

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

Antes de contribuir, leia o nosso [Guia de Contribuição](https://rafaelcostappz.github.io/abct/#/languages/nodejs/CONTRIBUTING) e siga o fluxo de desenvolvimento indicado.

---

## Segurança

Caso identifique alguma vulnerabilidade, consulte a nossa [Política de Segurança](https://rafaelcostappz.github.io/abct/#/policies/SECURITY_POLICY) para saber como reportar de forma responsável.

---

## Versionamento

Este projeto segue o [Versionamento Semântico](https://semver.org/lang/pt-BR/).  
As versões são gerenciadas automaticamente via [Changesets](https://github.com/changesets/changesets).

---

## Licença

Distribuído sob a licença [MIT](LICENSE).  
Você é livre para usar, modificar e distribuir com atribuição.

---
