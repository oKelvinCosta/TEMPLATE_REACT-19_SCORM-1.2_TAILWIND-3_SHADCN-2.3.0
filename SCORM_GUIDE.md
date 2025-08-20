# Guia de Uso do SCORM Context

Este guia explica como utilizar o contexto SCORM fornecido no projeto para integrar seu curso ou aplicativo com sistemas de gerenciamento de aprendizado (LMS) compatíveis com SCORM 1.2.

## Visão Geral

O `ScormProvider` é um contexto React que encapsula a funcionalidade SCORM, fornecendo uma API simples para interagir com o LMS. Ele gerencia automaticamente a inicialização e finalização da conexão SCORM.

## Configuração Básica

### 1. Envolva sua aplicação com o ScormProvider

```tsx
import { ScormProvider } from './contexts/ScormContext';

function App() {
  return (
    <ScormProvider>
      {/* Seus componentes aqui */}
    </ScormProvider>
  );
}
```

## Utilizando o Contexto SCORM

### Acessando as funções SCORM

Dentro de qualquer componente filho, você pode acessar as funções SCORM usando o hook `useScorm`:

```tsx
import { useScorm } from '../contexts/ScormContext';
import { LESSON_STATUS } from '../contexts/ScormContext';

function MeuComponente() {
  const { 
    isScormInitialized,
    scormGet,
    scormSet,
    scormSave,
    scormQuit 
  } = useScorm();

  // Exemplo de uso
  const salvarProgresso = () => {
    scormSet('cmi.core.lesson_status', LESSON_STATUS.completed);
    scormSet('cmi.core.score.raw', '100');
    scormSave();
  };

  // ... resto do componente
}
```

## Campos SCORM Disponíveis

O contexto já inclui constantes para os campos SCORM mais comuns:

```typescript
const FIELDS = {
  lessonLocation: 'cmi.core.lesson_location',  // Localização atual no conteúdo
  lessonStatus: 'cmi.core.lesson_status',     // Status da lição
  suspendData: 'cmi.suspend_data',           // Dados persistentes
  studentName: 'cmi.core.student_name',      // Nome do aluno
  scoreRaw: 'cmi.core.score.raw',            // Pontuação bruta
};
```

## Status de Lição

Use as constantes pré-definidas para definir o status da lição:

```typescript
import { LESSON_STATUS } from '../contexts/ScormContext';

// Exemplo de uso
scormSet(FIELDS.lessonStatus, LESSON_STATUS.completed);
```

Status disponíveis:
- `not attempted` - Ainda não foi feita tentativa
- `incomplete` - Iniciada mas não concluída
- `completed` - Concluída
- `passed` - Aprovada
- `failed` - Reprovada

## Gerenciamento de Dados

### Salvando Dados

```typescript
// Definir um valor
scormSet('cmi.suspend_data', JSON.stringify({ progresso: 50 }));

// Salvar explicitamente
const salvou = scormSave();
```

### Lendo Dados

```typescript
const dados = scormGet('cmi.suspend_data');
const progresso = JSON.parse(dados).progresso;
```

## Finalização

### Encerrando a Sessão

```typescript
const handleSair = () => {
  scormSet(FIELDS.lessonStatus, LESSON_STATUS.completed);
  scormSave();
  scormQuit();
};
```

## Dicas e Boas Práticas

1. **Sempre verifique a inicialização**:
   ```typescript
   const { isScormInitialized } = useScorm();
   
   if (!isScormInitialized) {
     return <div>Carregando SCORM...</div>;
   }
   ```

2. **Salve com frequência**: Chame `scormSave()` após alterações importantes.

3. **Tratamento de erros**: Sempre verifique o retorno das funções `scormSet` e `scormSave`.

4. **Debug**: Ative o modo debug diretamente no console do navegador durante o desenvolvimento:
   ```typescript
   // Abra o console do navegador (F12) e execute:
   window.pipwerks.debug.isActive = true;
   ```
   
   > **Nota sobre debug integrado**: Atualmente, o debug deve ser ativado manualmente pelo console do navegador. Embora seja possível integrar essa funcionalidade diretamente no contexto SCORM, essa implementação ainda não está disponível na versão atual. Você pode adicionar manualmente essa funcionalidade ao seu projeto, se necessário.

## Testando Localmente

1. Execute o build do projeto
2. Use um servidor local (como Live Server) para abrir o `index.html`
3. O contexto inclui um timeout para simular atrasos na inicialização do SCORM

## Referências

- [Documentação oficial do pipwerks-scorm-api-wrapper](https://pipwerks.com/using-a-scorm-wrapper-to-simplify-the-workflow/)
- [Especificação SCORM 1.2](https://www.adlnet.gov/adl-research/performance-tracking-analysis/performance-tracking/scorm/)
