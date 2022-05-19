// Exercício 3
const tarefa = process.argv[2];
const listaTarefas = ["ler", "estudar"];

const addTarefa = listaTarefas.push(tarefa);

console.log(`Tarefa adicionada com sucesso! Tarefas: ${listaTarefas}`);
