const searchEmployee = require('../src/professionalBoard.js')

describe('Testing searchEmployee', () => {

  it('Check if function exists', () => {
    expect(searchEmployee).toBeDefined()
  })
  it('Check if function returns expected info with one person, one specialty', () => { 
    const id = '5569-4'
    const infoSearched = 'specialties'
    const info = [{
      specialties: ['Frontend', 'Redux', 'React', 'CSS']
    }]
    expect(searchEmployee(id, infoSearched)).toEqual(info)
  })
  it('Check if function returns expected info with +1 person, +1 specialty', () => {
    const id = ['5569-4', '1256-4']
    const infoSearched = ['firstName', 'specialties']
    const info = [
      {
        firstName: 'George',
        specialties: [ 'Frontend', 'Redux', 'React', 'CSS' ]
      },
      {
        firstName: 'Linda',
        specialties: [ 'Hooks', 'Context API', 'Tailwind CSS' ]
      }
    ]
    expect(searchEmployee(id, infoSearched)).toEqual(info)
  })
  it('Check if deals with ID not found', () => {
    const id = '444'
    const infoSearched = 'specialties'
    expect(() => searchEmployee(id, infoSearched)).toThrow('ID not found')
  })
  it('Check if deals with detail not found', () => {
    const id = '5569-4'
    const infoSearched = 'blablu'
    expect(() => searchEmployee(id, infoSearched)).toThrow('Info not found')
  })
})