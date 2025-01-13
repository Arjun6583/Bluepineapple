#import mysql.connector
import operation, connection
try:
  connection = connection.connect_to_database()
  cursor = connection.cursor()
  #operation.insert_record(cursor, connection)
  while True:
    flag = False 
    print("--------------------------")
    print("\n1: Insert\n2: Delete\n3: Update\n4: Display\n5: Exit")
    choice = int(input("Enter the Choice ==> "))
    print("--------------------------")
    match choice:
      case 1:
        operation.insert_record(cursor, connection)
      case 2:
        operation.delete(cursor, connection)
      case 3:
        operation.update(cursor, connection)
      case 4:
        operation.display(cursor)
      case 5:
        flag = True
      case _:
        print("\nEnter the valid Choice...\n")
    print("--------------------------")
    if flag:
      print("Thanks...")
      break
except Exception as e:
  print("Undefined error...")