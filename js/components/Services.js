import { services } from "../../constants/constants.js";

const renderData = (data) => {
  const serviceList = document.getElementById("service-list");

  //Clear existing elements
  serviceList.innerHTML = "";

  //Loop through services
  data.forEach((service) => {
    //Create card item
    const cardItem = document.createElement("section");

    //Add class to cardItem
    cardItem.classList.add("service-list-item");

    cardItem.innerHTML = `
            <div class="service-header">
              <h4>${service.name}</h4>
              <span>${service.id}</span>
            </div>
            <div class="service-copy">
              <p>
                ${service.description}
              </p>
            </div>
      `;

    //Append item to the list
    serviceList.appendChild(cardItem);
  });
};

renderData(services);
