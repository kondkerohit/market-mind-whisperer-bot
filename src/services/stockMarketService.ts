
// This file contains mock data and responses for the Stock Market Insights Bot

// Mock stock data
export const mockStockData = {
  "AAPL": { price: 198.45, change: +1.23 },
  "MSFT": { price: 425.52, change: +2.67 },
  "GOOG": { price: 175.89, change: -0.42 },
  "AMZN": { price: 184.21, change: +3.15 },
  "TSLA": { price: 173.80, change: -1.56 },
  "META": { price: 487.92, change: +4.21 },
  "NVDA": { price: 885.64, change: +15.32 },
};

// Mock market news
export const marketNews = [
  {
    title: "Fed Signals Potential Rate Cut in Coming Months",
    snippet: "Federal Reserve officials hint at possible interest rate cuts if inflation continues to ease."
  },
  {
    title: "Tech Stocks Rally on Strong Earnings Reports",
    snippet: "Major tech companies exceed quarterly expectations, driving market gains."
  },
  {
    title: "Global Markets React to Economic Data",
    snippet: "International markets show mixed performance following new economic indicators."
  },
  {
    title: "New Regulations Impact Financial Sector",
    snippet: "Banking stocks fluctuate as regulators announce new compliance requirements."
  }
];

// Financial term definitions
export const financialTerms = {
  "stock": "A stock is a type of investment that represents ownership in a company. When you buy a stock, you're buying a small piece of that company.",
  
  "etf": "An ETF (Exchange-Traded Fund) is an investment fund that trades on stock exchanges. ETFs typically hold assets like stocks, bonds, or commodities and trade close to their net asset value.",
  
  "dividend": "A dividend is a payment made by a company to its shareholders, usually as a distribution of profits. It's typically paid in cash on a quarterly basis.",
  
  "bear market": "A bear market occurs when a market experiences prolonged price declines, typically when prices fall 20% or more from recent highs.",
  
  "bull market": "A bull market is a financial market where prices are rising or expected to rise. It's characterized by optimism and investor confidence.",
  
  "portfolio": "A portfolio is a collection of financial investments like stocks, bonds, cash, and other assets held by an individual or organization.",
  
  "mutual fund": "A mutual fund is an investment vehicle that pools money from many investors to purchase securities like stocks and bonds, managed by professional fund managers.",
  
  "ipo": "An IPO (Initial Public Offering) is the process of offering shares of a private company to the public for the first time, allowing a company to raise capital from public investors.",
  
  "volatility": "Volatility measures how much the price of a security fluctuates over time. Higher volatility means the price can change dramatically over a short period in either direction.",
  
  "market cap": "Market capitalization is the total dollar value of a company's outstanding shares, calculated by multiplying the stock price by the number of outstanding shares."
};

// Generate a response based on user query
export function generateStockResponse(query: string): string {
  const lowerQuery = query.toLowerCase();
  
  // Check for stock price requests
  const stockMatch = Object.keys(mockStockData).find(symbol => 
    lowerQuery.includes(symbol.toLowerCase())
  );
  
  if (stockMatch && lowerQuery.includes("price")) {
    const stock = mockStockData[stockMatch];
    const direction = stock.change >= 0 ? "up" : "down";
    return `The last available price for ${stockMatch} was $${stock.price}, ${direction} $${Math.abs(stock.change).toFixed(2)}. Please check a live trading platform for the most current price information.`;
  }
  
  // Check for market news
  if (lowerQuery.includes("news") || lowerQuery.includes("headlines") || lowerQuery.includes("trend")) {
    const randomNews = [...marketNews].sort(() => 0.5 - Math.random()).slice(0, 3);
    return `Here are some recent market headlines:\n\n${randomNews.map(news => `• ${news.title}: ${news.snippet}`).join('\n\n')}`;
  }
  
  // Check for financial term definitions
  for (const [term, definition] of Object.entries(financialTerms)) {
    if (lowerQuery.includes(term)) {
      return definition;
    }
  }
  
  // General market response
  if (lowerQuery.includes("market") || lowerQuery.includes("dow") || lowerQuery.includes("s&p") || lowerQuery.includes("nasdaq")) {
    return "The market has shown mixed performance recently. Major indices like the S&P 500 and NASDAQ have experienced moderate volatility. For the most current market data, I recommend checking a financial news website or your trading platform.";
  }
  
  // Default response
  return "I'm your Stock Market Insights Bot! I can help with basic stock information, market concepts, and general trends. Remember, I don't provide financial advice - just information to help you learn. What would you like to know about the stock market?";
}
