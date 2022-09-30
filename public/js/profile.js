//TODO:  Add a function that grabs the values from the inputs and makes a POST request to add a project
//HINT: Your addEventListener should call this function

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/projects/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete project');
    }
  }
};

//TODO: Add an add event listener for when the project form is submitted

document
  .querySelector('.project-list')
  .addEventListener('click', delButtonHandler);
