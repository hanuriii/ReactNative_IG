import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';

const storyInfo = [
    {
        id: 1,
        name: '나의 스토리',
        image: require('../../assets/images/userProfile.jpeg'),
    },
    {
        id: 2,
        name: 'john',
        image: require('../../assets/images/profile1.jpeg'),
    },
    {
        id: 3,
        name: 'tonny',
        image: require('../../assets/images/profile2.jpeg'),
    },
    {
        id: 4,
        name: 'daniel',
        image: require('../../assets/images/profile3.jpeg'),
    },
    {
        id: 5,
        name: 'hanni',
        image: require('../../assets/images/profile4.jpeg'),
    },
    {
        id: 6,
        name: 'sky',
        image: require('../../assets/images/profile5.jpeg'),
    },
]

const Stories = () => {
    const navigation = useNavigation();
  return (
    <ScrollView
        horizontal={true} //가로 스크롤
        style={{ paddingVertical: 20 }} //위아래 패딩
    >
      {storyInfo.map((data, index) => {
        return (
            <TouchableOpacity
                key={index}
                onPress={() => navigation.push('Status', {
                    name: data.name,
                    image: data.image,
                })}
            >
                <View //전체적인 부분 감싸기(원+이름)
                    style={{
                        flexDirection: 'column', //위에서 아래로 내려옴
                        paddingHorizontal: 8,
                        position: 'relative', //relative를 기준으로 배치되도록
                    }}
                >
                    {data.id == 1 ? ( //나의 프로필에 +버튼
                        <View
                            style={{
                                position: 'absolute',
                                bottom: 15,
                                right: 10, //우측으로
                                zIndex: 1, //맨위로
                            }}
                        >
                            <Entypo 
                                name='circle-with-plus'
                                style={{
                                    fontSize: 20,
                                    color: '#405de6',
                                    backgroundColor: 'white',
                                    borderRadius: 10, //원모양
                                    overflow: 'hidden', //흰부분 사라짐(누끼효과)
                                }}
                            />
                        </View>
                    ): null}

                    <View //원 부분
                        style={{
                            width: 68,
                            height: 68,
                            backgroundColor: 'white',
                            borderWidth: 1.8,
                            borderRadius: 100,
                            borderColor: '#c13584',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Image
                            source={data.image}
                            style={{
                                resizeMode: 'cover',
                                width: '92%',
                                height: '92%',
                                borderRadius: 100,
                                backgroundColor: 'orange',
                            }}
                        />
                    </View>
                    <Text //이름 부분
                        style={{
                            fontSize: 12,
                            fontWeight: '500',
                            textAlign: 'center',
                            paddingTop: 5,
                        }}
                    >
                        {data.name}
                    </Text>
                </View>
            </TouchableOpacity>
        )
      })}
    </ScrollView>
  )
}

export default Stories