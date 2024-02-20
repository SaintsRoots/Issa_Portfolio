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
      name: "Project",
      description: "Operations related to Project Post entities",
    },
    {
      name: "Logout",
      description: "Operations related to Logout entities",
    },
    {
      name: "Work",
      description: "Operations related to Work entities",
    },
    {
      name: "Experience",
      description: "Operations related to Experience entities",
    },
    {
      name: "About",
      description: "Operations related to About entities",
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

    // Project
    "/api/project/create": {
      post: {
        tags: ["Project"],
        summary: "new Project",
        description: "new Project",
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
                  Image: {
                    type: "string",
                    format: "binary",
                    description: "Project Image",
                  },
                  title: {
                    type: "string",
                    description: "title of Project",
                    example: "Klab",
                  },

                  description: {
                    type: "string",
                    description: "Description of Post",
                    example:
                      " In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. Wikipedia",
                  },
                },
              },
            },
          },
          required: true,
        },
        responses: {
          201: {
            description: "New Project created successfully",
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
    "/api/project/read": {
      get: {
        tags: ["Project"],
        summary: "Get All Projects",
        description: "Get all posted Project",
        security: [
          {
            bearerAuth: [], // Add the security requirement for this endpoint
          },
        ],
        responses: {
          200: {
            description: "All Project  retrieved successfully",
          },
          500: {
            description: "Internal Server Error",
          },
        },
      },
    },

    "/api/project/read/{id}": {
      get: {
        tags: ["Project"],
        summary: "Read Project By ID",
        description: "Get a Project post by ID",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            description: "ID of the Project post",
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
            description: "Project  retrieved successfully",
          },
          404: {
            description: "Project  not found",
          },
          500: {
            description: "Internal Server Error",
          },
        },
      },
    },
    "/api/project/delete/{id}": {
      delete: {
        tags: ["Project"],
        summary: "Delete a Project",
        description: "Delete an existing Project by its ID.",
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
            description: "Unique identifier of the Project post to be deleted",
          },
        ],
        responses: {
          200: {
            description: "Project deleted successfully",
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

    "/api/project/update/{id}": {
      put: {
        tags: ["Project"],
        summary: "Update a Project",
        description: "Update an existing Project with new data.",
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
            description: "Unique identifier of the Project to be updated",
          },
        ],
        requestBody: {
          required: true,
          content: {
            "multipart/form-data": {
              schema: {
                type: "object",
                properties: {
                  Image: {
                    type: "string",
                    format: "binary",
                    description: "Project Image",
                  },
                  title: {
                    type: "string",
                    description: "title of project",
                    example: "Klab",
                  },

                  description: {
                    type: "string",
                    description: "Description of Post",
                    example:
                      " In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. Wikipedia",
                  },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: "Project updated successfully",
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
    // Work
    "/api/work/create": {
      post: {
        tags: ["Work"],
        summary: "new Work",
        description: "new Work",
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
                  workDesc: {
                    type: "string",
                    description: "Description of Work",
                    example:
                      " In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. Wikipedia",
                  },
                },
              },
            },
          },
          required: true,
        },
        responses: {
          201: {
            description: "Work created successfully",
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
    "/api/work/read": {
      get: {
        tags: ["Work"],
        summary: "Get All Work",
        description: "Get all posted Work",
        security: [
          {
            bearerAuth: [], // Add the security requirement for this endpoint
          },
        ],
        responses: {
          200: {
            description: "Work  retrieved successfully",
          },
          500: {
            description: "Internal Server Error",
          },
        },
      },
    },
    "/api/work/update/{id}": {
      put: {
        tags: ["Work"],
        summary: "Update a Work",
        description: "Update an existing Work with new data.",
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
            description: "Unique identifier of the Project to be updated",
          },
        ],
        requestBody: {
          required: true,
          content: {
            "multipart/form-data": {
              schema: {
                type: "object",
                properties: {
                  workDesc: {
                    type: "string",
                    description: "Description of Work",
                    example:
                      " In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. Wikipedia",
                  },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: "Work updated successfully",
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

    // experience

    "/api/experience/create": {
      post: {
        tags: ["Experience"],
        summary: "new Experience",
        description: "new Experience",
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
                  experienceDesc: {
                    type: "string",
                    description: "Description of Experience",
                    example:
                      " In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. Wikipedia",
                  },
                  title: {
                    type: "string",
                    description: "Experience Title",
                    example: "publishing and graphic design,",
                  },
                  desc: {
                    type: "string",
                    description: "Experience  Description overview",
                    example:
                      " Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content,",
                  },
                },
              },
            },
          },
          required: true,
        },
        responses: {
          201: {
            description: "Experience created successfully",
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
    "/api/experience/read": {
      get: {
        tags: ["Experience"],
        summary: "Get All Experience",
        description: "Get all posted Experience",
        security: [
          {
            bearerAuth: [], // Add the security requirement for this endpoint
          },
        ],
        responses: {
          200: {
            description: "Experience  retrieved successfully",
          },
          500: {
            description: "Internal Server Error",
          },
        },
      },
    },
    "/api/experience/update/{id}": {
      put: {
        tags: ["Experience"],
        summary: "Update a Work",
        description: "Update an existing Experience with new data.",
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
            description: "Unique identifier of the Experience to be updated",
          },
        ],
        requestBody: {
          required: true,
          content: {
            "multipart/form-data": {
              schema: {
                type: "object",
                properties: {
                  experienceDesc: {
                    type: "string",
                    description: "Description of Experience",
                    example:
                      " In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. Wikipedia",
                  },
                  title: {
                    type: "string",
                    description: "Experience Title",
                    example: "publishing and graphic design,",
                  },
                  desc: {
                    type: "string",
                    description: "Experience  Description overview",
                    example:
                      " Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content,",
                  },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: "Experience updated successfully",
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

    "/api/experience/delete/{id}": {
      delete: {
        tags: ["Experience"],
        summary: "Delete a Experience",
        description: "Delete an existing Experience by its ID.",
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
            description:
              "Unique identifier of the Experience post to be deleted",
          },
        ],
        responses: {
          200: {
            description: "Experience deleted successfully",
          },
          400: {
            description: "Bad request",
          },
          401: {
            description: "Unauthorized",
          },
          404: {
            description: "Experience post not found",
          },
          500: {
            description: "Internal server error",
          },
        },
      },
    },
    // about

    "/api/about/create": {
      post: {
        tags: ["About"],
        summary: "new About",
        description: "new About",
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
                  aboutDesc: {
                    type: "string",
                    description: "Description of About",
                    example:
                      " In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. Wikipedia",
                  },
                  title: {
                    type: "string",
                    description: "Skills Title",
                    example: "publishing and graphic design,",
                  },
                  desc: {
                    type: "string",
                    description: "Skills  Description overview",
                    example:
                      " Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content,",
                  },
                },
              },
            },
          },
          required: true,
        },
        responses: {
          201: {
            description: "About created successfully",
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
    "/api/about/read": {
      get: {
        tags: ["About"],
        summary: "Get All About",
        description: "Get all posted About",
        security: [
          {
            bearerAuth: [], // Add the security requirement for this endpoint
          },
        ],
        responses: {
          200: {
            description: "About  retrieved successfully",
          },
          500: {
            description: "Internal Server Error",
          },
        },
      },
    },
    "/api/about/update/{id}": {
      put: {
        tags: ["About"],
        summary: "Update a About",
        description: "Update an existing About with new data.",
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
            description: "Unique identifier of the About to be updated",
          },
        ],
        requestBody: {
          required: true,
          content: {
            "multipart/form-data": {
              schema: {
                type: "object",
                properties: {
                  aboutDesc: {
                    type: "string",
                    description: "Description of About",
                    example:
                      " In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. Wikipedia",
                  },
                  title: {
                    type: "string",
                    description: "Skills Title",
                    example: "publishing and graphic design,",
                  },
                  desc: {
                    type: "string",
                    description: "Skills  Description overview",
                    example:
                      " Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content,",
                  },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: "About updated successfully",
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
    "/api/about/delete/{id}": {
      delete: {
        tags: ["About"],
        summary: "Delete About",
        description: "Delete an existing About by its ID.",
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
            description: "Unique identifier of the About post to be deleted",
          },
        ],
        responses: {
          200: {
            description: "About deleted successfully",
          },
          400: {
            description: "Bad request",
          },
          401: {
            description: "Unauthorized",
          },
          404: {
            description: "About post not found",
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
