# Simple Blog APP Backend

This is a simple blog backend application built using Node.js, Express, and MongoDB. The application provides APIs for creating, reading, updating, and deleting blog posts, adding comments, and managing likes/unlikes on posts.

## Features

- Create, read, update, and delete blog posts
- Add comments to blog posts
- Like and unlike functionality for posts
- Store data in MongoDB
- JSON-based APIs

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed on your computer. You can download it from [Node.js official website](https://nodejs.org/).
- MongoDB installed and running. You can download it from [MongoDB official website](https://www.mongodb.com/).

## Installation

1. **Clone the repository**:
   ```sh
   git clone https://github.com/yourusername/blog-app-backend.git
   ```

2. **Navigate to the project directory**:
   ```sh
   cd blog-app-backend
   ```

3. **Install the dependencies**:
   ```sh
   npm install
   ```

4. **Create a `.env` file in the root directory** and add your MongoDB connection string and any other environment variables:
   ```plaintext
   PORT=3000
   MONGO_URI=mongodb://localhost:27017/blogDB
   ```

## Usage

1. **Start the server**:
   ```sh
   npm start
   ```

2. **Access the application**:
   - The application will be running at `http://localhost:3000`.

3. **Use the following API endpoints to interact with the application**:

### Blog Posts

- **Get all posts**: `GET /api/v1/posts`
- **Get a single post**: `GET /api/v1/posts/:id`
- **Create a new post**: `POST /api/v1/posts`
- **Update a post**: `PUT /api/v1/posts/:id`
- **Delete a post**: `DELETE /api/v1/posts/:id`

### Comments

- **Add a comment to a post**: `POST /api/v1/comments/create`

### Likes/Unlikes

- **Like a post**: `POST /api/v1/posts/:id/like`
- **Unlike a post**: `POST /api/v1/posts/:id/unlike`

## Project Structure

```plaintext
blog-app-backend/
│
├── config/
│   └── database.js      # Database connection configuration
│
├── controllers/
│   ├── postController.js # Controller for blog posts
│   ├── commentController.js # Controller for comments
│   └── likeController.js # Controller for likes/unlikes
│
├── models/
│   ├── postModel.js      # Mongoose schema and model for blog posts
│   ├── commentModel.js   # Mongoose schema and model for comments
│   └── likeModel.js      # Mongoose schema and model for likes/unlikes
│
├── routes/
│   ├── postRoutes.js     # Routes for blog posts
│   ├── commentRoutes.js  # Routes for comments
│   └── likeRoutes.js     # Routes for likes/unlikes
│
├── .gitignore            # Git ignore file
├── .env                  # Environment variables file
├── package.json          # NPM package configuration
├── README.md             # Project README file

```

## Contributing

Contributions are always welcome! Please create a pull request or open an issue to discuss what you would like to change.

## License

This project is licensed under the MIT License.

## Contact

If you have any questions or suggestions, feel free to reach out:

- Your Name - [amitprakhar14@gmail.com](mailto:amitprakhar14@gmail.com)
- GitHub - [amit012-bit](https://github.com/amit012-bit)
