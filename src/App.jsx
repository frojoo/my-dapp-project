//import Logo from "./images/Egret.png"

function App() {
  return (
    <div className="bg-red-100 min-h-screen">
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
      <main>
        <div className="max-w-screen-xl mx-auto bg-green-100 h-96 flex justify-center items-center">
          자기 소개
        </div>
        <div>
          <ul className="bg-indigo-100 max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-8 py-8">
            {/* object-fit: cover 이미지가 들어온다면 */}
            <li className="bg-purple-200 w-60 h-72 rounded-xl">
              <div className="bg-yellow-100 w-full h-1/2 rounded-t-xl">
                프로젝트 이미지
              </div>
              <div className="text-xl font-bold mt-2 mx-2">프로젝트 제목</div>
              <div className="mt-2 mx-2">프로젝트 간략한 설명</div>
            </li>
            <li className="bg-purple-200 w-60 h-72 rounded-xl">
              <div className="bg-yellow-100 w-full h-1/2 rounded-t-xl">
                프로젝트 이미지
              </div>
              <div className="text-xl font-bold mt-2 mx-2">프로젝트 제목</div>
              <div className="mt-2 mx-2">프로젝트 간략한 설명</div>
            </li>
            <li className="bg-purple-200 w-60 h-72 rounded-xl">
              <div className="bg-yellow-100 w-full h-1/2 rounded-t-xl">
                프로젝트 이미지
              </div>
              <div className="text-xl font-bold mt-2 mx-2">프로젝트 제목</div>
              <div className="mt-2 mx-2">프로젝트 간략한 설명</div>
            </li>
            <li className="bg-purple-200 w-60 h-72 rounded-xl">
              <div className="bg-yellow-100 w-full h-1/2 rounded-t-xl">
                프로젝트 이미지
              </div>
              <div className="text-xl font-bold mt-2 mx-2">프로젝트 제목</div>
              <div className="mt-2 mx-2">프로젝트 간략한 설명</div>
            </li>
            <li className="bg-purple-200 w-60 h-72 rounded-xl">
              <div className="bg-yellow-100 w-full h-1/2 rounded-t-xl">
                프로젝트 이미지
              </div>
              <div className="text-xl font-bold mt-2 mx-2">프로젝트 제목</div>
              <div className="mt-2 mx-2">프로젝트 간략한 설명</div>
            </li>
            <li className="bg-purple-200 w-60 h-72 rounded-xl">
              <div className="bg-yellow-100 w-full h-1/2 rounded-t-xl">
                프로젝트 이미지
              </div>
              <div className="text-xl font-bold mt-2 mx-2">프로젝트 제목</div>
              <div className="mt-2 mx-2">프로젝트 간략한 설명</div>
            </li>
            <li className="bg-purple-200 w-60 h-72 rounded-xl">
              <div className="bg-yellow-100 w-full h-1/2 rounded-t-xl">
                프로젝트 이미지
              </div>
              <div className="text-xl font-bold mt-2 mx-2">프로젝트 제목</div>
              <div className="mt-2 mx-2">프로젝트 간략한 설명</div>
            </li>
            <li className="bg-purple-200 w-60 h-72 rounded-xl">
              <div className="bg-yellow-100 w-full h-1/2 rounded-t-xl">
                프로젝트 이미지
              </div>
              <div className="text-xl font-bold mt-2 mx-2">프로젝트 제목</div>
              <div className="mt-2 mx-2">프로젝트 간략한 설명</div>
            </li>
          </ul>
        </div>
        <div className="bg-gray-100 max-w-screen-xl mx-auto h-96 flex justify-center items-center">
          내 연락처
        </div>
        <footer className="max-w-screen-xl mx-auto flex justify-end py-1 px-2 md:py-2">
          2023, Designed by JY
        </footer>
      </main>
    </div>
  );
}

export default App;
