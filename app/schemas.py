from pydantic import BaseModel


class FoodBase(BaseModel):
    feeding_type: str
    amount: int


class FoodCreate(FoodBase):
    pass
