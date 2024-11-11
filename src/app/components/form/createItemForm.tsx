"use client";

import { createItem } from "@/app/api/service/item/api";
import React, { useState } from "react";

const CreateItemForm = () => {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const newItem = { name, description };

    try {
      await createItem(newItem);
      alert("아이템이 성공적으로 생성되었습니다.");
      setName("");
      setDescription("");
    } catch (error) {
      console.error("Error creating item:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>아이템 생성</h2>
      <div>
        <label>이름:</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>설명:</label>
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="bg-white">
        생성
      </button>
    </form>
  );
};

export default CreateItemForm;
