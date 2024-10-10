import { Container, Badge, Link, List, ListItem, Heading, Center } from '@chakra-ui/react';
import { Title, WorkImage, Meta } from '../../components/work';
import Layout from '../../components/layouts/article';
import Section from '../../components/section';
import Paragraph from '../../components/paragraph';
import { Slider } from '../../components/slider';

const imageArr = [
	{ src: '/images/works/setup.png', alt: 'Setup Screen' },
	{ src: '/images/works/details.png', alt: 'Workout Detail Screen' },
];

const Work = () => (
	<Layout title="LiftLab">
		<Container maxW="3xl">
			<Title>
				LiftLab <Badge>2024</Badge>
			</Title>
			<List ml={4} my={4}>
				<ListItem>
					<Meta>Status</Meta>
					<Badge colorScheme="yellow">On Hold</Badge> (Until iOS deployment is affordable)
				</ListItem>
				<ListItem>
					<Meta>Stack</Meta>
					<span>React Native | Expo | UI Kitten | AsyncStorage | TypeScript</span>
				</ListItem>
				<ListItem>
					<Meta>GitHub</Meta>
					<Link href="https://github.com/noelys215/liftlab" target={'_blank'}>
						GitHub - LiftLab
					</Link>
				</ListItem>
			</List>

			<Section delay={0.1}>
				<Heading as="h4" fontSize={16} my={6}>
					<Center>Project Overview</Center>
				</Heading>
				<Paragraph>
					LiftLab is a React Native app designed as a companion for the Stronger by
					Science powerlifting program. It helps users track their strength progression in
					the main lifts: Squat, Bench Press, and Deadlift. The app calculates and tracks
					1-rep max (1RM) values, dynamically adjusts weights based on performance, and
					provides progressive tracking for weeks of workouts. All workout data is stored
					locally using AsyncStorage for easy access and persistence.
				</Paragraph>
			</Section>

			<Section delay={0.1}>
				<Heading as="h4" fontSize={16} my={6}>
					<Center>Key Features</Center>
				</Heading>
				<Paragraph>
					<br />- One Rep Max Setup: Input and adjust Squat, Bench Press, and Deadlift 1RM
					values, with rounding options for weight calculations.
					<br />- Workout Progression: Target weights auto-adjust based on performance
					(miss or exceed reps).
					<br />- Progressive Weekly Tracking: Navigate between weeks to view and track
					workouts over time.
					<br />- Mark Workouts as Complete: Mark workouts as complete and store
					performance details for future weeks.
					<br />- Persistent Storage: Uses AsyncStorage to store workout data on the
					device.
				</Paragraph>
			</Section>

			<Section delay={0.1}>
				<Heading as="h4" fontSize={16} my={6}>
					<Center>Technologies Used</Center>
				</Heading>
				<Paragraph>
					<br />- React Native: For cross-platform mobile development.
					<br />- Expo: Used for rapid development on both Android and iOS.
					<br />- UI Kitten: Provides customizable UI components.
					<br />- AsyncStorage: Enables persistent local data storage.
					<br />- TypeScript: Used to ensure code quality and strong typing.
				</Paragraph>
			</Section>

			<Section delay={0.1}>
				<Heading as="h4" fontSize={16} my={6}>
					<Center>Acknowledgments</Center>
				</Heading>
				<Paragraph>
					Special thanks to Stronger by Science for developing the program this app
					supports, and to UI Kitten and the React Native Community for their open-source
					tools.
				</Paragraph>
			</Section>

			<Section delay={0.1}>
				<Heading as="h4" fontSize={16} my={6}>
					<Center>Screenshots</Center>
				</Heading>
				<Slider array={imageArr} />
			</Section>
		</Container>
	</Layout>
);

export default Work;
