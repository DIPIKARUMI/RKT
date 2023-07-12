import React, { useState } from 'react';
import { useGetCoinsQuery } from '../../app/services/cryptoAPI';
import { Grid, Spinner, GridItem } from '@chakra-ui/react';
import CryptoCard from '../../components/CryptoCard';
import Search from '../../components/Search';
import { useToast } from '@chakra-ui/react';

const Home = () => {
  const toast = useToast();
  const [search ,setSearch]= useState("");
  const { data, isLoading, error } = useGetCoinsQuery();
  console.log(search);
  if (error){
    toast({
      title:"Error",
      description:error.data.message,
      status :"error",
    });
  }

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
        <Search  setSearch={setSearch}/>{
          <Grid
          gap ="4"
          p={4}
          gridTemplateColumns={`repeat(auto-fit,minmax(200px,1fr))`}>
            {data && data.data.coins.filter((coin)=> coin.name.toLowerCase().includes(search)).map((coin) => (
              <GridItem key={coin.uuid}>

                {console.log(coin,'coin')}
                <CryptoCard coin={coin} />
              </GridItem>
            ))}
          </Grid>
}
        </>
            
      )}

    </>
  );
            
};

export default Home;
