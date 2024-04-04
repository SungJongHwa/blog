import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h4>나는 김시율이고 바보입니다.</h4>
      <div>하지만 갱신하지 않는 블로그 주소정도는 있어요</div>
      <div>알려드릴까요?</div>
      <br />
      <a href="https://m.blog.naver.com/octlolo?fbclid=PAAaZy1fW4qxbt3j7TajpKOTSRtvmeMpkBaa_HhOBgsERsK_GhouXg6y1Tmjk_aem_AXHfwpVmrQv841DEapvRUUS3MchNTxMnHEH_qSjR9SrSd0gJqZ0E58fkEaSS6dBUnXM&tab=1">
        시율's 블로그
      </a>
    </div>
  );
}

export default App;
