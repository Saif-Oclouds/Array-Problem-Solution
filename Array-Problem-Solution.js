function refactorArray(array) {
    const idMap = new Map(array.map(element => [element.id, element])); // Map Structure for efficent lookup
  
    return array.reduce((acc, element) => {
      const current_next = element.next;
      element.value = idMap.get(current_next);
      acc.push(element);
      return acc;
    }, []);
  }
  
  const array = [
    {id: "one", next: "two", value: null},
    {id: "two", next: "three", value: null},
    {id: "three", next: null, value: null},
  ];
  
  const newArray = refactorArray(array);
  
  console.log(newArray);