import React from "react";

interface InputProps {
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ label, type = "text", value, onChange }) => {
  return (
    <div className="w-full mb-4">
      <label className="block text-sm font-medium mb-1 text-gray-300">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2 rounded-lg bg-gray-800/60 border border-gray-700 text-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition"
      />
    </div>
  );
};

export default Input;
