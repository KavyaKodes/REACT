import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import React from 'react'

function MyApp(){
    return(
        <div>
            <h1>Custom App | Chai </h1>
        </div>
    )
}
//fucntion MyApp me jo bhi h vo iss type: a wale syntax me convert ho jata h react me
const reactElement = {
   /* type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'click me to visit google'
    */
}

const anotherElement = (
    <a href='https://google.com' target = 'blank'>Visit 
    google </a>
)

const anotherUser = "Chai aur react"

const ReactElement = React.createElement(
    'a',
    {href: 'https://google.com', target: '_blank'},
    'click me to visit google !',
    anotherUser
)



createRoot(document.getElementById('root')).render(
  
    ReactElement
   //<app/>
)
