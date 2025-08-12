//To access window document we type in console
    document

//To get element by its id
    document.getElementById('title')

//To get element by its class
    document.getElementByClassName('heading')

//To get attribute of the element {(attribute(id,class,tag,etc))}
    document.getElementById('title').getAttribute('class')

//To set/change the element attribute {'attribute(class,id,etc)','value(any)'}
    document.getElementById('title').setAttribute('class','test heading')

//To store the value in a variable
    const title = document.getElementById('title')

//To add styling to the element
    title.style.backgroundColor='brown'
    title.style.color='white'
    title.style.padding='10px'

//To get content from the element
    title.textContent

//To get the text content from the element that is visible on the screen/window
    title.innerText

/*
----------------------------------------------------------------------------------------------
The difference between textContent and innerText - innerText shows the text that is visible on the screen, whereas textContent shows the content that is typed in the script.
------------------------------------------------------------------------------------------------
*/

//To get the HTML elements inside the element
    title.innerHTML

//To get the element based on CSS Queries
    window.querySelector('h2')

//To get all the elemenst based on CSS query
    window.querySelectorAll('li')

//Example: Select all 'li' and change their backgroundColor to blue
const myUl = document.querySelector('ul')
const myLi = myUl.querySelectorAll('li')
myLi.foreach((l)=>{
    l.style.backgroundColor='blue'
})

//Example: Convert HTML Collection to Array to use ArrayFunctions
const tempList = document.querySelectorAll('li')
const tempArr = Array.from(tempList)
tempArr.map((l)=>{
    l.style.color='green'
})

//NodeList is different from HTML Collection
//NodeList lets you use foreach function to iterate between array type of elements
//HTML Collection doesn't give you any recursive function need to convert to array using (Array.//from())