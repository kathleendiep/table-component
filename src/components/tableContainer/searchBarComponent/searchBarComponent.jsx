import { Input } from 'antd';
import './searchBarComponent.css';

const { Search } = Input;

const SearchBarComponent = ({ searchChanged }) => (
    <div className="search-bar">
        <div className="wrap">
            <div className="search animate__animated animate__fadeInLeft">
                <Search placeholder="Search data..." size="large" onChange={searchChanged} />
            </div>
        </div>
    </div>
)

export default SearchBarComponent
