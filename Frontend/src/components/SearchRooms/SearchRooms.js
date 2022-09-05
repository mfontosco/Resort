import React, { useContext } from "react";
import { GlobalContext } from "../../context";
import styles from './SearchRooms.module.css'

const SearchRooms = () => {
  const {
    rooms,
    maxPrice,
    maxSize,
    price,
    pets,
    minSize,
    breakfast,
    changeHandler,
  } = useContext(GlobalContext);
  console.log(rooms)
  let majorTypes = rooms.map((room) => room.type);
  console.log(majorTypes);
  majorTypes = new Set(majorTypes);
  majorTypes = ["all", ...majorTypes];
  console.log(majorTypes);

  let types = majorTypes.map((type, i) => (
    <option key={i} value={type}>
      {type}
    </option>
  ));
  let majorCapacity = rooms.map((room) => room.capacity);
  console.log(majorCapacity);
  majorCapacity = new Set(majorCapacity);
  majorCapacity = [...majorCapacity];
  console.log(majorCapacity);
  const capacities = majorCapacity.map((capacity, i) => (
    <option key={i} value={capacity}>
      {capacity}
    </option>
  ));

  return (
    <div className={styles.container}>
      <form>
        <div className="formGroup">
          <label htmlFor="type">Room type</label>
          <select name="type" id="type" onChange={changeHandler}>
            {types}
          </select>
        </div>

        <div className="formGroup">
          <label htmlFor="capacity">Capacity</label>
          <select name="capacity" onChange={changeHandler}>
            {capacities}
          </select>
        </div>

        <div className="formGroup">
          <label htmlFor="price">Room price</label>
          <input
            value={price}
            id="price"
            name="price"
            type="range"
            min={0}
            max={maxPrice}
            onChange={changeHandler}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="size">Room Size</label>
          <input
            type="number"
            id="size"
            value={minSize}
            name="minSize"
            onChange={changeHandler}
          />
          <input
            type="number"
            id="size"
            value={maxSize}
            name="maxSize"
            onChange={changeHandler}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="pet"> Pet</label>
          <input
            type="checkbox"
            id="pets"
            name="pets"
            checked={pets}
            onChange={changeHandler}
          />
          <label htmlFor="breakfast"> Breakfast</label>
          <input
            type="checkbox"
            id="breakfast"
            name="breakfast"
            checked={breakfast}
            onChange={changeHandler}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchRooms;
