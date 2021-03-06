# HackTheNorth2020

What Is GoosDaR?:

GoosDaR, as the name suggests, is a platform that allows users to view the dispersion and settings of geese in real-time. A drone that we developed uses a Detectron2 Faster-RCNN machine learning model to detect individual/flocks of geese and automatically takes a picture of them afterwards, which gets sent to our web application and updates it in a real-time environment. The mainpage on the web platform contains a LeafletJS map that plots the exact location of geese, which are all marked with their own icon. Each individual icon can be clicked to display an image of and more information about each goose/group of geese, including the date and location of the photo, as well as the number of geese detected in it. Users can also view a general gallery that displays the information of all of the drone’s recorded geese sightings, and they can filter the geese information by date.

How We Developed It:

Software: we built the frontend using React, LeafletJS for the map, and several styling components from MaterialUI, and the web application’s backend was developed with Python and Flask. We trained our geese-detection ML model using the Facebook Detectron2 API on Google Colab. Hardware: obviously, the main component of our hardware was the drone, which was built using many parts, including Arduino and Raspberry Pi boards.

Challenges:

This idea was pretty ambitious for us, as this was the first time we used hardware as a tech stack in a hackathon project, and we did not have much experience connecting it with applications and other software. We had two teammates working on the drone aspect of the project, and the other two developing the full-stack application. As most of us were working on and specialized in completely different things, it was a struggle making sense of the overall progress of the project and tying all of our parts together during the final hacking hours. Furthermore, this project was very difficult to test out, as we were only able to find flocks of geese in certain areas and times of the day, limiting our options. Each of us ran into our individual unexpected difficulties as well, including our drone not returning proper GPS data to the web application and several major bugs occurring between the frontend and backend connections. Despite all of these struggles we faced along the way, we were still able to successfully finish a full-blown prototype of our project.

Accomplishments:

As mentioned earlier, this project was an incredibly unique experience, as we had never merged our individual interests in hardware and software into one, meaning that being able to implement the majority of our wanted features and functionalities into this platform was no small feat. Furthermore, we were proud to be able to demonstrate an example of the limitless potential of drones, and we strongly believe that similar kinds of projects involving object detection and monitoring from the skies (e.g. monitoring agricultural fields) will be developed.

The Future of GoosDaR:

As future steps for our project, we would like to implement more dynamic features in our web application, such as providing a recommended walking route for people navigating around areas with high concentrations of geese. We would also like to optimize the connections between our drone and application, making the real-time environment more smooth and streamlined, and even make our own autonomous drone to monitor geese more easily and often.
