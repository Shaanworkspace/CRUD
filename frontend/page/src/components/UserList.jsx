import { useEffect } from 'react';
import axios from 'axios';

function UserList({ users, setUsers, setCurrentUser, setIsModalOpen }) {
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('/api/users');
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
                alert('Error fetching users. Please try again.');
            }
        };
        fetchUsers();
    }, [setUsers]);

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this user?')) {
            try {
                await axios.delete(`/api/users/${id}`);
                setUsers(users.filter(user => user.id !== id));
            } catch (error) {
                console.error('Error deleting user:', error);
                alert('Error deleting user. Please try again.');
            }
        }
    };

    const handleUpdateClick = (user) => {
        setCurrentUser(user);
        setIsModalOpen(true);
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {users.map(user => (
                <div
                    key={user.id}
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                    <h3 className="text-lg font-semibold text-shadow-sm">{user.name}</h3>
                    <p className="text-gray-600 overflow-wrap-break-word">{user.email}</p>
                    <p className="text-gray-600">{user.address || 'No address'}</p>
                    <p className="text-gray-600">{user.number || 'No number'}</p>
                    <div className="mt-4 flex space-x-2">
                        <button
                            onClick={() => handleUpdateClick(user)}
                            className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600 transition-colors"
                        >
                            Update
                        </button>
                        <button
                            onClick={() => handleDelete(user.id)}
                            className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition-colors"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default UserList;