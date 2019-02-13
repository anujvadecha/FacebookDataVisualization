var express = require('express');
var app = express();
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = 'mongodb://localhost:27017';
//const mongoose=require('mongoose');
const path=require('path');//This is inbuilt

//Load View Engine
app.set('views',path.join(__dirname,'views'));
app.set('view engine','pug');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/',function(req,res){
res.render('search'); 

});
//rendering in index.pug
app.route('/random').get(function(req,res){
res.render('random'); 

});
global.dbName="";

app.post('/homepage',function(req,res,next)
{
  dbName = req.body.title;
  MongoClient.connect(url, function(err, client) {
    const db = client.db(dbName);
db.listCollections().toArray().then(function(items){

      // Return the information of a all collections, using the callback format
res.render('homepage',
{
coll:items
}); 
  
});  });});

app.get('/homepage',function(req,res,next)
{
  MongoClient.connect(url, function(err, client) {
    const db = client.db(dbName);
db.listCollections().toArray().then(function(items){

      // Return the information of a all collections, using the callback format
res.render('homepage',
{
coll:items
}); 
  
});  });});






app.route('/friends').get(function(req, res)

    {
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  
  const db=client.db(dbName);
  //const db = client.db(dbName);
  var cursor = db.collection('friends').find();
    cursor.each(function(err, doc) {

         if (doc != null) {
res.render('friends',
{
articles:doc
}); 
          
                }
               });
    });
});

app.route('/Event_info').get(function(req, res)

    {
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  
  const db=client.db(dbName);
  //const db = client.db(dbName);
  var cursor = db.collection('Event_info').find();
    cursor.each(function(err, doc) {

         if (doc != null) {
res.render('Event_info',
{
articles:doc
}); 
          
                }
               });
    });
});

app.route('/messages').get(function(req, res)

    {
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  
  const db=client.db(dbName);
  //const db = client.db(dbName);
  var cursor = db.collection('messages').find();
    cursor.each(function(err, doc) {

         if (doc != null) {
res.render('messages',
{
articles:doc
}); 
          
                }
               });
    });
});

app.route('/calls_and_messages').get(function(req, res)

    {
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  
  const db=client.db(dbName);
  //const db = client.db(dbName);
  var cursor = db.collection('calls_and_messages').find();
    cursor.each(function(err, doc) {

         if (doc != null) {
res.render('calls_and_messages',
{
articles:doc
}); 
          
                }
               });
    });
});

app.route('/likes_and_reactions').get(function(req, res)

    {
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  
  const db=client.db(dbName);
  //const db = client.db(dbName);
  var cursor = db.collection('likes_and_reactions').find();
    cursor.each(function(err, doc) {

         if (doc != null) {
res.render('likes_and_reactions',
{
articles:doc
}); 
          
                }
               });
    });
});
app.route('/comments').get(function(req, res)

    {
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);

  const db=client.db(dbName);
  //const db = client.db(dbName);
  var cursor = db.collection('comments').find();
    cursor.each(function(err, doc) {

         if (doc != null) {
res.render('comments',
{
articles:doc
});

                }
               });
    });
});
app.route('/search_history').get(function(req, res)

    {
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);

  const db=client.db(dbName);
  //const db = client.db(dbName);
  var cursor = db.collection('search_history').find();
    cursor.each(function(err, doc) {

         if (doc != null) {
res.render('search_history',
{
articles:doc
});

                }
               });
    });
});

app.route('/saved_items').get(function(req, res)

    {
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);

  const db=client.db(dbName);
  //const db = client.db(dbName);
  var cursor = db.collection('saved_items').find();
    cursor.each(function(err, doc) {

         if (doc != null) {
res.render('saved_items',
{
articles:doc
});

                }
               });
    });
});


app.route('/Profile_information').get(function(req, res)

    {
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);

  const db=client.db(dbName);
  //const db = client.db(dbName);
  var cursor = db.collection('Profile_information').find();
    cursor.each(function(err, doc) {

         if (doc != null) {
res.render('Profile_information',
{
articles:doc
});

                }
               });
    });
});
app.route('/security_and_login_info').get(function(req, res)

    {
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);

  const db=client.db(dbName);
  //const db = client.db(dbName);
  var cursor = db.collection('security_and_login_info').find();
    cursor.each(function(err, doc) {

         if (doc != null) {
res.render('security',
{
articles:doc
});


                }
               });
    });
});


