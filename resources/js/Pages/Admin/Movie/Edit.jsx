import { Head, useForm } from "@inertiajs/react";
import { router } from "@inertiajs/react";
import Authenticated from "@/Layouts/Authenticated/index";
import Input from "@/Components/Input";
import Label from "@/Components/Label";
import Checkbox from "@/Components/Checkbox";
import Button from "@/Components/Button";
import ValidationErrors from "@/Components/ValidationErrors";

export default function Create({ auth, movie }) {
    const { data, setData, processing, errors } = useForm({
        ...movie,
    });

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "file"
                ? event.target.files[0]
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();

        if (data.thumbnail === movie.thumbnail) {
            delete data.thumbnail;
        }

        router.post(route("admin.dashboard.movie.update", movie.id), {
            _method: "PUT",
            ...data,
        });
    };

    return (
        <Authenticated auth={auth}>
            <Head title="Admin - Update Movie" />
            <h1 className="text-xl">Update Movie: {movie.name}</h1>
            <hr className="mb-4" />
            <ValidationErrors errors={errors} />
            <form onSubmit={submit}>
                <Label forinput="name" value="Name" />
                <Input
                    type="text"
                    name="name"
                    defaultValue={movie.name}
                    variant="primary-outline"
                    handleChange={onHandleChange}
                    placeholder="Enter the Name of Movie"
                    isError={errors.name}
                />
                <Label forinput="category" value="Category" className="mt-4" />
                <Input
                    type="text"
                    name="category"
                    variant="primary-outline"
                    defaultValue={movie.category}
                    handleChange={onHandleChange}
                    placeholder="Enter the category of Movie"
                    isError={errors.category}
                />
                <Label
                    forinput="video_url"
                    value="Video URL"
                    className="mt-4"
                />
                <Input
                    type="url"
                    name="video_url"
                    variant="primary-outline"
                    defaultValue={movie.video_url}
                    handleChange={onHandleChange}
                    placeholder="Enter the video url of Movie"
                    isError={errors.video_url}
                />
                <Label
                    forinput="thumbnail"
                    value="Thumbnail"
                    className="mt-4"
                />
                <img
                    src={`/storage/${movie.thumbnail}`}
                    alt="thumbnail"
                    className="w-40"
                />
                <Input
                    type="file"
                    name="thumbnail"
                    variant="primary-outline"
                    handleChange={onHandleChange}
                    placeholder="Insert thumbnail of the Movie"
                    isError={errors.thumbnail}
                />
                <Label forinput="rating" value="Rating" className="mt-4" />
                <Input
                    type="number"
                    name="rating"
                    defaultValue={movie.rating}
                    variant="primary-outline"
                    handleChange={onHandleChange}
                    placeholder="Enter rating of the Movie"
                    isError={errors.rating}
                />
                <div className="flex flex-row mt-4 items-center">
                    <Label
                        forinput="is_featured"
                        value="Is Featured"
                        className="mr-3 mt-1"
                    />
                    <Checkbox
                        name="is_featured"
                        handleChange={(event) =>
                            setData("is_featured", event.target.checked)
                        }
                        checked={movie.is_featured}
                    />
                </div>
                <Button type="submit" className="mt-4" processing={processing}>
                    Save
                </Button>
            </form>
        </Authenticated>
    );
}
