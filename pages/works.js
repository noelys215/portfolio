import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react';
import Layout from '../components/layouts/article';
import Section from '../components/section';
import { WorkGridItem, GridItem } from '../components/grid-item';

import gloriaThumb from '../public/images/works/gloria4.png';
import atalantaThumb from '../public/images/works/atalanta1.png';
import liftLabThumb from '../public/images/works/liftLabThumb.png';
import roshambo from '../public/images/works/roshambo.png';
import CalcPer from '../public/images/works/CalcPer.png';

const Works = () => (
	<Layout title="Works">
		<Container maxWidth="3xl">
			<Heading as="h3" fontSize={20} mb={4}>
				Works
			</Heading>

			<SimpleGrid columns={[1, 1, 2]} gap={6}>
				<Section>
					<WorkGridItem id="gloriafutbol" title="Gloria Fútbol" thumbnail={gloriaThumb}>
						Simple soccer/futbol app with live scores,charts and tables.
					</WorkGridItem>
				</Section>
				<Section>
					<WorkGridItem id="atalanta" title="Atalanta A.C." thumbnail={atalantaThumb}>
						A semi-modern athletic clothing e-commerce store.
					</WorkGridItem>
				</Section>
				<Section>
					<WorkGridItem id="liftLab" title="LiftLab" thumbnail={liftLabThumb}>
						A companion app for the Stronger by Science weightlifting program.
					</WorkGridItem>
				</Section>
				<Section>
					<GridItem
						href="https://spock-game.vercel.app/"
						title="Ro-Sham-Bo"
						thumbnail={roshambo}>
						A fun little rock-paper-scissor-spock game.
					</GridItem>
				</Section>
				<Section>
					<GridItem
						href="https://coupon-henna.vercel.app/"
						title="Percentage Calculator"
						thumbnail={CalcPer}>
						Coupon Percentage Calculator
					</GridItem>
				</Section>
			</SimpleGrid>
		</Container>
	</Layout>
);

export default Works;
