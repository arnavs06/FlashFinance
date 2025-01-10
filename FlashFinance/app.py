from flask import Flask, render_template, send_from_directory

app = Flask(__name__)

@app.route('/')
def landing():
    return render_template('landing.html')

@app.route('/flashcards')
def flashcards():
    return render_template('flashcards.html')

@app.route('/data/flashcards.json')
def get_flashcards_data():
    return send_from_directory('static/json', 'flashcards.json')

@app.route('/test-css')
def test_css():
    return send_from_directory('static', 'landing.css')


if __name__ == '__main__':
    app.run(debug=True)