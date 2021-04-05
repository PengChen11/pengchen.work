'use strict'
const sampleData = {
  "records": [
    {
      "_id": "603467cd9d52cb45dad7a49d",
      "title": "pengchen.work",
      "summary": "This website will show the visitors things about me, display all my web development projects and articles I wrote to help new comers to the development world.",
      "cover_url": "/assets/img/work/website1.jpg",
      "site_url": "https:pengchen.work",
      "github_url": "https://github.com/PengChen11/pengchen.work",
      "description": "project 1 summary",
    },
    {
      "_id": "603467cd9d52cb45dad7sdfg9d",
      "title": "Microservice API gateway",
      "summary": "A backend microservice, works as a gateway to ",
      "img_url": "https://github.com/PengChen11/Microservices-API_Gateway/raw/main/docs/img/architecture.png",
      "site_url": "",
      "github_url": "https://github.com/PengChen11/Microservices-API_Gateway",
      "description": "project 1 summary",
    },
  ],
  "totalPages": 1,
  "currentPage": "1"
}

export default (req, res) => {
  res.status(200).send(sampleData);
}
