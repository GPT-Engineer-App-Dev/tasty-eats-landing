import { Container, Box, VStack, HStack, Text, Heading, Button, Image, IconButton } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8}>
        {/* Header Section */}
        <Box as="header" w="100%" textAlign="center" py={8}>
          <Heading as="h1" size="2xl">
            Welcome to Gourmet Haven
          </Heading>
          <Text fontSize="lg" color="gray.600">
            Experience the best culinary delights
          </Text>
        </Box>

        {/* Hero Image */}
        <Box w="100%" borderRadius="lg" overflow="hidden">
          <Image src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwaW50ZXJpb3J8ZW58MHx8fHwxNzE2MjA2MzY2fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Restaurant Interior" />
        </Box>

        {/* About Section */}
        <Box w="100%" textAlign="center" py={8}>
          <Heading as="h2" size="xl">
            About Us
          </Heading>
          <Text fontSize="md" color="gray.600" mt={4}>
            At Gourmet Haven, we offer a unique dining experience with a blend of traditional and modern culinary techniques. Our chefs use the freshest ingredients to create mouth-watering dishes that will leave you wanting more.
          </Text>
        </Box>

        {/* Menu Section */}
        <Box w="100%" textAlign="center" py={8}>
          <Heading as="h2" size="xl">
            Our Menu
          </Heading>
          <Text fontSize="md" color="gray.600" mt={4}>
            From appetizers to desserts, our menu is designed to satisfy every palate. Explore our wide range of dishes and find your new favorite meal.
          </Text>
          <Button colorScheme="teal" size="lg" mt={4}>
            View Menu
          </Button>
        </Box>

        {/* Contact Section */}
        <Box w="100%" textAlign="center" py={8}>
          <Heading as="h2" size="xl">
            Contact Us
          </Heading>
          <Text fontSize="md" color="gray.600" mt={4}>
            Have any questions or want to make a reservation? Get in touch with us!
          </Text>
          <Button colorScheme="teal" size="lg" mt={4}>
            Contact Us
          </Button>
        </Box>

        {/* Social Media Section */}
        <HStack spacing={4} py={8}>
          <IconButton aria-label="Facebook" icon={<FaFacebook />} size="lg" />
          <IconButton aria-label="Instagram" icon={<FaInstagram />} size="lg" />
          <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" />
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
