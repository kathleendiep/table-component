import { Input } from 'antd';
import '../searchBarComponent/searchBarComponent';
import './searchAll.css';
const { Search } = Input;

const SearchAll = ({ searchChecked }) => (
    <div className="search-bar-all data-all">
        <div className="wrap-all">
            <h2>Search all...</h2>
            <div className="search-all animate__animated animate__fadeInLeft">
                <Search placeholder="Search data..." onChange={searchChecked}/>
            </div>
            <p>First name should be separated by command</p>
        </div>
    </div>
)

export default SearchAll
