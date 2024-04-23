import { changeLocalStorage, createLocalStorage, getAllLocalStorage } from "./storage"

describe('storage', () =>{

  const mocksetItem = jest.spyOn(Storage.prototype, 'setItem')
  const mockgetItem = jest.spyOn(Storage.prototype, 'getItem')
  const orc = {
    login: false
  }
  it('Deve criar o local storage', () => {
    createLocalStorage()
    expect(mocksetItem).toHaveBeenCalledWith('orc', JSON.stringify(orc))
  })

  it('Deve retornar o local storage', () => {
    getAllLocalStorage()
    expect(mockgetItem).toHaveBeenCalledWith('orc')
  })

  it('Deve atualizar o local storage', () => {
    changeLocalStorage(orc)
    expect(mocksetItem).toHaveBeenCalledWith('orc', JSON.stringify(orc))
  })

})