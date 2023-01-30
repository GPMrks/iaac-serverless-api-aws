# Infraestrutura como Código com Serverless Framework na AWS

 Projeto prático desenvolvido durante o bootcamp Cloud FullStack Bootcamp - Warburg Pincus

---

## Arquitetura

```
Serverless Framework => AWS CloudFormation => AWS API Gateway => AWS Lambda => AWS DynamoDB
```
---
## Configuração

Instalação do Serverless:
```
npm i -g serverless
```

Na pasta do projeto, para inicializar o projeto Serverless, executar o comando e em seguida escolher o tipo (Node.js - HTTP API):
```
serverless
```

Configurar as credenciais IAM do usuário que gerenciará o projeto:
```
serverless config credentials --provider aws --key {KEY} --secret {SECRET-KEY}
```

Após criar os métodos e adiciona-los ao <i>serverless.yaml</i>, executar o comando:
```
serverless deploy
```