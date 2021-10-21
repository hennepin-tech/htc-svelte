export const mergeById = (a1: Array<object>, a2: Array<object>) => {
    return a1.map((itm:any | null) => ({
      ...a2.find((e:any | null) => (e.id === itm.id)),
      ...itm
  }))}