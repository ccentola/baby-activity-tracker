from .database import Base
from sqlalchemy import Column, Integer, String, DateTime
from sqlalchemy.sql import func


class Food(Base):
    __tablename__ = "food"

    activity_id = Column(Integer, primary_key=True, nullable=False)
    feeding_type = Column(String, nullable=False)
    amount = Column(String, nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())
