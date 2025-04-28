import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  StatusBar,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Dimensions} from 'react-native';
import SearchIcon from '../assets/icons/SearchIcon';
import MessageIcon from '../assets/icons/MessageIcon';
import RightArrow from '../assets/icons/RigthArrow';
import {BlurView} from '@react-native-community/blur';
import {getCategories, getQuestions} from '../api/api';
import {Category, Question} from '../types/apiTypes';
import Loading from '../components/Loading';

const {width: screenWidth} = Dimensions.get('window');

const HomeScreen = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchQuestions();
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await getCategories();
      setCategories(response.data);
    } catch (error: any) {
      console.error('Error fetching categories:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchQuestions = async () => {
    try {
      const response = await getQuestions();
      setQuestions(response);
    } catch (error: any) {
      console.error('Error fetching questions:', error);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Hi, plant lover!</Text>
            <Text style={styles.name}>Good Afternoon! ⛅</Text>
          </View>
        </View>
        <View style={styles.searchContent}>
          <Image
            source={require('../assets/home.png')}
            style={styles.searchBg}
          />
          <View style={styles.searchContainer}>
            <SearchIcon />
            <TextInput
              style={styles.searchBox}
              placeholder="Search for plants"
              placeholderTextColor={'#AFAFAF'}
            />
          </View>
        </View>
        <TouchableOpacity style={styles.premiumContainer}>
          <View style={styles.premiumContent}>
            <MessageIcon />
            <View style={styles.premiumContentText}>
              <Text style={styles.premiumText}>FREE Premium Available</Text>
              <Text style={styles.premiumSubText}>
                Tap to upgrade your account!
              </Text>
            </View>
          </View>
          <RightArrow />
        </TouchableOpacity>

        <View style={styles.featuredContainer}>
          <Text style={styles.sectionTitle}>Get Started</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.featuredScroll}>
            {questions.map(question => (
              <TouchableOpacity key={question.id} style={styles.plantCard}>
                <Image
                  source={{uri: question.image_uri}}
                  style={styles.plantImage}
                />
                <BlurView
                  style={styles.plantInfo}
                  blurType="light"
                  blurAmount={40}
                  reducedTransparencyFallbackColor="transparent"
                  overlayColor="transparent">
                  <Text style={styles.plantName}>{question.title}</Text>
                </BlurView>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <View style={styles.categoriesContainer}>
          <View style={styles.categoriesGrid}>
            {categories.map(category => (
              <TouchableOpacity key={category.id} style={styles.categoryCard}>
                <Image
                  source={{uri: category.image.url}}
                  style={styles.categoryImage}
                />
                <Text style={styles.categoryName}>{category.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 16,
  },
  greeting: {
    fontSize: 16,
    color: '#13231B',
  },
  name: {
    fontSize: 24,
    fontWeight: '600',
    color: '#13231B',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  searchContent: {
    position: 'relative',
    marginBottom: 24,
    height: 80,
    justifyContent: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 24,
    paddingHorizontal: 16,
    borderRadius: 12,
    borderColor: '#3C3C4340',
    borderWidth: 0.2,
  },
  premiumContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    backgroundColor: '#24201A',
    borderRadius: 12,
    marginHorizontal: 24,
  },
  premiumContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  premiumContentText: {
    marginLeft: 12,
  },
  premiumText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#E5C990',
  },
  premiumSubText: {
    fontSize: 13,
    fontWeight: '300',
    color: '#F5C25B',
  },
  searchBg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  searchBox: {
    fontSize: 16,
    color: '#A1A1AA',
    paddingLeft: 12,
    paddingVertical: 10,
  },
  categoriesScroll: {
    paddingHorizontal: 24,
  },
  featuredContainer: {
    marginVertical: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 16,
    paddingHorizontal: 24,
  },
  featuredScroll: {
    paddingHorizontal: 24,
  },
  plantCard: {
    width: 240,
    height: 164,
    marginRight: 16,
    borderRadius: 12,
    overflow: 'hidden',
  },
  plantImage: {
    width: '100%',
    height: 164,
    resizeMode: 'cover',
  },
  plantInfo: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: 'transparent',
    height: '40%',
  },
  plantName: {
    fontSize: 15,
    fontWeight: '500',
    color: '#FFFFFF',
    paddingHorizontal: 10,
  },
  categoriesContainer: {
    marginBottom: 24,
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 24,
    justifyContent: 'space-between',
  },
  categoryCard: {
    width: (screenWidth - 64) / 2,
    marginBottom: 16,
    height: 152,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 0.5,
    borderColor: '#F4F6F6',
  },
  categoryImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    borderRadius: 12,
  },
  categoryName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000000',
    marginBottom: 4,
    position: 'absolute',
    top: 12,
    left: 12,
    width: '60%',
  },
});

export default HomeScreen;
