import ColorBox from "./components/ColorBox";
import SelectColors from "./components/SelectColors";
import { ColorProvider } from "./contexts/color";

const App = () => {
  return (
    // 2. Provider: Context의 value 변경하기 - Provider를 사용할 때에는 value 값을 꼭 명시!
    <ColorProvider>
      <div>
        <SelectColors />
        <ColorBox />
      </div>
    </ColorProvider>
  );
};

export default App;
