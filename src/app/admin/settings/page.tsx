import React from 'react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { SystemSettings } from '@/components/admin/SystemSettings';

// This would be replaced with actual data fetching in a real implementation
const getSystemSettings = async () => {
  // Mock data for demonstration
  return {
    siteName: 'DFFB Motionplan',
    siteDescription: 'Projektverwaltungssystem der Deutschen Film- und Fernsehakademie Berlin',
    primaryColor: '#e6007e', // DFFB Pink
    secondaryColor: '#000000', // DFFB Black
    logoPath: '/images/dffb-logo.png',
    defaultProjectStatus: 'draft',
    defaultContractStatus: 'draft',
    emailNotifications: 'enabled',
    autoSaveInterval: '5',
    maxUploadSize: '10',
    allowedFileTypes: 'pdf,doc,docx,xls,xlsx,jpg,jpeg,png',
    maintenanceMode: 'disabled',
  };
};

export default async function AdminSettingsPage() {
  const settings = await getSystemSettings();

  // In a real implementation, this handler would submit to an API endpoint
  const handleSaveSettings = async (updatedSettings: any) => {
    console.log('Saving settings:', updatedSettings);
    // Settings update logic would go here
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <h2 className="text-xl font-druk">Systemeinstellungen</h2>
        <p className="text-gray-500">
          Konfigurieren Sie globale Einstellungen für das DFFB Motionplan-System
        </p>

        <SystemSettings 
          initialSettings={settings}
          onSave={handleSaveSettings}
        />
      </div>
    </AdminLayout>
  );
}
