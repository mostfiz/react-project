function customRender(reactElment, container)
{
   /* const domElement  = document.createElement(reactElment.type)
   domElement.innerHTML = reactElment.children
   domElement.setAttribute('href', reactElment.props.href)
   domElement.setAttribute('target', reactElment.props.target)
   container.appendChild(domElement)
   */
  const domElement = document.createElement(reactElment.type)
  domElement.innerHTML = reactElment.children
  for (const prop in reactElment.props) {
    if(prop === 'children') continue
    domElement.setAttribute(prop, reactElment.props[prop])
  }
  container.appendChild(domElement)
}

const reactElment = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: "_blank"
    },
    children: 'Click me to visit google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElment, mainContainer)