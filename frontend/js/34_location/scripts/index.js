const button_visit_example_website = document.querySelector(
  "#button_visit_example_website"
);
const button_visit_products_page = document.querySelector(
  "#button_visit_products_page"
);

const visitExampleWebsite = () => {
  location.href = "https://example.com";
};

const visiteProductsPage = () => {
  location.href = "products.html";
};

button_visit_example_website.addEventListener("click", visitExampleWebsite);
button_visit_products_page.addEventListener("click", visiteProductsPage);
