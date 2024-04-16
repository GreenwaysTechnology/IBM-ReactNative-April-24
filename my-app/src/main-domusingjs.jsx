//dom programming using plain js.

function createDOM(){
  console.log('DOM Element is created and inserted into tree')
  const Heading = document.createElement('h1')
  Heading.innerHTML = 'Hello'
  document.getElementById('root').appendChild(Heading)
}
createDOM()