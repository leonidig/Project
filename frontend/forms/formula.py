from flask_wtf import FlaskForm
from wtforms import (
    EmailField,
    StringField,
    PasswordField,
    SubmitField,
    FloatField,
    SelectMultipleField
    
    
)
from wtforms.validators import (
    DataRequired,
    Email,
    ValidationError
)


class FormulaForm(FlaskForm):
    capacity = FloatField("Enter the Capacity in Ah: ", validators=[DataRequired()], render_kw={'type': 'number', 'step': 'any'})
    voltage = FloatField("Enter the Voltage in V: ", validators=[DataRequired()], render_kw={'type': 'number', 'step': 'any'})
    devices = SelectMultipleField(
        'Choose a device that will be powered', 
        choices=[
            ('option1', 'Average light bulb'),
            ('option2', 'Average Wifi Router'),
            ('option3', 'Average Fan'),
            ('option4', 'Custom')
        ],
        validators=[DataRequired()]
    )
    power_draw = FloatField("How much power does the device draw in W(fill out only if 'Custom' is selected): ", render_kw={'type': 'number', 'step': 'any'}, default=0.0)
    
    submit = SubmitField("Convert")