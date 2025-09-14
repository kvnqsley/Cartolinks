import HomeView from "./components/HomeView";
import { Krea } from "./components/icons";

export default function Home() {


	
	  
	
	
	return (
		<div>
		
<HomeView/>
			<footer className="flex w-full justify-between items-center sticky bottom-0 text-xl font-semibold bg-stone-800 text-white px-5 py-7">
			<div className="flex justify-between items-center gap-4 "><Krea/>Krea AI</div> 
			<div>curated by Mobbin</div>
			</footer>
		</div>
	);
}
