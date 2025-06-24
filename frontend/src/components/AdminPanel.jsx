import React, { useState } from 'react';

const AdminPanel = () => {
  // For demonstration, you can expand this to fetch and manage projects, contacts, etc.
  const [tab, setTab] = useState('projects');

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Admin Panel</h1>
      <div className="flex gap-4 justify-center mb-8">
        <button className={`px-4 py-2 rounded ${tab === 'projects' ? 'bg-primary text-white' : 'bg-gray-200'}`} onClick={() => setTab('projects')}>Projects</button>
        <button className={`px-4 py-2 rounded ${tab === 'contacts' ? 'bg-primary text-white' : 'bg-gray-200'}`} onClick={() => setTab('contacts')}>Contacts</button>
      </div>
      <div>
        {tab === 'projects' && <div>Project management UI here (CRUD operations)</div>}
        {tab === 'contacts' && <div>Contact messages UI here</div>}
      </div>
    </div>
  );
};

export default AdminPanel;
