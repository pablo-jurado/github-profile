export const INC = 'INC'
export const DEC = 'DEC'

export const increment = () => {
  return {
    type: INC,
    payload: 1
  }
}

export const decrement = () => {
  return {
    type: DEC,
    payload: 1
  }
}
