/* eslint-disable jsx-a11y/no-redundant-roles */
// import导入部分
import './App.css';
import Todo from './components/todo/Todo';
import Form from './components/form/Form';
import FilterButton from './components/filterButton/FilterButton';

// 中间的App组件
function App(props) {
  // 记住，需要传递不同的 key 给任何使用迭代方式渲染的东西
  const taskList = props.tasks.map((task) => <Todo id={task.id} name={task.name} completed={task.completed} key={task.id}/>);
  return (
    // 在 HTML 中的 class 会在 JSX 中转译为 className(驼峰命名法)
    //  注意用{}来引用变量
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form/>
      <div className="filters btn-group stack-exception">
        {/* aria-pressed 告诉辅助技术（比如屏幕阅读器），该按钮可以有两种状态。按压 或 未按压 */}
        <FilterButton name='All'/>
        <FilterButton name='Active'/>
        <FilterButton name='Completed'/>
      </div>
      <h2 id="list-heading">3 tasks remaining</h2>
      {/* role 属性帮助辅助技术解释一个标签代表哪种元素。
        aria-labelledby 属性告诉辅助技术，我们把列表标题当作标签
       */}
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
          {taskList}
      </ul>
    </div>
  );
}

//底部export导出
export default App;
