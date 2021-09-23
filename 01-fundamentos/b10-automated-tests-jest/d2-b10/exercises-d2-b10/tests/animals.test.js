const { getAnimal, getAnimalByAge } = require('../src/animals.js')

describe('Testando promise - getAnimal', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch(error =>
        expect(error).toEqual('Nenhum animal com esse nome!')
      );
    });
  });
});

describe('Testando getAnimalByAge', () => {
  it('Retorna objeto com animais da idade procurada', () => {
    expect(getAnimalByAge(5)).toEqual([ { name: 'Preguiça', age: 5, type: 'Cat' } ])
  })

  it('Retorna erro se nenhum animal tiver a idade', () => {
    expect(() => {
      getAnimalByAge(0)
    }).toThrow()
  })
})