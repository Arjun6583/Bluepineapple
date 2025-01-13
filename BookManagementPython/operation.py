def check_record(cursor, connection, author, book):
  sql = f"SELECT * FROM library where book_name = '{book}'"
  cursor.execute(sql)
  result = cursor.fetchall()
  if len(result)  == 0:
    return False 
  return True


def insert_record(cursor, connection) -> bool:
  try:
    author_name = input("Enter the Author name: ")
    book_name = input("Enter the book name: ")
    sql = "INSERT INTO library VALUES (%s, %s)"
    values = (author_name, book_name)
    cursor.execute(sql, values)
    connection.commit()
    print("--------------------------")
    print(f" Data Inserted.....")
  except Exception as e:
    print("--------------------------")
    print(f"Error get during insert....{e}")
    return False
  return True


def display(cursor):
  try:
    sql = "SELECT * FROM library"
    cursor.execute(sql)
    result = cursor.fetchall()
    books = set()
    print("--------------------------")
    print("\nAuthor Name\tBook Name\n")
    for row in result:
          print(f"{row[0]}\t\t{row[1]}\n")
          books.add(row[1])
    
    print("\nCopy of every Book..\n")
    print("--------------------------")
    print("\nBook\tCopy Count\n")
    for b in books:
      #print(type(b))
      sql = f"select count(*) from library where book_name = '{b}'"
      cursor.execute(sql)
      result = cursor.fetchall()
      val = [r[0] for r in result]
      print(f"{b}\t{val[0]}")
  except Exception as e:
    print("--------------------------")
    print(f"Error get during display....{e}")

def update(cursor, connection):
   try:
    author_name = input("Enter the Author name: ")
    book_name = input("Enter the book name: ")
    update_book_name = input("Enter the updated book name: ")
    if not check_record(cursor, connection, author_name, book_name):
      print("--------------------------")
      print("Record not found...")
      return
    sql = "UPDATE library SET book_name = %s WHERE author_name = %s and book_name = %s"
    values = (update_book_name, author_name, book_name)
    cursor.execute(sql, values)
    connection.commit()
    print("--------------------------")
    print(f" Data Update.....")
   except:
      print("--------------------------")
      print(f"Error get during update....{e}")


def delete(cursor, connection):
   try:
    author_name = input("Enter the Author name: ")
    book_name = input("Enter the book name: ")
    if not check_record(cursor, connection, author_name, book_name):
      print("--------------------------")
      print("Record not found...")
      return
    sql = "DELETE FROM library WHERE author_name = %s and book_name = %s"
    values = (author_name, book_name)
    cursor.execute(sql, values)
    connection.commit()
    print("--------------------------")
    print(f" Data Deleted.....")
   except:
      print("--------------------------")
      print(f"Error get during delete....{e}")

