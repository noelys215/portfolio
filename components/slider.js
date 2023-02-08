import { WorkImage } from './work';
import Section from './section';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export const Slider = ({ array }) => {
	return (
		<Section>
			<Swiper
				className="swiper"
				effect="fade"
				slidesPerView={1}
				spaceBetween={30}
				loop={true}
				pagination={{
					clickable: true,
				}}
				keyboard={true}
				navigation={true}
				modules={[Pagination, Navigation]}>
				{array.map((array) => (
					<SwiperSlide className="swiper-slide" key={array.src}>
						<WorkImage src={array.src} alt={array.alt} />
					</SwiperSlide>
				))}
			</Swiper>
		</Section>
	);
};
