const http = new easyHTTP;

// Get Users
// http.get('https://jsonplaceholder.typicode.com/posts')
//   .then(data => console.log(data))
//   .catch(err => console.log(err))

const data = {
  name: 'John Doe',
  username: 'johndoe',
  email: 'jdoe@gmail.com'
}

// Create Post
// http.post('https://jsonplaceholder.typicode.com/posts', data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// Update Post
// http.put('https://jsonplaceholder.typicode.com/posts/1', data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// Delete Post
http.delete('https://jsonplaceholder.typicode.com/posts/1', data)
  .then(data => console.log(data))
  .catch(err => console.log(err));