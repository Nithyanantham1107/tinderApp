import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { ImageBackground } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useState } from 'react/cjs/react.production.min';
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile} from "firebase/auth";
import { auth } from '../firebase';

const LoginScreen = () => {
    const[type,setType]=React.useState(2);
    const [Name, setName] = React.useState("");
    const [Password, setPassword] = React.useState("pas");
    const [email, setemail] = React.useState("mail");
 useEffect( ()=>{ setName("");setPassword("");setemail("");},[type]);

    const signin=()=>{
        if(email.trim()==""||Password.trim()==""){
            return alert("oops!! enter your details...");
        }
        else{
            signInWithEmailAndPassword(auth,email,Password).then(({user})=>{
                console.log(user);
            }).catch((err)=>{console.log(err);});
        }
    }
    const signup=()=>{
        if(Name.trim()==""||email.trim()==""||Password.trim()==""){
            return alert("oops!! enter your details...");
        }
        else{

            createUserWithEmailAndPassword(auth,email,Password).then(({user})=>{
                updateProfile(user,{displayName:Name});
            }).catch((err)=>{ console.log(err);})
        }
    }
  return (
   <ImageBackground className="flex-1" resizeMode='cover' source={require("../assets/bg.jpg")}>
  
  { type==1?( <View  className=" justify-center items-center flex-1 ">
  <Text className="text-3xl text-justify text-gray-800s">Sign in</Text>
    <Text className="text-lg  font-bold  text-gray-100 ">Access to account</Text>
    <View className="w-full p-5">
       
        <Text className="text-lg  font-bold  text-gray-100 ">Email</Text>
        <TextInput keyboardType='email-address'  value={email} onChangeText={(text)=>setemail(text)}className="  bg-slate-200 rounded-lg  h-14 text-slate-900 border border-gray-800"/>
        <Text className="text-lg  font-bold  text-gray-100 ">Password</Text>
        <TextInput  secureTextEntry={true}  value={Password} onChangeText={(text)=>setPassword(text)}className="  bg-slate-200 rounded-lg h-14  text-slate-900 border border-gray-800"/>
   <TouchableOpacity  onPress={signin} className="bg-black   ml-20 mt-16 rounded-full  w-40 h-10 border  items-center p-1">
     <Text className="text-gray-100 font-bold text-xl">sign in</Text>
   </TouchableOpacity>
   <TouchableOpacity  onPress={()=>setType(2)}>
    <Text className="text-gray-100 font-bold  text-md ml-20 mt-4">Doesn't have an account?</Text>
   </TouchableOpacity>
   </View>
 
  </View> ):(
  <View className=" justify-center items-center flex-1 ">
    <Text className="text-3xl text-justify text-gray-800s">Sign up</Text>
    <Text className="text-lg  font-bold  text-gray-100 ">create new account</Text>

    <View className="w-full p-5">
        <Text className="text-lg  font-bold  text-gray-100 ">Name</Text>
        <TextInput  value={Name} onChangeText={(text)=>setName(text)} className="  bg-slate-200 rounded-lg  text-slate-900 border border-gray-800   h-9"/>
        <Text className="text-lg  font-bold  text-gray-100 ">Email</Text>
        <TextInput keyboardType='email-address' value={email} onChangeText={(text)=>setemail(text)} className="  bg-slate-200 rounded-lg h-9 text-slate-900 border border-gray-800"/>
        <Text className="text-lg  font-bold  text-gray-100 ">Password</Text>
        <TextInput  secureTextEntry={true}  value={Password} onChangeText={(text)=>setPassword(text)}className="  bg-slate-200 rounded-lg h-9  text-slate-900 border border-gray-800"/>
   <TouchableOpacity onPress={signup} className="bg-black   ml-20 mt-16 rounded-full  w-40 h-10 border  items-center p-1">
     <Text className="text-gray-100 font-bold text-xl">sign up</Text>
   </TouchableOpacity>
   <TouchableOpacity  onPress={()=>setType(1)}>
    <Text className="text-gray-100 font-bold  text-md ml-20 mt-4">already have an account?</Text>
   </TouchableOpacity>
   </View>
    </View>
  
  )}
   </ImageBackground>
  )
}

export default LoginScreen;