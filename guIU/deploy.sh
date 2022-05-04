rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "to update" &&
git branch -M master &&
git remote add origin git@github.com:changyulong1/goui.git
# git push -f -u origin master &&
git push -u origin master
cd -
# echo https://changyulong1.github.io/guIu-1/