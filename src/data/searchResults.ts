export interface Song {
    title: string;
    url: string;
}

export interface Artist {
    name: string;
    url: string;
    image: string;
    songs: Song[];
}

export const searchResults: Artist[] = [
    {
        name: "T-ARA",
        url: "/t-ara",
        image: "/artist/t-ara.jpg",
        songs: [
            {title: "Sugar Free",url: "/t-ara/sugarfree",},
        ],
    },
];