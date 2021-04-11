from flask import Flask, flash, redirect, render_template, request
import sqlite3

# Configure application
app = Flask(__name__)

# Connect to SQLite database

# Define index route
@app.route("/", methods=["POST", "GET"])
def index():
    connection = sqlite3.connect('data.db')
    db = connection.cursor()

    if request.method == "POST":
        brand = request.form.get("brand")
        db.execute("SELECT * FROM brands WHERE name = ?", brand)
        return render_template("brand_data.html")

    else:
        db.execute("SELECT name FROM brands")
        brands = db.fetchall()
        return render_template("index.html", brands=brands)


