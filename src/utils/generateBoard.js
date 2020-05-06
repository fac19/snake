export const generateBoard = () => {
  let initialRows = []
  const rows = 10
  const columns = 10
  for (let i = 0; i < rows; i++) {
    initialRows.push([])
    for (let j = 0; j < columns; j++) {
      initialRows[i].push('blank')
    }
  }
  return initialRows
}
