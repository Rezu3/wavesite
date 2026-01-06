from flask import Flask, render_template, request, redirect, session
import sqlite3
import os

app = Flask(__name__)
app.secret_key = "secret123"   # session এর জন্য (পরে বদলাতে পারবেন)

# ------------------------
# Database configuration
# ------------------------
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DB_PATH = os.path.join(BASE_DIR, "database.db")

def get_db_connection():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn

# ------------------------
# Login Page
# ------------------------
@app.route("/", methods=["GET", "POST"])
def login():
    error = None

    if request.method == "POST":
        username = request.form["username"]
        password = request.form["password"]

        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute(
            "SELECT * FROM users WHERE username=? AND password=?",
            (username, password)
        )
        user = cursor.fetchone()
        conn.close()

        if user:
            session["user"] = username
            return redirect("/home")
        else:
            error = "Invalid Username or Password"

    return render_template("login.html", error=error)

# ------------------------
# Signup Page
# ------------------------
@app.route("/signup", methods=["GET", "POST"])
def signup():
    error = None

    if request.method == "POST":
        username = request.form["username"]
        password = request.form["password"]

        conn = get_db_connection()
        cursor = conn.cursor()

        try:
            cursor.execute(
                "INSERT INTO users (username, password) VALUES (?, ?)",
                (username, password)
            )
            conn.commit()
            conn.close()
            return redirect("/")
        except sqlite3.IntegrityError:
            error = "Username already exists"
            conn.close()

    return render_template("signup.html", error=error)

# ------------------------
# Home Page
# ------------------------
@app.route("/home")
def home():
    if "user" not in session:
        return redirect("/")

    return render_template("home.html", title="Home")

# ------------------------
# Logout
# ------------------------
@app.route("/logout")
def logout():
    session.clear()
    return redirect("/")

# ------------------------
# Quiz Page
# ------------------------
@app.route("/quiz")
def quiz():
    if "user" not in session:
        return redirect("/")
    return render_template("quiz.html")

# ------------------------
# Subject Page
# ------------------------
@app.route("/subject")
def subject():
    if "user" not in session:
        return redirect("/")
    return render_template("subject.html")

# ------------------------
# Result Page
# ------------------------
@app.route("/result")
def result():
    if "user" not in session:
        return redirect("/")
    return render_template("result.html")
# ------------------------
# Exam page
# ------------------------
@app.route("/exam")
def exam():
    if "user" not in session:
        return redirect("/")
    return render_template("exam.html")


if __name__ == "__main__":
    app.run(debug=True)


