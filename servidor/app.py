from flask import Flask, jsonify, request,json
import pymysql.cursors
from datetime import datetime
from flask_cors import CORS
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager
from flask_jwt_extended import create_access_token

app = Flask(__name__)

app.secret_key = "sk"

app.config['JWTManager'] = 'Secret'

bcrypt = Bcrypt(app)
jwt = JWTManager(app)
CORS(app)

@app.route('/users/register/',methods = ['POST'])
def register():

    
    pnombre = request.get_json()['perNombre']
    papellidos = request.get_json()['perApellido']
    ptelefonofijo = request.get_json()['perTelefonoFijo']
    pfechadenacimiento = request.get_json()['perFechaDeNacimiento']
    pcedula = request.get_json()['perCedula']
    

    conn = pymysql.connect(
    host="localhost", port=3306, user="root",
    passwd="", db="telefonia2")
    cursor = conn.cursor()
    cursor.execute("INSERT INTO persona VALUES (%s,%s,%s,%s,%s)", (pnombre,papellidos,ptelefonofijo,pfechadenacimiento,pcedula))
    conn.commit()
    conn.close()

    result = {
        
        'perNombre' : pnombre,
        'perApellido' : papellidos,
        'perTelefonoFijo' : ptelefonofijo,
        'perFechaDeNacimiento' : pfechadenacimiento,
        'perCedula': pcedula
    }

    

    return jsonify({'result': result})


@app.route('/users/register/',methods = ['POST'])
def register2():

    
    lineanumero = request.get_json()['linumerolinea']
    cedula = request.get_json()['perCedula']
    estado = request.get_json()['linestado']
    

    conn = pymysql.connect(
    host="localhost", port=3306, user="root",
    passwd="", db="telefonia2")
    cursor = conn.cursor()
    cursor.execute("INSERT INTO linea VALUES (%s,%s,%s)", (lineanumero,cedula,estado))
    conn.commit()
    conn.close()

    result = {
        
        'linumerolinea' : lineanumero,
        'perCedula' : cedula,
        'linestado' : estado,
        
    }

    

    return jsonify({'result': result})





@app.route('/users/register/',methods = ['POST'])
def register4():

    
    equipoSerial = request.get_json()['equSerial']
    lineaNumero = request.get_json()['liNumeroLinea']
    marcaEquipo = request.get_json()['equMarca']
    descripcionEquipo = request.get_json()['equDescripcion']
    estadoEquipo = request.get_json()['equEstado']
    

    conn = pymysql.connect(
    host="localhost", port=3306, user="root",
    passwd="", db="telefonia2")
    cursor = conn.cursor()
    cursor.execute("INSERT INTO equipo VALUES (%s,%s,%s,%s,%s)", (estadoEquipo,lineaNumero,marcaEquipo,descripcionEquipo,estadoEquipo))
    conn.commit()
    conn.close()

    result = {
        
        'equSerial' : equipoSerial,
        'liNumeroLinea' : lineaNumero,
        'equMarca' : marcaEquipo,
        'equDescripcion' : descripcionEquipo,
        'equEstado' : estadoEquipo
        
        
    }

    

    return jsonify({'result': result})






if __name__ == '__main__':
   app.run(debug = True)


