import React from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/layout';
import CloudRightImage2 from '@components/clouds/CloudRightImage2'
import BoneIcon from '@icons/BoneIcon';
import bgImage from '../../../resources/images/image-background-h.jpg'
import PhoneIcon from '@icons/PhoneIcon';
import AlarmClockIcon from '@icons/AlarmClockIcon';
import BallIcon from '@icons/BallIcon';
import { nanoid } from 'nanoid';
import Card from './Card';
import bgImg from '../../../resources/images/checkInTime-bgImage.png';

function Section7() {

    const data = [
        {
            id: nanoid(),
            icon: <AlarmClockIcon />,
            title: 'Dari pukul 8 AM s/d 9 PM',
            description: `Waktunya diturunkan setelah jam 8 pagi dan pengambilan dilakukan sebelum Jam 9 Malam.`
        },
        {
            id: nanoid(),
            icon: <BallIcon colorFill={'#7AC143'} />,
            title: 'Mainan favorit',
            description: `Jika anjing Anda memiliki kecemasan perpisahan, kami mendorong Anda untuk membawa sesuatu yang berbau seperti rumah.`
        },
    ]

    return (
        <Flex
            w="full"
            className="scroll-mt"
            justifyContent={['center', 'center', 'center', 'space-between', 'space-between',]}
            alignItems={['center', 'center', 'center', 'flex-start', 'flex-start',]}
            pl={['0px', '0px', '0px', '78px', '78px']}
            textAlign={['center', 'center', 'center', 'left', 'left']}
            flexDirection={['column', 'column', 'column', 'row', 'row']}
            pt="80px"
        >

            <Box w="full" >
                <Heading fontSize={['50px', '50px', '70px', '70px', '70px']} fontWeight="700" mt="60px" >
                    Waktu <Text as="strong" fontSize="inherit" fontWeight="inherit" color="#ED6436">Check-in</Text>
                </Heading>
                <Flex direction="column" pt="77px" gridGap="44px" >

                    {
                        data.map(e => <Card key={e.id} data={e} />)
                    }

                </Flex>
                <Flex
                    w="260px"
                    mt={['0px', '0px', '0px', '30px', '30px']}
                    cursor="pointer"
                    transition="transform .3s ease"
                    position="relative"
                    mx={['auto', 'auto', 'auto', '0px', '0px']}
                    justifyContent="center"
                    _hover={{
                        transform: "rotate(10deg)"

                    }} >
                    <Flex
                        w={['210px', '210px', '210px', '90%', '90%',]}
                        h={['210px', '210px', '210px', '90%', '90%',]}

                    >
                        <BoneIcon
                            url={bgImage.src}
                            x={'-110'}
                            y={'0'}
                            sizeW={'200%'}
                            sizeH={'100%'}
                            id={'0e0c67fa-1602-4a9d-86ba-32fc73c12670'}
                        />
                    </Flex>
                    <Text as="strong"
                        color="white"
                        fontSize="16px"
                        top={['43%', '43%', '43%', '39%', '39%']}
                        left="14%"
                        transform="rotate(-6deg)"
                        position="absolute"
                        textTransform="uppercase"
                        userSelect="none"
                        display="flex"
                        w="auto"
                        alignItems="center"

                    >
                        <Flex color="white" justifyContent="center" w="26px" h="full" >
                            <PhoneIcon solid={true} />
                        </Flex>
                        +62 (812) 8187-8727
                    </Text>
                </Flex>
            </Box>

            <Box w={['100%', '100%', '100%', '160%', '160%']} maxW="1000px" position="relative" >
                <CloudRightImage2
                    fill={'#DF7D8C'}
                />

                <Box position="absolute" zIndex="2" w="full" h="full" top="0" >
                    <CloudRightImage2
                        id={'eed-fere-se32-fer'}
                        url={bgImg.src}
                        x={'20'}
                        y={'0'}
                        sizeW={'120%'}
                        sizeH={'120%'}
                    />
                </Box>
            </Box>

        </Flex>
    );
}

export default Section7;