const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name');
const $b = document.querySelector('.blog');  //Se agregó el . 
const $l = document.querySelector('.location');

async function displayUser(username) {    //se agrego async
  $n.textContent = 'cargando..';
  const response =  await fetch(`${usersEndpoint}/${username}`);
  const data = await response.json()  //se declara la variable
  console.log(data);
  $n.textContent = `${data.name}`;
  $b.textContent = `${data.blog}`;  // aqui corregi las comillas
  $l.textContent = `${data.location}`;
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`  //se agrego el simbolo $
}

displayUser('stolinski').catch(handleError);


