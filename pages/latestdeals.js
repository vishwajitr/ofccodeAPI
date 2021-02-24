import Head from 'next/head';
import HomeContent from './home';
import axios from 'axios';
var Papa = require("papaparse");


const LatestDeals = (props) => {
  
  return (
    <div className="container">
      <HomeContent couponsData1={props.couponsData1} headerTag1="Latest Coupons and Deals" />
    </div>
  )
}

export const getStaticProps  = async () => {
  const res = await axios.get('http://127.0.0.1:3000/CouponsData/Banggood__deals.csv');
  // const res = await axios.get('https://export.admitad.com/en/webmaster/websites/1777052/coupons/export/?region=00&code=eyq48w62bj&user=vishwajit82&format=rss');
 
  const data = Papa.parse(res.data);
    return {
      props: {
        couponsData1 :data
      }
    };
    
  }
  

export default LatestDeals