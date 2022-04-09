import React from 'react';
import Btn from '@components/Btn';
import ContainerImages from './ContainerImages';
import { Flex, Heading, Text } from '@chakra-ui/layout';

function Section2() {

    return (
        <Flex
            w="full"
            id="about"
            className="scroll-mt"
            flexDirection={['column-reverse', 'column-reverse', 'column-reverse', 'row', 'row']}
            mt={['40px', '40px', '40px', '78px', '78px']}
        >
            <ContainerImages />
            <Flex
                direction="column"
                gridGap="30px"
                px={['20px', '36px', '36px', '36px', '36px']}
                justifyContent="center"
                textAlign={['center', 'center', 'center', 'left', 'left']}
            >
                <Heading fontSize={['50px', '50px', '68px', '68px', '68px']} fontWeight="700" >
                    Kita akan membuat <br />
                    <Heading as="strong" color="#ED6436" fontSize="inherit" fontWeight="700" > mereka bahagia </Heading>
                </Heading>
                <Text whiteSpace="pre-wrap" fontSize="18px" lineHeight="1.7" >
                Sejak teman-teman kita mengendus-endus pintu
                di pagi hari sampai mereka mengibas-ngibaskan lelah, tetapi puas
                ekor keluar di sore hari, kami melayani sifat mereka.
                </Text>
                <Btn
                    py={'22px'}
                    fSize={'14px'}
                    letterSpacing={'1.2px'}
                    title={'PESAN SEKARANG'}
                    borderTopStartRadius={'none'}
                    change={true}
                    colorHover={'#ed6436'}
                    color={'white'}
                    width={'164px'}
                    gap={'12px'}
                    fw={'700'}
                    alignSelf={['center', 'center', 'center', 'flex-start', 'flex-start']}
                />
            </Flex>
        </Flex>
    );
}

export default Section2;