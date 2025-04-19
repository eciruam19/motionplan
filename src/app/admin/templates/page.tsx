import React from 'react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { TemplateList } from '@/components/admin/TemplateList';

// This would be replaced with actual data fetching in a real implementation
const getTemplates = async () => {
  // Mock data for demonstration
  return [
    {
      id: '1',
      name: 'Werkvertrag',
      type: 'Werkvertrag',
      category: 'werk',
      status: 'active',
      updatedAt: '2025-03-15',
      filePath: '/templates/Werk_Vorlage.pdf',
    },
    {
      id: '2',
      name: 'Werkvertrag mit Vergütung',
      type: 'Werkvertrag mit Vergütung',
      category: 'werk',
      status: 'active',
      updatedAt: '2025-03-15',
      filePath: '/templates/Werk_Vergütung_Vorlage.pdf',
    },
    {
      id: '3',
      name: 'Werkvertrag mit Rückstellung',
      type: 'Werkvertrag mit Rückstellung',
      category: 'werk',
      status: 'active',
      updatedAt: '2025-03-15',
      filePath: '/templates/Werk_Rückstellung_Vorlage.pdf',
    },
    {
      id: '4',
      name: 'Ehrenamtsvertrag',
      type: 'Ehrenamtsvertrag',
      category: 'ehrenamt',
      status: 'active',
      updatedAt: '2025-03-10',
      filePath: '/templates/Ehrenamt_Vorlage.pdf',
    },
    {
      id: '5',
      name: 'Ehrenamtsvertrag mit Aufwandsentschädigung',
      type: 'Ehrenamtsvertrag mit Aufwandsentschädigung',
      category: 'ehrenamt',
      status: 'active',
      updatedAt: '2025-03-10',
      filePath: '/templates/Ehrenamt_Aufwandsentschädigung_Vorlage.pdf',
    },
    {
      id: '6',
      name: 'Dienstleistungsvertrag',
      type: 'Dienstleistungsvertrag',
      category: 'dienstleistung',
      status: 'active',
      updatedAt: '2025-02-28',
      filePath: '/templates/ServiceAgreement_Template.pdf',
    },
    {
      id: '7',
      name: 'Motivvertrag',
      type: 'Motivvertrag',
      category: 'motiv',
      status: 'active',
      updatedAt: '2025-02-20',
      filePath: '/templates/Motiv_Vorlage.pdf',
    },
    {
      id: '8',
      name: 'Location-Vertrag',
      type: 'Location-Vertrag',
      category: 'location',
      status: 'active',
      updatedAt: '2025-02-15',
      filePath: '/templates/Location_Template.pdf',
    },
    {
      id: '9',
      name: 'Voluntary Work Agreement',
      type: 'Voluntary Work Agreement',
      category: 'voluntary',
      status: 'active',
      updatedAt: '2025-02-10',
      filePath: '/templates/VoluntaryWork_Template.pdf',
    },
  ];
};

export default async function AdminTemplatesPage() {
  const templates = await getTemplates();

  // In a real implementation, these handlers would navigate to the appropriate pages
  const handleAddTemplate = () => {
    // Navigation would happen here
    console.log('Navigate to add template page');
  };

  const handleEditTemplate = (templateId: string) => {
    // Navigation would happen here
    console.log(`Navigate to edit template page for template ${templateId}`);
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <h2 className="text-xl font-druk">Vertragsvorlagen</h2>
        <p className="text-gray-500">
          Verwalten Sie Vertragsvorlagen für verschiedene Vertragstypen
        </p>

        <TemplateList 
          templates={templates} 
          onAddTemplate={handleAddTemplate}
          onEditTemplate={handleEditTemplate}
        />
      </div>
    </AdminLayout>
  );
}
