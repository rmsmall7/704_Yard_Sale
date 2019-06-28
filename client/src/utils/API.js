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

  addPost: function(yards) {
    return axios.post("/api/yardsale", yards);
  },
  // Deletes the book with the given id
  deletePost: function(id) {
    return axios.delete("/api/yardsale/" + id);
  },
  // Saves a book to the database
  savePost: function(postData) {
    console.log("UTITLS")
    return axios.post("/api/yardsale", postData);
  }
};
