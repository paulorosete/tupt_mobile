import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

  const CanteenBuildingScreen = () => {
    const navigation = useNavigation();
     const [activeTab, setActiveTab] = useState('info');
   
     const goBackToExplore = () => {
       navigation.navigate('ExploreScreen');
     };
   
     // Sample courses data
     const courses = [
       { id: 1, code: 'IT101', name: 'Bachelor of Science in Information Technology - Stem', description: ' Requirements:\n Must be STEM shs graduate \n \nLearn the fundamentals of programming (Database, C++, HTML, and more), Computer Hardware, Computer Software, Networking, and more!' },
       
       { id: 2, code: 'IT205', name: 'Bachelor of Science in Information Technology - Non-Stem', description: ' Requirements:\n Must be shs graduate in any strand \n \nLearn the fundamentals of programming (Database, C++, HTML, and more), Computer Hardware, Computer Software, Networking, and more!' },
     
     ];
   
     // Sample organizational structure
     const orgChart = [
       { id: 1, name: 'Prof. Julius Delfin Silang', position: 'Department Head', image: require('../assets/jds.jpg')},
       { id: 2, name: 'Prof. Pops Madriaga', position: 'Associate Head', image: require('../assets/pops.png')},
       { id: 3, name: 'Prof. Maracris Lappay', position: 'Faculty', image: require('../assets/lapay.png') },
       { id: 4, name: 'Prof. Rico Santos', position: 'Faculty', image: require('../assets/rico.jpg') },
       { id: 5, name: 'Prof. Rommel Dalisay', position: 'Faculty', image: require('../assets/dalisay.jpg') },
       { id: 6, name: 'Prof. Nestor Valdez', position: 'Faculty', image: require('../assets/nestor.jpg') },
       { id: 7, name: 'Prof. Cristina Baloloy', position: 'Faculty', image: require('../assets/baloloy.jpg') },
       { id: 8, name: 'Yanyan Motol', position: 'Faculty Assistant', image: require('../assets/yanyan.jpg') },
     ];
   
     const renderTabContent = () => {
       switch (activeTab) {
         case 'courses':
           return (
             <ScrollView style={styles.tabContent}>
               <Text style={styles.sectionTitle}>Courses Offered</Text>
               {courses.map(course => (
                 <View key={course.id} style={styles.courseItem}>
                   <Text style={styles.courseCode}>{course.code}</Text>
                   <Text style={styles.courseName}>{course.name}</Text>
                   <Text style={styles.courseDesc}>{course.description}</Text>
                 </View>
               ))}
             </ScrollView>
           );
         case 'org':
           return (
             <ScrollView style={styles.tabContent}>
               <Text style={styles.sectionTitle}>Organizational Chart</Text>
               {orgChart.map(person => (
                 <View key={person.id} style={styles.personCard}>
                   <View style={styles.personImageContainer}>
                     <Image source={person.image} style={styles.personImage} />
                   </View>
                   <View style={styles.personInfo}>
                     <Text style={styles.personName}>{person.name}</Text>
                     <Text style={styles.personPosition}>{person.position}</Text>
                   </View>
                 </View>
               ))}
             </ScrollView>
           );
         default:
           return (
             <View style={styles.tabContent}>
               <Text style={styles.description}>
                 Welcome to the IT Building. Here you can find information about the facilities and services offered.
               </Text>
               <Text style={styles.facilitiesTitle}>Facilities Available:</Text>
               <View style={styles.facilitiesList}>
                 <View style={styles.facilityItem}>
                   <Text style={styles.facilityName}>• Computer Labs</Text>
                   <Text style={styles.boldText}>    3rd Floor</Text>
                   <Text style={styles.facilityDetails}>RM 301, RM 302, RM 303</Text>
                 </View>
                 <View style={styles.facilityItem}>
                   <Text style={styles.facilityName}>• Faculty Room</Text>
                   <Text style={styles.boldText}>    2nd Floor</Text>
                   <Text style={styles.facilityDetails}>RM 206</Text>
                 </View>
                 <View style={styles.facilityItem}>
                   <Text style={styles.facilityName}>• Conference Room</Text>
                   <Text style={styles.boldText}>    2nd Floor</Text>
                   <Text style={styles.facilityDetails}>RM 205</Text>
                 </View>
                 <View style={styles.facilityItem}>
                   <Text style={styles.facilityName}>• MTICS Office</Text>
                   <Text style={styles.boldText}>    2nd Floor</Text>
                   <Text style={styles.facilityDetails}>RM 204</Text>
                 </View>
                 <View style={styles.facilityItem}>
                   <Text style={styles.facilityName}>• Event Venue</Text>
                   <Text style={styles.boldText}>    4th Floor</Text>
                   <Text style={styles.facilityDetails}>RM 401</Text>
                 </View>
               </View>
             </View>
           );
       }
     };
   
     return (
       <SafeAreaView style={styles.container}>
         <View style={styles.header}>
           <TouchableOpacity style={styles.backButton} onPress={goBackToExplore}>
             <Text style={styles.backButtonText}>Back to Explore</Text>
           </TouchableOpacity>
         </View>
         <View style={styles.content}>
           <Text style={styles.title}>Canteen</Text>
           
           <View style={styles.tabContainer}>
             <TouchableOpacity 
               style={[styles.tab, activeTab === 'info' && styles.activeTab]} 
               onPress={() => setActiveTab('info')}
             >
               <Text style={[styles.tabText, activeTab === 'info' && styles.activeTabText]}>Information</Text>
             </TouchableOpacity>
             <TouchableOpacity 
               style={[styles.tab, activeTab === 'courses' && styles.activeTab]} 
               onPress={() => setActiveTab('courses')}
             >
               <Text style={[styles.tabText, activeTab === 'courses' && styles.activeTabText]}>Courses</Text>
             </TouchableOpacity>
             <TouchableOpacity 
               style={[styles.tab, activeTab === 'org' && styles.activeTab]} 
               onPress={() => setActiveTab('org')}
             >
               <Text style={[styles.tabText, activeTab === 'org' && styles.activeTabText]}>Faculty</Text>
             </TouchableOpacity>
           </View>
           
           {renderTabContent()}
         </View>
       </SafeAreaView>
     );
   };
   
   const styles = StyleSheet.create({
     container: {
       flex: 1,
       backgroundColor: '#36454F',
     },
     header: {
       flexDirection: 'row',
       justifyContent: 'flex-start',
       padding: 20,
     },
     backButton: {
       paddingVertical: 8,
       paddingHorizontal: 12,
       borderRadius: 6,
       backgroundColor: '#00796b',
       shadowColor: '#000',
       shadowOffset: { width: 0, height: 2 },
       shadowOpacity: 0.3,
       shadowRadius: 3,
       elevation: 5,
     },
     backButtonText: {
       color: '#fff',
       fontSize: 16,
       fontWeight: 'bold',
     },
     content: {
       flex: 1,
       padding: 20,
     },
     title: {
       fontSize: 28,
       fontWeight: 'bold',
       color: '#EDEADE',
       textAlign: 'center',
       marginBottom: 20,
       textShadowColor: 'rgba(0, 0, 0, 0.5)',
       textShadowOffset: { width: 1, height: 1 },
       textShadowRadius: 2,
     },
     description: {
       fontSize: 18,
       color: '#EDEADE',
       marginBottom: 20,
       lineHeight: 24,
     },
     tabContainer: {
       flexDirection: 'row',
       marginBottom: 20,
       borderRadius: 8,
       overflow: 'hidden',
       backgroundColor: '#2c3e50',
     },
     tab: {
       flex: 1,
       paddingVertical: 12,
       alignItems: 'center',
     },
     activeTab: {
       backgroundColor: '#009688',
     },
     tabText: {
       color: '#ccc',
       fontWeight: '600',
     },
     activeTabText: {
       color: '#fff',
       fontWeight: 'bold',
     },
     tabContent: {
       flex: 1,
       backgroundColor: 'rgba(0, 0, 0, 0.2)',
       borderRadius: 8,
       padding: 15,
     },
     sectionTitle: {
       fontSize: 22,
       fontWeight: 'bold',
       color: '#EDEADE',
       marginBottom: 15,
     },
     courseItem: {
       backgroundColor: 'rgba(255, 255, 255, 0.1)',
       borderRadius: 8,
       padding: 15,
       marginBottom: 10,
     },
     courseCode: {
       color: '#4fc3f7',
       fontWeight: 'bold',
       fontSize: 16,
     },
     courseName: {
       color: '#fff',
       fontSize: 18,
       fontWeight: 'bold',
       marginVertical: 5,
     },
     courseDesc: {
       color: '#ddd',
       fontSize: 14,
     },
     personCard: {
       flexDirection: 'row',
       backgroundColor: 'rgba(255, 255, 255, 0.1)',
       borderRadius: 8,
       padding: 15,
       marginBottom: 10,
       alignItems: 'center',
     },
     personImageContainer: {
       width: 60,
       height: 60,
       borderRadius: 30,
       overflow: 'hidden',
       marginRight: 15,
       backgroundColor: '#4fc3f7',
     },
     personImage: {
       width: '100%',
       height: '100%',
     },
     personInfo: {
       flex: 1,
     },
     personName: {
       color: '#fff',
       fontSize: 18,
       fontWeight: 'bold',
       marginBottom: 5,
     },
     personPosition: {
       color: '#ddd',
       fontSize: 14,
     },
     facilitiesTitle: {
       fontSize: 20,
       fontWeight: 'bold',
       color: '#EDEADE',
       marginTop: 5,
       marginBottom: 10,
     },
     facilitiesList: {
       backgroundColor: 'rgba(255, 255, 255, 0.1)',
       borderRadius: 8,
       padding: 10,
     },
     facilityItem: {
       marginBottom: 12,
     },
     facilityName: {
       color: '#009688',
       fontSize: 16,
       fontWeight: 'bold',
     },
     facilityDetails: {
       color: '#ddd',
       fontSize: 14,
       marginLeft: 15,
     },
     boldText: {
       fontWeight: 'bold',
       color: '#fff',  // Slightly brighter color for emphasis
     }
  });

  export default CanteenBuildingScreen;