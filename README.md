# Instructions

1. Download zip file and unpack or clone the project with: 
   $ git clone https://github.com/Tech-93/wolt-frontend-carousel
   
2. install with terminal command in root directory of the project:
   $ npm install
   
3. Start local server from root directory of the project with terminal command:
   $ npx json-server --port 3001 --watch discovery_page.json
   
   
4. Open new terminal window and navigate to root directory of project and start app with terminal command:
   $ npm start
   
   
# Additional notes

The tools I used for makeing the carousel made it difficult, and beyond my current knowledge, to make an elastic carousel
that adjusts the number of objects in carousel according to page size. I tried using a tool called react-elastic-carousel,
but it's shortcoming was not being able to spin the carousel infinitely as required by the assignment. 

Therefore the current carousel does spin infinitely as required by the assignment, but any changes in the page size will 
result in visually compressing the objects, making them stack ontop of each other. 

With more time I could learn how to either create a carousel tool myself, or make appropriate changes to the carousel 
tools already created and used in this project.
