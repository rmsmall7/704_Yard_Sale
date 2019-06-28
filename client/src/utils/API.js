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

  addPost: function(yardData) {
    return axios.post("/api/yardsale", yardData);
  },
  // Deletes the book with the given id
  deletePost: function(id) {
    return axios.delete("/api/yardsale/" + id);
  },
  // Saves a book to the database
  savePost: function(yardData) {
    return axios.post("/api/yardsale", yardData);
  }
};
