(function() {
  function addScript(url) {
    let script = document.createElement('script');
    script.src = url;
    document.head.appendChild(script);
  }

  function inject() {
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
  }

  addScript('https://unpkg.com/react@16/umd/react.production.min.js');
  addScript('https://unpkg.com/react-dom@16/umd/react-dom.production.min.js');

  let intervalId = setInterval(() => {
    if (window.React && window.ReactDOM) {
      clearInterval(intervalId);
      inject();
    }
  }, 100);

})();
