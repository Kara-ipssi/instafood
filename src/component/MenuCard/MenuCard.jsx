import { 
    Text, VStack, Box, AspectRatio, Image, Center, Stack,
    Heading, HStack,Button
} from "native-base";

const MenuCard = ({data = [], navigation}) => {
    return (
        data === [] ? 
        (
            <VStack marginBottom="5" w="90%" maxW="400" borderWidth="1" space={8} overflow="hidden" rounded="md" _dark={{borderColor: "coolGray.500"}} _light={{borderColor: "coolGray.200"}}>
                <Skeleton h="40" />
                <Skeleton.Text px="4" />
                <Skeleton px="4" my="4" rounded="md" startColor="primary.100" />
            </VStack>
        )
        :
        (
            <VStack marginBottom="5" w="90%" maxW="400" borderWidth="1" space={8} overflow="hidden" rounded="md" _dark={{borderColor: "coolGray.500"}} _light={{borderColor: "coolGray.200"}}>
                <Box alignItems="center">
                    <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{borderColor: "coolGray.600",backgroundColor: "gray.700"}} _web={{shadow: 2,borderWidth: 0}} _light={{backgroundColor: "gray.50"}}>
                        <Box>
                            <AspectRatio w="100%" ratio={16 / 9}>
                                <Image source={{
                                    // uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
                                    uri: `https://picsum.photos/id/${data.id + 29}/200/300`
                                    }} alt="image" 
                                />
                            </AspectRatio>
                            <Box bg="violet.500" _dark={{bg: "violet.400"}} _text={{color: "warmGray.50",fontWeight: "700",fontSize: "xs"}} position="absolute" bottom="0" px="3" py="1.5">
                                {data.restaurant}
                            </Box>
                        </Box>
                        <Stack p="4" space={3}>
                            <Stack space={2}>
                                <Heading size="md" ml="-1">
                                    {
                                        data.name
                                    }
                                </Heading>
                                <Text fontSize="xs" _light={{color: "violet.500"}} _dark={{color: "violet.400"}} fontWeight="500" ml="-0.5" mt="-1">
                                    website: {data.web}
                                </Text>
                            </Stack>
                            <Text fontWeight="400">
                                {
                                    data.description
                                }
                            </Text>
                            <HStack alignItems="center" space={4} justifyContent="space-between">
                                <HStack alignItems="center">
                                    <Text color="coolGray.600" _dark={{color: "warmGray.200"}} fontWeight="400">
                                        {data.id} mins ago
                                    </Text>
                                </HStack>
                                <Box alignItems="center">
                                    <Button 
                                        onPress={() => navigation.navigate('Details', {
                                            data
                                        })}
                                    >
                                        Voir plus
                                    </Button>
                                </Box>
                            </HStack>
                        </Stack>
                    </Box>
                </Box>
            </VStack>
        )
    )
    
}

export default MenuCard;