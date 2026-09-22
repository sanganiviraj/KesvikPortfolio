import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';

export default function CustomDropdown({ options, value, onChange, label }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const selectedOption = options.find(o => o.value === value) || options[0];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {label && <label className="block text-xs font-bold text-slate-300 mb-1.5">{label}</label>}
      
      <button
        type="button"
        className="w-full px-4 py-3 bg-[#080b12] border-0 rounded-xl text-white text-sm flex items-center justify-between transition-all focus:outline-none focus:ring-2 focus:ring-brand-purple/60 cursor-pointer shadow-inner"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-slate-200">{selectedOption.label}</span>
        <ChevronDown size={16} className={`text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180 text-purple-400' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute z-50 mt-2 w-full bg-[#080b12]/95 backdrop-blur-xl border-0 rounded-xl shadow-2xl overflow-hidden py-1.5 animate-fadeIn">
          {options.map((opt) => {
            const isSelected = opt.value === value;
            return (
              <button
                key={opt.value}
                type="button"
                className={`w-full px-4 py-2.5 text-left text-xs font-semibold flex items-center justify-between transition-colors cursor-pointer border-0 ${
                  isSelected ? 'bg-brand-purple/20 text-purple-300' : 'text-slate-300 hover:bg-brand-purple/15 hover:text-white'
                }`}
                onClick={() => {
                  onChange(opt.value);
                  setIsOpen(false);
                }}
              >
                <span>{opt.label}</span>
                {isSelected && <Check size={14} className="text-purple-400" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
