import React from 'react';
import { Box, Button, Card, Flex, Heading, HStack, Input, SimpleGrid, Stack, Table, Text } from "@chakra-ui/react";
import { FiFilter } from "react-icons/fi";
import { MdAdd, MdClear } from "react-icons/md";
import { FaEdit, FaSearch, FaTrash, FaUserTie } from "react-icons/fa";

export const CustomerList = () => {
    const data = [
        {
            id: 1,
            name: '客戶1',
            taxId: '12345678',
            owner: '業務窗口1',
            phone: '0912345678',
            contact: '聯絡人1',
            email: 'abc@gmail.com'
        },
        {
            id: 2,
            name: '客戶2',
            taxId: '87654321',
            owner: '業務窗口1',
            phone: '0987654321',
            contact: '聯絡人2',
            email: '123@gmail.com'
        }
    ];

    return (
        <Box w='100%'>
            <Box sx={{ mb: 3 }}>
                <Text fontSize='lg'>客戶設定</Text>
            </Box>
            <Box p={2}>
                <Card.Root>
                    <Card.Header>
                        <Flex justify='space-between' align='center' wrap='wrap' gap={4}>
                            <HStack wrap='wrap'>
                                <Heading size='md' display='flex' alignItems='center' gap={2}>
                                    <FiFilter />
                                    <Text>條件式搜索</Text>
                                </Heading>
                            </HStack>
                            <HStack wrap='wrap'>
                                <Button size='sm' colorPalette='red' variant='surface'>
                                    <MdClear />
                                    <Text>清除</Text>
                                </Button>
                            </HStack>
                        </Flex>
                    </Card.Header>
                    <Card.Body>
                        <Box p={2}>
                            <SimpleGrid columns={{ base: 1, lg: 2 }} gap={{ base: 4, lg: 10 }}>
                                <Stack direction={{ base: "column", md: "row" }} align={{ md: 'center' }}>
                                    <Text fontWeight="semibold" minW={{ md: '100px' }}>客戶名稱</Text>
                                    <Input placeholder='請輸入客戶名稱' />
                                </Stack>
                                <Stack direction={{ base: "column", md: "row" }} align={{ md: 'center' }}>
                                    <Text fontWeight="semibold" minW={{ md: '100px' }}>客戶統編</Text>
                                    <Input placeholder='請輸入客戶統編' />
                                </Stack>
                            </SimpleGrid>
                        </Box>
                        <Box p={2}>
                            <SimpleGrid columns={{ base: 1, lg: 2 }} gap={{ base: 4, lg: 10 }}>
                                <Stack direction={{ base: "column", md: "row" }} align={{ md: 'center' }}>
                                    <Text fontWeight="semibold" minW={{ md: '100px' }}>業務窗口</Text>
                                    <Input placeholder='請輸入業務窗口' />
                                </Stack>
                                <Stack direction={{ base: "column", md: "row" }} align={{ md: 'center' }}>
                                    <Text fontWeight="semibold" minW={{ md: '100px' }}>客戶電話</Text>
                                    <Input placeholder='請輸入客戶電話' />
                                </Stack>
                            </SimpleGrid>
                        </Box>
                        <Box p={2}>
                            <SimpleGrid columns={{ base: 1, lg: 2 }} gap={{ base: 4, lg: 10 }}>
                                <Stack direction={{ base: "column", md: "row" }} align={{ md: 'center' }}>
                                    <Text fontWeight="semibold" minW={{ md: '100px' }}>聯絡人</Text>
                                    <Input placeholder='請輸入聯絡人' />
                                </Stack>
                                <Stack direction={{ base: "column", md: "row" }} align={{ md: 'center' }}>
                                    <Text fontWeight="semibold" minW={{ md: '100px' }}>email</Text>
                                    <Input placeholder='請輸入email' />
                                </Stack>
                            </SimpleGrid>
                        </Box>
                    </Card.Body>
                </Card.Root>
            </Box>

            <Box p={2}>
                <Card.Root>
                    <Card.Header>
                        <Flex justify="space-between" align="center" wrap="wrap" gap="4">
                            <Heading size="md" display="flex" alignItems="center" gap="2">
                                <FaUserTie />
                                <Text>客戶列表</Text>
                            </Heading>
                            <HStack wrap="wrap">
                                <Button size="sm" colorPalette="green" variant="surface">
                                    <MdAdd />
                                    <Text>新增</Text>
                                </Button>
                            </HStack>
                        </Flex>
                    </Card.Header>
                    <Card.Body>
                        <Table.Root>
                            <Table.Header>
                                <Table.Row>
                                    <Table.ColumnHeader color="gray.700" fontWeight="bold">客戶名稱</Table.ColumnHeader>
                                    <Table.ColumnHeader color="gray.700" fontWeight="bold">客戶統編</Table.ColumnHeader>
                                    <Table.ColumnHeader color="gray.700" fontWeight="bold">業務窗口</Table.ColumnHeader>
                                    <Table.ColumnHeader color="gray.700" fontWeight="bold">客戶電話</Table.ColumnHeader>
                                    <Table.ColumnHeader color="gray.700" fontWeight="bold">聯絡人</Table.ColumnHeader>
                                    <Table.ColumnHeader color="gray.700" fontWeight="bold">email</Table.ColumnHeader>
                                    <Table.ColumnHeader />
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                { data.map(item => (
                                    <Table.Row key={item.id} _hover={{ bg: "gray.50" }}>
                                        <Table.Cell>
                                            <Flex direction="column">
                                                <Text fontWeight="bold" fontSize="sm" color="gray.700">{item.name}</Text>
                                            </Flex>
                                        </Table.Cell>
                                        <Table.Cell>
                                            <Flex direction="column">
                                                <Text fontWeight="bold" fontSize="sm" color="gray.700">{item.taxId}</Text>
                                            </Flex>
                                        </Table.Cell>
                                        <Table.Cell>
                                            <Flex direction="column">
                                                <Text fontWeight="bold" fontSize="sm" color="gray.700">{item.owner}</Text>
                                            </Flex>
                                        </Table.Cell>
                                        <Table.Cell>
                                            <Flex direction="column">
                                                <Text fontWeight="bold" fontSize="sm" color="gray.700">{item.phone}</Text>
                                            </Flex>
                                        </Table.Cell>
                                        <Table.Cell>
                                            <Flex direction="column">
                                                <Text fontWeight="bold" fontSize="sm" color="gray.700">{item.contact}</Text>
                                            </Flex>
                                        </Table.Cell>
                                        <Table.Cell>
                                            <Flex direction="column">
                                                <Text fontWeight="bold" fontSize="sm" color="gray.700">{item.email}</Text>
                                            </Flex>
                                        </Table.Cell>
                                        <Table.Cell>
                                            <Button size='xs' variant='surface' colorPalette='blue' style={{ borderRadius: '20px'}} mr={2}>
                                                <FaSearch />
                                            </Button>
                                            <Button size='xs' variant='surface' colorPalette='green' style={{ borderRadius: '20px'}} mr={2}>
                                                <FaEdit />
                                            </Button>
                                            <Button size='xs' variant='surface' colorPalette='red' style={{ borderRadius: '20px'}} mr={2}>
                                                <FaTrash />
                                            </Button>
                                        </Table.Cell>
                                    </Table.Row>
                                )) }
                            </Table.Body>
                        </Table.Root>
                    </Card.Body>
                </Card.Root>
            </Box>
        </Box>
    );
};