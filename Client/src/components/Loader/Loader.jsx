const Loader = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="relative w-16 h-16">
        {/* First spinning circle */}
        <div className="absolute inset-0 animate-spin rounded-full border-t-4 border-b-4 border-purple-600"></div>

        {/* Second circle, rotated 180deg */}
        <div className="absolute inset-0 animate-spin rounded-full border-t-4 border-b-4 border-purple-600 rotate-180"></div>
      </div>
    </div>
  );
};

export default Loader;
