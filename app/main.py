from fastapi import FastAPI, Request
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel
#from chatbot import get_bot_response  # Импортируем функцию из chatbot.py

app = FastAPI()

app.mount("/static", StaticFiles(directory="static"), name="static")

templates = Jinja2Templates(directory="templates")

class Message(BaseModel):
    message: str

@app.get("/chat")
async def chat_page(request: Request):
    return templates.TemplateResponse("chat.html", {"request": request})

@app.post("/chat")
async def chat_endpoint(msg: Message):
    user_message = msg.message
    # Генерация ответа с помощью функции из chatbot.py
    response = get_bot_response(user_message)
    return {"response": response}  # Возвращаем сгенерированный ответ
