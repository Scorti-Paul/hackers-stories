import { useEffect, useRef, useState } from "react";
import './App.css'


const welcome = {
  greetings: 'Hey',
  title: 'Paul Scorti'
}

function getTitle(title) {
  return title;
}

// Destructing an object
const user = {
  firstName: 'Robin',
  pet: {
    name: 'Trixi'
  }
}

console.log(`Destruction: ${user.firstName} has a pet called ${user.pet.name}`)

const { firstName, pet: { name } } = user
console.log(`Deeper Destruction: ${firstName} has a pet called ${name}`)

const useSemiPersistentState = (key, initialState) => {
  const [value, setValue] = useState(
    localStorage.getItem(key) || initialState
  );

  useEffect(() => localStorage.setItem(key, value), [value, key])

  return [value, setValue]
}


const initialStories = [
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
    price: 36,
    image: './milk.png',
    objectID: 0
  },
  {
    item: 'Hollandia',
    price: 33,
    image: './hollandia.png',
    objectID: 1
  },
  {
    item: 'Milo',
    price: 20,
    image: './milo.png',
    objectID: 2
  }
];

const App = () => {


  const [searchTerm, setSearchTerm] = useSemiPersistentState('search', 'React');

  const [stories, setStories] = useState(initialStories);

  const handleRemoveStory = item => {
    const newStories = stories.filter(
      story => item.objectID !== story.objectID
    )
    setStories(newStories)
  }

  const handleSearch = event => {
    setSearchTerm(event.target.value)
  }

  const searchedStories = stories.filter(story =>
    story.title.toLowerCase().includes((searchTerm.toLowerCase()))
  );



  return (
    <div>
      <h1>My Hacker Stories</h1>

      <strong>Search: </strong>
      <InputWithLabel
        id="search"
        label="Search"
        value={searchTerm}
        onInputChange={handleSearch}
      />


      <List list={searchedStories} onRemoveItem={handleRemoveStory} />

      <hr />

      <div className="wrapper">
        <Shop shop={shopItems} />
      </div>
    </div>
  );
}


const InputWithLabel = ({ id, value, type = 'text', onInputChange, isFocused, children }) => {

  const inputRef = useRef();

  useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isFocused]);

  return (
    <>
      <label htmlFor={id}>{children}</label>
      <input
        ref={inputRef}
        type={type}
        id={id}
        value={value}
        onChange={onInputChange}
      />
    </>
  )
}


// const List = ({ list }) =>
//   list.map((objectID, ...item) => <Item key={objectID} {...item} />)

const List = ({ list, onRemoveItem }) =>
  list.map(item => <Item key={item.objectID} item={item} onRemoveItem={onRemoveItem} />)


const Item = ({ item, onRemoveItem }) => {

  const handleRemoveItem = () => {
    onRemoveItem(item);
  }

  return (
    <div>

      <span>
        <a href={item.url}>{item.title}</a>
      </span>
      <span> {item.author} </span>
      <span>{item.num_comment} </span>
      <span>{item.points} </span>
      <span>
        <button type="button" onClick={() => onRemoveItem(item)}>
          Dismiss
        </button>
      </span>
    </div>
  )
}


const Shop = ({ shop }) =>
  shop.map(item => (
    <div key={item.objectID} className="shopItems">
      <div className="top">
        <div className="like">
          <img src="favorite.png" />
        </div>
        <img src={item.image} />
      </div>
      <div className="item-price">
        <div className="item">{item.item}</div>
        <div>GH₵ {item.price}</div>
      </div>
      <div className="cart">
        <a href="#">ADD TO CART</a>
      </div>
    </div>
  ));


export default App;
