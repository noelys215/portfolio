import Link from 'next/link';
import Image from 'next/image';
import { Text, useColorModeValue } from '@chakra-ui/react';

import styled from '@emotion/styled';

const LogoBox = styled.span`
	font-weight: bold;
	font-size: 18px;
	display: inline-flex;
	align-items: center;
	height: 30px;
	line-height: 20px;
	padding: 10px;

	img {
		transition: 200ms ease;
	}

	&:hover img {
		transform: rotate(20deg);
	}
`;

const Logo = () => {
	// const footPrintImg = `/images/footprint${useColorModeValue('', '-dark')}.png`;
	const leafImg = `/images/_leaf${useColorModeValue('', '-dark')}.png`;
	('/public/images/');
	return (
		<div>
			<Link href="/">
				<a>
					<LogoBox>
						<Image src={leafImg} width={32} height={32} alt="logo" />
						<Text
							color={useColorModeValue('gray', 'whiteAlpha.900')}
							fontFamily='M Plus Rounded 1c" sans-serif'
							fontWeight="bold"
							ml={3}>
							Henry Betancourth
						</Text>
					</LogoBox>
				</a>
			</Link>
		</div>
	);
};

export default Logo;
