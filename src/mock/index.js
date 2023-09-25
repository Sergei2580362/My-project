export const initialData = [
    { id: 1689271811491, date: '2023-01-01', name: 'dinner', expenseAmount: 1000, category: 'Food', isEditing: false },
    { id: 1689271811492, date: '2023-01-02', name: 'audi', expenseAmount: 200, category: 'Fuel', isEditing: false  },
    { id: 1689271811493, date: '2023-01-05', name: 'electricity', expenseAmount: 1100, category: 'Utility bills', isEditing: false  },
    { id: 1689271811494, date: '2023-01-12', name: 'bmw', expenseAmount: 250, category: 'Fuel', isEditing: false  },
    { id: 1689271811495, date: '2023-02-01', name: 'restoran', expenseAmount: 1050, category: 'Food', isEditing: false  },
    { id: 1689271811496, date: '2023-03-15', name: 'rent', expenseAmount: 270, category: 'Utility bills', isEditing: false  },
  ];

export const optionsForCategory = [
    { value: '', label: 'Choose category...' },
    { value: 'food', label: 'Food' },
    { value: 'fuel', label: 'Fuel' },
    { value: 'utility bills', label: 'Utility bills' }
  ];

export const optionsForSorting = [
    { value: '', label: 'Choose sorting...' },
    { value: 'Alphabetically', label: 'Alphabetically' },
    { value: 'By date', label: 'By date' },
    { value: 'By spending amount', label: 'By spending amount' },
    { value: 'By category', label: 'By category' }
  ]; 

export const optionsForTanleView = [
  { value: '', label: 'Choose view...' },
  { value: 'Display graph', label: 'Display graph' },
  { value: 'Display list', label: 'Display list' },
]; 
