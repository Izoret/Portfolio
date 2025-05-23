#!/bin/bash

kill_truc() {
  echo "Le clone a pas marché !"
  exit 1
}

keep_going() {
	cd ..
	rm -rf portfolio_deploy
	git clone git@github.com:Izoret/Portfolio.git portfolio_deploy
	cd portfolio_deploy || kill_truc;
	git checkout gh-pages
	git pull
	find . -mindepth 1 -not -name '.git' -not -path './.git/*' -exec rm -rf {} +
    mv -f ../Portfolio/dist/* ../Portfolio/dist/.* .
    
    cp index.html 404.html

    git add -A
    git commit -m "update pages"
    git push origin gh-pages
    cd ..
    rm -rf portfolio_deploy
    cd Portfolio || exit
    rm -rf dist
}

npm run build

while true; do
    read -rp "Est-ce que le build a marché ? (yes/no) " yn
    case $yn in
        [Yy]* ) keep_going; break;;
        [Nn]* ) echo "skill issue"; break;;
        * ) echo "Please answer yes or no.";;
    esac
done

