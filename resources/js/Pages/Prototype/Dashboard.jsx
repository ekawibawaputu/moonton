import Flickity from "react-flickity-component";
import { Head } from "@inertiajs/react";
import Authenticated from "@/Layouts/Authenticated/index";
import FeaturedMovie from "@/Components/FeaturedMovie";
import MovieCard from "@/Components/MovieCard";

export default function Dashboard() {
    const flickityOptions = {
        cellAlign: "left",
        contain: true,
        groupCells: 1,
        wrapAround: false,
        pageDots: false,
        prevNextButtons: false,
        draggable: ">1",
    };
    return (
        <Authenticated>
            <Head title="Dashboard">
                <link
                    rel="stylesheet"
                    href="https://unpkg.com/flickity@2/dist/flickity.min.css"
                />
            </Head>
            <div>
                <div className="font-semibold text-[22px] text-black mb-4">
                    Featured Movies
                </div>
                <Flickity className="gap-[30px]" options={flickityOptions}>
                    {[1, 2, 3, 4].map((item) => (
                        <FeaturedMovie
                            key={item}
                            slug="the-batman-in-love"
                            name={`The Batman in Love ${item}`}
                            thumbnail="/images/featured-2.png"
                            rating={item + 1}
                            category={"Comedy"}
                        />
                    ))}
                </Flickity>
            </div>
            <div className="mt-[50px]">
                <div className="font-semibold text-[22px] text-black mb-4">
                    Browse
                </div>
                <Flickity className="gap-[30px]" options={flickityOptions}>
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                        <MovieCard
                            key={item}
                            slug="meong-golden"
                            name={`Meong Golden ${item}`}
                            category={"Horror"}
                            thumbnail="/images/browse-5.png"
                        />
                    ))}
                </Flickity>
            </div>
        </Authenticated>
    );
}
