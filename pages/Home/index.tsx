import React, { useState } from "react";
import {
    Box,
    Center,
    CloseIcon,
    Divider,
    HamburgerIcon,
    Heading,
    HStack,
    Icon,
    Image,
    Input,
    Menu,
    Pressable,
    Stack,
    Text,
    useBreakpointValue,
    VStack,
    Hidden,
    Link,
    Card,
} from "native-base";
import ZomatoCategories from "./ZomatoCategories";
import Footer from "../../components/Footer";

import { AntDesign, Entypo, FontAwesome } from "@native-base/icons";

export default function Home() {
    const isTablet = useBreakpointValue({
        base: false,
        md: true,
    });
    const [isSlideOpen, setSlideOpen] = useState(false);
    const color1 = "#ffffff";
    const color2 = "#000000";

    return (
        <>
            <Box w="100%" display={isSlideOpen ? "none" : "flex"}>
                <VStack alignItems="center" w="100%" bg="coolGray.50" pb="10" display={!isSlideOpen ? "flex" : "none"}>
                    <VStack w="100%" h={500}>
                        <Image position="absolute" zIndex="-1" src={"/images/banner_test_2.jpeg"} alt="마루미디어" w="100%" h={500} />

                        <Box w="100%" alignItems="center" mb="4" px="8" py="4" style={{ position: "fixed" }}>
                            <HStack w="100%" maxW="1100" justifyContent="space-between">
                                <Hidden till="md">
                                    <>
                                        <Link alignItems="center">
                                            <HStack alignItems="center">
                                                <Image width={16} height={16} src={"/images/logo.png"} alt="마루미디어" mr="2" />

                                                <Text color="white" fontWeight="medium" fontSize="lg">
                                                    MaruMedia
                                                </Text>
                                            </HStack>
                                        </Link>
                                        <HStack space="10" alignItems="center">
                                            <Link href="#" _text={{ fontWeight: "medium", color: "white", fontSize: "lg" }} isUnderlined={false}>
                                                OurService
                                            </Link>
                                            <Link href="#" _text={{ fontWeight: "medium", color: "white", fontSize: "lg" }} isUnderlined={false}>
                                                Production
                                            </Link>
                                            <Link href="#" _text={{ fontWeight: "medium", color: "white", fontSize: "lg" }} isUnderlined={false}>
                                                Portfolio
                                            </Link>
                                            <Link href="#" _text={{ fontWeight: "medium", color: "white", fontSize: "lg" }} isUnderlined={false}>
                                                Contact
                                            </Link>
                                        </HStack>
                                    </>
                                </Hidden>
                                <Hidden from="md">
                                    <Pressable m="3" onPress={() => setSlideOpen(true)}>
                                        <HamburgerIcon color="white" size="5" />
                                    </Pressable>
                                </Hidden>
                            </HStack>
                        </Box>

                        <Center mt={5} w="100%">
                            <Heading
                                textAlign="center"
                                w={{ base: "90%", md: "60%", lg: "48%" }}
                                color="white"
                                fontSize={{ base: "3xl", md: "3xl", lg: "3xl", xl: "4xl" }}
                                fontWeight="medium"
                                lineHeight="xs"
                                mt={10}
                                mx={{ base: 10 }}
                            >
                                We'll Make It Your Imagination Video.
                            </Heading>

                            <HStack alignItems={"center"} mt={10}>
                                <Image width={40} height={40} src={"/images/logo_text_white.png"} alt="maru" mr={2} />
                                <Text color="white" fontWeight="medium" fontSize="2xl">
                                    MaruMedia
                                </Text>
                            </HStack>
                        </Center>
                    </VStack>
                    <Box mt="16" flexWrap="wrap" width={{ base: "80%", sm: "50%", md: "50%" }} justifyContent={{ base: "", sm: "center" }}>
                        <Card>
                            <Center py={3} _text={{ fontSize: "lg", textAlign: "center" }} color="coolGray.800" fontWeight="extrabold">
                                미디어 시대를 살아가는 요즘 당신의 삶은 콘텐츠로 잘 표현되고 있나요? 잠시도 우리 곁을 떠나지 않는 다양한 영상들
                                그런데! 정작 나에게 필요한 영상들 지금 딱 마음에 드는 영상들은 주변에서 찾기 어려우시죠? 마루미디어는 20년 동안
                                방송가에 살아온 이들로 이루어진 콘텐츠 제작 업체로, 간단한 촬영에서부터 다양한 영상제작은 물론이고, 사람들이 원하는
                                홍보영상까지 만들어 드리고 있습니다.{" "}
                            </Center>
                        </Card>
                    </Box>
                    <Center mt={50} w="100%">
                        <Image position="absolute" src={"/images/banner_test_3.jpeg"} alt="마루미디어" w="100%" h={500}></Image>
                        <Box
                            w="100%"
                            h={500}
                            bg={{
                                linearGradient: {
                                    colors: ["#00000000", "cyan.900"],
                                    start: [0, 0],
                                    end: [1, 0],
                                },
                            }}
                        >
                            <Center py={3} _text={{ fontSize: "lg", textAlign: "center" }} color="coolGray.800" fontWeight="extrabold">
                                미디어 시대를 살아가는 요즘 당신의 삶은 콘텐츠로 잘 표현되고 있나요? 잠시도 우리 곁을 떠나지 않는 다양한 영상들
                                그런데! 정작 나에게 필요한 영상들 지금 딱 마음에 드는 영상들은 주변에서 찾기 어려우시죠? 마루미디어는 20년 동안
                                방송가에 살아온 이들로 이루어진 콘텐츠 제작 업체로, 간단한 촬영에서부터 다양한 영상제작은 물론이고, 사람들이 원하는
                                홍보영상까지 만들어 드리고 있습니다.{" "}
                            </Center>
                        </Box>
                    </Center>{" "}
                    <Box mt="16" flexWrap="wrap" width={{ base: "80%", sm: "50%", md: "50%" }} justifyContent={{ base: "", sm: "center" }}>
                        <Card>
                            <Center py={3} _text={{ fontSize: "lg", textAlign: "center" }} color="coolGray.800" fontWeight="extrabold">
                                미디어 시대를 살아가는 요즘 당신의 삶은 콘텐츠로 잘 표현되고 있나요? 잠시도 우리 곁을 떠나지 않는 다양한 영상들
                                그런데! 정작 나에게 필요한 영상들 지금 딱 마음에 드는 영상들은 주변에서 찾기 어려우시죠? 마루미디어는 20년 동안
                                방송가에 살아온 이들로 이루어진 콘텐츠 제작 업체로, 간단한 촬영에서부터 다양한 영상제작은 물론이고, 사람들이 원하는
                                홍보영상까지 만들어 드리고 있습니다.{" "}
                            </Center>
                        </Card>
                    </Box>
                    <Center mt={50} w="100%">
                        <Image position="absolute" src={"/images/banner_test_4.jpeg"} alt="마루미디어" w="100%" h={500}></Image>
                        <Box
                            w="100%"
                            h={500}
                            bg={{
                                linearGradient: {
                                    colors: ["#00000000", "blue.800"],
                                    start: [0, 0],
                                    end: [1, 0],
                                },
                            }}
                        >
                            <Center py={3} _text={{ fontSize: "lg", textAlign: "center" }} color="coolGray.800" fontWeight="extrabold">
                                미디어 시대를 살아가는 요즘 당신의 삶은 콘텐츠로 잘 표현되고 있나요? 잠시도 우리 곁을 떠나지 않는 다양한 영상들
                                그런데! 정작 나에게 필요한 영상들 지금 딱 마음에 드는 영상들은 주변에서 찾기 어려우시죠? 마루미디어는 20년 동안
                                방송가에 살아온 이들로 이루어진 콘텐츠 제작 업체로, 간단한 촬영에서부터 다양한 영상제작은 물론이고, 사람들이 원하는
                                홍보영상까지 만들어 드리고 있습니다.{" "}
                            </Center>
                        </Box>
                    </Center>{" "}
                    <Box mt="16" flexWrap="wrap" width={{ base: "80%", sm: "50%", md: "50%" }} justifyContent={{ base: "", sm: "center" }}>
                        <Card>
                            <Center py={3} _text={{ fontSize: "lg", textAlign: "center" }} color="coolGray.800" fontWeight="extrabold">
                                미디어 시대를 살아가는 요즘 당신의 삶은 콘텐츠로 잘 표현되고 있나요? 잠시도 우리 곁을 떠나지 않는 다양한 영상들
                                그런데! 정작 나에게 필요한 영상들 지금 딱 마음에 드는 영상들은 주변에서 찾기 어려우시죠? 마루미디어는 20년 동안
                                방송가에 살아온 이들로 이루어진 콘텐츠 제작 업체로, 간단한 촬영에서부터 다양한 영상제작은 물론이고, 사람들이 원하는
                                홍보영상까지 만들어 드리고 있습니다.{" "}
                            </Center>
                        </Card>
                    </Box>
                    <Center mt={50} w="100%">
                        <Image position="absolute" src={"/images/banner_test_5.jpeg"} alt="마루미디어" w="100%" h={500}></Image>
                        <Box
                            w="100%"
                            h={500}
                            bg={{
                                linearGradient: {
                                    colors: ["#00000000", "blue.800"],
                                    start: [0, 0],
                                    end: [1, 0],
                                },
                            }}
                        >
                            www
                        </Box>
                    </Center>
                    <ZomatoCategories />
                </VStack>

                <Footer />
            </Box>
            <Box w="100%" position="fixed" top="0" bottom="0" bg="coolGray.500" display={isSlideOpen ? "flex" : "none"}>
                <HStack justifyContent="space-between" my="6" px="7" alignItems="center">
                    <Pressable onPress={() => setSlideOpen(false)}>
                        <CloseIcon size="xs" color="black" />
                    </Pressable>
                    <Heading fontWeight="black" color="black" size="xl" italic>
                        <HStack alignItems="center">
                            <Image width={16} height={16} src={"/images/logo.png"} alt="마루미디어" mr="2" />

                            <Text color="white" fontWeight="medium" fontSize="lg">
                                MaruMedia
                            </Text>
                        </HStack>
                    </Heading>
                </HStack>
                <VStack py="2" px="7" space="8" mt="8">
                    <Link href="#" _text={{ fontWeight: "medium", color: "white", fontSize: "lg" }} isUnderlined={false}>
                        OurService
                    </Link>
                    <Link href="#" _text={{ fontWeight: "medium", color: "white", fontSize: "lg" }} isUnderlined={false}>
                        Production
                    </Link>
                    <Link href="#" _text={{ fontWeight: "medium", color: "white", fontSize: "lg" }} isUnderlined={false}>
                        Portfolio
                    </Link>
                </VStack>
            </Box>
        </>
    );
}
