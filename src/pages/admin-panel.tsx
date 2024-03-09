import { FunctionComponent } from "react";
import DataContainer from "../components/data-container";
import TypeFullLogo from "../components/type-full-logo";

const AdminPanel1920px: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-gray-200 h-auto md:h-[1220px] overflow-hidden text-left text-sm text-darkgray font-poppins">
      {/* Logo */}
      <TypeFullLogo
        dimensions="/logo.svg"
        typeFullLogoPosition="absolute"
        typeFullLogoTop="32px"
        typeFullLogoLeft="40px"
        logoIconWidth="153.2px"
        logoIconHeight="37.5px"
      />

      {/* First div */}
      <div className="absolute top-[143.1px] left-[39.7px] rounded-lg bg-gray-100 w-[445px] h-[200px] text-11xl text-white">
      <img
          className="absolute top-[115.6px] left-[251.1px] w-[171.6px] h-[55.6px]"
          alt=""
          src="/group-2797.svg"
        />
        <div className="absolute top-[119.4px] left-[68.5px] leading-[160%] text-transparent !bg-clip-text [background:linear-gradient(180deg,_#fff,_rgba(255,_255,_255,_0))] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
          97.83%
        </div>
        <img
          className="absolute top-[23.6px] left-[24.2px] w-8 h-8"
          alt=""
          src="/icon.svg"
        />
        <div className="absolute top-[26.6px] left-[68.5px] text-base leading-[160%] font-medium">
          Uptime
        </div>
        <div className="absolute top-[67.6px] left-[68.5px] text-sm leading-[160%] text-silver">
          Uptime over the past 24 hours
        </div>
      </div>

      {/* Second div */}
      <div className="absolute top-[363px] left-[39.7px] rounded-lg bg-gray-100 w-[445px] h-[200px]">
      <div className="absolute top-[124.3px] left-[241.1px] w-[171.8px] h-[46.9px]">
          <img
            className="relative w-[46.9px] h-[46.9px]"
            alt=""
            src="/subtract.svg"
          />
          <img
            className="relative w-[46.9px] h-[46.9px]"
            alt=""
            src="/subtract.svg"
          />
          <img
            className="relative w-[46.9px] h-[46.9px]"
            alt=""
            src="/subtract.svg"
          />
        </div>
        <div className="absolute top-[68.6px] left-[67.5px] leading-[160%]">
          Connected cryptocurrencies
        </div>
        <div className="absolute top-[26.6px] left-[67.5px] text-base leading-[160%] font-medium text-white">
          Withdrawal status
        </div>
        <img
          className="absolute top-[23.6px] left-[23.9px] w-8 h-8"
          alt=""
          src="/icon.svg"
        />
      </div>

      {/* Third div */}
      <div className="absolute top-[582.9px] left-[39.7px] rounded-lg bg-gray-100 w-[445px] h-[200px] text-11xl text-mediumspringgreen-100">
      <div className="absolute top-[119.5px] left-[273.9px] leading-[160%]">
          available
        </div>
        <div className="absolute top-[68.6px] left-[67.5px] text-sm leading-[160%] text-darkgray">
          The availability of the home page of the site
        </div>
        <div className="absolute top-[26.7px] left-[67.5px] text-base leading-[160%] font-medium text-white">
          Availability of a site
        </div>
        <img
          className="absolute top-[23.7px] left-[23.9px] w-8 h-8"
          alt=""
          src="/icon.svg"
        />
      </div>

      {/* Fourth div */}
      <div className="absolute top-[803.1px] left-[39.7px] rounded-lg bg-gray-100 w-[445px] h-[200px]">
      <div className="absolute top-[68.6px] left-[68.8px] leading-[160%]">
          The last trade was created 5s ago
        </div>
        <div className="absolute top-[26.7px] left-[67.5px] text-base leading-[160%] font-medium text-white">
          Last trade
        </div>
        <img
          className="absolute top-[23.7px] left-[23.9px] w-8 h-8"
          alt=""
          src="/icon.svg"
        />
        <div className="absolute top-[119.5px] left-[271.9px] text-11xl leading-[160%] text-tomato">
          canceled
        </div>
      </div>

      {/* Fifth div */}
      <div className="absolute top-[803.1px] left-[505px] rounded-lg bg-gray-100 w-[445px] h-[200px]">
      <div className="absolute top-[69px] left-[68.2px] leading-[160%]">
          Shows either your login is working or not
        </div>
        <div className="absolute top-[27.1px] left-[67.2px] text-base leading-[160%] font-medium text-white">
          Login
        </div>
        <img
          className="absolute top-[24.1px] left-[23.6px] w-8 h-8"
          alt=""
          src="/icon.svg"
        />
        <div className="absolute top-[119.5px] left-[319.5px] text-11xl leading-[160%] text-mediumspringgreen-100">
          active
        </div>
      </div>

      {/* Sixth div */}
      <div className="absolute top-[582.9px] left-[505px] rounded-lg bg-gray-100 w-[445px] h-[200px]">
      <div className="absolute top-[68.6px] left-[68.2px] leading-[160%]">
          The status of the website servers
        </div>
        <div className="absolute top-[26.7px] left-[67.2px] text-base leading-[160%] font-medium text-white">
          Server status
        </div>
        <img
          className="absolute top-[23.7px] left-[23.6px] w-8 h-8"
          alt=""
          src="/icon.svg"
        />
        <div className="absolute top-[119.5px] left-[280.5px] text-11xl leading-[160%] text-chocolate">
          unstable
        </div>
      </div>

      {/* Seventh div */}
      <div className="absolute top-[582.9px] left-[975.2px] rounded-lg bg-gray-100 w-[445px] h-[200px] text-11xl text-mediumspringgreen-100">
      <div className="absolute top-[119.5px] left-[319.3px] leading-[160%]">
          stable
        </div>
        <div className="absolute top-[68.1px] left-[68.3px] text-sm leading-[160%] text-darkgray">
          Last check June 3, 2022 02:50:16
        </div>
        <div className="absolute top-[26.2px] left-[68px] text-base leading-[160%] font-medium text-white">
          Steam Web API
        </div>
        <img
          className="absolute top-[23.2px] left-[24.4px] w-8 h-8"
          alt=""
          src="/icon.svg"
        />
      </div>

      {/* Eighth div */}
      <div className="absolute top-[582.9px] left-[1435.7px] rounded-lg bg-gray-100 w-[445px] h-[200px]">
      <div className="absolute top-[68.8px] left-[69.5px] leading-[160%]">
          Last request 10 seconds ago
        </div>
        <div className="absolute top-[26.8px] left-[68.5px] text-base leading-[160%] font-medium text-white">
          API response
        </div>
        <img
          className="absolute top-[23.8px] left-[24.9px] w-8 h-8"
          alt=""
          src="/icon.svg"
        />
        <div className="absolute top-[119.5px] left-[277.8px] text-11xl leading-[160%] text-transparent !bg-clip-text [background:linear-gradient(180deg,_#fff,_rgba(255,_255,_255,_0))] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
          2.856 ms
        </div>
      </div>

      {/* Ninth div */}
      <div className="absolute top-[363px] left-[505px] rounded-lg bg-gray-100 w-[445px] h-[200px] text-11xl">
      <div className="absolute top-[119.4px] left-[315.5px] leading-[160%] text-transparent !bg-clip-text [background:linear-gradient(180deg,_#fff,_rgba(255,_255,_255,_0))] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
          25 sec
        </div>
        <div className="absolute top-[68.9px] left-[68.5px] text-sm leading-[160%]">
          Time from the last purchase
        </div>
        <div className="absolute top-[26.9px] left-[67.2px] text-base leading-[160%] font-medium text-white">
          Buy items
        </div>
        <img
          className="absolute top-[23.9px] left-[23.6px] w-8 h-8"
          alt=""
          src="/icon.svg"
        />
      </div>

      {/* Tenth div */}
      <div className="absolute top-[363px] left-[970px] rounded-lg bg-gray-100 w-[445px] h-[200px]">
      <div className="absolute top-[68.5px] left-[67.2px] leading-[160%]">
          The number of avaliable bots on Wxpeer pay
        </div>
        <div className="absolute top-[26.5px] left-[67.2px] text-base leading-[160%] font-medium text-white">
          Waxpeer pay bots
        </div>
        <img
          className="absolute top-[23.5px] left-[23.6px] w-8 h-8"
          alt=""
          src="/icon.svg"
        />
        <div className="absolute top-[119.4px] left-[282.5px] text-11xl leading-[160%] text-transparent !bg-clip-text [background:linear-gradient(180deg,_#fff,_rgba(255,_255,_255,_0))] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
          259 bots
        </div>
      </div>

      {/* Eleventh div */}
      <div className="absolute top-[363px] left-[1435.7px] rounded-lg bg-gray-100 w-[445px] h-[200px]">
      <div className="absolute top-[68.9px] left-[68.5px] leading-[160%]">
          The last successful trade
        </div>
        <div className="absolute top-[27px] left-[68.5px] text-base leading-[160%] font-medium text-white">
          Waxpeer pay
        </div>
        <img
          className="absolute top-[24px] left-[24.9px] w-8 h-8"
          alt=""
          src="/icon.svg"
        />
        <div className="absolute top-[119.4px] left-[323.8px] text-11xl leading-[160%] text-transparent !bg-clip-text [background:linear-gradient(180deg,_#fff,_rgba(255,_255,_255,_0))] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
          10 sec
        </div>
      </div>

      {/* Twelveth div */}
      <div className="absolute top-[143.1px] left-[1435.7px] rounded-lg bg-gray-100 w-[445px] h-[200px] text-11xl text-silver">
      <div className="absolute top-[119.4px] left-[68.5px] leading-[160%] text-transparent !bg-clip-text [background:linear-gradient(180deg,_#fff,_rgba(255,_255,_255,_0))] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
          08.06.2022
        </div>
        <div className="absolute top-[131.4px] left-[335.8px] text-[20px] leading-[160%]">
          19:55:20
        </div>
        <img
          className="absolute top-[23.6px] left-[24.2px] w-8 h-8"
          alt=""
          src="/icon.svg"
        />
        <div className="absolute top-[26.6px] left-[68.5px] text-base leading-[160%] font-medium text-white">
          Current date
        </div>
        <div className="absolute top-[67.6px] left-[68.5px] text-sm leading-[160%]">
          Current date and time
        </div>
      </div>

      {/* Data Container */}
      <DataContainer />
      <div className="absolute top-[120.2px] left-[1110.6px] w-[293.5px] h-[249.8px] text-11xl text-mediumspringgreen-100">
        <div className="absolute top-[110.6px] left-[0px] rounded-[50%] box-border w-[80.4px] h-[283.1px] [transform:_rotate(-70.06deg)] [transform-origin:0_0] border-[0.9px] border-solid border-seagreen-200" />
        <div className="absolute top-[13.1px] left-[217.7px] rounded-[50%] box-border w-[84.4px] h-[243.6px] [transform:_rotate(52.5deg)] [transform-origin:0_0] border-[0.9px] border-solid border-seagreen-300" />
        <div className="absolute top-[42.7px] left-[52.8px] rounded-[50%] box-border w-[103.3px] h-[227.4px] [transform:_rotate(-24.4deg)] [transform-origin:0_0] border-[0.9px] border-solid border-seagreen-100" />
        <div className="absolute top-[38.8px] left-[64.1px] rounded-[50%] bg-mediumspringgreen-200 shadow-[0px_0px_28.43px_rgba(20,_20,_20,_0.5)] w-[163.8px] h-[163.8px]" />
        <div className="absolute top-[97.9px] left-[97.5px] leading-[160%]">
          Stable
        </div>
      </div>
    </div>
  );
};

export default AdminPanel1920px;
