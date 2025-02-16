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
  },
  {
    codeName: "class Employer",
    codeSelf: `
    class Employer:
      def __init__(self, firstname, lastname, age):
          self.__firstname = firstname
          self.__lastname = lastname
          self.__age = age

      def __str__(self):
          return f"имя: {self.__firstname}\nфамилия: {self.__lastname}\nвозраст: {self.__age}"


 class President(Employer):
    def __init__(self, firstname, lastname, age, position):
        super().__init__(firstname, lastname, age)
        self.__position = position

    def __str__(self):
        return f"{super().__str__()}\nдолжность: {self.__position}"



 president = President("Садыр", "Жапаров", 50,
                      "Президент Кыргызской Республики")
 print(president)
 print()

 class Manager(Employer):
    def __init__(self, firstname, lastname, age, position):
        super().__init__(firstname, lastname, age)
        self.__position = position

    def __str__(self):
        return f"{super().__str__()}\nдолжность: {self.__position}"


 manager = Manager("Ти́моти (Тим)", "До́нальд Кук", 64,
                  "Генеральный директор компании Apple")
 print(manager)
 print()


class Worker(Employer):
    def __init__(self, firstname, lastname, age, position):
        super().__init__(firstname, lastname, age)
        self.__position = position

    def __str__(self):
        return f"{super().__str__()}\nдолжность: {self.__position}"


worker = Worker("John", "Doe", 34, "Строитель")
print(worker)
    `
  },
  {
    codeName: "class Compositions",
    codeSelf: `
    class Engine:
    def __init__(self, horse_power):
        self.__horse_power = horse_power

    def get_power(self):
        return self.__horse_power


class Wheel:
    def __init__(self, size):
        self.__size = size

    def get_size(self):
        return self.__size


class Door:
    def __init__(self, amount):
        self.__amount = amount

    def get__door(self):
        return self.__amount


class Car:
    def __init__(self, make, model, horse_power, wheel_size, door_amount):
        self.__make = make
        self.__model = model
        self.__horse_power = Engine(horse_power)
        self.__wheel_size = Wheel(wheel_size)
        self.__door_amount = Door(door_amount)

    def get_car(self):
        return (f"{self.__make} {self.__model}. Мощность двигателя: {self.__horse_power.get_power()} л/с."
                f" Размер колес: {self.__wheel_size.get_size()}. Количество дверей: {self.__door_amount.get__door()}.")


car1 = Car("Shevrolet", "Tahoe", 420, 22, 5)
print(car1.get_car())
print()

car2 = Car("Porsche", 918, 608, 20, 2)
print(car2.get_car())
    `
  },
  {
    codeName: "Multiple inheritance class and Composition class",
    codeSelf: `
         """Basic class"""
class PowerUnit:
    def __init__(self):
        super().__init__()
        self.__power = 60

    def submit_voltage(self):
        return f"Блок питания:\nподает напряжение {self.__power} ватт."


class MotherBoard:
    def __init__(self):
        super().__init__()
        self.__chipset = "Intel Z790"

    def redistribute_voltage(self):
        return f"Чипсет {self.__chipset}:\nперераспределить напряжение от БП по компонентам"


class CPU:
    def __init__(self):
        super().__init__()
        self.__clock_frequency = "4 ГГц"
        self.__cores = 6

    def turbo_mode(self):
        return (f"Центральный процессор:\n"
                f"Тактовая частота: {self.__clock_frequency}\nКоличество ядер: {self.__cores}\n"
                f"Активирует турбо режим")


class RAM:
    def __init__(self):
        super().__init__()
        self.__memory_capacity = "16 ГБ"
        self.__memory_frequency = "3200 МГц"

    def load_upload_data(self):
        return (f"Оперативная память:\n"
                f"Объем памяти: {self.__memory_capacity}\nЧастота памяти: {self.__memory_frequency}\n"
                f"Загружает данные, выгружает данные")


class SSD:
    def __init__(self):
        super().__init__()
        self.__volume = "512ГБ"

    def save_data(self):
        return (f"SSD:\nОбьем памяти: {self.__volume}\n"
                f"Сохраняет данные, удаляет данные")


class VideoCard:
    def __init__(self):
        self.__model = "GeForce RTX 4090"
        self.__volume = "2 GB"

    def display_image(self):
        return (f"Видеокарта:\nМодель видеокарты:{self.__model}\n"
                f"Объем памяти: {self.__volume}\n"
                f"вывести изображение на экран")


"""Composition"""
class Computer1:
    print("Этот 1-класс компьютер реализовано при помощи композиции")
    def __init__(self):
        self.__power = PowerUnit()
        self.__mother = MotherBoard()
        self.__cpu = CPU()
        self.__ram = RAM()
        self.__ssd = SSD()
        self.__video_card = VideoCard()

    def power(self):
        return self.__power.submit_voltage()

    def mother(self):
        return self.__mother.redistribute_voltage()

    def cpu(self):
        return self.__cpu.turbo_mode()

    def ram(self):
        return self.__ram.load_upload_data()

    def ssd(self):
        return self.__ssd.save_data()

    def video_card(self):
        return self.__video_card.display_image()


computer1 = Computer1()
print(computer1.power())
print()
print(computer1.mother())
print()
print(computer1.cpu())
print()
print(computer1.ram())
print()
print(computer1.ssd())
print()
print(computer1.video_card())
print("".center(200, "*"))
print()


"""Multiple inheritance"""
class Computer2(PowerUnit, MotherBoard, CPU, RAM, SSD, VideoCard):
    print("Этот 2-класс компьютер реализовано"
          " при помощи множественного наследования")

    # def power(self):
    #     return self.submit_voltage()
    #
    # def mother(self):
    #     return self.redistribute_voltage()
    #
    # def cpu(self):
    #     return self.turbo_mode()
    #
    # def ram(self):
    #     return self.load_upload_data()
    #
    # def ssd(self):
    #     return self.save_data()
    #
    # def video_card(self):
    #     return self.display_image()


computer2 = Computer2()
# print(computer2.power())
# print()
# print(computer2.mother())
# print()
# print(computer2.cpu())
# print()
# print(computer2.ram())
# print()
# print(computer2.ssd())
# print()
# print(computer2.video_card())

print(computer2.submit_voltage())
print()
print(computer2.redistribute_voltage())
print()
print(computer2.turbo_mode())
print()
print(computer2.load_upload_data())
print()
print(computer2.save_data())
print()
print(computer2.display_image())
    `
  },
  {
    codeName: "Создание стека с помощью списка",
    codeSelf: `
        class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


class Stack:
    def __init__(self):
        self.top = None

    def push(self, data):
        new_node = Node(data)
        new_node.next = self.top
        self.top = new_node

    def pop(self):
        if not self.is_empty():
            popped = self.top
            self.top = self.top.next
            popped.next = None
            return popped.data
        else:
            return "Stack is empty"

    def peek(self):
        if not self.is_empty():
            return self.top.data
        else:
            return "Stack is empty"

    def is_empty(self):
        return self.top is None

    def size(self):
        count = 0
        current = self.top
        while current:
            count += 1
            current = current.next
        return count
    `
  },
  {
    codeName: "Создание стека с помощью связанного списка (узел)",
    codeSelf: `
            class Node:
    """Конструктор для инициализации узла"""
    def __init__(self, data, next_node=None):
        self.data = data
        self.next_node = next_node


class Stack:
    """Конструктор для инициализации стека"""
    def __init__(self, stack_size=5, top=None):
        self.stack_size = stack_size
        self.top = top  # через топ обращаемся к атрибутам ноды

    def push(self, data):
        """Функция для добавления элемента в стек (на вершину стека)"""
        if self.size_stack() < self.stack_size:
            new_node = Node(data)
            new_node.next_node = self.top  # та вершина которая была
            self.top = new_node  # переназначаем вершину
        else:
            #print("Стэк переполнен")
            return "Стэк переполнен"

    def pop(self):
        """Функция для удаления верхнего элемента из стека"""
        if self.top:
            remove_last = self.top
            self.top = self.top.next_node
            return remove_last.data
        else:
            return "Стэк пуст"

    def is_empty(self):
        """Функция для проверки, есть ли в стеке элементы"""
        if self.top:
            return False
        else:
            return True

    def is_full(self):
        """Проверка на переполнение стека"""
        if self.stack_size == self.size_stack():
            return True
        else:
            return False

    def clear_stack(self):
        """Очистка стека"""
        while self.top:
              self.pop()
        return self.pop()

    def get_data(self, index):
        """Получает элемент из стека по переданному аргументу,
         кроме элемента с вершины стека"""
        counter = 0
        stack_item = self.top
        while stack_item:
            if counter == index:
                return stack_item.data
            stack_item = stack_item.next_node
            counter += 1
        return f"Out of range"

    def size_stack(self):
        """Возвращает размер стека (количество элементов в стеке)"""
        counter = 0
        stack_item = self.top
        while stack_item:
            counter += 1
            stack_item = stack_item.next_node
        return counter

    def counter_int(self):
        """Проверяем, есть ли элементы в стеке, являющимся экземпляроми класса int (numbers)"""
        counter = 0
        stack_item = self.top
        while stack_item:
            if isinstance(stack_item.data, int):
                counter += 1
            stack_item = stack_item.next_node
        return counter


# stack = Stack()
# stack.push(1)
# stack.push("sta")
# stack.push(2)
# stack.push(3)
# stack.push(3.88)
    `
  },
  {
    codeName: "Creating simple Queue using nodes",
    codeSelf: `
class Node:
    def __init__(self, data):
        self.data = data
        self.next_node = None


class Queue:
    def __init__(self):
        self.head = None
        self.tail = None

    def enqueue(self, data):
        new_node = Node(data)
        if self.head is None:
            self.head = new_node
        else:
            self.tail.next_node = new_node
        self.tail = new_node

    def dequeue(self):
        if self.head is None:
            return "Queue is empty"
        else:
            popped = self.head
            self.head = self.head.next_node
        return popped.data

    def size(self):
        count = 0
        while self.head:
            count += 1
            self.head = self.head.next_node
        return count

    def peek_first(self):
        if self.head is None:
            return "Queue is empty"
        else:
            return self.head.data

    def peek_middle(self):
        if self.head is None:
            return "Queue is empty"
        else:
            return self.head.next_node.data

    def peek_last(self):
        if self.head is None:
            return "Queue is empty"
        else:
            return self.tail.data


q = Queue()
q.enqueue(1)
q.enqueue("Hello")
q.enqueue(3)
q.enqueue(4)
q.enqueue(5)
print(q.peek_first())
print()
print(q.peek_middle())
print()
print(q.peek_last())
print()
print(q.size())
    `
  },
  {
    codeName: "LinkedList Encoder",
    codeSelf: `
                import json


class Node:
    def __init__(self, data, next_node=None, prev_node=None):
        self.data = data
        self.next_node = next_node
        self.prev_node = prev_node

    @staticmethod
    def class_to_dict(obj):
        return obj.__dict__


class LinkedList:

    def __init__(self):
        self.head = None
        self.tail = None

    def insert_at_head(self, data):
        new_node = Node(data)
        if self.head is None:
            self.tail = new_node
        else:
            new_node.next_node = self.head
            self.head.prev_node = new_node
        self.head = new_node

    def insert_at_tail(self, data):
        new_node = Node(data)
        if self.head is None:
            self.head = new_node
        else:
            self.tail.next_node = new_node
            new_node.prev_node = self.tail
        self.tail = new_node

    def to_list(self):
        list_data = []
        node = self.head
        while node is not None:
            list_data.append(node.data)
            node = node.next_node
        return list_data

    def print_ll_from_head(self):
        node = self.head
        while node is not None:
            print(node.data)
            node = node.next_node

    def print_ll_from_tail(self):
        node = self.tail
        while node is not None:
            print(node.data)
            node = node.prev_node


class MyLLDataEncoder(json.JSONEncoder):

    def default(self, o):
        return {
            'head': o.head.data,
            'tail': o.tail.data,
            'num_of_elements': len(o.to_list()),
            'ClassName': o.__class__.__name__,
            'data': o.to_list()
        }


cats_list = LinkedList()
cats_list.insert_at_head("Барсик_1")
cats_list.insert_at_head("Снежок_0")
cats_list.insert_at_tail("Персик_2")

json_cats_list = json.dumps(cats_list, cls=MyLLDataEncoder, ensure_ascii=False, indent=2)
print(json_cats_list)
python_cats_list = json.loads(json_cats_list)
print(python_cats_list)

with open(r'json_files\my_cat_ll_encode.json', 'w', encoding='utf-8') as fh:
    json.dump(cats_list, fh, cls=MyLLDataEncoder, ensure_ascii=False, indent=4)

with open(r'json_files\my_cat_ll_encode.json', 'r', encoding='utf-8') as fh:
    python_cat_from_file = json.load(fh)
print(python_cat_from_file
    `
  },
  {
    codeName: "class JSONDataAdapter",
    codeSelf: `
                import json


class Figure:

    def __init__(self, title, form, color):
        self.title = title
        self.form = form
        self.color = color

    def __str__(self):
        return f"Figure: {self.title}, {repr(self.form)}, {repr(self.color)}"


class Form:

    def __init__(self, name):
        self.name = name

    def __repr__(self):
        return f'<Form: {self.name}>'


class Color:

    def __init__(self, name):
        self.name = name

    def __repr__(self):
        return f'<Color: {self.name}>'


class JSONDataAdapter:
    @staticmethod
    def to_json(obj):
        if isinstance(obj, Figure):
            return json.dumps({
                'title': obj.title,
                'form': obj.form.name,
                'color': obj.color.name
            })

    @staticmethod
    def from_json(obj):
        obj = json.loads(obj)

        try:
            form = Form(obj["form"])
            color = Color(obj['color'])
            figure = Figure(obj["title"], form, color)
            return figure
        except AttributeError:
            print('Неверная структура')


black = Color("Black")
yellow = Color("Yellow")
green = Color("Green")

rounded = Form("Rounded")
squared = Form("Squared")

figure_one = Figure("Black Square", form=squared, color=black)
figure_two = Figure("Yellow Circle", form=rounded, color=yellow)

print(figure_one)
print(figure_two)
print()

json_square = JSONDataAdapter.to_json(figure_one)
json_circle = JSONDataAdapter.to_json(figure_two)

print(json_square)
print(json_circle)
print()

square_obj = JSONDataAdapter.from_json(json_square)
circle_obj = JSONDataAdapter.from_json(json_circle)

print(square_obj)
print(circle_obj)
    `
  },
  {
    codeName: "class Airplane: JSON Pickle",
    codeSelf: `
        import json
import pickle


class Airplane:

    def __init__(self, model: str, seats: int, _range: int):
        self.__model = model
        self.__seats = seats
        self.__range = _range

    def get_model(self):
        return self.__model

    def get_seats(self):
        return self.__seats

    def get_range(self):
        return self.__range

    def print_airplane_props(self):
        print(
            f"airplane model: {self.__model} has {self.__seats} available "
            f"seats and has {self.__range} km max distance flight"
        )


def pickle_object(obj, filename):
    with open(filename, 'wb') as file:
        pickle.dump(obj, file)


def unpikle_object(filename):
    with open(filename, 'rb') as file:
        return pickle.load(file)


class JSONDataAdapter:

    @staticmethod
    def to_json(obj):
        if isinstance(obj, Airplane):
            return json.dumps({
                'model': obj.get_model(),
                'seats': obj.get_seats(),
                'range': obj.get_range(),
                'class': obj.__class__.__name__,
                'methods': {
                    'get_model': obj.get_model(),
                    'get_seats': obj.get_seats(),
                    'get_range': obj.get_range(),
                    'print_airplane_props':
                        f'printed data:{[f'airplane model: {obj.get_model()} has {obj.get_seats()} available', 
                                                             f'seats and has {obj.get_range()} km max distance flight']} ',
                }
            }, ensure_ascii=False, indent=2)

    @staticmethod
    def from_json(obj):
        obj = json.loads(obj)

        try:
            model = obj['model']
            seats = obj['seats']
            _range = obj['range']
            plane = Airplane(model, int(seats), int(_range))
            return plane
        except AttributeError:
            print('Неверная структура!')


if __name__ == '__main__':
    plane = Airplane('Boeing 737-200', 110, 4000)
    plane_json = JSONDataAdapter.to_json(plane)
    print(plane_json)
    plane_obj = JSONDataAdapter.from_json(plane_json)
    plane_obj.print_airplane_props()
    `
  },
  {
    codeName: "Clear Stack",
    codeSelf: `
                                                              def pop(self):
        """Функция для удаления верхнего элемента из стека"""
        if self.top:
            remove_last = self.top
            self.top = self.top.next_node
            return remove_last.data
        else:
            return "Стэк пуст"

                                                            def clear_stack(self):
        """Очистка стека"""
        while self.top:
              self.pop()
        return self.pop()
    `
  },
  {
    codeName: "Clear Queue",
    codeSelf: `
                     def clear_queue(self):
        """Очистка очереди"""
        current = self.head
        while current:
            nxt = current.next_node
            self.head = None
            current = nxt
    `
  },
  {
    codeName: "Clear single linked list",
    codeSelf: `
                     def clear_all(self):
        """Делает очистку всего списка"""
        current = self.head
        while current:# Добавил этот метод, чтобы легче было тестировать
            next_n = current.next_node
            self.head = None
            current = next_n
        return "список очищен"
    `
  },
  {
    codeName: "code который рассчитывает финальную сумму заказа, учитывая размер налога.",
    codeSelf: `
                                                                         def get_order_total_sum(order_total, country):
    total = 0
    for items_price_quant in order_total.values():
        total += items_price_quant[0] * items_price_quant[1]
        print(items_price_quant)
        print(total)
    print(total)

    if get_tax_amount(country):
        print(get_tax_amount(country))
        total += total * get_tax_amount(country)
        print(total)
        return total
    else:
        return "Wrong country code"


def get_tax_amount(country):
    if country == "RU":
        return 0.2
    elif country == "KZ":
        return 0.12
    elif country == "UAE":
        return 0.05

order = {
    "Shevrolet": [100, 10],
    "Tesla": [250, 4],
    "BMW": [20, 50]
}

print(get_order_total_sum(order, "KZ")) # --> 3360.0
    `
  },
  {
    codeName: "Handler (Pattern project)":
    codeSelf:
    `
                                 from abc import ABC, abstractmethod


class Handler(ABC):
    @abstractmethod
    def handle_request(self, request):
        pass

                                                                      from handler import Handler


class Cleaner(Handler):
    def handle_request(self, request):
        if "Clean" in request:
            print("The cleaner is working")
        else:
            print("Cleaner out of work")
            super().handle_request(request)


class Programmer(Handler):
    def handle_request(self, request):
        if "Code" in request:
            print("Programmer writes code")
        else:
            print("Programmer out of work")
            super().handle_request(request)


class Builder(Handler):
    def handle_request(self, request):
        if "Build" in request:
            print("Builder is building")
        else:
            print("Builder out of work")
            super().handle_request(request)


class Chain:
    def __init__(self):
        self.handlers = []

    def add_handler(self, handler):
        self.handlers.append(handler)

    def handle_request(self, request):
        for handler in self.handlers:
            handler.handle_request(request)


if __name__ == "__main__":
    chain = Chain()
    chain.add_handler(Cleaner())
    chain.add_handler(Programmer())
    chain.add_handler(Builder())

    requests = ["Code", "list", "Build"]
    chain.handle_request(requests)
    `
  }
 ]
