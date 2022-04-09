import React from 'react';
import BallIcon from '@icons/BallIcon';
import BrushIcon from '@icons/BrushIcon';
import Bone2Icon from '@icons/Bone2Icon';
import ContainerButtons from './ContainerButtons';
import { Flex, Heading, Text } from '@chakra-ui/layout';
import ContainerIconServices from './ContainerIconServies';
import CloudRightImage4 from '@components/clouds/CloudRightImage4';
import dogImage from '../../../resources/images/dog-swimming.jpg'
import { nanoid } from 'nanoid';

function Section3() {

    const data = {
        services: [
            {
                id: nanoid(),
                title: "Makan",
                icon: <Bone2Icon />,
            },
            {
                id: nanoid(),
                title: "Main",
                icon: <BallIcon colorFill={'white'} />,
            },
            {
                id: nanoid(),
                title: "Mandi",
                icon: <BrushIcon colorFill={'white'} />,
            }
        ],
        buttons: [
            {
                id: nanoid(),
                title: "Lihat Lebih",
            },
            {
                id: nanoid(),
                title: "Pesan Sekarang",
            },
        ]
    }

    return (
        <Flex
            w="full"
            pt="80px"
            direction={['column', 'column', 'column', 'row', 'row']}
            justifyContent="space-between"
            className="scroll-mt"
            justifyContent={['center', 'center', 'center', 'space-between', 'space-between',]}
            alignItems={['center', 'center', 'center', 'flex-start', 'flex-start',]}
            pl={['0px', '0px', '0px', '78px', '78px']}
            textAlign={['center', 'center', 'center', 'left', 'left']}
        >
            <Flex
                direction="column"
                gridGap="40px"
                px={['20px', '36px', '36px', '0px', '0px']}
            >
                <Heading fontSize={['50px', '50px', '68px', '68px', '68px']} fontWeight="700" >
                    Kegiatan dan <br />
                    <Heading as="strong" color="#ED6436" fontSize="inherit" fontWeight="700" > Latihan </Heading>
                </Heading>
                <Text whiteSpace="pre-wrap" fontSize="18px" lineHeight="1.7" >
                Anak anjing kami dan yang lainnya sangat aktif memiliki banyak
                    ruang untuk berlari dan kejar-kejaran, dan selimut yang nyaman.
                </Text>
                <ContainerIconServices data={data.services} />
                <ContainerButtons data={data.buttons} />
            </Flex>
            <Flex w={['full', 'full', 'full', '1300px', '1300px']} mt={['0px', '0px', '0px', '-100px', '-100px']} >
                <CloudRightImage4
                    id={'1szqADW'}
                    url={dogImage.src}
                    sizeW={'120%'}
                    sizeH={'140%'}
                    x={'-120'}
                    y={'0'}
                />
            </Flex>
        </Flex>
    );
}

export default Section3;