/** @format */

export default function Navbar() {
  return (
    <div className="w-full fixed top-0 z-10 ">
      {/* desktop */}
      <NavbarDesktop />
      {/* mobile */}
      <NavbarMobile />

      {/* 2nd Navbar */}
      <div className="flex p-4 overflow-x-auto w-full gap-6 md:justify-center items-center bg-white shadow-lg outline-1">
        <a href="#" className="text-[#ed3293] text-nowrap">
          K-Brands
        </a>
        <a href="#" className="text-nowrap">
          Sneakers
        </a>
        <a href="#" className="text-nowrap">
          Apparel
        </a>
        <a href="#" className="text-nowrap">
          Luxury
        </a>
        <a href="#" className="text-nowrap">
          Electronics & Collectibles
        </a>
      </div>
    </div>
  );
}

function NavbarDesktop() {
  return (
    <div className="hidden md:flex pt-[16px] px-[32px] w-full bg-white ">
      <img
        src="https://www.kickavenue.com/static/media/black-logo.6a064f19.svg"
        width={"185px"}
        height={"100%"}
      ></img>
      <div className=" px-[7px] flex bg-[#f0f0f0] rounded-md mx-8 w-full">
        <div className="flex justify-center items-center w-[31px]  mr-1">
          <img
            src="https://www.kickavenue.com/static/media/search-icon.39218494.svg"
            alt=""
          />
        </div>
        <input
          type="text"
          placeholder="Type any products here"
          className=" bg-[#f0f0f0] w-full focus:outline-none"
        />
      </div>
      <div className="flex items-center ml-[-6px]">
        <div className="px-[6px] ">Login</div>
        <div className="px-[6px]">Register</div>
      </div>
    </div>
  );
}

function NavbarMobile() {
  return (
    <div className="flex justify-between md:hidden pt-[16px] px-[32px] w-full bg-white ">
      <img
        src="https://www.kickavenue.com/static/media/search-icon.39218494.svg"
        alt=""
        className=" w-6 h-6"
      />

      <img
        src="https://www.kickavenue.com/static/media/black-logo.6a064f19.svg"
        className="h-6 w-full"
      ></img>

      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAG1BMVEUjIyMvLy////+Xl5f4+Pjz8/Ourq6GhoalpaWPtzYJAAAAZklEQVRIx2NQwgBOGCIMSkSAQakolAjAYGxsbG5sXIyXYAACQQZGAXzEEAaCRACGNCIAgwsRYOimp1FFVFREVFIpJwIQl3yHd+a0IAKMJrpRRdSuOQmCAcgwAgQg3TNnBxFgeNecAHACSX1/gu7fAAAAAElFTkSuQmCC"
        alt=""
        className=" w-6 h-6"
      />
    </div>
  );
}
