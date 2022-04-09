import { Center, Flex } from '@chakra-ui/layout';
import { Image } from "@chakra-ui/react"
import { nanoid } from 'nanoid';
import logo from "../../resources/images/kasam-house-logo-h.png"
import ContainerNavHeader from './ContainerNavHeader';
import ContainerNavHeaderResponsive from './ContainerNavHeaderResponsive';


function Header() {

	const nav = [
		{
			id: nanoid(),
			url: '/#home',
			title: 'Beranda',
		},
		{
			id: nanoid(),
			url: '/#about',
			title: 'Tentang',
		},
		{
			id: nanoid(),
			url: '/#services',
			title: 'Servis',
		},
		{
			id: nanoid(),
			url: '/#reviews',
			title: 'Review',
		},
		{
			id: nanoid(),
			url: '/#pricing',
			title: 'Harga',
		},
		{
			id: nanoid(),
			url: '/shop',
			title: 'Belanja',
		},
	]

	const phoneNumber = "+62812 8187 8727"

	return (
		<Flex
			as="header"
			w={'full'}
			h="80px"
			px={['16px', '16px', '16px', '78px', '78px']}
			justifyContent='space-between'
			position="fixed"
			bgColor="white"
			zIndex="24"
		>
			<Center>
				<Image width="full" h="44px" src={logo.src} alt={'logo'} />
			</Center>
			<ContainerNavHeaderResponsive data={nav} phoneNumber={phoneNumber} />
			<ContainerNavHeader data={nav} phoneNumber={phoneNumber} />
		</Flex >
	);
}

export default Header;