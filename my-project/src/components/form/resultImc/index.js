import React from "react";
import { View, Text} from "react-native";

export default function ResultImc(props){
    return(
        <View>
            <Text>{props.mesageResultImc}</Text>
            <Text>{props.ResultImc}</Text>
        </View>
    );
}