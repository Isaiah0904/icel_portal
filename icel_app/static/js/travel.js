function showForm() {
  document.getElementById('travelFormContainer').style.left = '0px';
  document.querySelector('.travelForm').style.visibility = 'hidden';
  changeBackground2()
}

function changeBackground1() {
  document.body.style.backgroundImage = "url('images/car.jpg')";
}

function changeBackground2() {
  document.body.style.backgroundImage = "url('images/plane.jpg')";
}
function revertbackground() {
  document.body.style.backgroundImage = "url('images/luggage.jpg')";
}

function showCarForm() {
  document.getElementById('travelCarFormContainer').style.right = '0px';
  document.querySelector('.travelForm').style.visibility = 'hidden';
  changeBackground1()
}

function hideForm() {
  document.getElementById('travelFormContainer').style.left = '-800px';
  document.getElementById('travelCarFormContainer').style.right = '-800px';
  document.querySelector('.travelForm').style.visibility = 'visible';
  revertbackground()
}

