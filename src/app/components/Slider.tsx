"use client";

import Image from "next/image";
import {useEffect, useRef, useState} from "react";
import {CaretLeft, CaretRight} from "./icons";

const Slider = () => {
	const slideRefs = useRef<HTMLDivElement[]>([]);

	const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
	useEffect(() => {
		slideRefs.current.map((slide) => (slide.style.order = "2"));
		const moveSlider = () => {
			slideRefs.current[currentSlideIndex].style.scale = ".7";
			slideRefs.current[currentSlideIndex].style.opacity = ".5";

			slideRefs.current[currentSlideIndex].style.order = "1";
			slideRefs.current[currentSlideIndex].style.scale = "1";
			slideRefs.current[currentSlideIndex].style.opacity = "1";
		};
		moveSlider();

        setInterval(() => {
            goToNextSlide()
        }, 6000);
	}, [currentSlideIndex]);

	const goToNextSlide = () => setCurrentSlideIndex((currentSlideIndex + 1) % slideRefs.current.length);
	const goToPrevSlide = () => setCurrentSlideIndex((currentSlideIndex - 1 + slideRefs.current.length) % slideRefs.current.length);

	return (
		<>
			<div className="flex gap-8 items-start w-full overflow-hidden">

				<div
					ref={(el) => {
						if (el) {
							slideRefs.current[0] = el;
						}
					}}
					className="rounded-3xl h-auto sm:h-[500px] w-[60vw] flex-none slide relative transition-all delay-75 duration-100 "
				>

                <h3 className="absolute top-10 pl-3 text-sm font-extralight text-[#b4b4b4]">NEW IMAGE MODEL</h3>

					<Image
						src={"/d7y2j71k.png"}
						className="rounded-3xl h-auto sm:h-[500px] w-[60vw]  "
						width={1024}
						height={600}
						alt="wan image"
					/>

					<div className="absolute bottom-5 px-3 text-white flex items-center w-full justify-between">
						<div className="flex flex-col gap-1 flex-[.6]">
							<h3 className="font-bold text-xl">WAN 2.2 Image generation</h3>

							<p className="font-medium hidden sm:flex">Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic features</p>
						</div>

						<button className="rounded-[28px] text-black py-2.5 px-[15px] bg-white ml-auto">Try WAN 2.2</button>
					</div>
				</div>

				<div
					ref={(el) => {
						if (el) {
							slideRefs.current[1] = el;
						}
					}}
					className="rounded-3xl h-auto sm:h-[500px] w-[60vw] flex-none slide transition-all delay-75 duration-100 relative "
				>

                    <h3 className="absolute top-10 pl-3 text-sm font-extralight text-[#b4b4b4]">NEW IMAGE MODEL</h3>
					<video
						muted
						loop
						src={"/OSSKreaFlux1_video.mp4"}
						autoPlay
						playsInline
						className=" w-full h-full object-cover rounded-3xl  aspect-video"
					/>

                    	<div className="absolute bottom-5 px-3 text-white flex items-center w-full justify-between">
						<div className="flex flex-col gap-1 flex-[.6]">
							<h3 className="font-bold text-xl">FLUX.1 Krea</h3>

							<p className="font-medium hidden sm:flex">We&apos;re making the weights to our Krea FLUX.1 open source. Download and run our model weights, read the technical report, or generate it with Krea image.</p>
						</div>

						<button className="rounded-[28px] text-black py-2.5 px-[15px] bg-white ml-auto">Try FLUX.1</button>
					</div>
				</div>
			</div>

			<div className="flex items-center w-full justify-between mt-4 pr-4">
				<div className="flex items-center gap-2 ml-auto">
					<button
						onClick={() => setCurrentSlideIndex(0)}
						className={`rounded-[100vh] h-2 w-2 ${currentSlideIndex == 0 ? "bg-black dark:bg-white" : "bg-[#d8d8d8] dark:bg-[#171717]"} `}
					></button>
					<button
						onClick={() => setCurrentSlideIndex(1)}
						className={`rounded-[100vh] h-2 w-2 ${currentSlideIndex == 1 ? "bg-black dark:bg-white" : "bg-[#d8d8d8] dark:bg-[#171717]"} `}
					></button>
					<button className="rounded-[100vh] h-2 w-2 bg-[#d8d8d8] dark:bg-[#171717]"></button>
					<button className="rounded-[100vh] h-2 w-2 bg-[#d8d8d8] dark:bg-[#171717]"></button>
					<button className="rounded-[100vh] h-2 w-2 bg-[#d8d8d8] dark:bg-[#171717]"></button>
					<button className="rounded-[100vh] h-2 w-2 bg-[#d8d8d8] dark:bg-[#171717]"></button>
					<button className="rounded-[100vh] h-2 w-2 bg-[#d8d8d8] dark:bg-[#171717]"></button>
					<button className="rounded-[100vh] h-2 w-2 bg-[#d8d8d8] dark:bg-[#171717]"></button>
				</div>

				<div
					className="ml-auto flex items-center
                        gap-4"
				>
					<button
						onClick={goToPrevSlide}
						className="bg-[#d8d8d8] dark:bg-[#171717] w-4 h-4 rounded-full grid place-content-center"
					>
						<CaretLeft />
					</button>
					<button
						onClick={goToNextSlide}
						className="bg-[#d8d8d8] dark:bg-[#171717] w-4 h-4 rounded-full grid place-content-center"
					>
						<CaretRight />
					</button>
				</div>
			</div>
		</>
	);
};

export default Slider;
