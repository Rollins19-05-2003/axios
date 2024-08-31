# Important Question :
- What is Axios?
- Advantage of using Axios?
- Use Axios in React with Promises
- Error handling with Axios
- Axios with Async Await
- Best Way to write Axios

## What is Axios?
Axios is lightweight package and use to make HTTP requests in Any Javascript Library like React, Angular or Vue. Axios makes it easy to send asynchronous HTTP requests to REST endpoints and perform CRUD operations. If you use Fetch method in Javascript, Axios is the “Easy to use” Version of Fetch.


## Advantages of using Axios
Axios by default Work in JSON format.So no more JSON parsing.
Make all types of HTTP requests (GET, POST, PUT, DELETE)


## How to install Axios in React App
Like any other npm package, you have to simply install Axios package in your React Application and import axios from the axios package.
```
- npm install axios
```

## Use Axios in React with Promises and Error Handling
```
import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios.jsx";

const App = () => {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");

  // using Promises
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setMyData(response.data))
      .catch((error) => setIsError(error.message));
  }, []);

  return (
    <>
      <h1>Axios Tutorial</h1>
      {isError !== "" && <h2>{isError}</h2>}

      <div className="grid">
        {myData.slice(0, 9).map((post) => {
          const { body, id, title } = post;
          return (
            <div key={id} className="card">
              <h2>{title.slice(0, 15).toUpperCase()}</h2>
              <p>{body.slice(0, 100)}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;
```


## Use Axios in React with Async & Await. Also Error Handling with Try and Catch

```
import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios.jsx";


const App = () => {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");

  // using Async Await
  const getMyPostData = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setMyData(res.data);
    } catch (error) {
      setIsError(error.message);
    }
  };

  // NOTE:  calling the function
  useEffect(() => {
    getMyPostData();
  }, []);

  return (
    <>
      <h1>Axios Tutorial</h1>
      {isError !== "" && <h2>{isError}</h2>}

      <div className="grid">
        {myData.slice(0, 9).map((post) => {
          const { body, id, title } = post;
          return (
            <div key={id} className="card">
              <h2>{title.slice(0, 15).toUpperCase()}</h2>
              <p>{body.slice(0, 100)}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;
```

## Best way to write Axios 
In react app by creating a axios.js file and add the below code and then simply import the axios from this file and pass only the string for which you want data.

### axios.js

```
import axios from "axios";

// we need to pass the baseURL as an object
const API = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export default API;
```

### App.js
```
import { useState, useEffect } from "react";
import "./App.css";
import axios from "./axios.jsx";

const App = () => {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");

  // using Async Await
  const getMyPostData = async () => {
    try {
      const res = await axios.get("/posts");
      setMyData(res.data);
    } catch (error) {
      setIsError(error.message);
    }
  };

  // NOTE:  calling the function
  useEffect(() => {
    getMyPostData();
  }, []);

  return (
    <>
      <h1>Axios Tutorial</h1>
      {isError !== "" && <h2>{isError}</h2>}

      <div className="grid">
        {myData.slice(0, 9).map((post) => {
          const { body, id, title } = post;
          return (
            <div key={id} className="card">
              <h2>{title.slice(0, 15).toUpperCase()}</h2>
              <p>{body.slice(0, 100)}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;
```