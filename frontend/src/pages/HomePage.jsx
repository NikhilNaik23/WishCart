import { useProductStore } from "@/store/product";
import { Container, VStack, Text, Center, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ProductCard from "@/components/ProductCard";

const HomePage = () => {
  const { fetchProducts, products } = useProductStore();
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  console.log(products);

  return (
    <Container maxW="container.xl" py={12}>
      <VStack wordSpacing={1}>
        <Text
          textStyle={{ base: "xl", md: "2xl" }}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          textAlign={"center"}
          bgGradient="to-r"
          gradientFrom="cyan.400"
          gradientTo="blue.600"
          bgClip={"text"}
        >
          Current Products 🚀
        </Text>
        <SimpleGrid
          columns={{ base: "1", md: "2", lg: "3" }}
          spaceX={5}
          spaceY={5}
          w={"full"}
        >
          {products.map((product) => (
            <ProductCard key={product._id} product={product}/>
          ))}
        </SimpleGrid>
        {products.length === 0 && (
          <Text
          textStyle={{ base: "md", md: "xl" }}
          textAlign={"center"}
          fontWeight={"bold"}
          color={"gray.500"}
        >
          No products found 😢
          <Link to={"/create"}>
            <Text
              as={"span"}
              color={"blue.500"}
              _hover={{ textDecoration: "underline" }}
            >
              {" "}
              Create a product
            </Text>
          </Link>
        </Text>
        )}
      </VStack>
    </Container>
  );
};

export default HomePage;
