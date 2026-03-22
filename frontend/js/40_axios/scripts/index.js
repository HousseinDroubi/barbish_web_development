const main_section = document.querySelector("#main_section");

const url = "https://jsonplaceholder.typicode.com/posts";

const promise = axios.get(url);

promise
  .then((result) => {
    const array = result.data;
    array.forEach((post) => {
      const id = document.createElement("h3");
      id.innerText = `Id: ${post.id}`;

      const userId = document.createElement("h3");
      userId.innerText = `User id: ${post.userId}`;

      const title = document.createElement("h4");
      title.innerText = `Title: ${post.title}`;

      const body = document.createElement("h4");
      body.innerText = `Body: ${post.body}`;

      const hr = document.createElement("hr");

      main_section.appendChild(id);
      main_section.appendChild(userId);
      main_section.appendChild(title);
      main_section.appendChild(body);
      main_section.appendChild(hr);
    });
  })
  .catch((error) => {
    console.log(error);
  });
