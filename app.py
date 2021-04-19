from flask import Flask, flash, redirect, render_template, request, g, json
import sqlite3

# Configure application
app = Flask(__name__)

# Query from db
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
        brand_data = {
            'name': result[0][1],
            'section_1': result[0][2],
            'section_2': result[0][3],
            'section_3': result[0][4],
            'section_4': result[0][5],
            'section_5': result[0][6],
            'final_scores': result[0][7]
        }
        brands = execute_query('SELECT name FROM brands')
        return render_template('brand_data.html', data=brand_data, brands=brands)
    


@app.route('/about')
def about():
    return render_template('about.html')