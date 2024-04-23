interface IOrc {
  login: boolean
}

const orc = {
  login: false
}

export const createLocalStorage = (): void => {
  localStorage.setItem('orc', JSON.stringify(orc))
}

export const getAllLocalStorage = (): string | null => {
  return localStorage.getItem('orc')
}

export const changeLocalStorage = (orc: IOrc): void => {
  localStorage.setItem('orc', JSON.stringify(orc))
}