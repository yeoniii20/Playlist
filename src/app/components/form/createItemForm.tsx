'use client';

import { createItem } from '@/app/api/service/item/api';
import React, { useState } from 'react';

const CreateItemForm = () => {
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const newItem = { name, description };

    try {
      await createItem(newItem);
      alert('아이템이 성공적으로 생성되었습니다.');
      setName('');
      setDescription('');
    } catch (error) {
      console.error('Error creating item:', error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-black-6 shadow-lg rounded-lg p-8"
    >
      <h2 className="text-2xl font-bold text-white mb-6 text-center">
        아이템 생성
      </h2>

      {/* Name Input */}
      <div className="mb-4">
        <label className="block text-gray-300 text-sm font-medium mb-2">
          이름
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 bg-black-5 text-white border border-black-4 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
          placeholder="아이템 이름을 입력하세요"
          required
        />
      </div>

      {/* Description Input */}
      <div className="mb-6">
        <label className="block text-gray-300 text-sm font-medium mb-2">
          설명
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-3 h-32 bg-black-5 text-white border border-black-4 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
          placeholder="아이템 설명을 입력하세요"
          required
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-3 bg-pink-500 text-white font-semibold rounded-md hover:bg-pink-600 transition duration-300"
      >
        생성
      </button>
    </form>
  );
};

export default CreateItemForm;
