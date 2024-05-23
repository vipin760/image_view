import { useDispatch, useSelector } from "react-redux";
import "./Home.css";
import axios from "axios";
import { useEffect } from "react";
import Loading from "../../Partials/Loading/Loading";
import { imageDelete, imageGet } from "../../../redux/img/img.action";
import { toast } from "react-toastify";

const Home = () => {
    const dispatch = useDispatch();

    const handleDelete = async (id) => {
        const del = confirm("Are you sure?");
        if (del) {
            try {
                await dispatch(imageDelete(id));
                await dispatch(imageGet());
            } catch (error) {
                console.error("Failed to delete or get images:", error);
            }
        }
    };

    const imageFiles = useSelector((state) => state.imageFiles);
    const { errormessage, loading, imageData } = imageFiles;
    useEffect(() => {
        dispatch(imageGet());
    }, []);

    return (
        <section className="main_card">
            <div className="py-2">
                <div className="mx-auto max-w-6xl text-gray-500">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {loading ? (
                            <>
                                <Loading />
                            </>
                        ) : (
                            <>
                                {imageData &&
                                    imageData.data &&
                                    imageData.data.map((data) => (
                                        <div key={data._id}>
                                            <div className="relative group object-contain p-1 rounded-2xl bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900">
                                                <img
                                                    className="rounded-2xl"
                                                    src={data.imgUrl}
                                                    alt=""
                                                />
                                                <div className="relative">
                                                    <div className="mt-1 pb-1 rounded-b-[--card-border-radius]">
                                                        <h3 className="wallpaper_title text-2xl">
                                                            {data.title}
                                                        </h3>
                                                        <p className="text-gray-700 p-1 dark:text-gray-400">
                                                            {data.description}
                                                        </p>
                                                        <div className="flex gap-2">
                                                            <a
                                                                href={`/edit/${data._id}`}
                                                                className="bg-indigo-500 hover:bg-indigo-600 text-white rounded pl-2 pr-2"
                                                            >
                                                                <button>
                                                                    Edit
                                                                </button>
                                                            </a>
                                                            <div className="bg-pink-500 hover:bg-pink-600 text-white rounded pl-2 pr-2">
                                                                <button
                                                                    onClick={() =>
                                                                        handleDelete(
                                                                            data._id
                                                                        )
                                                                    }
                                                                >
                                                                    Delete
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
