import Image from "next/image";
import PrimaryBtn from "./components/PrimaryBtn";
import {Krea, Home as HomeIcon, VideoAlt, ImageAlt, Image as ImageIcon, Enhancer, Edit, Brush, Video, EnhancerAlt, BrushAlt, EditAlt, Folder, CaretDownAlt, CaretDown, CaretLeft, CaretRight, Mic, MotionAlt, Train, Gallery, Support, Sun, Bell, Avatar} from "./components/icons";
import Slider from "./components/Slider";
export default function Home() {
	return (
		<div>
			<header className="w-full flex-wrap sm:flex-nowrap flex relative justify-between px-5 py-2.5">
				<div className="flex gap-6 items-center w-full sm:w-auto justify-between sm:justify-normal">
					<Krea />

					<div className="flex gap-1 items-center">
						<Avatar/> <h2 className="text-[#717171]">benevolent@gmail.com</h2>

						<CaretDown />
					</div>
				</div>

				<div className="bg-[#f5f5f5] hidden xs:flex  ml-auto rounded-[10px]  gap-[10px] p-1">
					<button className="py-2 px-4 bg-white rounded-lg">
						<HomeIcon />
					</button>

					<button className="py-2 px-4  rounded-lg">
						<ImageIcon />
					</button>

					<button className="py-2 px-4  rounded-lg">
						<Video />
					</button>

					<button className="py-2 px-4  rounded-lg">
						<Enhancer />
					</button>

					<button className="py-2 px-4  rounded-lg">
						<Brush />
					</button>

					<button className="py-2 px-4  rounded-lg">
						<Edit />
					</button>

					<button className="py-2 px-4  rounded-lg">
						<Folder />
					</button>
				</div>

				<div className="ml-auto flex gap-1 items-center">

          <PrimaryBtn  >
           <Gallery/> Gallery
          </PrimaryBtn>

          <PrimaryBtn>
           
		   <Support/> Support
          </PrimaryBtn>
		 

		  <PrimaryBtn>
			<Bell/>
		  </PrimaryBtn>
		   <PrimaryBtn>
			<Sun/>
		  </PrimaryBtn>


			<Avatar/>
        </div>
			</header>
			<main className="flex flex-col px-10">
				<section className="mt-24">
					<Slider />
				</section>

				<div className="mb-2 flex w-full justify-between mt-12">
					<h5 className="font-bold text-xl">Generate</h5>

					<button className="flex gap-3 items-center text-[#7d9fd4] font-semibold">
						<CaretDownAlt /> Show all
					</button>
				</div>
				<section className="grid lg:[grid-template-columns:repeat(4,minmax(200px,1fr))] [grid-template-columns:repeat(auto-fill,minmax(200px,1fr))]  gap-x-3 gap-y-8 ">
					<div className="flex items-center gap-6 flex-wrap sm:flex-nowrap">
						<div
							className="w-11 h-11 rounded-xl grid place-content-center aspect-square"
							style={{backgroundImage: "linear-gradient(0deg, #D0E3F1 0%, #294962 100%)"}}
						>
							<ImageAlt />
						</div>

						<div className="flex flex-col gap-2">
							<h6 className="text-[#717171] flex items-center gap-2">
								Image <span className="p-[0.4rem] bg-[#0057f5] rounded-[0.8rem] text-[0.88rem] text-white px-3 py-1 text-xs">New</span>
							</h6>
							<p className="text-[#b4b4b4] text-sm">Generate Image with custom styles in Flux and Ideogram.</p>
						</div>

						<PrimaryBtn>Open</PrimaryBtn>
					</div>

					<div className="flex items-center gap-6 flex-wrap sm:flex-nowrap">
						<div
							className="w-11 h-11 rounded-xl grid place-content-center aspect-square"
							style={{backgroundColor: "#faaa00"}}
						>
							<VideoAlt />
						</div>

						<div className="flex flex-col gap-2">
							<h6 className="text-[#717171] flex items-center gap-2">Video </h6>
							<p className="text-[#b4b4b4] text-sm">Generate videos with harulo, Pica, Runway,Luma and more.</p>
						</div>

						<PrimaryBtn>Open</PrimaryBtn>
					</div>

					<div className="flex items-center gap-6 flex-wrap sm:flex-nowrap">
						<div
							className="w-11 h-11 rounded-xl grid place-content-center aspect-square"
							style={{backgroundImage: "linear-gradient(0deg, rgb(206, 246, 255) 0%, oklch(0.7972 0.1583 221.31) 35%, oklch(0.6575 0.1796 237.869) 100%)"}}
						>
							<BrushAlt />
						</div>

						<div className="flex flex-col gap-2">
							<h6 className="text-[#717171] flex items-center gap-2">Realtime</h6>
							<p className="text-[#b4b4b4] text-sm">Realtime AI rendering on a canvas.Instant feedback loops</p>
						</div>

						<PrimaryBtn>Open</PrimaryBtn>
					</div>

					<div className="flex items-center gap-6 flex-wrap sm:flex-nowrap">
						<div
							className="w-11 h-11 rounded-xl grid place-content-center aspect-square"
							style={{backgroundImage: "linear-gradient(0deg, #888888 0%, #000000 100%)"}}
						>
							<EnhancerAlt />
						</div>

						<div className="flex flex-col gap-2">
							<h6 className="text-[#717171] flex items-center gap-2">
								Enhancer<span className="p-[0.4rem] bg-[#0057f5] rounded-[0.8rem] text-[0.88rem] text-white px-3 py-1 text-xs">New</span>
							</h6>
							<p className="text-[#b4b4b4] text-sm">Upscale and enhance images and videos up to 22k</p>
						</div>

						<PrimaryBtn>Open</PrimaryBtn>
					</div>

					<div className="flex items-center gap-6 flex-wrap sm:flex-nowrap">
						<div
							className="w-11 h-11 rounded-xl grid place-content-center aspect-square"
							style={{backgroundImage: "linear-gradient(0deg, #AE91CA 0%, #592A85 60%, #180728 100%)"}}
						>
							<EditAlt />
						</div>

						<div className="flex flex-col gap-2">
							<h6 className="text-[#717171] flex items-center gap-2">
								Edit <span className="p-[0.4rem] bg-[#0057f5] rounded-[0.8rem] text-[0.88rem] text-white px-3 py-1 text-xs">New</span>
							</h6>
							<p className="text-[#b4b4b4] text-sm">Add objects, change styles or expand photos and generations</p>
						</div>

						<PrimaryBtn>Open</PrimaryBtn>
					</div>

					<div className="flex items-center gap-6 flex-wrap sm:flex-nowrap">
						<div
							className="w-11 h-11 rounded-xl grid place-content-center aspect-square"
							style={{backgroundImage: "linear-gradient(0deg, #BBCA91 0%, #3C878F 60%, #07280F 100%)"}}
						>
							<Mic />
						</div>

						<div className="flex flex-col gap-2">
							<h6 className="text-[#717171] flex items-center gap-2">
								Video Lipsync <span className="p-[0.4rem] bg-[#0057f5] rounded-[0.8rem] text-[0.88rem] text-white px-3 py-1 text-xs">New</span>
							</h6>
							<p className="text-[#b4b4b4] text-sm">Lip sync any video to any audio.</p>
						</div>

						<PrimaryBtn>Open</PrimaryBtn>
					</div>

					<div className="flex items-center gap-6 flex-wrap sm:flex-nowrap">
						<div
							className="w-11 h-11 rounded-xl grid place-content-center aspect-square"
							style={{backgroundColor: "#1b1c1d"}}
						>
							<MotionAlt />
						</div>

						<div className="flex flex-col gap-2">
							<h6 className="text-[#717171] flex items-center gap-2">
								Motion Transfer<span className="p-[0.4rem] bg-[#0057f5] rounded-[0.8rem] text-[0.88rem] text-white px-3 py-1 text-xs">New</span>
							</h6>
							<p className="text-[#b4b4b4] text-sm">Transfer motion to images and animate characters.</p>
						</div>

						<PrimaryBtn>Open</PrimaryBtn>
					</div>

					<div className="flex items-center gap-6 flex-wrap sm:flex-nowrap">
						<div className="w-11 h-11 rounded-xl grid place-content-center aspect-square">
							<Train />
						</div>

						<div className="flex flex-col gap-2">
							<h6 className="text-[#717171] flex items-center gap-2">
								Train <span className="p-[0.4rem] bg-[#0057f5] rounded-[0.8rem] text-[0.88rem] text-white px-3 py-1 text-xs">New</span>
							</h6>
							<p className="text-[#b4b4b4] text-sm">Teach Krea to replicate your styles, products and characters.</p>
						</div>

						<PrimaryBtn>Open</PrimaryBtn>
					</div>
				</section>

				<div className="mb-2 flex w-full justify-between mt-12">
					<h5 className="font-bold text-xl">Gallery</h5>

					<div className="ml-auto flex items-center gap-1">
						<PrimaryBtn>Legal</PrimaryBtn>
						<PrimaryBtn>Pricing</PrimaryBtn>
					</div>
				</div>
			</main>

			<footer className="flex w-full justify-between items-center sticky bottom-0 text-xl font-semibold bg-stone-800 text-white px-5 py-7">
			<div className="flex justify-between items-center gap-4 "><Krea/>Krea AI</div> 
			<div>curated by Mobbin</div>
			</footer>
		</div>
	);
}
