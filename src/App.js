

const welcome = {
  greetings: 'Hey',
  title: 'Paul Scorti'
}

function getTitle(title) {
  return title;
}





const App = () => {

  const handleChange = event => {
    console.log(event.target.value)
  }

  const stories = [
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

  const shopItems = [
    {
      item: 'Milk',
      quantity: 23,
      unitPrice: 34,
      sellingPrice: 36,
      objectID: 0
    },
    {
      item: 'Milo',
      quantity: 60,
      unitPrice: 29,
      sellingPrice: 33,
      objectID: 1
    },
    {
      item: 'Hollandia',
      quantity: 50,
      unitPrice: 18,
      sellingPrice: 20,
      objectID: 2
    }
  ]

  return (
    <div>
      <h1>My Hacker Stories</h1>
      <label htmlFor="search">Search: </label>
      <input type="text" id="search" onChange={handleChange} />


      <List list={stories} />

      <hr />

      <Shop shop={shopItems} />
    </div>
  );
}

const List = props =>
  props.list.map(item => (
    <div key={item.objectID}>
      <span>
        <a href={item.url}>{item.title}</a>
      </span>
      <span> {item.author} </span>
      <span>{item.num_comment} </span>
      <span>{item.points} </span>
    </div>
  ));


const Shop = props =>
  props.shop.map(item => (
    <div key={item.objectID}>
      <div>Item: {item.item}</div>
      <div>quantity: {item.quantity}</div>
      <div>Unit Price: {item.unitPrice} </div>
      <div>Selling Price: {item.sellingPrice} </div>
    </div>
  ))

export default App;
