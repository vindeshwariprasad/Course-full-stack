# Next-Gen AI-Powered Learning Management System (LMS)

I built a **Next-Gen AI-Powered Learning Management System (LMS)** that redefines the future of online education.  
Built entirely with the **MERN Stack**, this full-stack application integrates **AI**, **Payments**, **Authentication**, and **modern UI/UX** to deliver a real **SaaS-level EdTech platform**.

---

## 📂 Folder Structure
<details>
<summary>Click to view folder structure</summary>







ai-lms/
│
├── backend/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── middleware/
│ ├── config/
│ └── server.js
│
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── redux/
│ │ └── App.js
│ └── package.json
│
└── README.md











</details>

---

## 🚀 Key Features
<details>
<summary>Click to expand features</summary>

- AI-Powered Smart Search (Gemini / OpenAI Integration)  
- Google Authentication (OAuth 2.0)  
- Razorpay Payment Gateway Integration  
- Redux Toolkit for Global State Management  
- Dedicated Student & Instructor Dashboards  
- Fully Responsive & Modern Tailwind UI  
- Admin Analytics Dashboard with Graphs & Insights  
- Cloudinary Image Uploads via Multer  
- Course Reviews, Ratings & AI Search Integration  

</details>

---

## 🧰 Tech Stack Used
<details>
<summary>Click to view stack</summary>

### Frontend
- React.js  
- Redux Toolkit  
- Tailwind CSS  

### Backend
- Node.js  
- Express.js  
- MongoDB  

### Authentication
- Google OAuth 2.0  

### Payments
- Razorpay Integration  

### AI Integration
- Gemini / OpenAI API  

</details>

---

## ⚙️ Environment Variables Setup
<details>
<summary>Click to view environment variable setup</summary>

Create `.env` files in both **backend** and **frontend** folders.

### Backend `.env`










MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_cloud_api_key
CLOUDINARY_API_SECRET=your_cloud_api_secret
OPENAI_API_KEY=your_openai_api_key





REACT_APP_BACKEND_URL=http://localhost:5000

REACT_APP_RAZORPAY_KEY=your_razorpay_key_id
REACT_APP_GOOGLE_CLIENT_ID=your_google_client_id








</details>

---

## 🧠 How to Run the Project
<details>
<summary>Click to view setup steps</summary>

### 1. Clone the Repository



Backend dependencies

cd backend
npm install
npm run dev

Frontend dependencies

cd ../frontend
npm install
npm run dev




