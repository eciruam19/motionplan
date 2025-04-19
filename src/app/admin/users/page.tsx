import React from 'react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { UserList } from '@/components/admin/UserList';

// This would be replaced with actual data fetching in a real implementation
const getUsers = async () => {
  // Mock data for demonstration
  return [
    {
      id: '1',
      name: 'Anna Schmidt',
      email: 'a.schmidt@dffb.de',
      role: 'admin',
      status: 'active',
      createdAt: '2025-01-15',
    },
    {
      id: '2',
      name: 'Thomas Weber',
      email: 't.weber@dffb.de',
      role: 'produktion',
      status: 'active',
      createdAt: '2025-02-03',
    },
    {
      id: '3',
      name: 'Maria Müller',
      email: 'm.mueller@dffb.de',
      role: 'student',
      status: 'active',
      createdAt: '2025-02-10',
    },
    {
      id: '4',
      name: 'Jan Becker',
      email: 'j.becker@dffb.de',
      role: 'dozent',
      status: 'active',
      createdAt: '2025-01-20',
    },
    {
      id: '5',
      name: 'Lisa Wagner',
      email: 'l.wagner@dffb.de',
      role: 'student',
      status: 'active',
      createdAt: '2025-03-05',
    },
    {
      id: '6',
      name: 'Michael Schneider',
      email: 'm.schneider@dffb.de',
      role: 'direktion',
      status: 'active',
      createdAt: '2025-01-10',
    },
    {
      id: '7',
      name: 'Sabine Fischer',
      email: 's.fischer@dffb.de',
      role: 'rechteklaerung',
      status: 'active',
      createdAt: '2025-02-15',
    },
    {
      id: '8',
      name: 'Peter Hoffmann',
      email: 'p.hoffmann@dffb.de',
      role: 'student',
      status: 'inactive',
      createdAt: '2025-01-25',
    },
  ];
};

export default async function AdminUsersPage() {
  const users = await getUsers();

  // In a real implementation, these handlers would navigate to the appropriate pages
  const handleAddUser = () => {
    // Navigation would happen here
    console.log('Navigate to add user page');
  };

  const handleEditUser = (userId: string) => {
    // Navigation would happen here
    console.log(`Navigate to edit user page for user ${userId}`);
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <h2 className="text-xl font-druk">Benutzerverwaltung</h2>
        <p className="text-gray-500">
          Verwalten Sie Benutzerkonten, Rollen und Berechtigungen
        </p>

        <UserList 
          users={users} 
          onAddUser={handleAddUser}
          onEditUser={handleEditUser}
        />
      </div>
    </AdminLayout>
  );
}
