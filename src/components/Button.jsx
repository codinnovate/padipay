const Button = ({text, icon, className, reversed}) => {
    return (
        <div
            className={`flex  rounded-[0.25em] min-w-[11.25em] py-[1em] cursor-pointer w-fit  items-center justify-center ${className}`}>
            {reversed ?
                <>
            {icon && 
                <span className="mr-2">{icon}</span>
                    }
                    <h3 className=" text-black text-lg font-medium capitalize ">{text}</h3>
                </>
                :
                <>
            <h3 className=" text-white text-lg font-medium capitalize ">{text}</h3>
            {icon && 
                <span className="ml-2">{icon}</span>
            }
                </>
            }
        </div>
    )
}

export default Button
