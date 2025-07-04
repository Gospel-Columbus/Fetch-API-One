fetch('https://jsonplaceholder.typicode.com/posts')
.then((response) => response.json())
.then((json) => json.map((item) => {
    console.log(item.userId);
    // for accessing the json data title in the site
     const p = document.createElement("p");
     p.textContent = `Title: ${item.title}`;
     document.getElementById("content").appendChild(p);
}))



