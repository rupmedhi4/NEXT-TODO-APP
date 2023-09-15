
const fetchData = async () => {
  try {
    let response = await fetch(`http://localhost:3000/api/addtodo`);
    response = await response.json();
    return response.result;
  } catch (error) {
    alert("Something went wrong");
    throw error;
  }
};

export { fetchData }; 