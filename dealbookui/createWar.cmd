##@ng build --prod  --base-href=/dealapp
cd ./dist/dealBook-app
jar -cvf dealapp.war ./*
copy /B dealapp.war "../../dealapp.war"