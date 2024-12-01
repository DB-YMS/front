module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '3px 4px 8px rgba(0, 0, 0, 0.3), 0px 3px 4px rgba(0, 0, 0, 0.1)',
        // 아래쪽이 진하고 양옆이 살짝 있는 그림자
      },
    },
  },
  plugins: [],
};

