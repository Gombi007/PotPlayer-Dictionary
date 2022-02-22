# PotPlayer-Dictionary
### You can translate and save  a word from subtitle via Potplayer  (English -> Hungarian)



#### Features

- Translate and save a word in the database
- Search a word in the database 
- ~~Export your set a csv file or just copy to clipboard (easy import your learning app for example Quizlet)~~ 
- ~~Save a word via user interface not only in the Potplayer~~
- ~~List your sets and modify them~~
- ~~Mark the studied words on the list~~ 



#### Installation Requirements 

- Potplayer (This is a desktop video player) from https://potplayer.daum.net/
- Docker (This is a container application) from https://www.docker.com/



#### How to use

1. Install the Potplayer  and the Docker app to your computer and **start** these two applications

2. Download this repository to your computer and navigate **in** the "player-dictionary-app" folder via CMD or PowerShell

3. Run the "docker-compose up" command **in** the "player-dictionary-app" folder via CMD or PowerShell and please wait until the                                    "Started PotplayerApplication" showing

4. In the Potplayer application please start a movie or video and add to this an English subtitle

5. Please pause the movie or video where the subtitle is showing and click a word with right mouse button and select the "customize" label

   

<p align="center">
 <img src="https://github.com/Gombi007/PotPlayer-Dictionary/blob/main/player-dictionary-app/pics/potplayer03.jpg?raw=true" alt="Potplayer 01"/>
</p>



6. Please click the **ADD** button
<p align="center">
 <img src="https://github.com/Gombi007/PotPlayer-Dictionary/blob/main/player-dictionary-app/pics/potplayer02.jpg?raw=true" alt="Potplayer 02"/>
</p>



7. Add a title "Dictionary" and a path **http://localhost:8080/#/player?title=BigBangTheory&word=%%SS** and click the **OK** button 								After this step please move this registry to the  top of the table using the "**UP**" button as in the picture above																	You can modify the **"BigBangTheory"** part! This will be the title of your set. It can be anything

<p align="center">
    <img src="https://github.com/Gombi007/PotPlayer-Dictionary/blob/main/player-dictionary-app/pics/potplayer04.jpg?raw=true" alt="Potplayer 03"/>
</p>

   

8. After these steps please click the **OK** button and click a word on the subtitle.

  <p align="center">
 <img src="https://github.com/Gombi007/PotPlayer-Dictionary/blob/main/player-dictionary-app/pics/potplayer01.jpg?raw=true" alt="Potplayer 04"/>
</p>



9. You can see that your browser will open and you can see something same as the picture below, this was the last step													 After this you can click whichever word on the subtitle. That will be translated and saved automatically in your set.															 This set name will be the "title" in the path what you setup above

 <p align="center">
    <img src="https://github.com/Gombi007/PotPlayer-Dictionary/blob/main/player-dictionary-app/pics/app01.JPG?raw=true" alt="Potplayer 05"/>
 </p>

   

#### Used Technologies

- Java 11
- Springboot
- SQL (postgreSQL)
- Typescript
- Angular
- Docker
- LibreTranslate (free translate API) https://libretranslate.com/





#### 
