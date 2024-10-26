from sqlalchemy import select
from flask import Flask, render_template, request, redirect, flash, url_for
from flask_login import current_user, login_required, LoginManager, login_user
from .. import app
from ..db import Session, User
from ..forms import FormulaForm


@app.get("/formula")
@login_required
def formula():
    form = FormulaForm()
    return render_template('formula_template.html', form=form)

@app.post("/formula")
def formula_post():
    form = FormulaForm()
 
    if form.validate_on_submit():
        pd = form.power_draw.data
        capacity = form.capacity.data
        voltage = form.voltage.data
        w_capacity = capacity * voltage
        if form.devices.data[0] == 'option4':
            time = w_capacity/pd
        elif form.devices.data[0] == 'option1':
            time = w_capacity/60
        elif form.devices.data[0] == 'option2':
            time = w_capacity/15
        else:
            time = w_capacity/50
        hrs = int(time)
        mins = int(((time-int(time))*60))
        flash(f"The product will work for approximately {hrs} hours and {mins} minutes")
        return redirect(url_for('formula'))
        
    return render_template('formula_template.html', form=form)