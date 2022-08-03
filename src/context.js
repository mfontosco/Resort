import React, { useEffect, useState } from 'react'
import data from './data'



const GlobalContext =React.createContext()
const Provider = ({children}) => {
    const [state,setState] =useState({
      rooms:localStorage.getItem('rooms')? JSON.parse(localStorage.getItem("rooms")):[],
      type:'all',
      featuredRooms:[],
      filteredRooms:[],
      isLoading:true,
      price:0,
      capacity:1,
      maxPrice:0,
      minSize:0,
      maxSize:0,
      pets:false,
      breakfast:false,
    })
    console.log(state)
    useEffect(()=>{
      loadInitiatState()
    },[])

    const loadInitiatState =()=>{
      let tempRooms = [...data]
      let rooms =tempRooms.map(room=>{
        let newRooms ={
          id:room.sys.id,
          ...room.fields,
          images: room.fields.images.map((img) => img.fields.file.url)
        }
return newRooms;
      })
console.log(rooms)
      let featuredRooms =rooms.filter(item=>item.featured ===true)
      console.log(featuredRooms)
      const prices = rooms.map((room)=> room.price)
         const maxPrice = Math.max(...prices)
        console.log(prices)
         const sizes = rooms.map((room)=> room.size)
         const maxSize = Math.max(...sizes)
         const minSize = Math.min(...sizes)
         console.log(maxPrice,maxSize,minSize)
         setState({
          ...state,
          rooms,
            featuredRooms,
            filteredRooms:rooms,
            isLoading:false,
            maxPrice,
            maxSize,
            minSize,
            price:maxPrice
         })
         localStorage.setItem("rooms",JSON.stringify("rooms"))
    }

    const changeHandler =(e)=>{
      const type = e.target.type;
      const name =e.target.name;
      const value =type==="checkbox" ? e.target.checked :e.target.value
      setState({
        ...state,
        [name]:value
      })
      let filteredRm =[...state.rooms]
      if(name === 'type' &&  value!=='all'){
filteredRm = filteredRm.filter(room=>room.type === value)
      }
      if(name === 'capacity' && parseInt(value) !== 1){
filteredRm =filteredRm.filter(room =>room.capacity === parseInt(value))
      }
      if(name === "price"){
        filteredRm = filteredRm.filter(room => room.price <= state.price && room.price <= state.maxPrice)
      }
      filteredRm =filteredRm.filter(room =>room.size >= parseInt(state.minSize)&& room.size <= parseInt(state.maxSize))
      if(type === "checkbox"){
        filteredRm =filteredRm.filter(room => room.pets ===true && room.breakfast === true)
      }


      setState((prev)=>({
        ...prev,
        filteredRooms:filteredRm
      }))
    }
const gettingSingleRm =(slug)=>{
  const tempRooms =  state.rooms;
  const foundRooms = tempRooms.find(room => room.slug === slug)
  return foundRooms
}
    

  return (
   <GlobalContext.Provider value={{...state,gettingSingleRm,changeHandler}}>
      {children}
   </GlobalContext.Provider>
  )
}
const consumer =GlobalContext.Consumer
export {Provider,consumer,GlobalContext}
