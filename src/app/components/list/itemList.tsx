'use client';

import React, { useEffect, useState } from 'react';
import { getAllItems, deleteItem } from '@/app/api/service/item/api.ts';

function ItemList() {
  const [items, setItems] = useState<[]>([]);

  const handleDelete = async (id: any) => {
    try {
      await deleteItem(id);
      fetchItems();
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  const fetchItems = async () => {
    try {
      const data = await getAllItems();
      setItems(data);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div>
      <h1>아이템 목록</h1>
      <ul>
        {items.map((item: any) => (
          <li key={item.id}>
            {item.name} - {item.description}
            <button onClick={() => handleDelete(item.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
