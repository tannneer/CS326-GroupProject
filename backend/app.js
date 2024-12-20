  import express from "express";
  import session from "express-session";
  import passport from "./passport.js";
  import routes from "./routes.js";
  import path from "path";
  import { fileURLToPath } from "url";
  
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const app = express(); 

  // Serve static files from the "src" directory
  app.use(express.static("../src"));
  app.use("/uploads", express.static(path.join(__dirname, "uploads"))); // Serve uploaded files

  app.use(express.json()); 
  app.use(express.urlencoded({extended: false}))

  app.use(
      session({
        secret: 'exampleSecret',
        resave: false,
        saveUninitialized: false,
      })
    );

  app.use(passport.initialize());
  app.use(passport.session());

  // Use routes from routes.js
  app.use("/", routes);

  // Start the Express application
  app.listen(3000, () => console.log("Server running on http://localhost:3000"));

  export default app;    

