/**
 * @copyright 2025 xeynacode
 * @license Apache-2.0
 */

// Node modules

import PropTypes from "prop-types";

const ProjectCard = ({
    imgSrc,
    title,
    tags,
    projecLink,
    classes
}) => {
  return (
    <div className={"relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-color" + classes}>
        <figure className="img-box aspect-square rounded-lg mb-4">
            <img 
            src={imgSrc}
            alt={title}
            className="img-cover"
            loading='lazy' 
            />
        </figure>

        <div className="flex items-center justify-between gap-4">

            <div>
                <h3 className="title-1 mb-3">
                    {title}
                </h3>

                <div className="flex flex-wrap items-center gap-2">
                    {tags.map((label, key) => (
                        <span key={key} className="h-8 text-sm text-zinc-400 bg-zinc-50/5 grid items-center px-3 rounded-lg">
                            {label}
                        </span>
                    ))}
                </div>
            </div>
                    <div className="">
                        <span 
                        className="material-symbols-rounded"
                        aria-hidden="true"
                        >
                            arrow_outward
                        </span>
                    </div>
        </div>

        <a 
        href="projectLink"
        target="_blank"
        className=""
        ></a>

        
    </div>
  )
}

ProjectCard.PropTypes = {
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    projectLink: PropTypes.string.isRequired,
    classes: PropTypes.string
}

export default ProjectCard