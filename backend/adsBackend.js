import React from 'react';
import adsNetwork from '../network/adsNetwork';
import {Alert} from 'react-native';
import {  Picker,List, ListItem, Thumbnail, Text, Left, Body, Right, Button,Icon, Content } from 'native-base';
import {Actions} from 'react-native-router-flux';

class AdsBackend{

    getAds(offset,num)
    {
      return new Promise((resolve,reject) =>
        {
          adsNetwork.getAll(offset,num)
            .then((response) => { 

              resolve(this.mapAds(response));

             } )
            .catch((error) => {return reject(error); });
        });
    }

    searchAds(key,city,section){
      return new Promise((resolve,reject) =>
        {
      adsNetwork.Search(key,city,section)
      .then((response) => { resolve(this.mapAds(response,()=> { Actions.searchedAds(); } )); })
      .catch((error) => {return reject(error); });
        });
    }
    
    getRequests(){
      return new Promise((resolve,reject) =>
      {
        adsNetwork.Requests()
          .then((response) => { 

            resolve(this.mapAds(response));

           } )
          .catch((error) => {return reject(error); });
      });
    }

    mapAds(response,adBackButton=""){
      
      if(adBackButton === "")
      {
        adBackButton = ()=> {Actions.Home()};
      }
              
        const lists =  response.map((item,key) => {
          let BackColor = "#F8FAC1";
          
          if(item.ad_status != "1"){
            BackColor = "white";
          }
          return(
                  <ListItem itemHeader   noIndent style={{backgroundColor:BackColor}}  key={key} thumbnail onPress={() => { Actions.showAd({id:item.id,BackButton:adBackButton } ); } }>
                  <Left>
                    <Thumbnail square size={80}  source={{ uri: "http://watch2buy.com/assets/admin/img/tmp_70x70/"+item.image_ }} />
                  </Left>
                  <Body>
                  <Text style={{color:"#006400"}}>{item.ad_title}</Text>
                <Text note style={{ fontSize:12,marginTop:5}}>قبل دقيقة</Text>
               <Text note style={{ fontSize:12 , marginTop:15,marginBottom:-10}}><Text note style={{fontSize:12,textAlign:"right"}}>{item.first_name}  </Text>   <Text note style={{fontSize:12,textAlign:"center"}}>{item.city_name}  </Text> </Text>
               

                  </Body>

                  
                    
                </ListItem>
          );
          });
         return lists;
       
    }

    getCities(){
      return new Promise((resolve,reject) =>
      {
        adsNetwork.getCities()
          .then((response) => { 

            resolve(response.map((item) => { return (  <Picker.Item label={item.city_name} value={item.id}  />   ); }) );

           } )
          .catch((error) => {return reject(error); });
      });
    }

    getSections(){
      return new Promise((resolve,reject) =>
      {
        adsNetwork.getSections()
          .then((response) => { 

            resolve(response.map((item) => { return (  <Picker.Item label={item.section_name} value={item.id} />   ); }) );

           } )
          .catch((error) => {return reject(error); });
      });
    }
}
const adsBackend = new AdsBackend();
export default adsBackend;

