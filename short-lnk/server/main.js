import { Meteor } from 'meteor/meteor';
import {WebApp}   from 'meteor/webapp';
import {Links}    from '../imports/api/links';
import '../imports/api/links';
import '../imports/api/users';
import './../imports/startup/simple-schema-configuration';

Meteor.startup(() => {
    // WebApp.connectHandlers.use((req, res, next) => {
    //     const _id = req.url.slice(1);
    //     console.log(_id);
    //     const link = Links.find({_id});
    //     if (link) {
    //         res.statusCode = 302;
    //         res.setHeader('Location', link.url);
    //         res.end();
    //     } else {
    //        next()
    //     }
    // });
});
