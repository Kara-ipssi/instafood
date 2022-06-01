import { MainContext } from "../../context";
import { useContext, useEffect, useState } from "react";
import { Box, Text, Heading, Center, VStack,
    Skeleton, AspectRatio, Image, Stack, HStack,
    ScrollView, Button, Spinner
} from "native-base";

import {MenuCard} from "../../component";

const Home = ({navigation}) => {

    const { data, getData } = useContext(MainContext);
    const [nombreDisplay, setNombreDisplay] = useState(3);
    const moreItems = () => {
        setNombreDisplay( nombreDisplay + 2)
    }

    useEffect(() => {
        getData();
    }, [])
    
    return (
        <VStack 
            alignItems="center" 
            space="4"
        >
            <ScrollView
                _contentContainerStyle={{
                    px: "20px",
                    mb: "4",
                    minW: "72"
                }}
                onMomentumScrollEnd={()=>moreItems()}
            >
            <Center w="350">
                {
                    data === [] ? 
                    (
                        <VStack marginBottom="10" w="90%" maxW="400" borderWidth="1" space={8} overflow="hidden" rounded="md" _dark={{borderColor: "coolGray.500"}} _light={{borderColor: "coolGray.200"}}>
                            <Skeleton h="40" />
                            <Skeleton.Text px="4" />
                            <Skeleton px="4" my="4" rounded="md" startColor="primary.100" />
                        </VStack>
                    )
                    :
                    (
                        data[0].slice(0, nombreDisplay).map((item, key) => {
                            return <MenuCard navigation={navigation}  key={key} data={item}/>
                        })
                    )
                }
            </Center>
            <HStack space={2} justifyContent="center">
                <Spinner accessibilityLabel="Loading posts" />
                <Heading color="primary.500" fontSize="md" />
            </HStack>
            </ScrollView>
        </VStack>
    )
}

export default Home;