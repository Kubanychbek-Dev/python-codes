export const codeLists = [
  {
    codeName: "Разбиение числа на цифры",
    codeSelf: `
    nums = 123
    c = nums % 10
    nums = nums // 10
    b = nums % 10
    nums = nums // 10
    a = nums % 10
    
    print(a, b, c)
    `
  },
  {
    codeName: "Заменить слово на кортеже",
    codeSelf: `
    У вас есть кортеж из следующих жанров кино:
    cinema_genres = ("Комедия", "Экшн", "Пеплум", "Триллер")
    Вам необходимо:
    заменить жанр Экшн на Боевик
    добавить жанр по вашему выбору между жанрами боевик, и
     пеплум (я выбрал Фэнтези) вы можете выбрать что хотите.
    Результат вывести в консоль
    
    cinema_genres = ("Комедия", "Экшн", "Пеплум", "Триллер")
   updated_cinema_genres = cinema_genres[:1] + ("Боевик",) + ("Фэнтези",) + cinema_genres[2:]
    print(updated_cinema_genres)
    # ('Комедия', 'Боевик', 'Фэнтези', 'Пеплум', 'Триллер')`
  },
  {
    codeName: "Write data to txt file",
    codeSelf: `
    def write_data(data):
        get_data = data.split(",")
        with open(path_to_test_file_1, "w", encoding="utf-8") as file:
             for text in get_data:
                 file.write(f"{text}\n")
        print("Данные записаны")
    
     my_text = "Если б мишки были пчелами,То они бы нипочем,Никогда и не подумали,Так высоко строить дом."
     write_data(my_text)
     `
  },
  {
    codeName: "Read data from txt file",
    codeSelf: `
    def read_data():
        with open(path_to_test_file_1, "r", encoding="utf-8") as file:
             content = file.readlines()
             for text in content:
                 print(text.rstrip())
            
     read_data()
     `
  },
  {
    codeName: "Create and delete directory",
    codeSelf: `
    """Написать код для создания и для удаления папки внутри
       папки data_path_2"""
       base_dir = "."
data_path_2_dir = r"data_path_2"
new_dir = r"new_dir"

add_new_dir = os.path.join(base_dir, data_path_2_dir, new_dir)

if os.path.exists(add_new_dir) is False:
    os.mkdir(add_new_dir)
    print(f"The directory '{new_dir}' created")
else:
    print("That directory already exists")
    print(add_new_dir)
print()

"""удаления папки внутри
папки data_path_2"""
if os.path.exists(add_new_dir) is True:
    os.rmdir(add_new_dir)
    print(f"That directory '{new_dir}' deleted")
else:
    print("That directory doesn't exist")
    `
  },
  {
    codeName: "Craete dictionary from two lists",
    codeSelf: `
              anim1 = ["cat", "dog", "bird", "lizard"]
              anim2 = ["кот", "собака", "птица", "ящерица"]

              m = dict(zip(anim1, anim2))
  `
  },
  {
    codeName: "Save dict to JSON file",
    codeSelf: `
    my_dict = {
    "key": "value"
}

with open("test.json", encoding="utf-8") as file:
    data = json.load(file)


with open("test.json", "w", encoding="utf-8") as file_2:
    data.append(my_dict)
    json.dump(data, file_2, indent=4)
    `
  }
 ]
