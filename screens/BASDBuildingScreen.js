import React, { useState } from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  SafeAreaView, 
  TouchableOpacity, 
  ScrollView, 
  Image, 
  Modal,
  StatusBar,
  Dimensions,
  Animated
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

const BASDBuildingScreen = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('info');
  const [imageModalVisible, setImageModalVisible] = useState(false);

  const goBackToExplore = () => {
    navigation.navigate('ExploreScreen');
  };

  const toggleImageModal = () => {
    setImageModalVisible(!imageModalVisible);
  };

  // Enhanced courses data
  const courses = [
    { 
      id: 1, 
      code: 'Bachelor of Technical Vocational Teacher Education Major in:', 
      name: 'Electronics Technology', 
      description: 'The Bachelor of Technical Vocational Teacher Education, Major in Electronics Technology, prepares students to become skilled electronics teachers. The program combines hands-on training in electronics with teaching methods, helping graduates teach in schools, training centers, or work in the electronics industry.',
      icon: '⚡',
      duration: '4 years',
      color: '#667eea'
    },
    { 
      id: 2, 
      code: 'Bachelor of Technical Vocational Teacher Education Major in:', 
      name: 'Electrical Technology', 
      description: 'The Bachelor of Technical Vocational Teacher Education, Major in Electrical Technology, trains students to become effective electrical instructors. The program blends practical skills in electrical systems with teaching strategies, preparing graduates to work in schools, training centers, or the electrical industry.',
      icon: '🔌',
      duration: '4 years',
      color: '#f093fb'
    },
    { 
      id: 3, 
      code: 'Bachelor of Technical Vocational Teacher Education Major in:', 
      name: 'Computer Hardware', 
      description: 'The Bachelor of Technical Vocational Teacher Education, Major in Computer Hardware, prepares students to teach and work in the field of computer hardware technology. The program combines hands-on training in computer assembly, repair, and maintenance with effective teaching methods for technical education.',
      icon: '🖥️',
      duration: '4 years',
      color: '#f093fb'
    },
    { 
      id: 4, 
      code: 'Bachelor of Technical Vocational Teacher Education Major in:', 
      name: 'Computer Programming', 
      description: 'The Bachelor of Technical Vocational Teacher Education, Major in Computer Programming, equips students with programming skills and teaching techniques. The program focuses on coding, software development, and instructional methods to prepare graduates for careers in education and the tech industry.',
      icon: '👨‍💻',
      duration: '4 years',
      color: '#f093fb'
    },
  ];

  // Enhanced organizational structure
  const orgChart = [
    { id: 1, name: 'Heherson Ramos', position: 'Department Head', image: require('../assets/defaultprofile.jpg'), color: '#667eea' },
    { id: 2, name: 'Cesar Mendoza', position: 'Section Head', image: require('../assets/defaultprofile.jpg'), color: '#f093fb' },
    { id: 3, name: 'Maria Leonora Theresa Aguilar', position: 'Faculty', image: require('../assets/defaultprofile.jpg'), color: '#48cae4' },
    { id: 4, name: 'Mary Rose Habla', position: 'Faculty', image: require('../assets/defaultprofile.jpg'), color: '#48cae4' },
    { id: 5, name: 'Norway Pangan', position: 'Faculty', image: require('../assets/defaultprofile.jpg'), color: '#48cae4' },
    { id: 6, name: 'Krystel Alvarado', position: 'Faculty', image: require('../assets/defaultprofile.jpg'), color: '#48cae4' },
    { id: 7, name: 'Roselle Honorio', position: 'Faculty', image: require('../assets/defaultprofile.jpg'), color: '#48cae4' },
    { id: 8, name: 'Ivan Ray Ancero', position: 'Faculty', image: require('../assets/defaultprofile.jpg'), color: '#48cae4' },
    { id: 9, name: 'Mary Ann Isculpit', position: 'Faculty', image: require('../assets/defaultprofile.jpg'), color: '#48cae4' },
    { id: 10, name: 'Leila Ramos', position: 'Faculty', image: require('../assets/defaultprofile.jpg'), color: '#48cae4' },
    { id: 11, name: 'Patrick Justin Ariado', position: 'Faculty', image: require('../assets/defaultprofile.jpg'), color: '#48cae4' },
    { id: 12, name: 'Ma. Clowee Ann Sarmiento', position: 'Faculty', image: require('../assets/defaultprofile.jpg'), color: '#48cae4' },
    { id: 13, name: 'Christofer Mitchel Azuelo', position: 'Faculty', image: require('../assets/defaultprofile.jpg'), color: '#48cae4' },
    { id: 14, name: 'Neizzel Joy Labro - Azuelo', position: 'Faculty', image: require('../assets/defaultprofile.jpg'), color: '#48cae4' },
    { id: 15, name: 'Lieda Sobida', position: 'Faculty', image: require('../assets/defaultprofile.jpg'), color: '#48cae4' },
    { id: 16, name: 'Sarah Belardo', position: 'Faculty', image: require('../assets/defaultprofile.jpg'), color: '#48cae4' },
    { id: 17, name: 'Annalie Tanto', position: 'Faculty', image: require('../assets/defaultprofile.jpg'), color: '#48cae4' },
    { id: 18, name: 'Ma. Victoria Camento', position: 'Faculty', image: require('../assets/defaultprofile.jpg'), color: '#48cae4' },
    { id: 19, name: 'Ron Eric Legaspi', position: 'Faculty', image: require('../assets/defaultprofile.jpg'), color: '#48cae4' },
    { id: 20, name: 'Lizette Terania', position: 'Faculty', image: require('../assets/defaultprofile.jpg'), color: '#48cae4' },
    { id: 21, name: 'Mitchie Caurel', position: 'Faculty', image: require('../assets/defaultprofile.jpg'), color: '#48cae4' },
    { id: 22, name: 'Eleanore Marcos', position: 'Faculty', image: require('../assets/defaultprofile.jpg'), color: '#48cae4' },
    { id: 23, name: 'Ruby Mae Torres', position: 'Faculty', image: require('../assets/defaultprofile.jpg'), color: '#48cae4' },
    { id: 24, name: 'Randolf Colegio', position: 'Faculty', image: require('../assets/defaultprofile.jpg'), color: '#48cae4' },
    { id: 25, name: 'Gelo Zaragosa', position: 'Faculty', image: require('../assets/defaultprofile.jpg'), color: '#48cae4' },
    { id: 26, name: 'Ma. Gena Cruz', position: 'Faculty', image: require('../assets/defaultprofile.jpg'), color: '#48cae4' },
    { id: 27, name: 'Eliza Mendoza', position: 'Faculty', image: require('../assets/defaultprofile.jpg'), color: '#48cae4' },
    { id: 28, name: 'Reginald Catunda', position: 'Faculty', image: require('../assets/defaultprofile.jpg'), color: '#48cae4' },
    { id: 29, name: 'Maricel Ochoa', position: 'Faculty', image: require('../assets/defaultprofile.jpg'), color: '#48cae4' },
    { id: 30, name: 'Albert Dasal', position: 'Faculty', image: require('../assets/defaultprofile.jpg'), color: '#48cae4' },
    { id: 31, name: 'Angelica Olivar', position: 'Faculty', image: require('../assets/defaultprofile.jpg'), color: '#48cae4' },
  ];

  const facilities = [
    { name: 'Computer Labs', floor: '3rd Floor', rooms: 'RM 301, RM 302, RM 303', icon: '💻', color: '#667eea' },
    { name: 'Faculty Room', floor: '2nd Floor', rooms: 'RM 206', icon: '👨‍🏫', color: '#f093fb' },
    { name: 'Conference Room', floor: '2nd Floor', rooms: 'RM 205', icon: '🏢', color: '#48cae4' },
    { name: 'MTICS Office', floor: '2nd Floor', rooms: 'RM 204', icon: '🏛️', color: '#06ffa5' },
    { name: 'Event Venue', floor: '4th Floor', rooms: 'RM 401', icon: '🎭', color: '#ffbe0b' },
  ];

  const CourseCard = ({ course }) => (
    <View style={[styles.courseCard, { borderLeftColor: course.color }]}>
      <View style={styles.courseHeader}>
        <View style={[styles.courseIcon, { backgroundColor: course.color }]}>
          <Text style={styles.courseIconText}>{course.icon}</Text>
        </View>
        <View style={styles.courseInfo}>
          <Text style={styles.courseCode}>{course.code}</Text>
          <Text style={styles.courseDuration}>{course.duration}</Text>
        </View>
      </View>
      <Text style={styles.courseName}>{course.name}</Text>
      <Text style={styles.courseDesc}>{course.description}</Text>
    </View>
  );

  const FacultyCard = ({ person }) => (
    <View style={styles.facultyCard}>
      <View style={styles.facultyImageContainer}>
        <Image source={person.image} style={styles.facultyImage} />
        <View style={[styles.facultyStatusDot, { backgroundColor: person.color }]} />
      </View>
      <View style={styles.facultyInfo}>
        <Text style={styles.facultyName}>{person.name}</Text>
        <View style={[styles.positionBadge, { backgroundColor: person.color }]}>
          <Text style={styles.facultyPosition}>{person.position}</Text>
        </View>
      </View>
    </View>
  );

  const FacilityCard = ({ facility }) => (
    <View style={styles.facilityCard}>
      <View style={[styles.facilityIcon, { backgroundColor: facility.color }]}>
        <Text style={styles.facilityIconText}>{facility.icon}</Text>
      </View>
      <View style={styles.facilityInfo}>
        <Text style={styles.facilityName}>{facility.name}</Text>
        <Text style={styles.facilityFloor}>{facility.floor}</Text>
        <Text style={styles.facilityRooms}>{facility.rooms}</Text>
      </View>
    </View>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'courses':
        return (
          <ScrollView style={styles.tabContent} showsVerticalScrollIndicator={false}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>📚 Courses Offered</Text>
              <Text style={styles.sectionSubtitle}>Discover our comprehensive IT programs</Text>
            </View>
            {courses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </ScrollView>
        );
      case 'org':
        return (
          <ScrollView style={styles.tabContent} showsVerticalScrollIndicator={false}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>👥 Our Faculty</Text>
              <Text style={styles.sectionSubtitle}>Meet our dedicated team of educators</Text>
            </View>
            {orgChart.map(person => (
              <FacultyCard key={person.id} person={person} />
            ))}
          </ScrollView>
        );
      default:
        return (
          <ScrollView style={styles.tabContent} showsVerticalScrollIndicator={false}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>🏢 Building Information</Text>
              <Text style={styles.sectionSubtitle}>Welcome to the Basic Arts and Science Department Building</Text>
            </View>
            
            <View style={styles.infoCard}>
              <Text style={styles.infoDescription}>
                The Basic Arts and Science Department serves as the academic foundation for all disciplines, fostering critical thinking, creativity, and scientific inquiry. Our department is equipped with well-maintained experienced faculty, and interactive learning spaces that support both theoretical and practical education in subjects such as physics, chemistry, mathematics, and the humanities. 
              </Text>
            </View>

            <View style={styles.facilitiesSection}>
              <Text style={styles.facilitiesTitle}>🏛️ Facilities Available</Text>
              {facilities.map((facility, index) => (
                <FacilityCard key={index} facility={facility} />
              ))}
            </View>

            <TouchableOpacity style={styles.directionsButton} onPress={toggleImageModal}>
              <LinearGradient colors={['#667eea', '#764ba2']} style={styles.buttonGradient}>
                <Text style={styles.directionsIcon}>🗺️</Text>
                <Text style={styles.directionsButtonText}>View Directions</Text>
              </LinearGradient>
            </TouchableOpacity>
          </ScrollView>
        );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1a1a2e" />
      
      {/* Enhanced Header */}
      <LinearGradient colors={['#1a1a2e', '#16213e']} style={styles.header}>
        <View style={styles.headerTop}>
          <TouchableOpacity style={styles.backButton} onPress={goBackToExplore}>
            <Text style={styles.backButtonText}>← Back</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.headerContent}>
          <Text style={styles.buildingIcon}>🎨</Text>
          <Text style={styles.title}>BASD Building</Text>
          <Text style={styles.subtitle}>Basic Arts and Science Department</Text>
        </View>
      </LinearGradient>

      {/* Enhanced Tab Container */}
      <View style={styles.tabContainer}>
        {[
          { key: 'info', label: 'Info', icon: '🏢' },
          { key: 'courses', label: 'Courses', icon: '📚' },
          { key: 'org', label: 'Faculty', icon: '👥' }
        ].map((tab) => (
          <TouchableOpacity
            key={tab.key}
            style={[styles.tab, activeTab === tab.key && styles.activeTab]}
            onPress={() => setActiveTab(tab.key)}
            activeOpacity={0.8}
          >
            <Text style={[styles.tabIcon, activeTab === tab.key && styles.activeTabIcon]}>
              {tab.icon}
            </Text>
            <Text style={[styles.tabText, activeTab === tab.key && styles.activeTabText]}>
              {tab.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Content */}
      <View style={styles.content}>
        {renderTabContent()}
      </View>

      {/* Enhanced Modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={imageModalVisible}
        onRequestClose={toggleImageModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>🗺️ BASD Building Directions</Text>
              <TouchableOpacity style={styles.modalCloseButton} onPress={toggleImageModal}>
                <Text style={styles.modalCloseText}>✕</Text>
              </TouchableOpacity>
            </View>
            <Image 
              source={require('../assets/itdirection.jpg')} 
              style={styles.modalImage} 
              resizeMode="contain"
            />
            <TouchableOpacity style={styles.closeButton} onPress={toggleImageModal}>
              <LinearGradient colors={['#667eea', '#764ba2']} style={styles.closeButtonGradient}>
                <Text style={styles.closeButtonText}>Got it!</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
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
  buildingIcon: {
    fontSize: 40,
    marginBottom: 10,
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
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginTop: -15,
    borderRadius: 15,
    padding: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 8,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 8,
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 2,
  },
  activeTab: {
    backgroundColor: '#667eea',
    shadowColor: '#667eea',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  tabIcon: {
    fontSize: 18,
    marginBottom: 4,
  },
  activeTabIcon: {
    fontSize: 18,
  },
  tabText: {
    color: '#6c757d',
    fontWeight: '600',
    fontSize: 12,
  },
  activeTabText: {
    color: '#fff',
    fontWeight: '700',
  },
  content: {
    flex: 1,
    marginTop: 20,
  },
  tabContent: {
    flex: 1,
    paddingHorizontal: 20,
  },
  sectionHeader: {
    marginBottom: 25,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: 8,
  },
  sectionSubtitle: {
    fontSize: 16,
    color: '#6c757d',
    textAlign: 'center',
    lineHeight: 22,
  },
  infoCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    marginBottom: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 4,
  },
  infoDescription: {
    fontSize: 16,
    color: '#495057',
    lineHeight: 24,
    textAlign: 'center',
  },
  facilitiesSection: {
    marginBottom: 25,
  },
  facilitiesTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#2c3e50',
    marginBottom: 15,
    textAlign: 'center',
  },
  facilityCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  facilityIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
  facilityIconText: {
    fontSize: 20,
  },
  facilityInfo: {
    flex: 1,
  },
  facilityName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2c3e50',
    marginBottom: 4,
  },
  facilityFloor: {
    fontSize: 14,
    fontWeight: '600',
    color: '#667eea',
    marginBottom: 2,
  },
  facilityRooms: {
    fontSize: 14,
    color: '#6c757d',
  },
  courseCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    borderLeftWidth: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 4,
  },
  courseHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  courseIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
  courseIconText: {
    fontSize: 20,
  },
  courseInfo: {
    flex: 1,
  },
  courseCode: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2c3e50',
    marginBottom: 2,
  },
  courseDuration: {
    fontSize: 14,
    color: '#6c757d',
    fontWeight: '600',
  },
  courseName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2c3e50',
    marginBottom: 12,
    lineHeight: 24,
  },
  courseDesc: {
    fontSize: 15,
    color: '#495057',
    lineHeight: 22,
  },
  facultyCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 4,
  },
  facultyImageContainer: {
    position: 'relative',
    marginRight: 20,
  },
  facultyImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 3,
    borderColor: '#fff',
  },
  facultyStatusDot: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#fff',
  },
  facultyInfo: {
    flex: 1,
  },
  facultyName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2c3e50',
    marginBottom: 8,
  },
  positionBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  facultyPosition: {
    fontSize: 14,
    color: '#fff',
    fontWeight: '600',
  },
  directionsButton: {
    marginBottom: 30,
    borderRadius: 15,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 6,
  },
  buttonGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 18,
    paddingHorizontal: 30,
  },
  directionsIcon: {
    fontSize: 20,
    marginRight: 10,
  },
  directionsButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  modalContent: {
    width: '90%',
    maxWidth: 400,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 20,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#2c3e50',
  },
  modalCloseButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#f8f9fa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalCloseText: {
    fontSize: 18,
    color: '#6c757d',
    fontWeight: '600',
  },
  modalImage: {
    width: '100%',
    height: 300,
    borderRadius: 15,
    marginBottom: 20,
  },
  closeButton: {
    borderRadius: 12,
    overflow: 'hidden',
  },
  closeButtonGradient: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
});

export default BASDBuildingScreen;