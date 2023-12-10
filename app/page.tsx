import Image from "next/image";
import Features from "./components/Features";

export default function Home() {
	return (
		<main>
			<Features />
			<div className="text-[#000]">
				<div className="bg-[#D87D4A] rounded pt-16 overflow-hidden mb-16">
					<div className="flex flex-col align-middle justify-center items-center gap-8 w-full md:grid md:grid-cols-2">
						<div className="w-full flex items-center justify-center mb-[-8px]">
							<Image
								src="/image-speaker-zx9.png"
								width="350"
								height="490"
								alt="Logo"
								className="h-auto"
							/>
						</div>
						<div className="flex flex-col gap-5 text-center items-center md:text-left md:items-start md:py-10">
							<h1 className="text-white ">ZX9 Speaker</h1>
							<p className="text-[#fff]">
								Upgrade to premium speakers that are phenomenally built to
								deliver truly remarkable sound.
							</p>
							<p className="text-center md:text-left mb-8">
								<a
									href="#"
									className="text-white bg-[#000] px-5 py-3 w-[160px] text-center uppercase text-[13px] bold tracking-[1px] hover:bg-[#4c4c4c]"
								>
									See Product
								</a>
							</p>
						</div>
					</div>
				</div>
				<div className="bg-[url('/image-speaker-zx7.jpg')] bg-cover bg-center no-repeat rounded overflow-hidden mb-16">
					<div className="flex flex-col justify-start items-start text-left md:p-24 p-12">
						<h2 className="text-black mb-8">ZX7 Speaker</h2>
						<p className="text-center md:text-left">
							<a
								href="#"
								className="text-black border border-black px-5 py-3 w-[160px] text-center uppercase text-[13px] bold tracking-[1px] hover:text-white hover:border-white hover:bg-black"
							>
								See Product
							</a>
						</p>
					</div>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 bg-[#f1f1f1]">
					<div>
						<Image
							src="/image-earphones-yx1.jpg"
							width="0"
							height="0"
							sizes="100vw"
							className="w-full h-auto"
							alt="Logo"
						/>
					</div>
					<div className="flex flex-col justify-start items-start text-left md:p-24 p-12">
						<h2 className="text-black mb-8">YX1 Eerphones</h2>
						<p className="text-center md:text-left">
							<a
								href="#"
								className="text-black border border-black px-5 py-3 w-[160px] text-center uppercase text-[13px] bold tracking-[1px] hover:text-white hover:border-white hover:bg-black"
							>
								See Product
							</a>
						</p>
					</div>
				</div>
			</div>
		</main>
	);
}
