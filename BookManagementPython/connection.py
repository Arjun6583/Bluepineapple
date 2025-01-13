import mysql.connector

def connect_to_database():
   try:
    mydb = mysql.connector.connect(host="localhost",user="root",password="root", database = "mydb")
    return mydb
   except Exception as e:
     print("Exception occures...")
     