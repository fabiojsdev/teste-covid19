# Painel de Monitoramento COVID-19



## 📌 Sobre o Projeto
Este projeto é um painel interativo para monitoramento de dados da COVID-19. Ele permite consultar informações detalhadas sobre casos, óbitos e recuperações, tanto para estados brasileiros quanto para países.

## 🚀 Tecnologias Utilizadas
- **React** + **Vite** - Framework e ferramenta de build para aplicações modernas.
- **TypeScript** - Para um código mais seguro e tipado.
- **Tailwind CSS** - Para um design responsivo e elegante.
- **Axios** - Para consumo da API de dados da COVID-19.
- **React Hook Form** - Para gerenciamento do formulário.

## 📂 Estrutura do Projeto
```
src/
├── components/
│   ├── StateSelector.tsx   # Busca dados de um estado brasileiro
│   ├── DatePicker.tsx      # Busca dados do Brasil por data
│   ├── CountrySearch.tsx   # Busca dados de um país
│   ├── Form.tsx            # Simula o envio de dados
│   ├── DataTable.tsx       # Componente de tabela reutilizável
├── services/
│   ├── api.ts              # Comunicação com a API
├── App.tsx                 # Componente principal
├── main.tsx                # Ponto de entrada da aplicação
```

## 🔥 Funcionalidades
✅ **Consultar casos por estado** (Brasil)  
✅ **Consultar casos por data** (Brasil)  
✅ **Consultar casos por país**  
✅ **Simular envio de dados via formulário**  

## 📡 API Utilizada
Os dados são consumidos da API pública **[COVID-19 Brazil API](https://covid19-brazil-api.now.sh/api/report/v1)**.

### Exemplo de Endpoints:
- **`/brazil/uf/{UF}`** → Retorna dados do estado brasileiro (ex: SP, RJ, MG).
- **`/brazil/{YYYYMMDD}`** → Retorna dados do Brasil por data.
- **`/countries/{country}`** → Retorna dados de um país específico.


