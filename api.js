//fetch each json item to the console.
fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((json) => json.map((data) => {
     console.log(data.title);
      // fetch each of the json items to the website.
      const p = document.createElement("p");
     p.textContent = `Id: ${data.id}, `;
    document.getElementById("content").appendChild(p);

  }));
    