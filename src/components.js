import styled from 'styled-components/native'; 

const Stepper=styled.View`background-color: cyan; height: 5; width: ${props=>(props.step)}`;

const SubTitle=styled.Text`font-size:18; color: black; font-weight: bold; margin-bottom: 15`;
const Title=styled.Text`font-size:${props=>(props.medium?28:32)}; color: black;  font-weight: bold; margin-bottom: 20;  margin-top: 20`;
const GoalContainer=styled.TouchableOpacity`
  display: flex;
  width: 300;
  height: 73;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: white;
  padding-left: 20px;
  padding-right: 10px;
  border-radius: 8;
  margin-top:15px;
  margin-bottom:15px
`;

const Button=styled.TouchableOpacity`
  width: 150;
  height: 50;
  align-items: center;
  background-color: #888;
  padding-top: 7px;
  border-radius: 25;
  margin-top:30px;
  margin-bottom:30px
`;

const Switch=styled.TouchableOpacity`
  width: 70;
  height: 40;
  align-items: center;
  background-color: ${props=>props.active?'black':'white'};
  padding-top: 7px;
  border-top-left-radius: ${props=>props.left?20:0};
  border-bottom-left-radius: ${props=>props.left?20:0};
  border-top-right-radius: ${props=>props.left?0:20};
  border-bottom-right-radius: ${props=>props.left?0:20};
  margin-top:30px;
  margin-bottom:30px
`;

const MainContainter=styled.ImageBackground`
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;

const DataInput=styled.TextInput`
  height: 50px;
  width: ${props => (props.width)};
  font-size: 32;
  color: black;
  text-align: center;
  margin-left: 12;
  margin-right: 12
`;

export {SubTitle, Title, GoalContainer, MainContainter, Stepper, DataInput, Button, Switch};