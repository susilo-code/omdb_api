from airflow import DAG
from airflow.providers.standard.operators.python import PythonOperator
from datetime import datetime

def hello_world():
    print("Hello Airflow!")

with DAG(
    "hello_airflow",
    start_date=datetime(2025, 1, 1),
    schedule="@daily",
    catchup=False
) as dag:
    task = PythonOperator(
        task_id="say_hello",
        python_callable=hello_world
    )