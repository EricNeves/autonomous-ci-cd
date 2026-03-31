"use client";

import {
  Box,
  Grid,
  Image,
  Text,
  Heading,
  Badge,
  Spinner,
  Center,
  Alert,
} from "@chakra-ui/react";
import { useDragonBall } from "@/hooks/useDragonBall";

export default function Home() {
  const { data: characters, isLoading, isError } = useDragonBall();

  if (isLoading) {
    return (
      <Center h="100vh">
        <Spinner size="xl" />
      </Center>
    );
  }

  if (isError) {
    return (
      <Box w={"800px"} maxW={"100%"} margin={'0 auto'}>
        <Center my={'4'}>
          <Alert.Root status="error">
            <Alert.Indicator />
            <Alert.Title>
              There was an error processing your request
            </Alert.Title>
          </Alert.Root>
        </Center>
      </Box>
    );
  }

  return (
    <Box p={6} w={"1300px"} maxW={"100%"} margin={"0 auto"}>
      <Heading mb={6}>Dragon Ball Characters</Heading>

      <Grid
        lg={{ gridTemplateColumns: "repeat(4, minmax(220px, 1fr))" }}
        md={{ gridTemplateColumns: "repeat(2, minmax(220px, 1fr))" }}
        sm={{ gridTemplateColumns: "1fr" }}
        gap={6}
      >
        {characters?.map((char) => (
          <Box
            key={char.id}
            borderWidth="1px"
            borderRadius="xl"
            overflow="hidden"
            p={4}
            _hover={{ shadow: "lg", transform: "scale(1.02)" }}
            transition="0.2s"
          >
            <Image
              src={char.image}
              alt={char.name}
              mx="auto"
              h="200px"
              objectFit="contain"
            />

            <Heading size="md" mt={4}>
              {char.name}
            </Heading>

            <Text fontSize="sm" color="gray.500">
              {char.race}
            </Text>

            <Badge mt={2} colorScheme="purple">
              KI: {char.ki}
            </Badge>
          </Box>
        ))}
      </Grid>
    </Box>
  );
}
