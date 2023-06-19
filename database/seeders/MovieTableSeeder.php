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
                'thumbnail' => 'https://id.wikipedia.org/wiki/The_Shawshank_Redemption#/media/Berkas:ShawshankRedemptionMoviePoster.jpg',
                'rating' => 9.3,
                'is_featured' => 0,
            ],
            [
                'name' => 'The God Father',
                'slug' => 'the-god-father',
                'category' => 'Drama',
                'video_url' => 'https://www.youtube.com/watch?v=UaVTIH8mujA',
                'thumbnail' => 'https://upload.wikimedia.org/wikipedia/en/a/af/The_Godfather%2C_The_Game.jpg',
                'rating' => 9.2,
                'is_featured' => 0,
            ],
            [
                'name' => 'Twenty Five Twenty One',
                'slug' => 'twenty-five-twenty-one',
                'category' => 'Drama',
                'video_url' => 'https://www.youtube.com/watch?v=gYp4cKumTwU',
                'thumbnail' => 'https://upload.wikimedia.org/wikipedia/id/1/15/Twenty-Five_Twenty-One.jpg',
                'rating' => 8.5,
                'is_featured' => 1,
            ],
            [
                'name' => 'Our Beloved Summer',
                'slug' => 'our-beloved-summer',
                'category' => 'Drama',
                'video_url' => 'https://www.youtube.com/watch?v=wpW6aVWgvMc',
                'thumbnail' => 'https://upload.wikimedia.org/wikipedia/id/2/29/Our_Beloved_Summer.jpg',
                'rating' => 8.2,
                'is_featured' => 1,
            ],
        ];

        Movie::insert($movies);
    }
}
