apt-get update -y -q
apt-get install -y git build-essential

#install node/npm
wget --quiet http://nodejs.org/dist/v0.10.33/node-v0.10.33-linux-x64.tar.gz
tar -zxf node-v0.10.33-linux-x64.tar.gz
mv node-v0.10.33-linux-x64/ /opt/node/
ln -s /opt/node/bin/node /usr/bin/node
ln -s /opt/node/bin/npm /usr/bin/npm

# Install compass (SASS library)
# Ruby/gem should already be installed
gem update --system
gem install compass

# When SSHing in, start at shared directory
echo "cd /vagrant" >> /home/vagrant/.bashrc

npm install -g bower

# Using grunt or gulp in this project? Uncomment one
# npm install -g grunt
npm install -g gulp

# npm install and bower install are run from the Vagrantfile