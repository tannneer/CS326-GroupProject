  import express from "express";
  import session from "express-session";
  import passport from "./passport.js";
  import routes from "./routes.js";

  const app = express(); 

  // Serve static files from the "src" directory
  app.use(express.static("../src"));

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

//   import express from "express";
// import session from "express-session";
// import passport from "./passport.js";
// import routes from "./routes.js";
// import path from "path";

// const app = express();

// // Serve static files from the "src" directory
// const __dirname = path.resolve();
// const srcPath = path.join(__dirname, "src");

// app.use(express.static(srcPath));

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// app.use(
//   session({
//     secret: "exampleSecret",
//     resave: false,
//     saveUninitialized: false,
//   })
// );

// app.use(passport.initialize());
// app.use(passport.session());

// // Use routes from routes.js
// app.use("/", routes);

// // Route to render profile page
// app.get("/profile", (req, res) => {
//   res.sendFile(path.join(srcPath, "frontend", "pages", "profile.html"));
// });

// // Start the Express application
// app.listen(3000, () => console.log("Server running on http://localhost:3000"));

// export default app;


  

