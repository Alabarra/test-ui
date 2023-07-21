import React, { useEffect, useState } from 'react';
import * as Tabs from '@radix-ui/react-tabs';

interface CategoryItem {
  id: string;
  name: string;
}

interface VerticalListProps {
  categories: CategoryItem[];
}

const ProviderCategories: React.FC<VerticalListProps> = ({ categories }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (selectedIndex: number) => {
    setActiveTab(selectedIndex);
    console.log("categoria seleccionada:", selectedIndex);
  };
  return (
    <Tabs.Root className="overflow-x-auto whitespace-nowrap no-scrollbar border-b-2 border-gray-200">
      <Tabs.List className="flex space-x-4 p-2 pb-0 bg-white">
        {categories.map((category: CategoryItem, index: number) => (
          <Tabs.Trigger key={category.id} value={category.id} className={`px-4 py-0 focus:border-lime-500 focus:border-b-4 
          ${activeTab === index ? 'text-dark font-bold border-b-4 border-lime-500' : 'bg-white text-gray-400'
            }`}
            onClick={() => handleTabChange(index)}
            data-state={index === 0 ? 'active' : undefined}
            style={{ minHeight: '2rem', marginRight: '5px' }}
          >
            {category.name}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
    </Tabs.Root>
  );
};

export default ProviderCategories;
