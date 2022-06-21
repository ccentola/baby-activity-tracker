from fastapi import FastAPI, status, HTTPException, Response
from fastapi import Depends
from .models import Food
from .database import get_db
from .schemas import FoodCreate
from sqlalchemy.orm import Session
from fastapi.middleware.cors import CORSMiddleware

# TODO: decompose routes into separate files
# TODO: rebase to /activites instead of /food

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# get all food
@app.get("/food")
def get_foods(db: Session = Depends(get_db)):
    food = db.query(Food).all()
    return food


# get a single food activity
@app.get("/food/{id}")
def get_food(id: int, db: Session = Depends(get_db)):
    food = db.query(Food).filter(Food.activity_id == id).first()
    return food


# create a food event
@app.post("/food", status_code=status.HTTP_201_CREATED)
def add_food(food: FoodCreate, db: Session = Depends(get_db)):
    new_food = Food(**food.dict())

    db.add(new_food)
    db.commit()
    db.refresh(new_food)

    return new_food


# edit a food entry
@app.put("/food/{id}")
def edit_food(id: int, updated_food: FoodCreate, db: Session = Depends(get_db)):
    food_query = db.query(Food).filter(Food.activity_id == id)
    food = food_query.first()

    if food == None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail=f"food with id {id} not found"
        )

    food_query.update(updated_food.dict(), synchronize_session=False)
    db.commit()

    return food_query.first()


# delete a food entry
@app.delete("/food/{id}")
def delete_food(id: int, db: Session = Depends(get_db)):
    food_query = db.query(Food).filter(Food.activity_id == id)
    food = food_query.first()

    if food == None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail=f"food with id {id} not found"
        )

    food_query.delete(synchronize_session=False)
    db.commit()

    return Response(status_code=status.HTTP_204_NO_CONTENT)
