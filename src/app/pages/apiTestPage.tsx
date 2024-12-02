'use client';

import React, { useState, useEffect } from 'react';
import {
  getAllItems,
  createItem,
  updateItem,
  deleteItem,
} from '../api/service/item/api';

interface Item {
  id: number;
  name: string;
  description: string;
}

const ApiTestPage = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [newItem, setNewItem] = useState({ name: '', description: '' });
  const [editingItem, setEditingItem] = useState<Item | null>(null);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   fetchItems();
  // }, []);

  const fetchItems = async () => {
    setLoading(true);
    const data = await getAllItems();
    setItems(data);
    setLoading(false);
  };

  const handleCreate = async () => {
    if (newItem.name && newItem.description) {
      const createdItem = await createItem(newItem);
      setItems([...items, createdItem]);
      setNewItem({ name: '', description: '' });
    }
  };

  const handleUpdate = async () => {
    if (editingItem) {
      const updatedItem = await updateItem(editingItem.id, editingItem);
      setItems(
        items.map((item) => (item.id === updatedItem.id ? updatedItem : item)),
      );
      setEditingItem(null);
    }
  };

  const handleDelete = async (id: number) => {
    await deleteItem(id);
    setItems(items.filter((item) => item.id !== id));
  };

  const handleEdit = (item: Item) => {
    setEditingItem(item);
  };

  return (
    <div className="bg-black-8 min-h-screen p-8 text-black-0">
      <h1 className="text-3xl font-bold text-pink-4 mb-6">CRUD Application</h1>

      <div className="bg-black-7 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-pink-3 mb-4">
          {editingItem ? 'Edit Item' : 'Create New Item'}
        </h2>
        <input
          type="text"
          placeholder="Name"
          value={editingItem ? editingItem.name : newItem.name}
          onChange={(e) =>
            editingItem
              ? setEditingItem({ ...editingItem, name: e.target.value })
              : setNewItem({ ...newItem, name: e.target.value })
          }
          className="w-full mb-4 p-3 rounded-md bg-black-6 text-black-1 border border-black-4 focus:outline-none focus:ring-2 focus:ring-pink-5 transition"
        />
        <input
          type="text"
          placeholder="Description"
          value={editingItem ? editingItem.description : newItem.description}
          onChange={(e) =>
            editingItem
              ? setEditingItem({
                  ...editingItem,
                  description: e.target.value,
                })
              : setNewItem({ ...newItem, description: e.target.value })
          }
          className="w-full mb-4 p-3 rounded-md bg-black-6 text-black-1 border border-black-4 focus:outline-none focus:ring-2 focus:ring-pink-5 transition"
        />
        <div className="flex space-x-2">
          <button
            onClick={editingItem ? handleUpdate : handleCreate}
            className="w-full py-2 bg-pink-5 text-black-0 font-semibold rounded-md hover:bg-pink-6 transition duration-300"
          >
            {editingItem ? 'Update' : 'Create'}
          </button>
          {editingItem && (
            <button
              onClick={() => setEditingItem(null)}
              className="w-full py-2 bg-black-4 text-black-0 font-semibold rounded-md hover:bg-black-3 transition duration-300"
            >
              Cancel
            </button>
          )}
        </div>
      </div>
      {loading ? (
        <p className="text-black-2">Loading...</p>
      ) : (
        <ul className="mt-8 space-y-4">
          {items.map((item) => (
            <li
              key={item.id}
              className="bg-black-6 p-4 rounded-lg text-black-1 flex justify-between items-center"
            >
              <div>
                <strong className="text-pink-2">{item.name}</strong>:{' '}
                <span className="text-black-1">{item.description}</span>
              </div>
              <div className="space-x-2">
                <button
                  onClick={() => handleEdit(item)}
                  className="px-3 py-1 rounded-md bg-pink-5 text-black-0 hover:bg-pink-6 transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="px-3 py-1 rounded-md bg-black-4 text-black-0 hover:bg-black-3 transition"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ApiTestPage;
