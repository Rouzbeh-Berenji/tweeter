/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
//function to create tweet elements

const createTweetElement = function (tweet) {
  let tweetHTML = `
    <article class="tweets">
        <header2>
          <div class="tweet-header">
            <img src="${tweet.user.avatars}" />
            <p>${tweet.user.name}</p>
          </div>
          <p class="user-tag">${tweet.user.handle}</p>
        </header2>
        <div><p class="content">${escape(tweet.content.text)}</p>
        </div>
        <footer> 
          <p>${moment(tweet.created_at).fromNow()}</p>
          <div>
            <i class="far fa-flag" id="flag"></i>
            <i class="far fa-heart" id="heart"></i>
            <i class="fas fa-retweet" id="retweet"></i>
          </div>
        </footer>
      </article>
    `;

  return tweetHTML;
}

