import React from "react";
import Box from "../Components/Box";
import { TbBrandKotlin } from "react-icons/tb"
import { FaNodeJs } from "react-icons/fa"

class Project extends React.Component {
    render() {
        return (
            <div className="container mx-auto my-40">
                <h2 className="text-center m-5">My Projects</h2>
                <div className='grid grid-cols-2'>
                    <Box
                        type='Android App'
                        title='Catetin'
                        desc='A personal app to write down deadline tasks, to-do lists, and financial records.'
                        icon={<TbBrandKotlin className="absolute bottom-4 left-5 w-10 h-10" />}
                        link='https://github.com/roviery/Catetin'
                    />
                    <Box
                        type='Android App'
                        title='Movlix'
                        desc='Movie Catalog App using TMDB API.'
                        icon={<TbBrandKotlin className="absolute bottom-4 left-5 w-10 h-10" />}
                        link='https://github.com/roviery/Dicoding-MADE-Movlix/tree/submission2'
                    />
                    <Box
                        type='Android App'
                        title='NewsApp'
                        desc='NewsApp provides worldwide news from reputable websites using News API as the data source.'
                        icon={
                            <TbBrandKotlin className="absolute bottom-4 left-5 w-10 h-10" />
                        }
                        link='https://github.com/roviery/NewsApp'
                    />
                    <Box
                        type='API'
                        title='Bookshelf API'
                        desc='CRUD API using nodejs and hapi framework.'
                        icon={ 
                            <FaNodeJs className="absolute bottom-4 left-5 w-10 h-10"/>
                        }
                        link='https://github.com/roviery/Bookshelf-API'
                    />
                </div>
            </div>
        )
    }
}

export default Project