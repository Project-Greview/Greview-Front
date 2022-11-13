import { Common } from "../../../resources/style/styled-components/commonStyle";
import { RegistSection } from "../style/registrationStyle";

const LocationSetting = () => {
  return(
    <RegistSection.LocationFrame>
      <Common.Input className="flex flex_jc_sb flex_dir_c flex_flow_w">
        <label htmlFor="">위치 설정</label>
        <input type="text" style={{width:"68%"}}/>
        <Common.Button style={{width:"30%"}}>설정 완료</Common.Button>
      </Common.Input>
    </RegistSection.LocationFrame>
  )
}

export default LocationSetting;