import swaggerJsdoc from "swagger-jsdoc";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Next.js API",
      version: "1.0.0",
      description: "API documentation for Next.js App Router",
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Development server",
      },
    ],
  },
  apis: ["./app/api/**/route.js"], 
};

const swaggerSpec = swaggerJsdoc(options);

export async function GET() {
  return new Response(JSON.stringify(swaggerSpec, null, 2), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
