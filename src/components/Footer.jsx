import 'boxicons/css/boxicons.min.css';

export default function Footer() {
    return(
<div className="absolute bottom-0 flex items-center gap-[2px] text-[#D1CCE3] text-xs bg-black bg-opacity-65 px-3 py-2 mb-2 rounded-lg">
    <span className="leading-none mt-1">SimoneMorella</span> 
    <a href="https://github.com/SimoneMorella" className="transform hover:rotate-45 transition ease-out duration-300 flex text-base leading-none">
        <i className='bx bxl-github' id="gitico"></i>
    </a>
    <span className="leading-none mt-1">{new Date().getFullYear()}</span>
</div>

    )
}