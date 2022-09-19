

const welcome = {
  greetings: 'Hey',
  title: 'Paul Scorti'
}

function getTitle(title) {
  return title;
}


const list = [
  {
    title: 'React',
    url: 'https://reactjs.org',
    author: 'Jordan Walke',
    num_comment: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://reduc.js.org',
    author: 'Dan Abramov, Andrew Clark',
    num_comment: 2,
    points: 5,
    objectID: 1,
  }
];


const App = () => {

  const handleChange = event => {
    console.log(event.target.value)
  }

  return (
    <div>
      <h1>My Hacker Stories</h1>
      <label htmlFor="search">Search: </label>
      <input type="text" id="search" onChange={handleChange} />

      <hr></hr>

      <List></List>
    </div>
  );
}

const List = () =>
  list.map(item => (
    <div key={item.objectID}>
      <span>
        <a href={item.url}>{item.title}</a>
      </span>
      <span> {item.author} </span>
      <span>{item.num_comment} </span>
      <span>{item.points} </span>
    </div>
  ));



export default App;
