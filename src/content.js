
document.addEventListener('DOMContentLoaded', e => {
  let mount = document.createElement('div');
  document.body.appendChild(mount);
  const style = {
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1000000,
    border: '1px solid black',
    padding: '20px',
    fontSize: '30px',
    background: '#fff',
  };

  const App = React.createElement('div', {style, onClick: function(e) {console.log('Click from React')}}, 'CLICK ME');
  mount.addEventListener('click', e => {
    console.log('Click from addEventListener');
  });
  ReactDOM.render(App, mount);
  console.log('injected');
});
