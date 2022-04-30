from azure.data.tables import TableServiceClient
from dotenv import load_dotenv
import os
load_dotenv()

AZURE_TABLE_CONN = os.getenv('AZURE_TABLE_CONN')
table_service_client = TableServiceClient.from_connection_string(AZURE_TABLE_CONN)
table_client = table_service_client.get_table_client(table_name='fortuneStick')

if __name__ == '__main__':
    table_client