app.route('/onetoone',function(req,res)
{
  MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  var name=req.body.onetoone;
  var arr=[];
  var arr2=[];
  var arr3=[];
  var arr4=[];
  var arr5=[];
  var arr6=[];
  var arr7=[];
  var arr8=[];
  var arr9=[];
  var arr10=[];
  var arr11=[];
  const name1=name.split(" ")
  const db=client.db(dbName);
  //const db = client.db(dbName);
  var cursor = db.collection('friends').find();
  var cursor2=db.collection('Contact_Information').find();
  var cursor3=db.collection('calls_and_messages').find();
  var cursor4=db.collection('search_history').find();
  var cursor5=db.collection('messages').find();
    cursor.each(function(err, doc) {
      cursor2.each(function(err,doc2){
        cursor3.each(function(err,doc3){
          cursor4.each(function(err,doc4){
            cursor5.each(function(err,doc5){
          
  try{
    for (let i=0;i<doc2.Contact_information.length;i++){
          var k=doc2.Contact_information[i][1].split(" ")
            if (k[0]==name1[0] || doc2.Contact_information[i][1]==name || k[0]==name1[0].toLowerCase() || doc2.Contact_information[i][1]==name.toLowerCase() ) {
                arr.push(doc2.Contact_information[i][1])
                arr2.push(doc2.Contact_information[i][2])
              }
        }

        for(let i=0;i<doc3.calls.length;i++){
         var k1=doc3.calls[i][1].split(" ")
         if (k1[0]==name1[0] || doc3.calls[i][1]==name || k1[0]==name1[0].toLowerCase() || doc3.calls[i][1]==name.toLowerCase()) {
                arr3.push(doc3.calls[i][1])
                arr4.push(doc3.calls[i][3])
                arr5.push(doc3.calls[i][5])
                arr6.push(doc3.calls[i][7])
                arr7.push(doc3.calls[i][9])
                arr8.push(doc3.calls[i][11])
                arr9.push(doc3.calls[i][13])
              } 
        }

        for(let i=0;i<doc3.messages_information_known.length;i++){
         var k2=doc3.messages_information_known[i][0].split(" ")
         if (k2[0]==name1[0] || doc3.messages_information_known[i][0]==name || k2[0]==name1[0].toLowerCase() || doc3.messages_information_known[i][0]==name.toLowerCase()  ) {
                arr10.push(doc3.messages_information_known[i][0])
                arr11.push(doc3.messages_information_known[i][1])
              } 
        }
        var count=0
        var count1=0
        var arr20=[]
        var arr21=[]
        for(let i=0;i<arr11[0].length;i++){
          if(arr11[0][i]["message_type"]=="INBOX")
            {count++}
          if(arr11[0][i]["message_type"]=="SENT")
            {count1++}
        }
        var type;
        var search=[];
        for (var key in doc4.my_friends_searched.counter_of_my_friends_searched) {
    // check if the property/key is defined in the object itself, not in parent
    if (doc4.my_friends_searched.counter_of_my_friends_searched.hasOwnProperty(key)) {   
      if(key==name)        {
        type="my friends searched";
        search.push(key, doc4.my_friends_searched.counter_of_my_friends_searched[key],type);
      }
    }
}
 for (var key in doc4.my_received_friend_searched1.counter_of_my_received_friends_searched) {
    // check if the property/key is defined in the object itself, not in parent
    if (doc4.my_received_friend_searched1.counter_of_my_received_friends_searched.hasOwnProperty(key)) {   
      if(key==name)        {
        type="my received friends searched";
        search.push(key, doc4.my_received_friend_searched1.counter_of_my_received_friends_searched[key],type);
      }
    }
}

for (var key in doc4.my_rejected_friend_searched1.counter_of_my_rejected_friends_searched) {
    // check if the property/key is defined in the object itself, not in parent
    if (doc4.my_rejected_friend_searched1.counter_of_my_rejected_friends_searched.hasOwnProperty(key)) {   
      if(key==name)        {
        type="my rejected friends searched";
        search.push(key, doc4.my_rejected_friend_searched1.counter_of_my_rejected_friends_searched[key],type);
      }
    }
}

for (var key in doc4.my_removed_friend_searched1.counter_of_my_removed_friends_searched) {
    // check if the property/key is defined in the object itself, not in parent
    if (doc4.my_removed_friend_searched1.counter_of_my_removed_friends_searched.hasOwnProperty(key)) {   
      if(key==name)        {
        type="my removed friends searched";
        search.push(key, doc4.my_removed_friend_searched1.counter_of_my_removed_friends_searched[key],type);
      }
    }
}


for (var key in doc4.my_sent_friend_searched1.counter_of_my_sent_friends_searched) {
    // check if the property/key is defined in the object itself, not in parent
    if (doc4.my_sent_friend_searched1.counter_of_my_sent_friends_searched.hasOwnProperty(key)) {   
      if(key==name)        {
        type="my sent friends searched";
        search.push(key, doc4.my_sent_friend_searched1.counter_of_my_sent_friends_searched[key],type);
      }
    }
}
var messages=[]
for(let i=0;i<doc5.messages.length;i++){
  if(doc5.messages[i][0]==name){
     messages.push(doc5.messages[i][0],doc5.messages[i][1],doc5.messages[i][2],doc5.messages[i][3])
    }
}
  }
  catch(err){
    console.log(err)
  }
res.render('onetoone',{
  arr1:arr,
  arr2:arr2,
  arr3:arr3,
  arr4:arr4,
  arr5:arr5,
  arr6:arr6,
  arr7:arr7,
  arr8:arr8,
  arr9:arr9,
  arr10:arr10,
  countINBOX:count,
  countSENT:count1,
  search:search,
  messages:messages
})
});
          });
        });
      });
    });
  });
});












app.listen(3002,function(){
	console.log("App listening");
});
