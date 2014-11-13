# -*- mode: ruby -*-
# vi: set ft=ruby :

VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|

  config.vm.box = "precise64"
  config.vm.box_url = "http://files.vagrantup.com/precise64.box"

  config.vm.network :forwarded_port, guest: 9000, host: 9000
  config.vm.network :forwarded_port, guest: 3000, host: 3000
  config.vm.network :forwarded_port, guest: 35729, host: 35729


  # The following lines make the vagrant box run faster
  # The first 2 lines set up NFS, a faster way to share
  # files between host and guest machines
  # The last block increases the CPU, RAM, and # of cores
  # available to the VM to speed things up
  config.vm.network :private_network, ip: '192.168.50.50' # Required for NFS to work, pick any local IP
  config.vm.synced_folder '.', '/vagrant', nfs: true # Use NFS for shared folders for better performance
  config.vm.provider "virtualbox" do |v|
    v.customize ["modifyvm", :id, "--cpuexecutioncap", "90"]
    v.customize ["modifyvm", :id, "--memory", "4096"]
    v.customize ["modifyvm", :id, "--cpus", 2]
  end

  config.vm.provision :shell, :path => "provision.sh"

  # Move to shared directory and do an npm and bower install
  # Must be done NOT as superuser, otherwise bower complains
  config.vm.provision :shell do |shell|
    shell.inline = "cd /vagrant; npm install; bower install"
    shell.privileged = false
  end


end
