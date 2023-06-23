




export const addToLocal = (save) => {
  localStorage.setItem('saving', JSON.stringify(save));
}

export const getData = () => {
  const data = localStorage.getItem('saving');

  return data === null ? [] : JSON.parse(data);
}