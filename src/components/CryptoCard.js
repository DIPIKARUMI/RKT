import React from 'react';
import { HStack, VStack, Heading, Badge, Divider, Text, Image } from '@chakra-ui/react';
import {Link} from 'react-router-dom'
const CryptoCard = ({
  coin: {uuid, name, rank, symbol, iconUrl, price, marketCap, change, color },
}) => {
  // console.log(id,'coin')
  return (
    <VStack
    as={Link}
    to={`/coins/${uuid}`}
    align="space-between"
    spacing="4"
    boxShadow="md"
    p="4"
    borderRadius="xl"
    transition ="all .2s ease-in-out"

    _hover={{
        transform :"scale(1.05)",
        transition :"all .2s ease-in-out",
        boxShadow: "xl",
    }}>
    <HStack justify="space-between">
        <HStack>
        <Text fontSize="xs">{rank}</Text>
        <Heading fontSize="md">{name}</Heading>
        <Badge colorScheme={change < 0 ? "red":"green"}>{symbol}</Badge>
        </HStack>
          <Image src={iconUrl} height="20px" width ="20px"/>
    </HStack>    
        <VStack>
          <Divider bg={color}/>
          <Text>Price: {Math.round(price * 100)/100} $</Text>
          <Text>Market Cap: {Math.round((marketCap/1000000000) * 100)/100}</Text>
          <Text>Daily Change: {""}
          <Badge colorScheme={change < 0 ? "red":"green"}>{change}%</Badge>
          </Text>
        </VStack>
    </VStack>
  );
};

export default CryptoCard;
