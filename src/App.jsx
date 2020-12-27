// import logo from './logo.svg';
import './App.css';

export const App = () => {
  return (
    <>
      <div>
        <input placeholder="TODOを入力"/>
        <button>追加</button>
      </div>
      <div>
        <p>未完了のTODO</p>
        <ul>
          <div>
            <li>aaaaa</li>
            <button>完了</button>
            <button>削除</button>
          </div>
          <div>
            <li>bbbbb</li>
            <button>完了</button>
            <button>削除</button>
          </div>
        </ul>
      </div>
      <div>
        <p>完了のTODO</p>
        <ul>
          <div>
            <li>ccccc</li>
            <button>戻す</button>
          </div>
        </ul>
      </div>
    </>
  );
};
