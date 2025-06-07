import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AboutUsScreen = () => {
  const navigation = useNavigation();

  const goBackToDashboard = () => {
    navigation.navigate('Dashboard');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={goBackToDashboard}>
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
      </View>
      
      {/* Header Image */}
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/prof1.jpg')} // Update path to your image
          style={styles.headerImage}
          resizeMode="cover"
        />
      </View>
      
      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          <Text style={styles.title}>About Us</Text>
          
          {/* Description Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Who We Are</Text>
            <Text style={styles.sectionText}>
            The Technological University of the Philippines is mandated to provide higher and advanced vocational, technical, industrial, technological and professional education and training in the industries and technology, and practical arts leading to certificates, diplomas, and degrees; to provide progressive leadership in applied research, developmental studies in technical, industrial and technological fields and production using indigenous materials, effect technology transfer in the countryside; and to provide expertise in the development of small and medium scale industries in identified growth-centers.
            </Text>
          </View>
          
          {/* Mission Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Our Mission</Text>
            <Text style={styles.sectionText}>
            The University shall provide higher and advanced vocational, technical, industrial, technological
and professional education and training in industries and technology, and in practical arts
leading to certificates, diplomas and degrees. It shall provide progressive leadership
in applied research, developmental studies in technical, industrial, and technological fields
and production using indigenous materials; effect technology transfer in the countryside;
and assist in the development of small-and-medium scale industries in identified growth centers.
            </Text>
          </View>
          
          {/* Vision Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Our Vision</Text>
            <Text style={styles.sectionText}>
            A premier state university with recognized excellence in engineering
and technology education at par with leading
universities in the ASEAN region.
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
    backgroundColor: '#8c2424',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 15,
    zIndex: 10,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  backButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
    backgroundColor: '#4287f5',
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  imageContainer: {
    height: 200,
    width: '100%',
  },
  headerImage: {
    width: '100%',
    height: '100%',
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#f5f5f5',
    marginBottom: 20,
    textAlign: 'center',
  },
  section: {
    marginBottom: 25,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4287f5',
    marginBottom: 10,
  },
  sectionText: {
    fontSize: 16,
    color: '#555',
    lineHeight: 24,
  },
});

export default AboutUsScreen;