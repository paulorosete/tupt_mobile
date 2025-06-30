import React, { useState } from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  SafeAreaView, 
  TouchableOpacity, 
  Image, 
  ScrollView,
  Dimensions,
  StatusBar,
  TextInput,
  Animated
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

// Import images from assets
import image1 from '../assets/1.jpg';
import image2 from '../assets/2.jpg';
import image3 from '../assets/3.jpg';
import image4 from '../assets/4.jpg';
import image5 from '../assets/5.jpg';
import image6 from '../assets/6.jpg';
import image7 from '../assets/7.jpg';
import image8 from '../assets/8.jpg';
import image9 from '../assets/9.jpg';
import image10 from '../assets/10.jpg';

const { width } = Dimensions.get('window');

const ExploreScreen = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const goBackToDashboard = () => {
    navigation.navigate('Dashboard');
  };

  const handleButtonPress = (index) => {
    const screenNames = [
      'ITBuildingScreen',
      'AdminBuildingScreen',
      'BASDBuildingScreen',
      'ItalianBuildingScreen',
      'MechanicalBuildingScreen',
      'CanteenScreen',
      'MultiPurposeHallScreen',
      'CivilBuildingScreen',
      'GymnasiumScreen',
      'LibraryScreen',
    ];
    navigation.navigate(screenNames[index]);
  };

  // Enhanced data structure
  const locations = [
    { id: 0, name: 'IT Building', image: image1, category: 'Academic', description: 'Information Technology Center', icon: '💻' },
    { id: 1, name: 'Admin Building', image: image2, category: 'Administration', description: 'Administrative Offices', icon: '🏢' },
    { id: 2, name: 'BASD Building', image: image3, category: 'Academic', description: 'Business & Arts Sciences', icon: '📚' },
    { id: 3, name: 'Italian Building', image: image4, category: 'Academic', description: 'Electronics Engineering', icon: '🇮🇹' },
    { id: 4, name: 'Mechanical Building', image: image5, category: 'Academic', description: 'Engineering Department', icon: '⚙️' },
    { id: 5, name: 'Canteen', image: image6, category: 'Facilities', description: 'Dining & Food Court', icon: '🍽️' },
    { id: 6, name: 'Multi-purpose Hall', image: image7, category: 'Events', description: 'Events & Gatherings', icon: '🎭' },
    { id: 7, name: 'Civil Building', image: image8, category: 'Academic', description: 'Civil Engineering', icon: '🏗️' },
    { id: 8, name: 'Gymnasium', image: image9, category: 'Sports', description: 'Sports & Recreation', icon: '🏀' },
    { id: 9, name: 'Library', image: image10, category: 'Academic', description: 'Learning Resource Center', icon: '📖' },
  ];

  const categories = ['All', 'Academic', 'Facilities', 'Events', 'Sports', 'Administration'];

  // Filter locations based on search and category
  const filteredLocations = locations.filter(location => {
    const matchesSearch = location.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         location.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || location.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const LocationCard = ({ location, index }) => (
    <TouchableOpacity
      style={styles.locationCard}
      onPress={() => handleButtonPress(location.id)}
      activeOpacity={0.8}
    >
      <View style={styles.imageContainer}>
        <Image source={location.image} style={styles.locationImage} />
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.7)']}
          style={styles.imageGradient}
        />
        <View style={styles.categoryBadge}>
          <Text style={styles.categoryText}>{location.category}</Text>
        </View>
        <Text style={styles.locationIcon}>{location.icon}</Text>
      </View>
      <View style={styles.cardContent}>
        <Text style={styles.locationName}>{location.name}</Text>
        <Text style={styles.locationDescription}>{location.description}</Text>
        <View style={styles.exploreButton}>
          <Text style={styles.exploreButtonText}>Explore →</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const CategoryChip = ({ category, isSelected, onPress }) => (
    <TouchableOpacity
      style={[styles.categoryChip, isSelected && styles.selectedCategoryChip]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={[styles.categoryChipText, isSelected && styles.selectedCategoryChipText]}>
        {category}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1a1a2e" />
      
      {/* Enhanced Header */}
      <LinearGradient colors={['#1a1a2e', '#16213e']} style={styles.header}>
        <View style={styles.headerTop}>
          <TouchableOpacity style={styles.backButton} onPress={goBackToDashboard}>
            <Text style={styles.backButtonText}>← Back</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.headerContent}>
          <Text style={styles.title}>Explore Campus</Text>
          <Text style={styles.subtitle}>Discover amazing places at TUP Taguig</Text>
        </View>
      </LinearGradient>

      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        bounces={true}
      >
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <Text style={styles.searchIcon}>🔍</Text>
            <TextInput
              style={styles.searchInput}
              placeholder="Search locations..."
              placeholderTextColor="#999"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>
        </View>

        {/* Category Filter */}
        <View style={styles.categoryContainer}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoryScrollView}
          >
            {categories.map((category) => (
              <CategoryChip
                key={category}
                category={category}
                isSelected={selectedCategory === category}
                onPress={() => setSelectedCategory(category)}
              />
            ))}
          </ScrollView>
        </View>

        {/* Results Count */}
        <View style={styles.resultsContainer}>
          <Text style={styles.resultsText}>
            {filteredLocations.length} location{filteredLocations.length !== 1 ? 's' : ''} found
          </Text>
        </View>

        {/* Enhanced Location Grid */}
        <View style={styles.locationsContainer}>
          {filteredLocations.map((location, index) => (
            <LocationCard key={location.id} location={location} index={index} />
          ))}
        </View>

        {/* Empty State */}
        {filteredLocations.length === 0 && (
          <View style={styles.emptyState}>
            <Text style={styles.emptyStateIcon}>🔍</Text>
            <Text style={styles.emptyStateTitle}>No locations found</Text>
            <Text style={styles.emptyStateText}>
              Try adjusting your search or filter criteria
            </Text>
          </View>
        )}

        {/* Footer Spacing */}
        <View style={styles.footer} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#77797d',
  },
  header: {
    paddingTop: 10,
    paddingBottom: 25,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 15,
  },
  backButton: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 25,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  backButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  headerContent: {
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: '#fff',
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
    marginTop: 8,
    fontWeight: '400',
  },
  scrollView: {
    flex: 1,
  },
  searchContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  searchIcon: {
    fontSize: 18,
    marginRight: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  categoryContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#faf7f8',
    marginBottom: 15,
    letterSpacing: 0.3,
  },
  categoryScrollView: {
    paddingRight: 20,
  },
  categoryChip: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
    backgroundColor: '#fff',
    marginRight: 12,
    borderWidth: 2,
    borderColor: '#e9ecef',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  selectedCategoryChip: {
    backgroundColor: '#667eea',
    borderColor: '#667eea',
  },
  categoryChipText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6c757d',
  },
  selectedCategoryChipText: {
    color: '#fff',
  },
  resultsContainer: {
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  resultsText: {
    fontSize: 14,
    color: '#6c757d',
    fontWeight: '500',
  },
  locationsContainer: {
    paddingHorizontal: 20,
  },
  locationCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 16,
    elevation: 8,
    overflow: 'hidden',
  },
  imageContainer: {
    position: 'relative',
    height: 200,
  },
  locationImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  imageGradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
  },
  categoryBadge: {
    position: 'absolute',
    top: 15,
    left: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
  },
  categoryText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#333',
  },
  locationIcon: {
    position: 'absolute',
    top: 15,
    right: 15,
    fontSize: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 20,
    width: 40,
    height: 40,
    textAlign: 'center',
    lineHeight: 40,
  },
  cardContent: {
    padding: 20,
  },
  locationName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#2c3e50',
    marginBottom: 8,
    letterSpacing: 0.3,
  },
  locationDescription: {
    fontSize: 14,
    color: '#6c757d',
    marginBottom: 15,
    lineHeight: 20,
  },
  exploreButton: {
    alignSelf: 'flex-start',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#667eea',
  },
  exploreButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  emptyState: {
    alignItems: 'center',
    paddingVertical: 60,
    paddingHorizontal: 40,
  },
  emptyStateIcon: {
    fontSize: 48,
    marginBottom: 20,
  },
  emptyStateTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#2c3e50',
    marginBottom: 8,
    textAlign: 'center',
  },
  emptyStateText: {
    fontSize: 16,
    color: '#6c757d',
    textAlign: 'center',
    lineHeight: 24,
  },
  footer: {
    height: 30,
  },
});

export default ExploreScreen;