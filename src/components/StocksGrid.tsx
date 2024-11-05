import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';
// import BootSplash from 'react-native-bootsplash';

import StockCard from './StockCard';
import {getStocks, loadMoreStocks, searchStocks} from '../utils/apiService';
import SearchBar from './SearchBar';
import debounce from '../utils/debounce';
import {IStock} from '../utils/interface';

function StocksGrid(): React.JSX.Element {
  const [stocks, setStocks] = useState<IStock[]>([
    {ticker: '', name: ''},
    {ticker: '', name: ''},
  ]);
  const [nextUrl, setNextUrl] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [isLoadMoreStocks, setIsLoadMoreStocks] = useState<boolean>(true);

  const loadInitialStocks = async () => {
    setLoading(true);
    try {
      const res = await getStocks();
      setLoading(false);
      setNextUrl(res.next_url);
      setStocks(res.results);
    } catch {
      setLoading(false);
      console.error('error');
    }
  };

  useEffect(() => {
    loadInitialStocks();
    // loadInitialStocks().finally(async () => {
    //   // await BootSplash.hide({fade: true});
    //   console.log('BootSplash has been hidden successfully');
    // });
  }, []);

  const loadMore = async () => {
    setLoading(true);
    try {
      const res = await loadMoreStocks(nextUrl);
      setLoading(false);
      setNextUrl(res.next_url);
      setStocks([...stocks, ...res.results]);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  const searchInStocks = async (query: string) => {
    try {
      if (query.length === 0) {
        loadInitialStocks();
        setIsLoadMoreStocks(true);
      } else {
        const res = await searchStocks(query);
        console.info(res);
        setStocks(res.results);
        setIsLoadMoreStocks(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      (
      <>
        <SearchBar onChange={searchInStocks} />
        <FlatList
          testID="FlatList"
          showsVerticalScrollIndicator={false}
          data={stocks}
          directionalLockEnabled
          numColumns={2}
          ListFooterComponent={<View style={styles.gridFooter} />}
          keyExtractor={item => item.ticker}
          contentContainerStyle={styles.gridContainer}
          onEndReached={isLoadMoreStocks ? debounce(loadMore, 500) : null}
          renderItem={({item}) => (
            <StockCard ticker={item.ticker} name={item.name} />
          )}
        />
      </>
      )
      {loading && (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="#ffffff" />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191a2b',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gridContainer: {
    width: '85%',
    height: '100%',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#191a2b',
  },
  gridFooter: {height: 100},
  loading: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default StocksGrid;
