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
  },
  {
    codeName: "Parent class and heir class",
    codeSelf: `
    class Teacher:
     def __init__(self, name, education, experience):
        self.__name = name
        self.__education = education
        self.__experience = experience

     def get_name(self):
        return self.__name

     def get_education(self):
        return self.__education

     def get_experience(self):
        return self.__experience

     def set_experience(self, exp):
        self.__experience = exp

     #methods
     def get_teacher_data(self):
        return (f"{self.__name}, образование {self.__education}, "
                f"опыт работы {self.__experience} года")

     def add_mark(self, student, grade):
        return f"{self.__name} поставил оценку {grade} студенту {student}"

     def remove_mark(self, student, grade):
        return f"{self.__name} удалил оценку {grade} студенту {student}"

     def give_a_consultation(self, classname):
        return f"{self.__name} провел консультацию в классе {classname}"


#Heir class
class DisciplineTeacher(Teacher):
    def __init__(self, name, education, experience, discipline, job_title):
        super().__init__(name, education, experience)
        self.__discipline = discipline
        self.__job_title = job_title

    def get_discipline(self):
        return self.__discipline

    def get_job_title(self):
        return self.__job_title

    #methods
    def get_teacher_data(self):
        return f"{super().get_teacher_data()}\nПредмет: {self.__discipline}, должность: {self.__job_title}"

    def add_mark(self, student, grade):
        return f"{super().add_mark(student, grade)}.\nПредмет: {self.__discipline}"

    def remove_mark(self, student, grade):
        return f"{super().remove_mark(student, grade)}.\nПредмет: {self.__discipline}"

    def give_a_consultation(self, cls):
        return (f"{super().give_a_consultation(cls)}.\nПо предмету"
                f" {self.__discipline} как {self.__job_title}")


#object
dis = DisciplineTeacher("Эйбел Херциг", "Стэнфордский университет", 4,
                        "Python", "Директор вышки")

dis.set_experience(8)
print(dis.get_teacher_data())
print()
print(dis.add_mark("Лукас", 5))
print()
print(dis.remove_mark("Jonh", 3))
print()
print(dis.give_a_consultation("KC-15"))
     `
  }
 ]
