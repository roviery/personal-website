import React from "react";

class About extends React.Component {
    render() {
        return (
            <div className="container mx-auto pt-5 my-40" id="about">
                <div className="flex flex-col lg:flex-row-reverse justify-around items-center">
                    <div className="h-44 md:h-64 my-10 lg:my-0">
                        <img
                            className="h-full rounded-full"
                            src={process.env.PUBLIC_URL + "/me.jpg"}
                            alt="Profile"
                        />
                    </div>
                    <a
                        className="border border-slate-800 leading-relaxed rounded-xl cursor-pointer 
                                w-2/3 p-10 duration-300 hover:bg-slate-800 
                                hover:text-white hover:duration-300"
                        href="https://drive.google.com/file/d/1LQDZnlhsc2f4jcLGePUildUt-pVYv0wo/view?usp=sharing"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <h3 className="">Hi! I'm Nathanael Roviery</h3>
                        <br />
                        <p>
                            I'm an undegraduate student at Institute Teknologi Sepuluh Nopember
                            (ITS). I love to learn new things especially about mobile and web
                            development.
                        </p>
                        <br />
                        <p>
                            I learned coding since early 2020 where I learned about HTML and CSS
                            from Youtube and also python for basic programming. but I didn't spend 
                            much time at that time because I had to prepare for the university 
                            entrance exam. After I got into ITS, I learned C & C++ and got to know
                            about competitive programming.
                        </p>
                        <br />
                        <p>
                            In 2021, I enrolled in IDCamp, a scholarship program from Indosat
                            Ooredoo Hutchison, and this is where I started to learn about Android
                            Development. After a year spent well learning about Android, right now,
                            I try to learn about web development.
                        </p>
                        <br />
                        <p className="text-end">See my resume &rarr;</p>
                    </a>
                </div>

            </div>
        )
    }

}

export default About