from typing import Optional

# Пример базы данных сообщений
messages = []

def load():
    # Возвращаем последние сообщения
    return {"messages": messages[-10:]}  # последние 10 сообщений

def send(message: str):
    # Добавляем сообщение в список
    messages.append({"user": "user", "text": message})
    return {"status": "success", "message": "Message sent"}

def handle_action(act: str, var1: Optional[str] = None, var2: Optional[str] = None):
    if act == "load":
        return load()
    elif act == "send" and var1:
        return send(var1)
    else:
        return {"status": "error", "message": "Invalid action"}
