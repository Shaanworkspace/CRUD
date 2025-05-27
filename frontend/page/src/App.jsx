import { useState } from 'react';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import UpdateModal from './components/UpdateModal';

function App() {
    const [users, setUsers] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);

    return (
        <div className="bg-gray-100 font-sans min-h-screen">
            {/* Header */}
            <header className="bg-blue-600 text-white p-4 shadow-md">
                <div className="container mx-auto">
                    <h1 className="text-3xl font-bold text-shadow-lg">User Management System</h1>
                    <nav className="mt-2">
                        <a href="/" className="text-white hover:underline">Home</a>
                    </nav>
                </div>
            </header>

            {/* Main Content */}
            <div className="container mx-auto p-6">
                <UserForm setUsers={setUsers} />
                <UserList
                    users={users}
                    setUsers={setUsers}
                    setCurrentUser={setCurrentUser}
                    setIsModalOpen={setIsModalOpen}
                />
                {isModalOpen && (
                    <UpdateModal
                        user={currentUser}
                        setUsers={setUsers}
                        setIsModalOpen={setIsModalOpen}
                    />
                )}
            </div>
        </div>
    );
}

export default App;