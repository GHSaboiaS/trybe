const selectState = document.getElementById('state');
const states = ['Acre', 'Alagos', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins', 'Distrito Federal'];

for (let i = 0; i < states.length; i += 1) {
  const newOption = document.createElement('option');
  newOption.innerText = states[i];
  selectState.appendChild(newOption);
}