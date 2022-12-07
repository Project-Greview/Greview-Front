import { SaveListSection } from "../../components/save/style/saveListStyle";
import SaveItem from "../../components/save/view/SaveList";
import HistoryBackHeader from "../../components/include/view/HistoryBackHeader";

const SaveList = () => {
  return(
    <SaveListSection.ListFrame>
      <HistoryBackHeader/>
      <SaveItem/>
    </SaveListSection.ListFrame>
  )
}

export default SaveList;