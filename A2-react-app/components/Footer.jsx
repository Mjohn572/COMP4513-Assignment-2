import { useNavigate } from "react-router-dom";

const Footer = function (props) {
    const navigate = useNavigate();

    return (
        <div className="w-full border-b border-silver-200 bg-white px-4 py-3 bg-gradient-to-br from-black/80  to-silver-800/20">
            <div>
                <div>
                    <img
                        src="/lava-lamp-logo.png"
                        alt="https://commons.wikimedia.org/wiki/File:Lavalampe.jpg"
                        onClick={() => navigate('/')}
                        className="h-auto w-[50px] cursor-pointer logoImage"
                    />
                </div>
                <div>
                    <p>
                        <a href="https://github.com/Mjohn572/COMP4513-Assignment-2">
                            <img
                                src="/github-icon.svg"
                                alt="https://commons.wikimedia.org/wiki/File:Octicons-mark-github.svg"
                                className="h-auto w-[20px] inline-block mr-1"
                            />
                        </a>
                    </p>
                </div>
                <div>
                    
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default Footer;