const Loading = () => {
    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/90 backdrop-blur-sm">
            <div className="w-16 h-16 border-4 border-blue-200 rounded-full border-t-blue-500 animate-spin"></div>
            <p className="mt-4 text-gray-600">Loading</p>
        </div>
    );
};

export default Loading;
