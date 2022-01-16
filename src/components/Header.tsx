import bgImage from '../img/sky_00128.jpg';

const Header = () =>  {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">Portfolio</span>
                <span className="headerTitleLg">Ryupim</span>
            </div>
            <img 
                className="headerImg"
                src={bgImage}
                alt="" />
        </div>
    )
}

export default Header;