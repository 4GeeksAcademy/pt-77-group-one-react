import React from "react";
import Card from './Card';


const Home = () => {
	return (
		<div className="text-center">
			{/*  navbar */}
			
			{/*  jumbotron */}
			
			{/*  card */}
			<div className="d-flex">
				<Card img={"https://townsquare.media/site/295/files/2021/05/10-Years-collage.jpg"}  
				title={"Most Popular Bands of 2025"} 
				content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."} />
				<Card img={"https://ca-times.brightspotcdn.com/dims4/default/a90d9dc/2147483647/strip/true/crop/2575x1716+0+0/resize/2000x1333!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F87%2F4b%2F9873494e403bba58213e618155b4%2Fgrammy-illustration-2.jpg"}
				 title={"Most popular artists of 2025"} 
				 content={"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}/>
				<Card img={"https://i8.amplience.net/i/naras/Girl-Groups-Editorial-Collage_08272024_Hero-1644x925.jpg"} 
				title={"Best International Groups"} 
				content={"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "}/>
				<Card img={"https://notjustok.com/wp-content/uploads/2024/12/The-20-best-Afrobeats-artists-of-2024-scaled.jpg"} 
				title={"Best AfroBeats Artists"} 
				content={"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}/>
			</div>
			
			
			{/*  footer */}
			
		</div>
	);
};

export default Home;
