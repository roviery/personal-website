import Box from "../components/Box";
import { TbBrandKotlin } from "react-icons/tb"
import { FaNodeJs } from "react-icons/fa"

function Project(props) {
    return (
        <div className="container p-4 mx-auto my-40 lg:p-16">
            <h2 className="text-center m-5">My Projects</h2>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <Box
                    type='Android App'
                    title='Catetin'
                    desc='A personal app to write down deadline tasks, to-do lists, and financial records.'
                    icon={<TbBrandKotlin className="absolute bottom-4 left-5 w-10 h-10" />}
                    id='a1f38fab-8ab8-4854-a7c8-754721683d7f'
                />
                <Box
                    type='Android App'
                    title='Movlix'
                    desc='Movie Catalog App using TMDB API.'
                    icon={<TbBrandKotlin className="absolute bottom-4 left-5 w-10 h-10" />}
                    id='9c0f0aed-b00e-4df6-96e3-a89524974b75'
                />
                <Box
                    type='Android App'
                    title='NewsApp'
                    desc='NewsApp provides worldwide news from reputable websites using News API as the data source.'
                    icon={
                        <TbBrandKotlin className="absolute bottom-4 left-5 w-10 h-10" />
                    }
                    id='680bba1f-32a9-498b-a027-eced51b19e9e'
                />
                <Box
                    type='API'
                    title='Bookshelf API'
                    desc='CRUD API using nodejs and hapi framework.'
                    icon={
                        <FaNodeJs className="absolute bottom-4 left-5 w-10 h-10" />
                    }
                    id='d4a6177e-6530-4ca0-b7a5-01b54ae2a93c'
                />
            </div>
        </div>
    )
}

export default Project