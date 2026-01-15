const TabButton = ({ label, value, activeTab, setActiveTab }: { label: string; value: string; activeTab: string; setActiveTab: (value: string) => void }) => {
  const isActive = activeTab === value;

  return (
    <button
      onClick={() => setActiveTab(value)}
      className={`
        relative pb-3 text-sm font-medium transition
        ${isActive ? "text-orange-600" : "text-gray-500 hover:text-gray-700"}
      `}
    >
      {label}
      {isActive && (
        <span className="absolute left-0 -bottom-px h-px w-full bg-orange-500 rounded-full" />
      )}
    </button>
  );
};

export default TabButton;
