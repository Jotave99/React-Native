import React, {useState } from "react";
import { TextInput, View, Text, Button, Touchable, TouchableOpacity } from "react-native";
import ResultImc from "./resultImc";
import styles from "./style";

export default function Form(){

    const [height, setHeight] = React.useState(null);
    const [weight, setWeight] = React.useState(null);
    const [messageImc, setMessageImc] = React.useState("Preencha o peso e a altura");
    const [imc, setImc] = React.useState(null);
    const [textButton, setTextButton] = React.useState("Calcular");

    function imcCalculator(){
        return setImc((weight/(height*height)).toFixed(2));
    }

    function validationImc(){
        if(weight != null && height != null){
            imcCalculator();
            setHeight(null);
            setWeight(null);
            setMessageImc("Seu imc é igual:");
            setTextButton("Calcular novamente");
            return;
        }
        setImc(null);
        setTextButton("Calcular");
        setMessageImc("Preencha o peso e altura");
    }

    return(
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <TextInput
                style={styles.input}
                onChangeText={setHeight}
                value={height}
                placeholder="Ex. 1.75"
                keyboardType="numeric"
                />
                <Text style={styles.formLabel}>Peso</Text>
                <TextInput
                style={styles.input}
                onChangeText={setWeight}
                value={weight}
                placeholder="Ex. 75.365"
                keyboardType="numeric"
                />
                <TouchableOpacity
                onPress={() =>{
                    validationImc()
                }}>
                </TouchableOpacity>
            </View>
            <ResultImc messageResultImc={messageImc} ResultImc={imc} />
            <View></View>
            <View></View>
        </View>
    );
}