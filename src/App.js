import {useEffect, useState} from "react"
import axios from "axios"
import './App.css'
import Coin from "./components/Coin"
function App() {

  const [coins, setCoins] = useState([]);
  const [queryString, setQueryString] = useState('');

  useEffect(() => {
    axios
        .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        .then(response => {
          setCoins(response.data);
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        })
  }, [])

  const inputChangeHandler = e => setQueryString(e.target.value);

  const queryCoins = coins.filter( coin => coin.name.toLowerCase().includes(queryString.toLowerCase()));
  return (
    <div className="App">
       <div>
        <h1>Search a currency</h1>
        <input className="search" placeholder="Type a coin name.." type="text" onChange={inputChangeHandler} />
      </div>

    <table border="1">
      <thead>
      <tr>
        <td>Image</td>
        <td>Name</td>
        <td>Current Price</td>
        <td>Symbol</td>
        <td>Market Cap</td>
        <td>Total Volume</td>
        <td>24h Change</td>
        <td>last_updated</td>
      </tr>
      </thead>
      <tbody>
      {queryCoins.map(coin => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            currentPrice={coin.current_price}
            symbol={coin.symbol}
            marketCap={coin.market_cap}
            totalVolume={coin.total_volume}
            image={coin.image}
            priceChangePercentage24h={coin.price_change_percentage_24h}
            last_updated={coin.last_updated}
          />
        )
      })}
      </tbody>
    </table>
      
    </div>
  );
}

export default App;
