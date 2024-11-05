
  

# ThndrTask: Stock Viewer and Search App

  

**ThndrTask** is a mobile app built with React Native that allows users to view and search real-time stock data. By leveraging the **Polygon.io** public API, ThndrTask enables users to quickly access stock information. Whether you're a trader, investor, or simply interested in keeping track of stock prices, ThndrTask makes it easy to search and explore your favorite stocks on the go.**

  

## Features

  

- **Search Stocks by Ticker Symbol**: Quickly search for any stock by entering its ticker symbol (e.g., AAPL, TSLA, GOOGL).

- **Real-Time Stock Data**: Get real-time information about stocks, including:

- **User-Friendly Interface**: Simple and intuitive UI for a smooth user experience.

- **Polygon.io API Integration**: Fetch up-to-date stock market data from Polygon.io, providing reliable and accurate information.

  

## Technologies Used

  

- **Frontend**:

- React Native (for building cross-platform mobile apps)

- Axios (for making API requests)

- TypeScript

- **API**:

- **Polygon.io API**: Used to fetch real-time and historical stock data. You can sign up for an API key at [Polygon.io](https://polygon.io/).

  

  

## Getting Started

  

**Follow the steps below to set up and run the ThndrTask app locally.**

  

### Prerequisites

  

- **Node.js** installed on your machine.

- **React Native environment setup** (Node.js, Watchman, React Native CLI, and Android/iOS development tools). Follow the official [React Native Environment Setup guide](https://reactnative.dev/docs/environment-setup).

- A **Polygon.io API key** (sign up at [Polygon.io](https://polygon.io/)).

  

### Installation

  

1. **Clone the repository**:

```bash

git clone https://github.com/your-username/ThndrTask.git

```

  

**2. **Navigate into the project directory**:**

```bash
cd ThndrTask

```

  

3. **Install dependencies**:

```bash

npm install

```

  

4. **Configure your Polygon.io API key**:

- Add your API key to the `src/utils/apiClient.ts` file:

```

params: {apiKey:your_polygon_api_key_here}

```

  

5. **Run the app**:

- For iOS (make sure you have Xcode installed):

```bash

npx react-native run-ios

```

- For Android (ensure you have Android Studio and an emulator set up):

```bash
npx react-native run-android
```

  

6. Open the app on your emulator or physical device and start searching for stocks!

  

### Testing

  

You can test specific app features by running the following command:

```bash

npm test

```

  

## App Features Overview

  

### 1. **Search Stocks**

- The app provides a search bar to allow users to search for stocks by their ticker symbol (e.g., "AAPL" for Apple or "GOOGL" for Google).

- As users type, suggestions will automatically appear to help them quickly find the correct ticker.

  
### 2. **Stock Data**

- The App Home Screen views the stocks sorted alphabetically by ticker

- The app pulls this data in real-time from the Polygon.io API.

  

### 3. **Real-Time Updates**

- The stock data is updated dynamically, ensuring that users always have access to the latest market information.

  

### 4. **Error Handling**

- If a stock ticker is not found or if there is an issue with the API, the app will display a clear error message to the user.

  

## API Usage

  

The app uses the **Polygon.io API** to fetch stock data. You'll need to sign up at Polygon.io and get an API key to authenticate the requests.

  

### API Endpoints

  

- **Search for a stock ticker**: `https://api.polygon.io/v2/reference/tickers`

  

### Example API Request:

To get the latest price and data for a stock (e.g., `AAPL` for Apple), the app makes a request to:

```

https://api.polygon.io/v2/aggs/ticker/AAPL/prev?apiKey=your_polygon_api_key**

**```

  

### Example Response:

The response from the API provides key details about the stock, such as:

```json

{

"ticker": "AAPL",

"close": 145.3,

"high": 146.5,

"low": 143.8,

"volume": 130000000,

"change": 1.2,

"percent_change": 0.83
}

```

  

Make sure your API key is kept secure, and you can monitor your API usage and rate limits on the Polygon.io dashboard.

  

## Contributing

  

We welcome contributions from the community! To contribute to ThndrTask:

  

1. **Fork the repository**.

2. **Create a new branch** for your feature or fix (`git checkout -b feature-name`).

3. **Make your changes** and ensure everything is working correctly.

4. **Commit your changes** (`git commit -am 'Add feature or fix bug'`).

5. **Push to your forked repository** (`git push origin feature-name`).

6. **Create a Pull Request**.

  

### Code Style

- Follow the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) for consistency.

- Ensure that any new functionality is tested and well-documented.

  

## License

  

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

  

## Acknowledgments

  

- **Polygon.io**: For providing an easy-to-use API for stock data.

- **React Native**: For enabling cross-platform mobile app development.

- **Open-source community**: For contributing helpful libraries and tools that make development faster and easier.

  

---

  

Feel free to open an issue or reach out if you have any questions, feature requests, or feedback! Happy coding and investing!
