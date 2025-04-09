import {
  Box,
  Heading,
  HStack,
  IconButton,
  Image,
  Input,
  Text,
  VStack,
  Button,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useColorModeValue } from "./ui/color-mode";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useProductStore } from "@/store/product";
import toast from "react-hot-toast";
import Modal from "./Modal";

const ProductCard = ({ product }) => {
  const textColor = useColorModeValue("gray.600", "gray.200");
  const bg = useColorModeValue("white", "gray.800");
  const { deleteProduct, updateProduct } = useProductStore();
  const [isOpen, setIsOpen] = useState(false);

  const handleDeleteProduct = async (pid) => {
    const { success, message } = await deleteProduct(pid);
    if (!success) {
      toast.error(message);
    } else {
      toast.success(message);
    }
  };

  const [updatedProduct, setUpdatedProduct] = useState(product);
  const handleUpdateProduct = async (pid, updatedProduct) => {
    const {success,message} = await updateProduct(pid,updatedProduct); 
    if(!success){
      toast.error(message);
    }
    else{
      toast.success("Product Updated Successfully");
    }
  };

  return (
    <>
      <Box
        shadow={"lg"}
        rounded={"lg"}
        overflow={"hidden"}
        transition={"all 0.3s"}
        _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
        bg={bg}
      >
        <Image
          src={product.image}
          alt={product.name}
          h={"48"}
          w={"full"}
          objectFit={"cover"}
        />
        <Box p={2}>
          <Heading as={"h1"} size={"md"} mb={"2"}>
            {product.name}
          </Heading>
          <Text fontWeight={"bold"} fontSize={"xl"} color={textColor} mb={4}>
            ${product.price}
          </Text>
          <HStack>
            <IconButton
              onClick={() => setIsOpen(true)}
              aria-label="Edit"
              colorPalette={"blue"}
            >
              <FaRegEdit />
            </IconButton>
            <IconButton
              aria-label="Delete"
              onClick={() => handleDeleteProduct(product._id)}
              colorPalette={"red"}
            >
              <MdOutlineDeleteOutline />
            </IconButton>
          </HStack>
        </Box>
      </Box>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <VStack spacing={4} align="stretch">
          <Heading as={"h1"} size="md">
            Edit Product
          </Heading>
          <Input
            placeholder="Product Name"
            name="name"
            value={updatedProduct.name}
            onChange={(e)=>setUpdatedProduct({...updatedProduct,name:e.target.value})}
            />
          <Input
            placeholder="Price"
            name="price"
            type="number"
            value={updatedProduct.price}
            onChange={(e)=>setUpdatedProduct({...updatedProduct,price:e.target.value})}
            />
          <Input
            placeholder="Image URL"
            name="image"
            value={updatedProduct.image}
            onChange={(e)=>setUpdatedProduct({...updatedProduct,image:e.target.value})}
          />

          <HStack justify="flex-end" pt={4}>
            <Button variant="ghost" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button
              colorPalette="blue"
              onClick={() => {
                handleUpdateProduct(product._id, updatedProduct);
                setIsOpen(false);
              }}
            >
              Update
            </Button>
          </HStack>
        </VStack>
      </Modal>
    </>
  );
};

export default ProductCard;
