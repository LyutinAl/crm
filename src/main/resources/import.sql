INSERT INTO priority (name, color) VALUES ('Низкий','#b71c1c'), ('Ниже среднего', '#827717'), ('Средний', '#ef6c00'), ('Выше среднего', '#c6ff00'), ('Высокий', '#64dd17');

INSERT INTO service (name, price, description) VALUES ('Диагностика', 0, 'в случае ремонта в нашем сервис центре'), ('Разборка/сборка ', 1000, 'в случае Вашего отказа от ремонта, необходимо оплатить разборку/сборку устройства'), ('Комплексная установка Windows', 2000, 'с драйверами и ПО. БЕЗ сохранения данных'), ('Комплексная установка Windows с сохранением информации', 2500, 'с драйверами и ПО. С сохранением данных'), ('Восстановление Windows', 1800, 'без потерь данных, если это возможно'), ('Установка Windows ', 1500, 'с драйверами'), ('Профилактика (Чистка системы охлаждения)',1500, 'без термопрокладок'), ('Профилактика (Чистка системы охлаждения)', 2500, 'с термопрокладками'), ('Чистка видеокарты от пыли (с полным разбором)', 1000, null), ('Замена\установка комплектующих', 500, 'ODD, HDD, DDR и прочее.'), ('Замена\установка мат.платы, процессора, БП', 2000, null), ('Замена Дисплея', 1500, 'матрица не входит в стоимость'), ('Замена инвертора матрицы', 3500, 'инвертор входит в стоимость'), ('Замена шлейфа матрицы', 1500, 'шлейф не входит в стоимость'), ('Замена клавиатуры на ноутбуке', 1500, 'клавиатура не входит в стоимость'), ('Ремонт цепей питания', 2500, 'все комплектующие входят в стоимость (цена зависит от стоимости комплектующих)'), ('Замена южного моста', 4000, 'чип входит в стоимость (цена зависит от стоимости комплектующих)'), ('Замена северного моста', 4000, 'чип входит в стоимость (цена зависит от стоимости комплектующих)'), ('Замена видеочипа ноутбука', 4300, 'чип входит в стоимость (цена зависит от стоимости комплектующих)'), ('Замена USB разъема, замена разъема питания, замена аудио-разъема, замена разъема LAN', 1500, 'каждый дополнительный разъем 500р.'), ('Замена вентилятора (кулера)', 1500, 'детали не входят в стоимость'), ('Замена системы охлаждения', 1700,'детали не входят в стоимость'), ('Замена крышки матрицы', 1000, 'корпусные части не входят в стоимость'), ('Замена рамки матрицы', 500, 'рамка не входит в стоимость'), ('Замена нижней части ноутбука', 2000, 'корпусные части не входят в стоимость'), ('Замена петель крепления матрицы', 1500, 'петли не входят в стоимость'), ('Ремонт материнской платы (замена прочих контроллеров)', 2500, 'детали входят в стоимость (цена зависит от стоимости комплектующих)'), ('Ремонт материнской платы (сложно диагностируемые неисправности)', 4000, 'детали входят в стоимость (цена зависит от стоимости комплектующих)'), ('Ремонт материнской платы (после залития)', 2700, 'детали входят в стоимость (цена зависит от стоимости комплектующих)'), ('Сброс забытых паролей', 500, 'без разбора'), ('Сброс забытых паролей', 1500, 'с разбором'), ('Перепрошивка BIOS Без выпайки чипа', 1500, null), ('Перепрошивка BIOS с выпаиванием чипа', 2500, null), ('Пайка BGA чипа', 3500, 'чип не входит в стоимость'), ('Ремонт корпуса', 1500, null), ('Разбор\сбор техники', 500, null), ('Чистка от вирусов', 1000, null), ('Удаление банеров (winlock) + экспресс проверка на вирусы', 700, null), ('Установка\настройка антивируса и обновление баз', 400, 'лицензия покупается отдельно'), ('Поиск\скачка\установка драйвера', 300, 'за 1 драйвер'), ('Оптимизация быстродействия работы Системы \ Правка реестра', 500, null), ('Настройка BIOS', 500, null), ('Настройка роутеров, маршрутизаторов (с выездом)', 1500, 'шифрование WI-FI включено в стоимость'), ('Настройка роутеров, маршрутизаторов (в офисе)', 700, 'шифрование WI-FI включено в стоимость'), ('Подключение дополнительного Компьютера\ноутбука', 200, null), ('Пайка одного элемента', 200, null), ('Восстановление данных', 1000, 'за 30 Гб, при больших объемах цена договор.'), ('Перенос информации с разных носителей', 300, 'за 10 Гб'), ('Сборка компьютера', 0, 'при покупке у нас комплектующих'), ('Сборка компьютера', 1500, 'со своими комплектующими');

INSERT INTO status (name, color) VALUES ('Принят', '#bbdefb'), ('Диагностика', '#1565c0'), ('Ожидание запчастей', '#26c6da'), ('В работе', '#004d40'), ('Готово', '#2e7d32');

INSERT INTO customers (email, name, phone) VALUES ('client1@example.com', 'Иван Иванов', '+7 (123) 456-7890'), ('client2@example.com', 'Мария Петрова', '+7 (234) 567-8901'), ('client3@example.com', 'Александр Сидоров', '+7 (345) 678-9012'), ('client4@example.com', 'Елена Козлова', '+7 (456) 789-0123'), ('client5@example.com', 'Дмитрий Лебедев', '+7 (567) 890-1234'), ('client6@example.com', 'Анна Смирнова', '+7 (678) 901-2345'), ('client7@example.com', 'Павел Волков', '+7 (789) 012-3456'), ('client8@example.com', 'Ольга Морозова', '+7 (890) 123-4567'), ('client9@example.com', 'Сергей Игнатьев', '+7 (901) 234-5678'), ('client10@example.com', 'Екатерина Антонова', '+7 (012) 345-6789');
