import './TodoTemplate.scss';

const TodoTemplate = ({ children }) => {
  // children으로 내부 JSX를 props로 받아와서 렌더링
  return (
    <div className="TodoTemplate">
      <div className="app-title">일정 관리</div>
      <div className="content">{children}</div>
    </div>
  );
};

export default TodoTemplate;
