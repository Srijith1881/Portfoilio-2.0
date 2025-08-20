import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Github, Download, Mail, Zap, X, Send } from 'lucide-react'
import { toast } from "react-toastify";
import emailjs from "emailjs-com"
import resumePDF from '../assets/Srijith vy - 714022202053.pdf'



const Contact = () => {
  const [showModal, setShowModal] = useState(false)
  const location = useLocation();
  const [currentFact, setCurrentFact] = useState('')
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  useEffect(() => {
    if (location.state?.openModal) {
      setShowModal(true);
      // Clear the state to prevent modal from opening again on refresh
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  const funFacts = [
    "🚀 I debug code faster than I debug my life decisions",
    "💡 I speak fluent JavaScript and broken English",
    "🎯 My code works 60% of the time, every time",
    "⚡ I turn coffee into code and bugs into features",
    "🌟 I'm not lazy, I'm just on energy saving mode",
    "🔥 I make the impossible possible, one Stack Overflow at a time",
    "💻 My relationship status: Committed to Git",
    "🎨 I design pixels and break builds professionally"
  ]

  const handleGitHubClick = () => {
    window.open('https://github.com/Srijith1881/', '_blank')
  }

  const handleResumeDownload = () => {
  const link = document.createElement('a')
  link.href = resumePDF
  link.download = 'Srijith_Resume.pdf'
  link.click()
  toast.success('Glad that you recognized me 😊')
}

const handleFunFactClick = () => {
  const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)]
  setCurrentFact(randomFact)
}


const handleFormSubmit = (e) => {
  e.preventDefault();
  setIsSending(true); // start loading

 emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    {
      to_name: "Srijith",
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    },
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  )
  .then((result) => {
    console.log(result.text);
    toast.success("Thank you for reaching out 😊. I will get back to you soon");
    setFormData({ name: "", email: "", message: "" });
    setShowModal(false);
  })
  .catch((error) => {
    console.error(error.text);
    toast.error("Oops! Something went wrong. Please try again.");
  })
  .finally(() => {
    setIsSending(false); // stop loading
  });
};

const handleInputChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};


  return (
    <div className="bg-black inset-0 min-h-screen text-white relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="grid grid-cols-12 h-full">
          {[...Array(144)].map((_, i) => (
            <div
              key={i}
              className="border border-red-500/10 animate-pulse"
              style={{
                animationDelay: `${i * 0.1}s`,
                animationDuration: '3s'
              }}
            />
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col justify-center items-center min-h-screen p-4 sm:p-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl sm:text-7xl font-bold mb-4 bg-gradient-to-r from-red-500 via-white to-red-500 bg-clip-text text-transparent animate-pulse">
            Let's Connect
          </h1>
          <div className="w-32 h-1 bg-red-500 mx-auto rounded-full shadow-lg shadow-red-500/50"></div>
        </div>

        {/* Contact buttons grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 w-full max-w-4xl">
          
          {/* GitHub Link */}
          <button
            onClick={handleGitHubClick}
            className="group relative bg-gray-900 border border-gray-700 hover:border-red-500 p-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25 hover:scale-105"
          >
            <div className="absolute inset-0 bg-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
            <Github className="w-8 h-8 mb-4 mx-auto text-gray-400 group-hover:text-red-500 transition-colors" />
            <h3 className="font-semibold mb-2 text-gray-300 group-hover:text-white">GitHub Profile</h3>
            <p className="text-sm text-gray-500 group-hover:text-gray-300">View my repositories</p>
            <div className="absolute top-2 right-2 text-xs text-gray-600 group-hover:text-red-400">↗</div>
          </button>

          {/* Resume Download */}
          <button
            onClick={handleResumeDownload}
            className="group relative bg-gray-900 border border-gray-700 hover:border-red-500 p-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25 hover:scale-105"
          >
            <div className="absolute inset-0 bg-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
            <Download className="w-8 h-8 mb-4 mx-auto text-gray-400 group-hover:text-red-500 transition-colors" />
            <h3 className="font-semibold mb-2 text-gray-300 group-hover:text-white">Download Resume</h3>
            <p className="text-sm text-gray-500 group-hover:text-gray-300">Get my latest CV</p>
            <div className="absolute top-2 right-2 text-xs text-gray-600 group-hover:text-red-400">PDF</div>
          </button>

          {/* Contact Form Modal */}
          <button
            onClick={() => setShowModal(true)}
            className="group relative bg-gray-900 border border-gray-700 hover:border-red-500 p-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25 hover:scale-105"
          >
            <div className="absolute inset-0 bg-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
            <Mail className="w-8 h-8 mb-4 mx-auto text-gray-400 group-hover:text-red-500 transition-colors" />
            <h3 className="font-semibold mb-2 text-gray-300 group-hover:text-white">Send Message</h3>
            <p className="text-sm text-gray-500 group-hover:text-gray-300">Get in touch directly</p>
          </button>

          {/* Fun Fact */}
          <button
            onClick={handleFunFactClick}
            className="group relative bg-gray-900 border border-gray-700 hover:border-red-500 p-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25 hover:scale-105"
          >
            <div className="absolute inset-0 bg-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
            <Zap className="w-8 h-8 mb-4 mx-auto text-gray-400 group-hover:text-red-500 transition-colors" />
            <h3 className="font-semibold mb-2 text-gray-300 group-hover:text-white">Fun Fact</h3>
            <p className="text-sm text-gray-500 group-hover:text-gray-300">Click for randomness</p>
          </button>
        </div>

        {/* Fun Fact Display */}
        {currentFact && (
          <div className="bg-gray-900 border border-red-500 rounded-lg p-6 max-w-md text-center animate-bounce">
            <p className="text-red-400 font-mono">{currentFact}</p>
          </div>
        )}

        {/* Glowing dots decoration */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
        <div className="absolute bottom-20 right-10 w-3 h-3 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-5 w-1 h-1 bg-red-500 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Contact Form Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex justify-center items-center p-4">
          <div className="bg-gray-900 border border-red-500 rounded-lg shadow-2xl shadow-red-500/25 w-full max-w-md">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-700">
              <h2 className="text-xl font-bold text-white">Send Message</h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 bg-black border border-gray-700 rounded-lg text-white focus:border-red-500 focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 bg-black border border-gray-700 rounded-lg text-white focus:border-red-500 focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="4"
                  className="w-full px-3 py-2 bg-black border border-gray-700 rounded-lg text-white focus:border-red-500 focus:outline-none transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
  onClick={handleFormSubmit}
  disabled={isSending}
  className={`w-full font-semibold py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2
    ${isSending ? "bg-gray-600 cursor-not-allowed" : "bg-red-500 hover:bg-red-600 text-white"}`}
>
  {isSending ? (
    <>
      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
      </svg>
      Sending...
    </>
  ) : (
    <>
      <Send className="w-4 h-4" />
      Send Message
    </>
  )}
</button>

            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Contact