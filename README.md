# URL-Shortener-ACM-Project
>## Open Projects 2023
## Abstract
The URL Shortener project is a web-based application that allows users to shorten long URLs into shorter, more manageable links. It provides a convenient way to share and distribute URLs while saving space and enhancing readability. With the URL Shortener, users can generate unique and customized short links that redirect to the original long URL.
## Getting Started
### Prerequisites:
 -  Node.js installed on your local machine
 -  MongoDB Atlas account

### Steps:

**1. Clone the Repository:**

- Clone the project repository from the source location using Git or download the project as a ZIP file and extract it to your local machine.

**2. Install Dependencies:**

- Open a terminal or command prompt and navigate to the project's root directory.
- Run the following command to install the required dependencies:
  
  `npm i express ejs mongoose nodemon env`

**3. Set up MongoDB Database:**

- Create a MongoDB Atlas account or use an existing one.
- Log in to your MongoDB Atlas account and create a new project.
- Within the project, create a new cluster or use an existing one.
- In the cluster, navigate to the "Database Access" section and create a new database user with appropriate privileges. Take note of the username and password for this user.
- Next, navigate to the "Network Access" section and click on the "Add IP Address" button to allow access from your current IP address. Optionally, you can configure more secure network access settings based on your requirements.
- Next, navigate to the "Database Clusters" tab and click on the "Connect" button for your cluster.
- Choose "Connect your application" and select the driver and version (e.g., Node.js and the latest version).
- Copy the connection string provided.

**4. Set Up Search Index:**

- Open the MongoDB Atlas dashboard and navigate to your cluster.
- Click on the "Collections" tab and select the database associated with your connection string.
- Create a new collection named 'shorturls' by clicking the "Create Collection" button.
- In the created 'shorturls' collection, click on the "Search" tab.
- Create a new search index and save it. Keep note of the index name.
- In the project's root directory, create a new file named ‘.env’.
- Inside the ‘.env’ file, add the following variables:

  `URL=<mongodb-connection-string>`

  `SearchIndex=<search-index-name>`

**5. Start the Application:**

- In the terminal or command prompt, navigate to the project's root directory.
- Run the following command to start the application:
  `npm run devStart`
- The application will start running on the specified port (default is 5000). If the port is already in use, you can change it by modifying the app.listen() function in the `server.js` file.

**6. Access the Application:**

- Open a web browser and visit http://localhost:5000 (replace 5000 with the appropriate port number if you modified it in the previous step).
- You should see the URL Shortener application's main page, where you can input long URLs and generate shortened links.

## Implementation

The URL Shortener project allows users to shorten long URLs and search for URLs based on different parameters. Here's how the project works:

### Shortening a Long URL:

- The project provides a user interface with an input form consisting of two fields: one for the long URL and an optional field for adding notes.
- When a user submits the form, the data is sent to the server.
- On the server side, the information (long URL and notes) is stored in the database. If the long URL already exists in the database, the previously generated short URL is restored, and the notes are updated.
- If the long URL is new, a short URL is generated, and the information is stored in the database, associating the short URL with the long URL and notes.
- The server responds with a success message, and the user interface is updated with the generated short URL.

### Searching in the Database:
  
- The project provides another input tab for searching the database based on three parameters: full long URL, short URL, or notes.
- When a user submits the search query, the server performs an Atlas search on the database using the specified parameter.
- The search results are retrieved from the database, matching the search query.
- The user interface is updated to display the search results, typically in the form of a table.

### Displaying the results:
  
- A table shows the previously stored long URLs along with their associated short URLs and notes. Every new entry or the most relevant search results are displayed at the top of the table.
- Each row in the table includes a copy button to easily copy the respective short URL and a delete button to remove that URL from the database.

Overall, the project combines the functionality of shortening long URLs and searching the database based on various parameters. It provides a user-friendly interface where users can interact with the application, store and retrieve URLs, and manage their associated notes. The project utilizes a database to store the data and performs search operations to fetch the desired results based on user queries.

### Hosting the website:

  Also deployed the project on render.com, here is the link:

  https://url-shortener-acm-project-gaurav0github.onrender.com/

## Key Learning Takeaways:

- **URL Shortening:** The project demonstrates the process of shortening long URLs. It involves generating unique and compact short URLs that redirect to the original long URLs. Understanding URL shortening techniques can be valuable for creating user-friendly and shareable links in web applications.

- **Database Integration:** The project showcases the integration of a MongoDB database. It highlights the process of establishing a connection, storing data, and retrieving information from the database. Learning how to interact with a database is crucial for developing applications that require persistent data storage.

- **Atlas Search:** The project utilizes MongoDB Atlas Search to perform search operations on the database. Implementing search functionality allows users to query the database based on different parameters, such as full URL, short URL, or notes. Exploring search capabilities provided by databases can enhance the efficiency and effectiveness of data retrieval.

- **User Interface Design:** The project features a user interface that provides an intuitive way for users to interact with the application. Designing a user-friendly interface involves creating input forms, displaying search results in a structured manner, and incorporating interactive elements like copy and delete buttons. Understanding UI design principles is essential for delivering a seamless user experience.

- **Error Handling and Data Validation:** The project involves handling potential errors and ensuring data validation. Validating user input, handling duplicate URLs, and implementing error handling mechanisms contribute to the robustness and reliability of the application. Gaining knowledge of error handling techniques and data validation practices is crucial for building stable and secure applications.

- **Server-Client Interaction:** The project demonstrates the communication between the server and client. The server receives user input, processes it, interacts with the database, and responds with the appropriate data. Understanding server-client architecture and the flow of data between them is fundamental for building web applications.

- **CRUD Operations:** The project encompasses Create, Read, Update, and Delete (CRUD) operations on the database. It illustrates creating new records, retrieving existing data, updating records with new information, and deleting specific entries. Mastering CRUD operations is vital for managing data in web applications effectively.

By working on the URL Shortener project, I gained practical experience in URL manipulation, database integration, search functionality, user interface design, error handling, and server-client communication. These are the key learning takeaways that will equip me with essential skills applicable to a wide range of web development projects.

## References

- https://www.youtube.com/watch?v=SLpUKAGnm-g&t=1098s
