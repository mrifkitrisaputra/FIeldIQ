import React from "react";

export const MenuMap = () => {
  return (
    <div className="flex w-full flex-row justify-center bg-white">
      <div className="h-[1024px] w-[1440px] overflow-hidden bg-white">
        <div className="relative h-[1024px] w-[1442px]">
          <div className="absolute left-0 top-0 h-[1024px] w-[1440px] rounded-[10.67px] bg-[#f3f3f3]" />
          <div className="absolute left-[229px] top-0 h-[102px] w-[1213px]">
            <div className="absolute left-[491px] top-0 h-[102px] w-[720px] rounded-[0px_10px_0px_0px]">
              <div className="absolute left-0 top-0 h-[102px] w-[720px] rounded-[0px_10px_0px_0px] bg-white opacity-50" />
              <div className="absolute left-[487px] top-[29px] flex h-[44px] w-[156px] items-center justify-center gap-[18.14px]">
                <img
                  className="relative h-[43.86px] w-[43.86px] object-cover"
                  alt="Ellipse"
                  src="ellipse-2.png"
                />
                <div className="relative w-fit text-[14.9px] font-bold leading-[normal] tracking-[0] text-black [font-family:'Inter-Bold',Helvetica]">
                  User
                </div>
              </div>
            </div>
            <div className="absolute left-0 top-0 h-[102px] w-[484px] rounded-[0px_0px_0px_10px]">
              <div className="absolute left-0 top-0 h-[102px] w-[484px] rounded-[0px_0px_0px_10px] bg-white opacity-50" />
              <div className="absolute left-[67px] top-[33px] h-[36px] w-[139px] text-[29.9px] font-bold leading-[normal] tracking-[0] text-black [font-family:'Inter-Bold',Helvetica]">
                Map
              </div>
              <div className="absolute left-[248px] top-[30px] flex h-[43px] w-[198px] items-center justify-center gap-[10.67px] rounded-[10.67px] bg-white p-[10.67px]">
                <div className="relative w-fit whitespace-nowrap text-[12.8px] font-medium leading-[normal] tracking-[0] text-black [font-family:'Inter-Medium',Helvetica]">
                  16/03/2024
                </div>
                <img
                  className="relative h-[21.34px] w-[21.34px]"
                  alt="Uis calender"
                  src="uis-calender.svg"
                />
              </div>
            </div>
          </div>
          <div className="absolute left-[322px] top-[124px] h-[878px] w-[1065px] overflow-hidden rounded-[81px] border-[2.5px] border-solid border-[#0000000d] bg-[#fbf9f6] shadow-[0px_0px_0px_#0000001a,0px_17px_38px_#0000001a,0px_68px_68px_#00000017,0px_153px_92px_#0000000d,0px_273px_109px_#00000003,0px_426px_119px_transparent] [border-image:linear-gradient(to_bottom,rgb(200.81,200.81,169.02),rgba(0,0,0,0))_1]">
            <div className="relative left-[25px] top-[24px] h-[834px] w-[1017px] overflow-scroll rounded-[79.57px] bg-white">
              <img
                className="absolute left-[-222px] top-[-327px] h-[1311px] w-[1509px] object-cover"
                alt="Frame"
                src="frame-4555-1.png"
              />
            </div>
          </div>
          <div className="absolute left-[1125px] top-[36px] inline-flex items-center justify-center gap-[11px] rounded-[23px] border border-solid border-[#00000080] bg-white p-[5px]">
            <div className="relative h-[21.34px] w-[21.34px]">
              <img
                className="absolute left-px top-px h-[19px] w-[19px]"
                alt="Worldwide location"
                src="worldwide-location.png"
              />
            </div>
            <img
              className="relative h-[21.34px] w-[21.34px]"
              alt="Satellite signal"
              src="satellite-signal.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
