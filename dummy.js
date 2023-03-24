fetch('http://localhost:3000/auth/findall')
  .then(response => response.json())
  .then(data => {
    let users = {};
    users.id = data[0].id;
    document.querySelector('#id').textContent = users.id;
    console.log(typeof users, users.id);
  });
