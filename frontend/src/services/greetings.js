async function fetchGreetings() {
  return fetch('http://localhost:8080/api.php', { method: 'GET' })
    .then(response => response.json())
}

export {
  fetchGreetings
}
