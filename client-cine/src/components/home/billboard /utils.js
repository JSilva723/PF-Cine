const compare = (a1, a2) => {
  if (a1.length !== a2.length) return false;
  for (let i=0; i < a1.length; i++){
    if (a1[i] !== a2[i]) return false 
  }
  return true
}

export const filterByActors = (array, actors) => {
  if (actors.length === 0) return array;
  const newA = []
  for (const item of array) {
    const actMovie = item.Actores.map(a => (a.nombre))
    if (compare(actMovie, actors)) newA.push(item)
  }
  return newA
}


export const filterByGenders = (array, genders) => {
  if (genders.length === 0) return array;
  const newA = []
  for (const item of array) {
    item.Generos.forEach(gen => {
      const genMovie = item.Generos.map(g => (g.genero))
    if (compare(genMovie, genders)) newA.push(item)
    })
  }
  return newA
};

export const filterByTitle = (a, t) => {
  if (t === '') return a
  return a.filter(item => item.titulo.toLowerCase().includes(t.toLowerCase()))
}