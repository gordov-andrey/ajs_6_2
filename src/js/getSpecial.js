function getSpecial({ special }) {
  return special.map((item) => {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = item;
    return {
      id, name, icon, description,
    };
  });
}

export default getSpecial;
