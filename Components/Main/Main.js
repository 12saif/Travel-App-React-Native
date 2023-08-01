import React from 'react'
import '../Main/Main.css'
import { Button, Image, StyleSheet, View, Text } from 'react-native'

const Main = () => {
    return (
        <View>
            <Image source={require('./Group.png')}
                style={styles.cardImage} />
            <View style={styles.expoButton}>
                <Button
                    title="Explore the world"
                    color="#841584"
                />
            </View>
            <Text style={styles.descreption}>
                Travel top destination
                of the world
            </Text>
            <Text style={styles.paragraph}>
                We always make our customer happy by providing
                as many choices as possible </Text>

            <View style={styles.demoButton}>
                <Button
                    title="Get Started"
                    color="#841584"
                />
                <Button
                    title="Watch Demo"
                    color="#841584"
                />
            </View>
        </View>

    )
}

export default Main

const styles = StyleSheet.create({
    cardImage: {
        height: 600,
    },
    expoButton: {
        width: '20rem',
        marginLeft: '5rem',
        marginTop: '5rem',
        marginBottom: '5rem'
    },
    descreption: {
        fontSize: 40,
        fontWeight: "bold",
        textAlign: "start",
        marginStart: "4%",
    },
    paragraph: {
        fontSize: 18,
        textAlign: "start",
        marginStart: "4%",
    },
    demoButton: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'flex-start',
        marginLeft: '5rem',
        marginTop: '5rem',
        marginBottom: '5rem',
        gap: '4rem'
    },
})