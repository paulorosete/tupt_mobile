import React from 'react';
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
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

const AboutUsScreen = () => {
  const navigation = useNavigation();

  const goBackToDashboard = () => {
    navigation.navigate('Dashboard');
  };

  const InfoCard = ({ title, content, icon, gradient }) => (
    <View style={styles.cardContainer}>
      <LinearGradient
        colors={gradient}
        style={styles.card}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View style={styles.cardHeader}>
          <Text style={styles.cardIcon}>{icon}</Text>
          <Text style={styles.cardTitle}>{title}</Text>
        </View>
        <Text style={styles.cardContent}>{content}</Text>
      </LinearGradient>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#8c2424" />
      
      {/* Enhanced Header with Hero Image */}
      <View style={styles.heroSection}>
        <Image
          source={require('../assets/prof1.jpg')}
          style={styles.heroImage}
          resizeMode="cover"
        />
        <LinearGradient
          colors={['rgba(140, 36, 36, 0.7)', 'rgba(140, 36, 36, 0.9)']}
          style={styles.heroOverlay}
        />
        
        {/* Back Button */}
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={goBackToDashboard}
          activeOpacity={0.8}
        >
          <Text style={styles.backButtonText}>← Back</Text>
        </TouchableOpacity>
        
        {/* Hero Content */}
        <View style={styles.heroContent}>
          <View style={styles.logoContainer}>
            <Image
              source={require('../assets/tuplogo1.png')}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.heroTitle}>About TUP Taguig</Text>
          <Text style={styles.heroSubtitle}>
            Technological University of the Philippines
          </Text>
        </View>
      </View>

      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        bounces={true}
      >
        <View style={styles.content}>
          {/* University Description */}
          <InfoCard
            title="Who We Are"
            icon="🏛️"
            gradient={['#667eea', '#764ba2']}
            content="The Technological University of the Philippines is mandated to provide higher and advanced vocational, technical, industrial, technological and professional education and training in the industries and technology, and practical arts leading to certificates, diplomas, and degrees; to provide progressive leadership in applied research, developmental studies in technical, industrial and technological fields and production using indigenous materials, effect technology transfer in the countryside; and to provide expertise in the development of small and medium scale industries in identified growth-centers."
          />

          {/* Mission */}
          <InfoCard
            title="Our Mission"
            icon="🎯"
            gradient={['#f093fb', '#f5576c']}
            content="The University shall provide higher and advanced vocational, technical, industrial, technological and professional education and training in industries and technology, and in practical arts leading to certificates, diplomas and degrees. It shall provide progressive leadership in applied research, developmental studies in technical, industrial, and technological fields and production using indigenous materials; effect technology transfer in the countryside; and assist in the development of small-and-medium scale industries in identified growth centers."
          />

          {/* Vision */}
          <InfoCard
            title="Our Vision"
            icon="🌟"
            gradient={['#4facfe', '#00f2fe']}
            content="A premier state university with recognized excellence in engineering and technology education at par with leading universities in the ASEAN region."
          />

         

          {/* Campus Gallery */}
          <View style={styles.gallerySection}>
            <Text style={styles.sectionTitle}>Campus Life</Text>
            <ScrollView 
              horizontal 
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.galleryScroll}
            >
              <View style={styles.galleryCard}>
                <Image
                  source={require('../assets/academic.jpg')}
                  style={styles.galleryImage}
                  resizeMode="cover"
                />
                <View style={styles.galleryOverlay}>
                  <Text style={styles.galleryText}>Academic Excellence</Text>
                </View>
              </View>
              <View style={styles.galleryCard}>
                <Image
                  source={require('../assets/prof2.png')}
                  style={styles.galleryImage}
                  resizeMode="cover"
                />
                <View style={styles.galleryOverlay}>
                  <Text style={styles.galleryText}>Modern Facilities</Text>
                </View>
              </View>
              <View style={styles.galleryCard}>
                <Image
                  source={require('../assets/campuslife.jpg')}
                  style={styles.galleryImage}
                  resizeMode="cover"
                />
                <View style={styles.galleryOverlay}>
                  <Text style={styles.galleryText}>Campus Life</Text>
                </View>
              </View>
            </ScrollView>
          </View>

          {/* Footer */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>
              © 2024 Technological University of the Philippines - Taguig
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  heroSection: {
    height: height * 0.4,
    position: 'relative',
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  heroOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  heroContent: {
    position: 'absolute',
    bottom: 30,
    left: 20,
    right: 20,
    alignItems: 'center',
  },
  logoContainer: {
    backgroundColor: '#fff',
    borderRadius: 40,
    padding: 8,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  logo: {
    width: 60,
    height: 60,
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 8,
    letterSpacing: 0.5,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  heroSubtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.9)',
    textAlign: 'center',
    fontWeight: '500',
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 20,
  },
  cardContainer: {
    marginBottom: 20,
  },
  card: {
    borderRadius: 20,
    padding: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  cardIcon: {
    fontSize: 28,
    marginRight: 12,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#fff',
    letterSpacing: 0.3,
  },
  cardContent: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.95)',
    lineHeight: 24,
    fontWeight: '400',
  },
  factsSection: {
    marginTop: 10,
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#2c3e50',
    marginBottom: 20,
    textAlign: 'center',
    letterSpacing: 0.3,
  },
  factsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  factCard: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    marginHorizontal: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  factNumber: {
    fontSize: 32,
    fontWeight: '800',
    color: '#8c2424',
    marginBottom: 8,
  },
  factLabel: {
    fontSize: 14,
    color: '#7f8c8d',
    fontWeight: '600',
    textAlign: 'center',
    letterSpacing: 0.3,
  },
  gallerySection: {
    marginBottom: 30,
  },
  galleryScroll: {
    paddingLeft: 0,
    paddingRight: 10,
  },
  galleryCard: {
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
    width: width * 0.6,
    height: 150,
  },
  galleryOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 12,
  },
  galleryText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
  footer: {
    marginTop: 20,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#e9ecef',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#6c757d',
    textAlign: 'center',
    fontWeight: '500',
  },
});

export default AboutUsScreen;