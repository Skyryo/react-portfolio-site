import CoverImage from '../images/cover-image.jpg';
import ProfileImage from '../images/profile-image.jpg';
import {FaTwitter, FaGithub, FaFacebook } from 'react-icons/fa';

export const Header = () =>  {
    return (
        <header className="main-cover" style={{backgroundImage: `url(${CoverImage})`}}>
            {/* overlayはカバー画像の上に投下して表示される葉費計要素*/}
            <div className="overlay"></div>
            <div className="container">
                <div className="display-table">
                    <div className="display-table-contents">
                        {/*カバー画像 */}
                        <div className="profile-thumb" style={{backgroundImage: `url(${ProfileImage})`}}></div>
                        {}
                        <h1 className="title-text">ryo sakai</h1>
                        <h3 className="title-text">エンジニア見習い</h3>
                        <ul className="social-icons">
                            <li className="icon-link">
                                {}
                                <a href="https://twitter.com">
                                    <FaTwitter color="white" size="2rem" />
                                </a>
                            </li>
                            <li className="icon-link">
                                {}
                                <a href="https://github.com/Skyryo">
                                    <FaGithub color="white" size="2rem" />
                                </a>
                            </li>
                            <li className="icon-link">
                                {}
                                <a href="https://facebook.com">
                                    <FaFacebook color="white" size="2rem" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};