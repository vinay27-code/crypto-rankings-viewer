
# 🪙 Crypto Rankings Viewer

A clean and minimal React application that fetches and displays real-time cryptocurrency rankings using the CoinGecko API. Built with Redux Toolkit for state management and Parcel for bundling.

## 📸 Preview

Displays the top 50 cryptocurrencies including:
- Name
- Price in USD
- Market Cap Rank
- Coin image/logo

- ![Screenshot 2025-06-21 160331](https://github.com/user-attachments/assets/f8d5f444-54d0-437f-95a1-fbbb8da6988c)


## 🚀 Features

- 🔄 Asynchronous data fetching via Redux Toolkit's `createAsyncThunk`
- ⚛️ State managed with Redux slice
- 🔍 API integration with CoinGecko
- 🎨 Clean UI layout using inline styles
- 📦 Fast bundling and dev server via Parcel

## 🧰 Tech Stack

- React 19
- Redux Toolkit
- React Redux
- Parcel
- CoinGecko Public API

## 🗂 Folder Structure

```
.
├── CoinCard.jsx       # Component to render each coin
├── CoinCreate.jsx     # Main UI component with dispatch logic
├── slice.jsx          # Redux slice using createAsyncThunk
├── store.jsx          # Redux store setup
├── p1.jsx             # Entry point
├── p1.html            # HTML container for React
├── package.json
└── package-lock.json
```

## 📦 Installation

1. **Clone the repository**
```bash
git clone https://github.com/vinay27-code/crypto-rankings-viewer.git
cd crypto-rankings-viewer
```

2. **Install dependencies**
```bash
npm install
```

3. **Run the app**
```bash
npx parcel p1.html
```

4. **Visit**
```url
http://localhost:1234
```

## 🔗 API Used

- [CoinGecko Markets API](https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd)

## 📝 Notes

- Ensure you have Node.js >= 16
- No API key needed (CoinGecko has public endpoints)
- Displays data for top 50 coins by market cap

## 📄 License

[MIT](LICENSE)

---

Made with 💻 by [Vinay](https://github.com/vinay27-code)
