const axios = require("axios");

// Async function to fetch data
async function fetchData(url) {
  try {
    const response = await axios.get(url);
    return response.data; 
  } catch (error) {
    console.error("Error fetching data:", error.message);
    throw new Error("Failed to fetch data");
  }
}

async function getPosts() {
  try {
    console.log("Fetching posts...");
    //fetching data from external data using fetchData function
    const posts = await fetchData("https://jsonplaceholder.typicode.com/posts");
    console.log("First 5 posts:");
    //display first 5 data
    for(let i = 0; i < 5; ++i)
    {
      const data = posts[i];
      console.log(`Post ${i + 1}: `);
      console.log(`Title: ${data.title}`);
      console.log(`Body: ${data.body}`);
      console.log("-------------------------------------");
    }
  } catch (error) {
    console.error("Error in getPosts:", error.message);
  }
}


async function fetchMultipleEndpoints() {
  try {
    console.log("Fetching posts and comments in parallel...");
    //fetching multiple data from external at a same time
    const [posts, comments] = await Promise.all([
      fetchData("https://jsonplaceholder.typicode.com/posts"),
      fetchData("https://jsonplaceholder.typicode.com/comments"),
    ]);

    console.log("Posts fetched:", posts.slice(0, 2));
    console.log("Comments fetched:", comments.slice(0, 2));
  } catch (error) {
    console.error("Error in fetching multiple endpoints:", error.message);
  }
}

// immediately invoked function only for one time used in whole script 
// both function calls at a time concurrently and second function wait for other function
// to execute or complete the process 
(async function () {
  await getPosts();
  await fetchMultipleEndpoints();
})();