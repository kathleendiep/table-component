import { Input } from 'antd';
import '../searchBarComponent/searchBarComponent';

const { Search } = Input;

const SearchAll = ({ searchChecked }) => (
    <div className="search-bar">
        <div className="wrap">
            <div className="search animate__animated animate__fadeInLeft">
                <Search placeholder="Search data..." size="large" onChange={searchChecked} />
            </div>
        </div>
    </div>
)

export default SearchAll
