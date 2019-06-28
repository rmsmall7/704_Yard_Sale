import axios from "axios";

export default {
  // Gets all posts
  getPosts: function() {
    return axios.get("/api/yardsale");
  },
  // Gets the book with the given id
  getPost: function(id) {
    return axios.get("/api/yardsale/" + id);
  },

<<<<<<< HEAD
  addPost: function(yardData) {
    return axios.post("/api/yardsale", yardData);
=======
  addPost: function(yards) {
    return axios.post("/api/yardsale", yards);
>>>>>>> 1170ef201aa7073c40b62560ae443b29fb097802
  },
  // Deletes the book with the given id
  deletePost: function(id) {
    return axios.delete("/api/yardsale/" + id);
  },
  // Saves a book to the database
<<<<<<< HEAD
  savePost: function(yardData) {
    return axios.post("/api/yardsale", yardData);
=======
  savePost: function(postData) {
    console.log("UTITLS")
    return axios.post("/api/yardsale", postData);
>>>>>>> 1170ef201aa7073c40b62560ae443b29fb097802
  }
};
