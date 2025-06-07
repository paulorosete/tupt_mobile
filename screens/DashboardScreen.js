import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Image,
  Dimensions,
  StatusBar,
} from 'react-native';
import { useAuth } from '../contexts/AuthContext';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient'; // You may need to install this

const { width } = Dimensions.get('window');

const DashboardScreen = () => {
  const { user, logout } = useAuth();
  const navigation = useNavigation();

  const handleLogout = () => {
    logout();
  };

  const navigateToExplore = () => {
    navigation.navigate('ExploreScreen');
  };

  const navigateToAboutUs = () => {
    navigation.navigate('AboutUsScreen');
  };

  const StatCard = ({ value, label, color }) => (
    <View style={[styles.statCard, { borderLeftColor: color }]}>
      <Text style={[styles.statValue, { color }]}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );

  const NavigationCard = ({ title, onPress, icon, gradient }) => (
    <TouchableOpacity 
      style={styles.navCardContainer} 
      onPress={onPress}
      activeOpacity={0.8}
    >
      <LinearGradient
        colors={gradient}
        style={styles.navCard}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Text style={styles.navCardIcon}>{icon}</Text>
        <Text style={styles.navCardText}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1a1a2e" />
      
      {/* Enhanced Header */}
      <LinearGradient
        colors={['#1a1a2e', '#16213e']}
        style={styles.header}
      >
        <View style={styles.headerContent}>
          <View>
            <Text style={styles.headerTitle}>Dashboard</Text>
            <Text style={styles.headerSubtitle}>Welcome back!</Text>
          </View>
          <TouchableOpacity 
            style={styles.logoutButton} 
            onPress={handleLogout}
            activeOpacity={0.8}
          >
            <Text style={styles.logoutButtonText}>👋 Logout</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>

      <ScrollView 
        style={styles.content}
        showsVerticalScrollIndicator={false}
        bounces={true}
      >
        {/* Logo with enhanced styling */}
        <View style={styles.logoContainer}>
          <View style={styles.logoWrapper}>
            <Image
              source={require('../assets/tuplogo1.png')}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>
        </View>

        {/* Enhanced Welcome Card */}
        <LinearGradient
          colors={['#800000', '#a00000', '#600000']}
          style={styles.welcomeCard}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <View style={styles.welcomeContent}>
            <Text style={styles.welcomeText}>
              Hello, {user?.name || 'User'}! 👋
            </Text>
            <Text style={styles.subText}>
              Ready to explore TUP Taguig?
            </Text>
            <View style={styles.welcomeAccent} />
          </View>
        </LinearGradient>

        {/* Enhanced Stats Container */}
        <View style={styles.statsSection}>
          <Text style={styles.sectionTitle}>Quick Stats</Text>
          <View style={styles.statsContainer}>
            <StatCard value="13" label="Courses" color="#4CAF50" />
            <StatCard value="4" label="Departments" color="#2196F3" />
            <StatCard value="39" label="Rank No." color="#FF9800" />
          </View>
        </View>

        {/* Enhanced Navigation Section */}
        <View style={styles.navigationSection}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <View style={styles.navigationGrid}>
            <NavigationCard
              title="Explore"
              onPress={navigateToExplore}
              icon="🗺️"
              gradient={['#667eea', '#764ba2']}
            />
            <NavigationCard
              title="About Us"
              onPress={navigateToAboutUs}
              icon="ℹ️"
              gradient={['#f093fb', '#f5576c']}
            />
          </View>
        </View>

        {/* Enhanced Image Gallery */}
        <View style={styles.gallerySection}>
          <Text style={styles.sectionTitle}>    Campus Gallery</Text>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.galleryScroll}
          >
            <View style={styles.imageCard}>
              <Image
                source={require('../assets/eaad.png')}
                style={styles.galleryImage}
                resizeMode="cover"
              />
              <View style={styles.imageOverlay} />
            </View>
            <View style={styles.imageCard}>
              <Image
                source={require('../assets/prof1.jpg')}
                style={styles.galleryImage}
                resizeMode="cover"
              />
              <View style={styles.imageOverlay} />
            </View>
            <View style={styles.imageCard}>
              <Image
                source={require('../assets/prof2.png')}
                style={styles.galleryImage}
                resizeMode="cover"
              />
              <View style={styles.imageOverlay} />
            </View>
            <View style={styles.imageCard}>
              <Image
                source={require('../assets/tup2.jpg')}
                style={styles.galleryImage}
                resizeMode="cover"
              />
              <View style={styles.imageOverlay} />
            </View>
          </ScrollView>
        </View>

        {/* Footer spacing */}
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
    paddingBottom: 20,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#fff',
    letterSpacing: 0.5,
  },
  headerSubtitle: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
    marginTop: 2,
  },
  logoutButton: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 25,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  content: {
    flex: 1,
  },
  logoContainer: {
    alignItems: 'center',
    marginVertical: 30,
  },
  logoWrapper: {
    backgroundColor: '#fff',
    borderRadius: 60,
    padding: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
  },
  logo: {
    width: 80,
    height: 80,
  },
  welcomeCard: {
    marginHorizontal: 20,
    borderRadius: 20,
    padding: 25,
    marginBottom: 30,
    shadowColor: '#800000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
  },
  welcomeContent: {
    position: 'relative',
  },
  welcomeText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  subText: {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: 16,
    fontWeight: '400',
  },
  welcomeAccent: {
    position: 'absolute',
    top: -10,
    right: -10,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  statsSection: {
    marginHorizontal: 20,
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#faf7f8',
    marginBottom: 15,
    letterSpacing: 0.3,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statCard: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    marginHorizontal: 6,
    borderLeftWidth: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  statValue: {
    fontSize: 28,
    fontWeight: '800',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#7f8c8d',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  navigationSection: {
    marginHorizontal: 20,
    marginBottom: 30,
  },
  navigationGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  navCardContainer: {
    flex: 1,
    marginHorizontal: 6,
  },
  navCard: {
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 120,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 8,
  },
  navCardIcon: {
    fontSize: 32,
    marginBottom: 10,
  },
  navCardText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  gallerySection: {
    marginBottom: 30,
  },
  galleryScroll: {
    paddingLeft: 20,
    paddingRight: 10,
  },
  imageCard: {
    marginRight: 15,
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 6,
  },
  galleryImage: {
    width: width * 0.7,
    height: 180,
  },
  imageOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  footer: {
    height: 30,
  },
});

export default DashboardScreen;