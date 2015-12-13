
// function productsUpdate(req, res){
//   var id = req.params.id;

//   Project.findByIdAndUpdate({ _id: id }, req.body.project, function(err, project){
//     if (err) return res.status(500).send(err);
//     if (!project) return res.status(404).send(err);

//     res.status(200).send(project);
//   })
// }

//proj 3

// function editEvent(req, res) {
//   var id          = req.params.id;
//   var eventParams = req.body.event;

//   Event.findByIdAndUpdate({ _id: id}, eventParams, function(err, event){
//     if (err) return res.status(404).json({ message: 'Something went wrong'});
//     res.status(200).json({ event: event});
//   });
// };




// function productsCreate(req, res){
//   var product = new Product(req.body);
//   product.save(function(err){
//     if (err) return res.status(500).json({message: "Error saving new product."})
//     res.status(201).json({ product: product })
//     });
//   });

// Original:
// function productsCreate(req, res){
//   var Product = new Product(req.body.product);
//   project.save(function(err){
//     if (err) return res.status(500).send(err);
//     var id = req.body.project.user_id;
//     User.findById(id, function(err, user){
//        user.products.push(project);
//        user.save();
//        return res.status(201).send(project)
//     });
//   });
// }