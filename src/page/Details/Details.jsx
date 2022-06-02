import {
    Text,
    View,
    Button,
    VStack,
    Image,
    Box,
    Heading,
    Center,
    ScrollView,
} from "native-base";

import { StyleSheet } from "react-native";

const Details = ({ navigation, route }) => {
    const { data } = route.params;
    return (
        <Center>
            <VStack>
                <ScrollView>
                    <Box alignItems="center">
                        <Center>
                            <Heading mt={5} marginBottom={2} size={"xl"}>
                                {data.name}
                            </Heading>
                        </Center>
                        <Image
                            source={{
                                uri: `https://picsum.photos/id/${
                                    data.id + 29
                                }/200/300`,
                            }}
                            alt="Details"
                            size="xl"
                            width="98%"
                            height="400px"
                            borderRadius={10}
                        />

                        <Center marginTop={5}>
                            <Heading size="lg">@{data.restaurant}</Heading>
                        </Center>
                        <Box
                            paddingLeft={1}
                            textAlign="justify"
                            marginBottom={10}
                        >
                            <Text>{data.description}</Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Voluptatem magni odit dolore praesentium nobis
                            modi quam consequuntur accusamus beatae possimus.
                            Odit ducimus autem molestias et voluptates non
                            itaque assumenda cum!
                        </Box>

                        {/* Afficher les fifférents ingrédients de la recette */}
                        <Box
                            borderWidth={1}
                            borderColor="coolGray.200"
                            borderRadius={10}
                            padding={2}
                            marginBottom={5}
                        >
                            <Heading size="md">Ingredients</Heading>
                            <Box textAlign="justify" marginBottom={10}>
                                <Text>{data.ingredients}</Text>
                            </Box>
                        </Box>

                        <Button
                            // position={'relative'}
                            shadow={2}
                            onPress={() => navigation.goBack()}
                            // marginBottom={30}
                        >
                            Retourner à l'accueil
                        </Button>
                    </Box>
                </ScrollView>
            </VStack>
        </Center>
    );
};

const styles = StyleSheet.create({});

export default Details;
