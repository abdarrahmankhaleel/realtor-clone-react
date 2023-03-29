import { collection, getDoc, getDocs, limit, orderBy, query, startAfter, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import ListingItem from '../components/ListingItem';
import { db } from '../firebase';

export default function Offers() {

const [listings, setListings] = useState([]);
const [lastListing, setLastListing] = useState({});
// const [morelistings, setMorelistings] = useState([]);


useEffect(()=>{
  try {
    async function fetchOfferListings() {
      const ListingsRef=collection(db,"listings");
      const q=query(ListingsRef,where("offer","==",true),orderBy("timestamp",'desc'),limit(1));
      const querySnap=await getDocs(q);
      const lastOne=querySnap.docs[querySnap.docs.length-1];
      setLastListing(lastOne);
      const listings=[];
      querySnap.forEach((doc)=>{
        return listings.push({
          id:doc.id,
          data:doc.data() 
        })
      });
  
      setListings(listings);
  
  
    }
  
    fetchOfferListings();
  
  } catch (error) {
    console.log(error);;
  }
  },[])
  



  function onLoadMoreListings() {
    try {
      async function fetchOfferListings() {
        const ListingsRef=collection(db,"listings");
        const q=query(ListingsRef,where("offer","==",true),orderBy("timestamp",'desc'),startAfter(lastListing),limit(1));
        const querySnap=await getDocs(q);
        const lastOne=querySnap.docs[querySnap.docs.length-1];
        console.log("lastOne ",lastOne);
        setLastListing(lastOne);
        console.log("last listing ",lastListing);

        const listings=[];
        querySnap.forEach((doc)=>{
          return listings.push({
            id:doc.id,
            data:doc.data() 
          })
        });
    
        setListings((prev)=>[...prev,...listings]);
    
    
      }
    
      fetchOfferListings();
    
    } catch (error) {
      console.log(error);;
    }
  }

  return (
  <>
    {listings.length>0 &&(
      <div className='max-w-6xl mt-5 bg-white p-2 mx-auto shadow-2xl'>
      <h2 className='text-gray-900 font-bold text-2xl text-center'>Offers</h2>
      <ul className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            {listings.map(({data,id}) => (
              <ListingItem
                key={id}
                id={id}
                listing={data}
              />
            ))}




          </ul>
              {
                lastListing &&(
                  <button onClick={onLoadMoreListings}>Load More</button>

                )
              }
      </div>
         )}

</>

  )
}
