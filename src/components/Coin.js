const Coin = ({name,currentPrice,symbol,marketCap,totalVolume,image,priceChangePercentage24h,last_updated}) => 
{
  
  return (
    <tr>
    <td><img src={image} alt={name + " image"}  className="coinImage"/></td>
    <td>{name}</td>
    <td>${currentPrice}</td>
    <td>{symbol}</td>
    <td>${marketCap}</td>
    <td>${totalVolume}</td>
    <td> {priceChangePercentage24h < 0 ? (
          <p>{priceChangePercentage24h.toFixed(2)}%</p>
        ) : (
          <p>{priceChangePercentage24h.toFixed(2)}%</p>
        )}</td>
        <td>{last_updated}</td>
    </tr>
  )
}

export default Coin