import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react"
import { UserForm } from "./Map"
import { UserTable } from "./UserTable"

const App = () => {
    <Router>
        <Routes>
            <Route path="/UserForm" element={<UserForm />} />
            <Route path="/UserTable" element={<UserTable />} />
        </Routes>
    </Router>
}

export default App