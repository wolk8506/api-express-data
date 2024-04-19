// import axios from "axios";
const axios = require("axios");
// const fs = require("fs/promises");
// const path = require("path");
// const contactsPath = path.join(__dirname, "./contacts.json");

const listContacts = async () => {
  const data = await axios
    .get("https://kurstoday.com.ua/api/service/banks-of-ukraine")
    .then(function (response) {
      // handle success

      console.log(response.data);
      return response.data;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
  return data;
};

module.exports = listContacts;
