//import Logo from "../images/Egret.png"
function Header() {
  return (
    <header className="bg-blue-100 h-12 md:h-20">
      <div class="max-w-screen-xl mx-auto h-full flex justify-between items-center">
        {/* //부모가 height이 정해져 있다면 거기에 맞춰서 full로 내려감 */}
        <div>JY's Portfolio</div>
        {/* <div>
            <img className="w-12" src={Nft} alt="Nft" />  이미지 첨부
          </div> */}
        <ul className="flex gap-2 md:gap-8 text-xs sm:text-sm md:text-base">
          {/* //md:gap-[10px] 디테일한 px을 설정하고 싶은 경우 대괄호 사용 */}
          <li className="bg-indigo-300 btn-style">Introduce</li>
          <li className="bg-purple-300 btn-style">Portfolio</li>
          <li className="bg-blue-300 btn-style">Contact Me</li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
