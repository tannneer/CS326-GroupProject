export class Auth {
    constructor(appElementId) {
      this.app = document.getElementById(appElementId);
      if (!this.app) {
        throw new Error(`Element with ID "${appElementId}" not found.`); 
      } 
     
    }
  
 
    loadCSS(filePath) {
      if (!document.querySelector(`link[href="${filePath}"]`)) {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = filePath;
        document.head.appendChild(link);
      }
    }
 
    renderSignup() {
   
      this.loadCSS("frontend/pages/authpage/login.css");
      this.app.innerHTML = `
    <div class="container">
      <h1 class="title">TimeBank</h1>
      <div class="form-container">
        <p class="form-header">SIGN UP</p>
        <form class="form">
          <label for="email" class="email-label">Email</label>
          <input id="email" type="email" placeholder="Enter your email">

          <label for="username" class="username-label">Username</label>
          <input id="username" type="text" placeholder="Enter your username">

          <label for="password" class="password-label">Password</label>
          <input id="password" type="password" placeholder="Enter your password">

          <button type="button" class="signup-button">SIGN UP</button>
        </form>
      </div>
      <p class="login-link">
        Already a user? <span id="login-link" style="color: #0BA6FF; cursor: pointer;">LOGIN</span>
      </p>
    </div>
  `;

  document.getElementById("login-link").addEventListener("click", () => {
    this.renderLogin(); 
  });

  
  document.querySelector(".signup-button").addEventListener("click", () => {
    console.log("Signup clicked");
    this.handleSignup();
  });
    }
  
    renderLogin() {
        this.loadCSS("frontend/pages/authpage/login.css");
        this.app.innerHTML = `
          <div class="container">
            <h1 class="title">TimeBank</h1>
            <div class="form-container">
              <p class="form-header">LOG IN</p>
              <form class="form">
                <label for="email" class="email-label">Email</label>
                <input id="email" type="email" placeholder="Enter your email">
      
                <label for="password" class="password-label">Password</label>
                <input id="password" type="password" placeholder="Enter your password">
      
                <button type="button" class="login-button">LOG IN</button>
              </form>
            </div>
            <p class="signup-link">
              New to TimeBank? <span id="signup-link" style="color: #0BA6FF; cursor: pointer;">SIGN UP</span>
            </p>
          </div>
        `;
      
     
        document.getElementById("signup-link").addEventListener("click", () => {
          this.renderSignup(); 
        });
      
        document.querySelector(".login-button").addEventListener("click", () => {
          console.log("Login clicked");
          this.handleLogin();
        });
      }
      
   
  
      handleSignup() {
        const email = document.getElementById("email").value;
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
      
        if (!email || !username || !password) {
          alert("All fields are required!");
          return;
        }
      
        try {
          // Create a new user instance
          const newUser = new User(email, username, password);
      
          console.log("New User Created:", newUser.getDetails());
      
          alert("Signup successful! Redirecting...");
          this.redirectToCreatePage(); 
        } catch (error) {
          console.error("Error during signup:", error);
          alert("An error occurred. Please try again.");
        }
      }
      
    
      
      handleLogin() {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
    
        if (!email || !password) {
          alert("Email and password are required!");
          return;
        }
    
        alert("Login successful! Redirecting...");
        this.redirectToCreatePage(); 
      }
    
 
      redirectToCreatePage() {
        const createPage = new CreatePage("app");
        createPage.render();
      }
    }
    
   
    export async function renderAuthPage(appElementId, page) {
      const auth = new Auth(appElementId);
    
      if (page === "signup") {
        auth.renderSignup();
      } else if (page === "login") {
        auth.renderLogin();
      } else {
        throw new Error('Invalid page. Use "signup" or "login".');
      }
    }