/** @format */

type Props = {};

export default function Navbar({}: Props) {
  return (
    <div className="py-[10px] px-4 w-full bg-[#EEF1F3] text-[#002f34] flex justify-center">
      <div className="mx-[22.5px] max-w-screen-xl flex w-full justify-between  ">
        {/* logo */}
        <div className=" w-12 aspect-square">
          <img
            src="https://statics.olx.co.id/olxid/astra_branding/olx-indonesia-logo.svg"
            alt=""
            className=" w-full h-full"
          />
        </div>

        {/* input */}
        <div className=" mx-4 hidden sm:flex lg:min-w-[630px] w-full">
          <div className="min-w-[272px] px-2 flex items-center bg-white border-2 border-black rounded-[4px] ">
            <svg
              width="17px"
              height="17px"
              viewBox="0 0 1024 1024"
              data-aut-id="icon"
              fill-rule="evenodd"
            >
              <path d="M448 725.333c-152.917 0-277.333-124.416-277.333-277.333s124.416-277.333 277.333-277.333c152.917 0 277.333 124.416 277.333 277.333s-124.416 277.333-277.333 277.333v0zM884.437 824.107v0.021l-151.915-151.936c48.768-61.781 78.144-139.541 78.144-224.192 0-199.979-162.688-362.667-362.667-362.667s-362.667 162.688-362.667 362.667c0 199.979 162.688 362.667 362.667 362.667 84.629 0 162.411-29.376 224.171-78.144l206.144 206.144h60.352v-60.331l-54.229-54.229z"></path>
            </svg>
            <input
              type="text"
              placeholder="Cari kota, area, atau lokalitas"
              className="pl-4 h-10 text-ellipsis focus:outline-none w-full "
              value="Jakarta Selatan, Jakarta D.K.I."
            />
            <button className=" w-10 aspect-square ">
              <span
                className=" rounded-full w-full h-full
              flex items-center justify-center
              "
              >
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 1024 1024"
                  data-aut-id="icon"
                  fill-rule="evenodd"
                >
                  <path d="M85.392 277.333h60.331l366.336 366.336 366.336-366.336h60.331v60.331l-408.981 409.003h-35.307l-409.045-409.003z"></path>
                </svg>
              </span>
            </button>
          </div>
          <div className="w-full flex items-center bg-white border-2 border-black rounded-[4px] ml-4 relative ">
            <input
              type="text"
              className=" h-10 px-2 w-full focus:outline-none text-ellipsis"
              placeholder="Temukan Mobil, Handphone, dan lainnya ..."
            />
            <button className="w-12 h-full aspect-square bg-[#002f34] flex items-center justify-center relative right-0">
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 1024 1024"
                data-aut-id="icon"
                fill-rule="evenodd"
              >
                <path
                  fill="white"
                  d="M448 725.333c-152.917 0-277.333-124.416-277.333-277.333s124.416-277.333 277.333-277.333c152.917 0 277.333 124.416 277.333 277.333s-124.416 277.333-277.333 277.333v0zM884.437 824.107v0.021l-151.915-151.936c48.768-61.781 78.144-139.541 78.144-224.192 0-199.979-162.688-362.667-362.667-362.667s-362.667 162.688-362.667 362.667c0 199.979 162.688 362.667 362.667 362.667 84.629 0 162.411-29.376 224.171-78.144l206.144 206.144h60.352v-60.331l-54.229-54.229z"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Login */}
        <div className="flex items-center">
          <button>
            <span className=" border-b-2 border-black font-semibold  ml-5 mr-3 ">
              Login/daftar
            </span>
          </button>
          <a href="" className=" relative flex justify-center  items-center">
            <svg width="104" height="48" viewBox="0 0 1603 768">
              <g>
                <path
                  fill="white"
                  d="M434.442 16.944h718.82c202.72 0 367.057 164.337 367.057 367.058s-164.337 367.057-367.057 367.057h-718.82c-202.721 0-367.058-164.337-367.058-367.058s164.337-367.058 367.058-367.058z"
                ></path>
                <path
                  fill="#ffce32"
                  d="M427.241 669.489c-80.917 0-158.59-25.926-218.705-73.004l-0.016-0.014c-69.113-54.119-108.754-131.557-108.754-212.474 0-41.070 9.776-80.712 29.081-117.797 25.058-48.139 64.933-89.278 115.333-118.966l-52.379-67.581c-64.73 38.122-115.955 90.98-148.159 152.845-24.842 47.745-37.441 98.726-37.441 151.499 0 104.027 50.962 203.61 139.799 273.175h0.016c77.312 60.535 177.193 93.887 281.22 93.887h299.699l25.138-40.783-25.138-40.783h-299.698z"
                ></path>
                <path
                  fill="#23e5db"
                  d="M1318.522 38.596v0c-45.72-14.369-93.752-21.658-142.762-21.658h-748.511c-84.346 0-165.764 21.683-235.441 62.713l3.118 51.726 49.245 15.865c54.16-31.895 117.452-48.739 183.073-48.739h748.511c38.159 0 75.52 5.657 111.029 16.829v0c44.91 14.111 86.594 37.205 120.526 66.792l66.163-57.68c-43.616-38.010-97.197-67.703-154.957-85.852z"
                ></path>
                <path
                  fill="#3a77ff"
                  d="M1473.479 124.453l-55.855 9.91-10.307 47.76c61.844 53.929 95.92 125.617 95.92 201.88 0 25.235-3.772 50.26-11.214 74.363-38.348 124.311-168.398 211.129-316.262 211.129h-448.812l25.121 40.783-25.121 40.783h448.812c190.107 0 357.303-111.638 406.613-271.498 9.572-31.009 14.423-63.162 14.423-95.559 0-98.044-43.805-190.216-123.317-259.551z"
                ></path>
              </g>
            </svg>

            <div className=" absolute flex">
              <span className=" flex items-center mr-1">
                <svg
                  width="16px"
                  height="16px"
                  viewBox="0 0 1024 1024"
                  data-aut-id="icon"
                  fill-rule="evenodd"
                >
                  <path d="M414.898 123.739v291.218h-291.218l-97.014 97.014 97.014 97.131h291.218v291.16l97.073 97.071 97.073-97.071v-291.16h291.16l97.131-97.131-97.131-97.014h-291.16v-291.218l-97.073-97.073z"></path>
                </svg>
              </span>
              <span className=" text-sm font-semibold">JUAL</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
