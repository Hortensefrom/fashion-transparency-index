from flask import Flask, flash, redirect, render_template, request, g
import sqlite3

# Configure application
app = Flask(__name__)

#Configure database

def execute_query(query, *args):
    db = sqlite3.connect('data.db')
    db.row_factory = sqlite3.Row
    cur = db.cursor()
    cur.execute(query, args)
    result = cur.fetchall()
    cur.close()
    return result

# Index route
@app.route('/')
def index():
        result = execute_query('SELECT name FROM brands')
        return render_template('index.html', brands=result)



@app.route('/brand_data', methods=['POST', 'GET'])
def brand_data():
    if request.method == 'POST':
        brand_name = request.form.get('brand_name')
        result = execute_query('SELECT * FROM brands WHERE name = ?', brand_name)
        return render_template('brand_data.html', result=result)