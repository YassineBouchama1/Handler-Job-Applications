// app/swagger/page.js
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

export default function Swagger() {
  return (
    <div>
      <SwaggerUI url="/api/swagger" />
    </div>
  );
}