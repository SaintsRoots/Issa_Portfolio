import express from "express";
import { serve, setup } from "swagger-ui-express";

const docRouter = express.Router();
const local = process.env.LOCAL_HOST;

const options = {
  openapi: "3.0.1",
  info: {
    title: "Issa's API",
    version: "1.0.0",
    description: "Documentation for Issa API.",
  },
  host: local,
  basePath: "/",
  security: [
    {
      bearerAuth: [], // Define the security requirement for endpoints
    },
  ],
  tags: [
    {
      name: "User",
      description: "Operations related to User Applicant entities",
    },
    {
      name: "Blog",
      description: "Operations related to Blog Post entities",
    },
    {
      name: "Project",
      description: "Operations related to Project Post entities",
    },
    {
      name: "Testmonial",
      description: "Operations related to Testmonial Post entities",
    },
    {
      name: "Logout",
      description: "Operations related to Logout entities",
    },
  ],
  paths: {
    "/api/user/auth": {
      post: {
        tags: ["User"],
        summary: "User Login",
        description: "make Login",
        security: [
          {
            bearerAuth: [], // Add the security requirement for this endpoint
          },
        ],
        parameters: [],
        requestBody: {
          content: {
            "multipart/form-data": {
              schema: {
                type: "object",
                properties: {
                  username: {
                    type: "string",
                    description: "Username",
                    example: "Issa",
                  },
                  password: {
                    type: "string",
                    description: "password",
                    example: "shehe123",
                  },
                },
              },
            },
          },
          required: true,
        },
        responses: {
          201: {
            description: "Login  successfully",
          },
          400: {
            description: "Bad Request",
          },
          500: {
            description: "Internal Server Error",
          },
        },
      },
    },
    "/api/user/auth/logout": {
      post: {
        tags: ["Logout"],
        description: "logging out a portfolio",
        summary: "logging out a portfolio",
        security: [
          {
            bearerAuth: [], // Add the security requirement for this endpoint
          },
        ],
        parameters: [],
        required: true,
        responses: {
          200: {
            description: "Portfolio successfully logged out",
          },
          401: {
            description: "Unauthorized: User not logged in",
          },
          500: {
            description: "Internal Server Error",
          },
        },
      },
    },
    "/api/user/create": {
      post: {
        tags: ["User"],
        summary: "new User",
        description: "new User",
        security: [
          {
            bearerAuth: [], // Add the security requirement for this endpoint
          },
        ],
        parameters: [],
        requestBody: {
          content: {
            "multipart/form-data": {
              schema: {
                type: "object",
                properties: {
                  username: {
                    type: "string",
                    description: "Username",
                    example: "Issa",
                  },
                  Image: {
                    type: "string",
                    format: "binary",
                    description: "Profile Image",
                  },
                  firstname: {
                    type: "string",
                    description: "firstname",
                    example: "johnDoe",
                  },
                  lastname: {
                    type: "string",
                    description: "lastname",
                    example: "Doe",
                  },
                  email: {
                    type: "string",
                    description: "Email..",
                    example: "johndoe@gmail.com",
                  },
                  password: {
                    type: "string",
                    description: "password",
                    example: "shehe123",
                  },
                },
              },
            },
          },
          required: true,
        },
        responses: {
          201: {
            description: "New User created successfully",
          },
          400: {
            description: "Bad Request",
          },
          500: {
            description: "Internal Server Error",
          },
        },
      },
    },
    "/api/user/read": {
      get: {
        tags: ["User"],
        summary: "Get All Portfolio User",
        description: "Get all User Accounts",
        security: [
          {
            bearerAuth: [], // Add the security requirement for this endpoint
          },
        ],
        responses: {
          200: {
            description: "All Portfolio Users retrieved successfully",
          },
          500: {
            description: "Internal Server Error",
          },
        },
      },
    },

    "/api/user/read/{id}": {
      get: {
        tags: ["User"],
        summary: "Read Portfolio By ID",
        description: "Get a Portfolio post by ID",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            description: "ID of the Portfolio post",
            schema: {
              type: "string",
              pattern: "^[0-9a-fA-F]{24}$",
            },
          },
        ],
        security: [
          {
            bearerAuth: [], // Add the security requirement for this endpoint
          },
        ],
        responses: {
          200: {
            description: "Portfolio Acount retrieved successfully",
          },
          404: {
            description: "Portfolio Acount not found",
          },
          500: {
            description: "Internal Server Error",
          },
        },
      },
    },
    "/api/user/delete/{id}": {
      delete: {
        tags: ["User"],
        summary: "Delete a user Account",
        description: "Delete an existing user Account by its ID.",
        security: [
          {
            bearerAuth: [],
          },
        ],
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: {
              type: "string",
              pattern: "^[0-9a-fA-F]{24}$",
            },
            description: "Unique identifier of the blog post to be deleted",
          },
        ],
        responses: {
          200: {
            description: "Account deleted successfully",
          },
          400: {
            description: "Bad request",
          },
          401: {
            description: "Unauthorized",
          },
          404: {
            description: "Blog post not found",
          },
          500: {
            description: "Internal server error",
          },
        },
      },
    },

    "/api/user/update/{id}": {
      put: {
        tags: ["User"],
        summary: "Update a user Account",
        description: "Update an existing User acount with new data.",
        security: [
          {
            bearerAuth: [],
          },
        ],
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: {
              type: "string",
              pattern: "^[0-9a-fA-F]{24}$",
            },
            description: "Unique identifier of the User Account to be updated",
          },
        ],
        requestBody: {
          required: true,
          content: {
            "multipart/form-data": {
              schema: {
                type: "object",
                properties: {
                  username: {
                    type: "string",
                    description: "Username",
                    example: "Issa",
                  },
                  Image: {
                    type: "string",
                    format: "binary",
                    description: "Profile Image",
                  },
                  firstname: {
                    type: "string",
                    description: "firstname",
                    example: "johnDoe",
                  },
                  lastname: {
                    type: "string",
                    description: "lastname",
                    example: "Doe",
                  },
                  email: {
                    type: "string",
                    description: "Email..",
                    example: "johndoe@gmail.com",
                  },
                  password: {
                    type: "string",
                    description: "password",
                    example: "shehe123",
                  },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: "User Account updated successfully",
          },
          400: {
            description: "Bad request",
          },
          401: {
            description: "Unauthorized",
          },
          404: {
            description: "Not found",
          },
          500: {
            description: "Internal server error",
          },
        },
      },
    },
  },
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
        in: "header",
        name: "Authorization",
      },
    },
  },
};

docRouter.use("/", serve, setup(options));

export default docRouter;
