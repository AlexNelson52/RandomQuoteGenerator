'use strict';


const randomQuotes = [
  '“We can complain rose bushes have thorns, or rejoice because thorn bushes have roses.” –Abraham Lincoln',
  '“If your actions inspire others to dream more, learn more, do more and become more, you are a leader.” –John Adams',
  '"It is amazing what you can accomplish if you do not care who gets the credit” – Harry S. Truman',
  '“If you treat people right they will treat you right… ninety percent of the time.” –Franklin D. Roosevelt',
  '“Leadership is the art of getting someone else to do something you want done because he wants to do it.” –Dwight D. Eisenhower',
  '"“Things do not happen. Things are made to happen.” –John F. Kennedy',
  '“I walk slowly, but I never walk backwards.” –Abraham Lincoln',
  '“Believe you can and you’re half way there.” –Theodore Roosevelt',
'“It is far better to be alone, than to be in bad company.” –George Washington',
'“Honesty is the first chapter in the book of wisdom.” –Thomas Jefferson',
'“The glow of one warm thought is to me worth more than money.” –Thomas Jefferson',
'“No person was ever honored for what he received. Honor has been the reward for what he gave.” –Calvin Coolidge',
'“We must adjust to changing times and still hold to unchanging principles.” –Jimmy Carter',
'”In matters of style, swim with the current; in matters of principle, stand still like the rock.” –Thomas Jefferson',
'“Tell the truth, work hard, and come to dinner on time.” –Gerald R. Ford',
'“In every battle there comes a time when both sides consider themselves beaten, then he who continues the attack wins.” –Ulysses S. Grant',
'“Accomplishment will prove to be a journey, not a destination.” –Dwight D. Eisenhower',
'“Conformity is the jailer of freedom and the enemy of growth.” –John F. Kennedy',
'“Plans are nothing; planning is everything.” –Dwight D. Eisenhower',
'”It is hard to fail, but it is worse never to have tried to succeed. In this life we get nothing save by effort.” –Theodore Roosevelt'
];

function quoteGenerator() {
  let random = Math.floor(Math.random() * randomQuotes.length);
  let randomQuote = randomQuotes[random];
  document.getElementById("change-text").textContent = randomQuote;
}