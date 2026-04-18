import React from 'react';
import { Box, Button, Card, Flex, Heading, HStack, Input, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { FiFilter } from "react-icons/fi";
import { MdAdd, MdClear } from "react-icons/md";
import { FaUserTie } from "react-icons/fa";
import CustomTable from "@/components/data/CustomTable.jsx";

export const CustomerList = () => {
    const columns = [
        { key: 'name', title: '客戶名稱' },
        { key: 'taxId', title: '客戶統編' },
        { key: 'owner', title: '業務窗口' },
        { key: 'phone', title: '電話' },
        { key: 'contact', title: '聯絡人' },
        { key: 'email', title: 'email' },
        { key: 'actions', title: '' },
    ];

    const data = [];

    for (let i = 1; i < 50; i++) {
        data.push({
            id: i,
            name: `客戶_${i}`,
            taxId: `客戶統編_${i}`,
            owner: `業務窗口_${i}`,
            phone: `電話_${i}`,
            contact: `聯絡人_${i}`,
            email: `email_${i}`
        });
    }

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
                        <CustomTable columns={columns} data={data} />
                    </Card.Body>
                </Card.Root>
            </Box>
        </Box>
    );
};