<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Movie;

class MovieTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $movies = [
            [
                'name' => 'The Shawshank Redemption',
                'slug' => 'the-shawshank-redemption',
                'category' => 'Drama',
                'video_url' => 'https://www.youtube.com/watch?v=PLl99DlL6b4',
                'thumbnail' => 'https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg',
                'rating' => 4.3,
                'is_featured' => 0,
            ],
            [
                'name' => 'The God Father',
                'slug' => 'the-god-father',
                'category' => 'Drama',
                'video_url' => 'https://www.youtube.com/watch?v=UaVTIH8mujA',
                'thumbnail' => 'https://upload.wikimedia.org/wikipedia/en/a/af/The_Godfather%2C_The_Game.jpg',
                'rating' => 4.2,
                'is_featured' => 0,
            ],
            [
                'name' => 'Twenty Five Twenty One',
                'slug' => 'twenty-five-twenty-one',
                'category' => 'Drama',
                'video_url' => 'https://www.youtube.com/watch?v=gYp4cKumTwU',
                'thumbnail' => 'https://upload.wikimedia.org/wikipedia/id/1/15/Twenty-Five_Twenty-One.jpg',
                'rating' => 4.5,
                'is_featured' => 1,
            ],
            [
                'name' => 'Our Beloved Summer',
                'slug' => 'our-beloved-summer',
                'category' => 'Drama',
                'video_url' => 'https://www.youtube.com/watch?v=wpW6aVWgvMc',
                'thumbnail' => 'https://upload.wikimedia.org/wikipedia/id/2/29/Our_Beloved_Summer.jpg',
                'rating' => 4.2,
                'is_featured' => 1,
            ],
            [
                'name' => 'Titanic',
                'slug' => 'titanic',
                'category' => 'Drama',
                'video_url' => 'https://www.youtube.com/watch?v=wO44qBPBG4c',
                'thumbnail' => 'https://upload.wikimedia.org/wikipedia/id/1/19/Titanic_%28Official_Film_Poster%29.png',
                'rating' => 4.2,
                'is_featured' => 0,
            ],
            [
                'name' => 'Avatar',
                'slug' => 'avatar',
                'category' => 'Sci-fi',
                'video_url' => 'https://www.youtube.com/watch?v=rjRVnVziU2A',
                'thumbnail' => 'https://upload.wikimedia.org/wikipedia/id/b/b0/Avatar-Teaser-Poster.jpg',
                'rating' => 4.6,
                'is_featured' => 1,
            ],
            [
                'name' => 'Harry Potter',
                'slug' => 'harry-potter',
                'category' => 'Fictions',
                'video_url' => 'https://www.youtube.com/watch?v=71xBu_VHTfY',
                'thumbnail' => 'https://akcdn.detik.net.id/visual/2021/12/19/film-harry-potter-20th-anniversary-return-to-hogwarts-yang-siap-rilis-di-2022instagramharrypotterfilm-1_169.jpeg?w=700&q=90',
                'rating' => 4.2,
                'is_featured' => 1,
            ],
            [
                'name' => 'Reborn Rich',
                'slug' => 'reborn-rich',
                'category' => 'Drama',
                'video_url' => 'https://www.youtube.com/watch?v=6lGImvjI_Sw',
                'thumbnail' => 'https://upload.wikimedia.org/wikipedia/id/6/66/Reborn_Rich.jpg',
                'rating' => 4.4,
                'is_featured' => 1,
            ],
        ];

        Movie::insert($movies);
    }
}
