import React from 'react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { Card, CardContent } from '@/components/ui/Card';

// This would be replaced with actual data fetching in a real implementation
const getAdminStats = async () => {
  // Mock data for demonstration
  return {
    users: 24,
    activeProjects: 12,
    pendingContracts: 8,
    templates: 15,
    recentActivity: [
      {
        id: '1',
        action: 'Benutzer erstellt',
        user: 'Thomas Weber',
        target: 'Maria Schmidt',
        timestamp: '2025-04-19T10:30:00Z',
      },
      {
        id: '2',
        action: 'Vertrag genehmigt',
        user: 'Anna Müller',
        target: 'Werkvertrag #1234',
        timestamp: '2025-04-19T09:15:00Z',
      },
      {
        id: '3',
        action: 'Vorlage aktualisiert',
        user: 'Admin',
        target: 'Dienstleistungsvertrag',
        timestamp: '2025-04-18T16:45:00Z',
      },
      {
        id: '4',
        action: 'Projekt erstellt',
        user: 'Lisa Wagner',
        target: 'Dokumentarfilm "Berlin heute"',
        timestamp: '2025-04-18T14:20:00Z',
      },
      {
        id: '5',
        action: 'Systemeinstellungen geändert',
        user: 'Admin',
        target: 'E-Mail-Benachrichtigungen',
        timestamp: '2025-04-17T11:10:00Z',
      },
    ],
  };
};

export default async function AdminDashboardPage() {
  const stats = await getAdminStats();

  return (
    <AdminLayout>
      <div className="space-y-6">
        <h2 className="text-xl font-druk">Dashboard</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-6">
              <div className="text-sm font-medium text-gray-500">Benutzer</div>
              <div className="mt-2 text-3xl font-druk">{stats.users}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="text-sm font-medium text-gray-500">Aktive Projekte</div>
              <div className="mt-2 text-3xl font-druk">{stats.activeProjects}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="text-sm font-medium text-gray-500">Ausstehende Verträge</div>
              <div className="mt-2 text-3xl font-druk">{stats.pendingContracts}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="text-sm font-medium text-gray-500">Vertragsvorlagen</div>
              <div className="mt-2 text-3xl font-druk">{stats.templates}</div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-druk mb-4">Letzte Aktivitäten</h3>
            <div className="space-y-4">
              {stats.recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-dffb-pink mt-2 mr-3"></div>
                  <div>
                    <div className="font-medium">{activity.action}</div>
                    <div className="text-sm text-gray-500">
                      {activity.user} • {activity.target} • {new Date(activity.timestamp).toLocaleString('de-DE')}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}
