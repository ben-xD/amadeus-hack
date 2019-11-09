#!/usr/bin/env python
# coding: utf-8

# In[11]:


from pymongo import MongoClient
client = MongoClient()


# In[12]:


travel_db = client.travel


# In[19]:


questions = travel_db.questions
answers = travel_db.answers


# In[28]:


questions.delete_many({})
answers.delete_many({})


# In[29]:


q = [{"id":0,"content":"How many people are travelling?"},
            {"id":1,"content":"What is the purpose of your travel?"},
            {"id":2,"content":"Do you know where you want to go?"},
            {"id":3,"content":"What kind of advanture?"},
            {"id":4,"content":"What Landscape do you prefer?"},
            {"id":5,"content":"When do you want to go?"},
            {"id":6,"content":"What dates to you have?"},
            {"id":7,"content":"How long do you plan to be away?"},
            {"id":8,"content":"Do you want to do any activites?"},
            {"id":9,"content":"What is your budget?"},
            {"id":10,"content":"What quality do you expect?"},
            {"id":11,"content":"Any special requirements?"},
            {"id":12,"content":"Any specific preferences?"}]

a = [
         {"parent":0,"child":1,"type":"int","content":"Adults"},
         {"parent":0,"child":1,"type":"int","content":"Children"},
         {"parent":1,"child":2,"type":"None","content":"Leisure Travel"},
         {"parent":1,"child":6,"type":"None","content":"Planned Visit"},
         {"parent":1,"child":6,"type":"None","content":"Business Travel"},
         {"parent":2,"child":3,"type":"None","content":"No, I need inspiration"},
         {"parent":2,"child":3,"type":"None","content":"Yes"},
         {"parent":3,"child":4,"type":"None","content":"Holiday"},
         {"parent":3,"child":4,"type":"None","content":"Escape"},
         {"parent":4,"child":5,"type":"None","content":"City"},
         {"parent":4,"child":5,"type":"None","content":"Country Side"},
         {"parent":4,"child":5,"type":"None","content":"Mountains"},
         {"parent":4,"child":5,"type":"None","content":"Sea Side"},
         {"parent":5,"child":7,"type":"date","content":"Date"},
         {"parent":6,"child":7,"type":"dates","content":"Date"},
         {"parent":7,"child":8,"type":"date","content":"Date"},
         {"parent":8,"child":9,"type":"None","content":"Sports"},
         {"parent":8,"child":9,"type":"None","content":"Culture"},
         {"parent":8,"child":9,"type":"None","content":"Sightseeing"},
         {"parent":8,"child":9,"type":"None","content":"Food & Drink"},
         {"parent":9,"child":10,"type":"pounds","content":"Budget"},
         {"parent":10,"child":11,"type":"None","content":"Low"},
         {"parent":10,"child":11,"type":"None","content":"Mid"},
         {"parent":10,"child":11,"type":"None","content":"High"},
         {"parent":10,"child":11,"type":"None","content":"Premium"},
         {"parent":11,"child":12,"type":"bool","content":"Wheelchair"},
         {"parent":11,"child":12,"type":"bool","content":"Childcare"},
         {"parent":11,"child":12,"type":"bool","content":"No driving license"},
         {"parent":11,"child":12,"type":"bool","content":"WiFi"},
         {"parent":11,"child":12,"type":"bool","content":"TV"},
         {"parent":12,"child":13,"type":"None","type":"str","content":"Airline"},
         {"parent":12,"child":13,"type":"str","content":"Hotel Chain"},
         {"parent":12,"child":13,"type":"str","content":"Rental car Chain"}]


# In[30]:


questions.insert_many(q)
answers.insert_many(a)


# In[37]:


def get_next(idx):
    if idx == 13:
        return {}
    
    q = questions.find_one({"id":idx})
    a = answers.find({"parent":idx})
    
    return {"id":q["id"],"question":q["content"],"answers":[{"next":i["child"],"content":i["content"],"type":i["type"]} for i in a]}


# In[38]:


from flask import Flask, request
from flask_restful import Resource, Api
from flask import request
import json

app = Flask(__name__)
api = Api(app)


class Dialog(Resource):
    def get(self, id):
        return get_next(id)
    
    
class Suggestion(Resource):
    def post(self):
        data = json.loads(request.data)
        print(data)


api.add_resource(Dialog, '/<int:id>')
api.add_resource(Suggestion, '/')

if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0")


# In[ ]:




