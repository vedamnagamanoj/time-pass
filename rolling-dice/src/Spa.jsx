// App.jsx
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow-md p-4">
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:text-blue-600">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-600">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-600">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <main className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

// Home.jsx
const Home = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome Home</h1>
      <p>This is the home page of our SPA.</p>
    </div>
  );
};

// About.jsx
const About = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h1 className="text-2xl font-bold mb-4">About Us</h1>
      <p>Learn more about our company and mission.</p>
    </div>
  );
};

// Contact.jsx
const Contact = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
      <form className="space-y-4">
        <div>
          <label className="block mb-1">Name:</label>
          <input type="text" className="w-full p-2 border rounded" />
        </div>
        <div>
          <label className="block mb-1">Email:</label>
          <input type="email" className="w-full p-2 border rounded" />
        </div>
        <div>
          <label className="block mb-1">Message:</label>
          <textarea className="w-full p-2 border rounded" rows="4"></textarea>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Send Message
        </button>
      </form>
    </div>
  );
};

// NotFound.jsx
const NotFound = () => {
  return (
    <div className="text-center py-10">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p>Page not found.</p>
      <Link to="/" className="text-blue-500 hover:underline">
        Go Home
      </Link>
    </div>
  );
};

export default App;
