const url = 'http://localhost:3001';

const fetchRoutes = async () => {
  try {
    const data = await fetch(url + '/routes');
    const newData = await data.json();
    console.log('Mydata is', newData);
    return newData;
  } catch (err) {
    return err;
  }
};

const fetchRouteId = async (id: number) => {
  try {
    const data = await fetch(url + '/routes/' + id);
    const newData = await data.json();
    console.log('Mydata is', newData);
    return newData;
  } catch (err) {
    return err;
  }
};

export { url, fetchRoutes, fetchRouteId };
