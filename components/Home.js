import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
//Assets
import colors from '../assets/colors/colors';
import profile from '../assets/images/person.png';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
//Data
import activitiesData from '../assets/data/activitiesData';
import discoverCategoriesData from '../assets/data/discoverCategoriesData';
import learnMoreData from '../assets/data/learnMoreData';
import discoverData from '../assets/data/discoverData';

Feather.loadFont();

const Home = ({navigation}) => {
  {
    /* Discover Items*/
  }
  const renderDiscoverItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Details', {
            item: item,
          })
        }>
        <ImageBackground
          source={item.image}
          style={[
            styles.discoverItem,
            {marginLeft: item.id === 'discover-1' ? 20 : 0},
          ]}
          imageStyle={styles.discoverItemImage}>
          <Text style={styles.discoverItemTitle}>{item.title}</Text>
          <View style={styles.discoverItemLocationWrapper}>
            <Entypo name="location-pin" size={18} color={colors.white} />
            <Text style={styles.discoverItemLocationText}>{item.location}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };
  {
    /*Activity Items */
  }
  const renderActivityItem = ({item}) => {
    return (
      <View
        style={[
          styles.activityItemWraper,
          {marginLeft: item.id === 'activities-1' ? 20 : 0},
        ]}>
        <Image source={item.image} style={styles.activityItemImage} />
        <Text style={styles.activityItemTitle}>{item.title}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        {/*Header*/}
        <SafeAreaView>
          <View style={styles.menuWrapper}>
            <Feather
              name="menu"
              size={32}
              color={colors.black}
              style={styles.menuIcon}
            />
            <Image source={profile} style={styles.profileImage} />
          </View>
        </SafeAreaView>
        {/*End Header*/}
        {/*Discover*/}
        <View style={styles.discoverWrapper}>
          <Text style={styles.discoverTitle}>Discover</Text>
          <View style={styles.discoverCategoriesWrapper}>
            <Text
              style={[styles.discoverCategorieText, {color: colors.orange}]}>
              All
            </Text>
            <Text style={styles.discoverCategorieText}>Destination</Text>
            <Text style={styles.discoverCategorieText}>Cities</Text>
            <Text style={styles.discoverCategorieText}>Experiences</Text>
          </View>
          <View style={styles.discoverItemsWrapper}>
            <FlatList
              data={discoverData}
              renderItem={renderDiscoverItem}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
        {/*End Discover*/}
        {/*Activities*/}
        <View style={styles.activitiesWrapper}>
          <Text style={styles.activitesTitile}>Activities</Text>
          <View style={styles.activitiesItemsWrapper}>
            <FlatList
              data={activitiesData}
              renderItem={renderActivityItem}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
        {/*End Activities*/}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: colors.white,
  },
  menuWrapper: {
    marginHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuIcon: {},
  profileImage: {
    width: 52,
    height: 52,
    borderRadius: 10,
  },
  discoverWrapper: {
    //marginHorizontal: 20,
    marginTop: 20,
  },
  discoverTitle: {
    marginHorizontal: 20,
    fontFamily: 'Lato-Bold',
    fontSize: 32,
  },
  discoverCategoriesWrapper: {
    marginHorizontal: 20,
    flexDirection: 'row',
    marginTop: 20,
  },
  discoverCategorieText: {
    marginRight: 30,
    fontFamily: 'Lato-Regular',
    fontSize: 16,
    color: colors.gray,
  },
  discoverItemsWrapper: {
    paddingVertical: 20,
  },
  discoverItem: {
    width: 170,
    height: 250,
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginRight: 20,
  },
  discoverItemImage: {
    borderRadius: 20,
  },
  discoverItemTitle: {
    fontFamily: 'Lato-Bold',
    fontSize: 18,
    color: colors.white,
  },
  discoverItemLocationWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  discoverItemLocationText: {
    marginLeft: 5,
    fontFamily: 'Lato-Bold',
    fontSize: 15,
    color: colors.white,
  },
  activitiesWrapper: {
    marginTop: 10,
  },
  activitesTitile: {
    marginHorizontal: 20,
    fontFamily: 'Lato-Bold',
    fontSize: 24,
    color: colors.Black,
  },
  activitiesItemsWrapper: {
    paddingVertical: 20,
  },
  activityItemWraper: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: 20,
  },
  activityItemImage: {
    width: 36,
  },
  activityItemTitle: {
    marginTop: 5,
    fontFamily: 'Lato-Bold',
    fontSize: 14,
    color: colors.gray,
  },
});
export default Home;
