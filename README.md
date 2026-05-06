<img width=100% src="https://capsule-render.vercel.app/api?type=waving&color=483D8B&height=180&section=header&text=js-loop-control&fontSize=25&fontColor=ffffff&animation=twinkling&fontAlignY=35"/>

# 📘 Exercícios de JavaScript com Estruturas de Repetição (While / Do-While)
(DO-While não foi utilizado)
## 📌 Visão Geral

Este repositório contém a resolução de 5 desafios de lógica de programação utilizando **JavaScript**. O foco principal destas atividades é a aplicação de **estruturas de controle de repetição** para validação de dados e processamento de fluxos contínuos.

O projeto demonstra o uso prático de laços para garantir que o programa só avance quando critérios específicos forem atendidos.

---

## 🎯 Objetivos Concluídos

* [x] Implementação de programas funcionais em JavaScript (`.js`).
* [x] Uso estratégico de `while` e `do-while` para aprimorar algoritmos.
* [x] Validação de entradas de usuário (tratamento de dados inválidos).
* [x] Versionamento completo do código utilizando Git (Local e Remoto).

---

## 🛠️ Tecnologias Utilizadas

* **JavaScript (ES6+)** - Linguagem base.
* **Node.js** - Ambiente de execução.
* **Git & GitHub** - Controle de versão e hospedagem.
* **Flowgorithm** - (Opcional) Utilizado para mapeamento do fluxo lógico.

---

## 📁 Estrutura do Projeto

```bash
/exercicios-repeticao
│
├── somente possitivo # Loop até número positivo
├── nota              # Média até nota negativa
├── rim no mercado    # Soma de valores até zero
├── name              # Verificação de campos vazios
├── saque             # Simulação de saldo e saques
└── README.md

```
📚 Soluções Implementadas
1. Validação de Número Positivo
O programa solicita um número ao usuário. Caso o valor seja negativo, o sistema entra em loop e repete a solicitação até que um número válido (positivo) seja inserido.

2. Média de Notas Indefinida
Permite a entrada de diversas notas (0 a 10). O laço de repetição é interrompido apenas quando o usuário digita um número negativo. Ao final, o programa calcula e exibe a média aritmética das notas válidas informadas.

3. Totalizador de Compras
Um sistema de checkout simples onde o usuário insere os valores dos produtos. Ao digitar 0, o programa entende que a compra foi finalizada e exibe o valor total acumulado.

4. Validação de Nome e Sobrenome
Garante que o usuário não deixe campos obrigatórios em branco. O programa solicita o nome e o sobrenome separadamente e só encerra quando ambos estiverem devidamente preenchidos.

5. Simulação de Saque Bancário
O programa inicia com um saldo pré-definido. O usuário solicita valores de saque. Caso o valor solicitado seja maior que o saldo, o sistema avisa e pede um novo valor. O programa termina quando o saldo chega a zero ou se torna negativo.

▶️ Como Executar
Certifique-se de ter o Node.js instalado.

Clone o repositório:

Bash
git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/CARYUlra/while-efect.git)
Entre na pasta e execute o arquivo desejado:

Bash
node exercicio1_valida_positivo.js
🔄 Fluxo de Versionamento
Os arquivos foram versionados seguindo as boas práticas:

git init (Inicialização)

git add . (Preparação)

git commit -m "feat: implementando lógica de repetição" (Registro)

git push origin main (Sincronização remota)

✅ Resultados Esperados e Alcançados
Robustez: Os algoritmos tratam entradas incorretas sem encerrar o programa inesperadamente.

Lógica: Uso eficiente de acumuladores e contadores dentro de laços.

Organização: Código limpo e arquivos separados por responsabilidade.

📄 Licença
Este projeto tem fins educacionais.
<img width="1000" height="500" alt="MonadGIF" src="https://github.com/user-attachments/assets/f3636ec1-281f-49da-aebc-ce71951e2411" />
