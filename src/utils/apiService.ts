import axios from 'axios';
import apiClient from './apiClient';
import {IStockResponse} from './interface';

export const getStocks = async (): Promise<IStockResponse> => {
  try {
    const response = await apiClient.get('/tickers?active=true&limit=50');
    const newStocks = response.data.results.map(
      (stock: {name: string; ticker: string}) => ({
        name: stock.name,
        ticker: stock.ticker,
      }),
    );
    return {results: newStocks, next_url: response.data.next_url};
  } catch (error) {
    console.error('Error fetching stocks:', error);
    throw error;
  }
};

export const loadMoreStocks = async (url: string): Promise<IStockResponse> => {
  try {
    const response = await axios.get(url, {
      params: {apiKey: '9QWtJtsJ2cBzuTtB2A4ovfYr20AyaKTE'},
    });
    const newStocks = response.data.results.map(
      (stock: {name: string; ticker: string}) => ({
        name: stock.name,
        ticker: stock.ticker,
      }),
    );
    return {results: newStocks, next_url: response.data.next_url};
  } catch (error) {
    console.error('Error fetching more:', error);
    throw error;
  }
};

export const searchStocks = async (ticker: string): Promise<IStockResponse> => {
  try {
    const response = await apiClient.get(
      `/tickers?search=${ticker}&active=true&limit=10`,
    );
    const newStocks = response.data.results.map(
      (stock: {name: string; ticker: string}) => ({
        name: stock.name,
        ticker: stock.ticker,
      }),
    );
    return {results: newStocks, next_url: response.data.next_url};
  } catch (error) {
    console.error('Error fetching stocks:', error);
    throw error;
  }
};
