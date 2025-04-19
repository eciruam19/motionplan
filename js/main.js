// Main JavaScript for DFFB Motionplan Static Prototype

document.addEventListener('DOMContentLoaded', function() {
  // Toggle user menu dropdown
  const userMenuButton = document.getElementById('user-menu-button');
  const userMenuDropdown = document.getElementById('user-menu-dropdown');
  
  if (userMenuButton && userMenuDropdown) {
    userMenuButton.addEventListener('click', function() {
      userMenuDropdown.classList.toggle('show');
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(event) {
      if (!userMenuButton.contains(event.target) && !userMenuDropdown.contains(event.target)) {
        userMenuDropdown.classList.remove('show');
      }
    });
  }
  
  // Tab functionality
  const tabButtons = document.querySelectorAll('.tab');
  const tabPanes = document.querySelectorAll('.tab-pane');
  
  tabButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Remove active class from all tabs
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabPanes.forEach(pane => pane.classList.remove('active'));
      
      // Add active class to clicked tab and corresponding pane
      button.classList.add('active');
      const target = button.getAttribute('data-target');
      document.getElementById(target).classList.add('active');
    });
  });
  
  // Modal functionality
  const modalTriggers = document.querySelectorAll('[data-modal-target]');
  const modalCloseButtons = document.querySelectorAll('.modal-close');
  
  modalTriggers.forEach(trigger => {
    trigger.addEventListener('click', function() {
      const modalId = trigger.getAttribute('data-modal-target');
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.classList.add('show');
      }
    });
  });
  
  modalCloseButtons.forEach(button => {
    button.addEventListener('click', function() {
      const modal = button.closest('.modal-backdrop');
      if (modal) {
        modal.classList.remove('show');
      }
    });
  });
  
  // Close modal when clicking outside
  document.addEventListener('click', function(event) {
    const modals = document.querySelectorAll('.modal-backdrop.show');
    modals.forEach(modal => {
      if (event.target === modal) {
        modal.classList.remove('show');
      }
    });
  });
  
  // Project status change functionality
  const statusChangeButtons = document.querySelectorAll('.status-change-button');
  
  statusChangeButtons.forEach(button => {
    button.addEventListener('click', function() {
      const projectId = button.getAttribute('data-project-id');
      const newStatus = button.getAttribute('data-status');
      
      // In a real app, this would make an API call
      // For the prototype, we'll just update the UI
      const statusBadge = document.querySelector(`#project-${projectId} .project-status`);
      if (statusBadge) {
        // Remove all status classes
        statusBadge.className = 'badge project-status';
        // Add new status class
        statusBadge.classList.add(`status-${newStatus}`);
        // Update text
        statusBadge.textContent = getStatusLabel(newStatus);
      }
      
      // Close the dropdown
      const dropdown = button.closest('.user-menu-dropdown');
      if (dropdown) {
        dropdown.classList.remove('show');
      }
      
      // Show success message
      showAlert('success', `Projektstatus erfolgreich auf "${getStatusLabel(newStatus)}" geändert.`);
    });
  });
  
  // Document upload functionality
  const documentUploadForm = document.getElementById('document-upload-form');
  
  if (documentUploadForm) {
    documentUploadForm.addEventListener('submit', function(event) {
      event.preventDefault();
      
      const fileInput = documentUploadForm.querySelector('input[type="file"]');
      const documentType = documentUploadForm.querySelector('select[name="document-type"]').value;
      
      if (fileInput.files.length > 0) {
        // In a real app, this would upload the file
        // For the prototype, we'll just update the UI
        const documentsList = document.getElementById('documents-list');
        if (documentsList) {
          const newDocument = createDocumentElement(
            'doc-' + Math.floor(Math.random() * 1000),
            fileInput.files[0].name,
            documentType,
            'Eingereicht',
            new Date().toLocaleDateString('de-DE')
          );
          documentsList.appendChild(newDocument);
        }
        
        // Reset form
        documentUploadForm.reset();
        
        // Close modal
        const modal = documentUploadForm.closest('.modal-backdrop');
        if (modal) {
          modal.classList.remove('show');
        }
        
        // Show success message
        showAlert('success', 'Dokument erfolgreich hochgeladen.');
      }
    });
  }
  
  // V-Geld application functionality
  const vgeldForm = document.getElementById('vgeld-application-form');
  
  if (vgeldForm) {
    vgeldForm.addEventListener('submit', function(event) {
      event.preventDefault();
      
      const amount = vgeldForm.querySelector('input[name="amount"]').value;
      const description = vgeldForm.querySelector('textarea[name="description"]').value;
      
      // In a real app, this would submit the application
      // For the prototype, we'll just update the UI
      const transactionsList = document.getElementById('transactions-list');
      if (transactionsList) {
        const newTransaction = createTransactionElement(
          'trans-' + Math.floor(Math.random() * 1000),
          amount,
          'verrechnungsgeld',
          description,
          'beantragt',
          new Date().toLocaleDateString('de-DE')
        );
        transactionsList.appendChild(newTransaction);
      }
      
      // Reset form
      vgeldForm.reset();
      
      // Close modal
      const modal = vgeldForm.closest('.modal-backdrop');
      if (modal) {
        modal.classList.remove('show');
      }
      
      // Show success message
      showAlert('success', 'V-Geld Antrag erfolgreich eingereicht.');
    });
  }
  
  // Transaction approval functionality
  const approveButtons = document.querySelectorAll('.approve-transaction');
  
  approveButtons.forEach(button => {
    button.addEventListener('click', function() {
      const transactionId = button.getAttribute('data-transaction-id');
      
      // In a real app, this would make an API call
      // For the prototype, we'll just update the UI
      const statusBadge = document.querySelector(`#transaction-${transactionId} .transaction-status`);
      if (statusBadge) {
        // Update status
        statusBadge.className = 'badge transaction-status';
        statusBadge.classList.add('badge-success');
        statusBadge.textContent = 'Genehmigt';
      }
      
      // Hide approve button
      button.style.display = 'none';
      
      // Show mark as paid button if user is buchhaltung
      const userRole = document.body.getAttribute('data-user-role');
      if (userRole === 'buchhaltung') {
        const markAsPaidButton = document.querySelector(`#transaction-${transactionId} .mark-as-paid`);
        if (markAsPaidButton) {
          markAsPaidButton.style.display = 'inline-block';
        }
      }
      
      // Show success message
      showAlert('success', 'Transaktion erfolgreich genehmigt.');
    });
  });
  
  // Mark transaction as paid functionality
  const markAsPaidButtons = document.querySelectorAll('.mark-as-paid');
  
  markAsPaidButtons.forEach(button => {
    button.addEventListener('click', function() {
      const transactionId = button.getAttribute('data-transaction-id');
      
      // In a real app, this would make an API call
      // For the prototype, we'll just update the UI
      const statusBadge = document.querySelector(`#transaction-${transactionId} .transaction-status`);
      if (statusBadge) {
        // Update status
        statusBadge.className = 'badge transaction-status';
        statusBadge.classList.add('badge-primary');
        statusBadge.textContent = 'Ausgezahlt';
      }
      
      // Hide mark as paid button
      button.style.display = 'none';
      
      // Show mark as settled button if transaction is abrechnung
      const transactionType = button.getAttribute('data-transaction-type');
      if (transactionType === 'abrechnung') {
        const markAsSettledButton = document.querySelector(`#transaction-${transactionId} .mark-as-settled`);
        if (markAsSettledButton) {
          markAsSettledButton.style.display = 'inline-block';
        }
      }
      
      // Show success message
      showAlert('success', 'Transaktion erfolgreich als ausgezahlt markiert.');
    });
  });
  
  // Mark transaction as settled functionality
  const markAsSettledButtons = document.querySelectorAll('.mark-as-settled');
  
  markAsSettledButtons.forEach(button => {
    button.addEventListener('click', function() {
      const transactionId = button.getAttribute('data-transaction-id');
      
      // In a real app, this would make an API call
      // For the prototype, we'll just update the UI
      const statusBadge = document.querySelector(`#transaction-${transactionId} .transaction-status`);
      if (statusBadge) {
        // Update status
        statusBadge.className = 'badge transaction-status';
        statusBadge.classList.add('badge-secondary');
        statusBadge.textContent = 'Abgerechnet';
      }
      
      // Hide mark as settled button
      button.style.display = 'none';
      
      // Show success message
      showAlert('success', 'Transaktion erfolgreich als abgerechnet markiert.');
    });
  });
  
  // Helper functions
  function getStatusLabel(status) {
    const statusLabels = {
      'angemeldet': 'Angemeldet',
      'projektfreigabe_beantragt': 'Projektfreigabe beantragt',
      'projektfreigabe_erteilt': 'Projektfreigabe erteilt',
      'produktionsfreigabe_beantragt': 'Produktionsfreigabe beantragt',
      'produktionsfreigabe_erteilt': 'Produktionsfreigabe erteilt',
      'produktion': 'In Produktion',
      'postproduktion': 'In Postproduktion',
      'abgeschlossen': 'Abgeschlossen'
    };
    return statusLabels[status] || status;
  }
  
  function createDocumentElement(id, name, type, status, date) {
    const li = document.createElement('li');
    li.className = 'document-item';
    li.id = `document-${id}`;
    
    const typeLabels = {
      'antrag_projektfreigabe': 'Antrag Projektfreigabe',
      'projektübersicht': 'Projektübersicht',
      'drehbuch': 'Drehbuch',
      'kalkulation': 'Kalkulation',
      'finanzierungsplan': 'Finanzierungsplan',
      'zeitplan': 'Zeitplan',
      'drehplan': 'Drehplan',
      'motivliste': 'Motivliste',
      'stabliste': 'Stabliste',
      'besetzungsliste': 'Besetzungsliste',
      'antrag_produktionsfreigabe': 'Antrag Produktionsfreigabe',
      'produktionsvertrag': 'Produktionsvertrag',
      'motivvertrag': 'Motivvertrag',
      'darstellervertrag': 'Darstellervertrag',
      'v_geld_antrag': 'V-Geld Antrag',
      'v_geld_abrechnung': 'V-Geld Abrechnung'
    };
    
    const typeLabel = typeLabels[type] || type;
    
    li.innerHTML = `
      <div class="document-icon">
        <i class="fas fa-file-alt"></i>
      </div>
      <div class="document-info">
        <div class="document-title">${name}</div>
        <div class="document-meta">
          <span class="badge badge-primary">${typeLabel}</span>
          <span class="badge badge-secondary">${status}</span>
          <span class="text-sm">${date}</span>
        </div>
      </div>
      <div class="document-actions">
        <button class="btn btn-outline btn-sm">
          <i class="fas fa-download"></i>
        </button>
      </div>
    `;
    
    return li;
  }
  
  function createTransactionElement(id, amount, type, description, status, date) {
    const tr = document.createElement('tr');
    tr.id = `transaction-${id}`;
    
    const typeLabels = {
      'vorkosten': 'Vorkosten',
      'verrechnungsgeld': 'Verrechnungsgeld',
      'abrechnung': 'Abrechnung'
    };
    
    const statusLabels = {
      'beantragt': 'Beantragt',
      'genehmigt': 'Genehmigt',
      'ausgezahlt': 'Ausgezahlt',
      'abgerechnet': 'Abgerechnet'
    };
    
    const statusClasses = {
      'beantragt': 'badge-warning',
      'genehmigt': 'badge-success',
      'ausgezahlt': 'badge-primary',
      'abgerechnet': 'badge-secondary'
    };
    
    const typeLabel = typeLabels[type] || type;
    const statusLabel = statusLabels[status] || status;
    const statusClass = statusClasses[status] || 'badge-secondary';
    
    const userRole = document.body.getAttribute('data-user-role');
    const canApprove = (userRole === 'herstellungsleitung' || userRole === 'buchhaltung') && status === 'beantragt';
    const canMarkAsPaid = userRole === 'buchhaltung' && status === 'genehmigt';
    const canMarkAsSettled = userRole === 'buchhaltung' && status === 'ausgezahlt' && type === 'abrechnung';
    
    tr.innerHTML = `
      <td>${date}</td>
      <td>${typeLabel}</td>
      <td>${parseFloat(amount).toLocaleString('de-DE')} €</td>
      <td>${description || '-'}</td>
      <td><span class="badge transaction-status ${statusClass}">${statusLabel}</span></td>
      <td class="text-right">
        <button class="btn btn-sm btn-success approve-transaction" data-transaction-id="${id}" style="display: ${canApprove ? 'inline-block' : 'none'}">
          Genehmigen
        </button>
        <button class="btn btn-sm btn-primary mark-as-paid" data-transaction-id="${id}" data-transaction-type="${type}" style="display: ${canMarkAsPaid ? 'inline-block' : 'none'}">
          Als ausgezahlt markieren
        </button>
        <button class="btn btn-sm btn-secondary mark-as-settled" data-transaction-id="${id}" style="display: ${canMarkAsSettled ? 'inline-block' : 'none'}">
          Als abgerechnet markieren
        </button>
      </td>
    `;
    
    return tr;
  }
  
  function showAlert(type, message) {
    // Create alert element
    const alert = document.createElement('div');
    alert.className = `alert alert-${type}`;
    alert.textContent = message;
    
    // Add to page
    const alertContainer = document.getElementById('alert-container');
    if (alertContainer) {
      alertContainer.appendChild(alert);
      
      // Remove after 5 seconds
      setTimeout(() => {
        alert.remove();
      }, 5000);
    }
  }
});
