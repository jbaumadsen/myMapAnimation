async function probablyfs(){
  let y = await 10;
  console.log(y);
  fetch(url)
  .then((data)=>data.json)
  .then(res=>console.log(res.value))
  .catch();
}

.typeof()