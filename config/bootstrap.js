/**
 * Bootstrap
 *
 * An asynchronous boostrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#documentation
 */

module.exports.bootstrap = function (cb) {

  /* Blogger Settings */
  config.blogger = {
    name: 'Amosvista',
    subTitle: 'Developer',
    email: 'ywm654987852@gmail.com',
    biography: '这个世界很糟糕',
    avatar: 'https://scontent-sin1-1.xx.fbcdn.net/hphotos-xpf1/v/t1.0-9/10407765_1522909657920734_5156079717321967032_n.jpg?oh=83319c816baacef41eb4c0d8f8128f1d&oe=565B9DDB'
  }

  /* Seo Settings */
  config.seo = {
    title: 'Amosvista的博客',
    keyword: 'Developer, Js, Javascript',
    description: 'I am childish'
  }

  config.domain = process.env.domain || 'http://localhost:1337/';

  /* Disqus Settings */
  config.comment = {
    is_active: true,
    disqus_shortname: 'Amosvista'
  }

  /* AddThis Share */
  config.share = true;

  /* Blogger Social Accounts */
  config.accounts = [
    {
      title: 'facebook',
      link: 'https://www.facebook.com/profile.php?id=100006051437289'
    },
    {
      title: 'twitter',
      link: 'https://twitter.com/amosvita'
    },
    {
      title: 'github',
      link: 'https://github.com/Amosvista',
    },
    {
      title: 'mail',
      link: 'mailto:ywm654987852@gmail.com'
    }
  ];

  // It's very important to trigger this callack method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
  cb();
};